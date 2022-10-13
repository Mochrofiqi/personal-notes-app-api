import React from "react";
import SearchCatatan from "../components/SearchCatatan";
import ListCatatan from "../components/ListCatatan";
import { useSearchParams } from "react-router-dom";
import ButtonTambah from "../components/Button/ButtonTambah";
import { getActiveNotes } from '../utils/api';
import LocaleContext  from '../context/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
    const [catatans, setCatatans] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [kata, setKata] = React.useState(() => {
      return searchParams.get('kata') || ''
    });
    const { locale } = React.useContext(LocaleContext);
   
    React.useEffect(() => {
      setLoading(true);
      
      getActiveNotes().then(({ data }) => {
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
      <section className="homepage">
          <h2 className="judul">{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
          <SearchCatatan kata={kata} onSearch={onSearchHandler} />
          <ListCatatan catatans={filteredCatatan}  />  
          <ButtonTambah />      
      </section>
    )
}

export default HomePage;
   