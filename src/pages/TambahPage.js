import React from 'react';
import { addNote } from '../utils/api';
import { useNavigate } from "react-router-dom";
import TambahCatatan from '../components/TambahCatatan';

function TambahPage(){
  const navigate = useNavigate();
 
  async function onTambahCatatanHandler(catatans) {
    await addNote(catatans);
    navigate('/');
  }
  
  return(
    <section>
      <h2 className='judul'>Tambah Catatan</h2>
      <TambahCatatan addNote={onTambahCatatanHandler} />
  </section>
  )
}

export default TambahPage;