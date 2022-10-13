import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';
import LocaleContext from '../context/LocaleContext';
import InputRegister from '../hooks/InputRegister';

function HalamanRegister() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();
 
    async function onRegisterHandler(user) {
      const { error } = await register(user);
      if (!error) {
        navigate('/');
      }
    }
 
  return (
    <section className='register-page'>
      <h2 className='judul'><strong>{locale === 'id' ? 'Halaman Daftar Akun' : 'Register Page'}</strong></h2>
      <InputRegister register={onRegisterHandler} />
      <p>{locale === 'id' ? 'Kembali ke?' : 'Back to?'} <Link to="/"><strong>{locale === 'id' ? 'Masuk disini' : 'Login here'}</strong> </Link></p>
    </section>
  )
}
 
export default HalamanRegister;