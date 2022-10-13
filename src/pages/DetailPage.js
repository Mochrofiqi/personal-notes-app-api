import React from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/index.js";
import Button from "../components/Button/Button";
import HalamanKosong from "./HalamanKosong";
import Alert from "../components/Alert/Alert";


function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [catatans, setCatatans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    
    getNote(id).then(({ data }) => {
      setCatatans(data);
      setLoading(false);
    });

  }, [id]);

  async function onDeleteCatatan() {
    await deleteNote(id);
 
    Alert({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
    navigate("/");
  }

  async function onArchiveCatatan() {
    await archiveNote(id);
    Alert({ title: "Berhasil", message: "Catatan berhasil diarsipkan!" });
    navigate("/");
  }

  async function onUnarchiveCatatan() {
    await unarchiveNote(id);
    
    Alert({ title: "Berhasil", message: "Catatan berhasil diaktifkan!" });
    navigate("/");
  }

  if (loading) {
    return (
      <div className='loading'>
        <h5>Harap Tunggu Masih Loading!!</h5>
      </div>
    );
  }

  if (!catatans) {
    return <HalamanKosong />;
  } else {
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{catatans.title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(catatans.createdAt)}</p>
        <div className="detail-page__body">{catatans.body}</div>
        <div className="detail-page__action">
          
        {catatans.archived !== true 
          ? <Button onDelete={onDeleteCatatan} onArchive={onArchiveCatatan} /> 
          : <Button onDelete={onDeleteCatatan} onArchive={onUnarchiveCatatan} />}

        </div>
      </section>
    );
  }
}

export default DetailPage;