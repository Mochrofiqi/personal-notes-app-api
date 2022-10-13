import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';
import LocaleContext from '../context/LocaleContext';
import InputLogin from '../hooks/InputLogin';
 
function HalamanLogin({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h2 className='judul'><strong>{locale === 'id' ? 'Halaman Masuk' : 'Login Page'}</strong></h2>
      <InputLogin login={onLogin}  />
      <p>{locale === 'id' ? 'Belum punya akun?' : 'Dont have an account?'} <Link to="/register"><strong>{locale === 'id' ? 'Daftar disini' : 'Register here'}</strong></Link></p>
    </section>
  );
}
 
HalamanLogin.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default HalamanLogin;