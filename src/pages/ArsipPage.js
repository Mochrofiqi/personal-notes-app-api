import React from "react";
import { getArchivedNotes } from "../utils/api";
import CatatanKosong from "../components/CatatanKosong";
import ListCatatan from "../components/ListCatatan";
import SearchCatatan from "../components/SearchCatatan";
import { useSearchParams } from 'react-router-dom';
import LocaleContext  from '../context/LocaleContext';

function ArsipPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catatans, setCatatans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [kata, setKata] = React.useState(() => {
    return searchParams.get('kata') || ''
  });
  const { locale } = React.useContext(LocaleContext);
 
  React.useEffect(() => {
    setLoading(true);

    getArchivedNotes().then(({ data }) => {
      setCatatans(data);
      setLoading(false);
    });

  }, []);

  function onSearchHandler(kata) {
      setKata(kata);
      setSearchParams({ kata });
  }
   
  const filteredCatatan = catatans.filter((catatan) => {
      return catatan.title.toLocaleLowerCase().includes(
          kata.toLowerCase()
      )
  });

  if (loading) {
    return (
      <div className='loading'>
        <h5>Harap Tunggu Masih Loading!!</h5>
      </div>
    );
  }

  return (
    <section className="archives-page">
      <h2 className="judul">{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
      <SearchCatatan kata={kata} onSearch={onSearchHandler} />
      {catatans.length !== 0 ? (
        <ListCatatan catatans={filteredCatatan} />
      ) : (
        <CatatanKosong />
      )}
    </section>                      
  )
}

export default ArsipPage;
