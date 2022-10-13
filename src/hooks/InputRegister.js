import React from "react";
import LocaleContext from "../context/LocaleContext";
import useInput from "./UseInput";
import AlertError from "../components/Alert/AlertError";

function InputRegister({ register }) {
  const { locale } = React.useContext(LocaleContext);
  const [name,onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
 
      register({
      name: '',
      email: '',
      password: '',
    });
  }

  const onRegister = () => {
    if (password !== confirmPassword){
        AlertError({ title: "Gagal", message: "Password Tidak Sesuai" });
    }else{
        register({ name: name, email: email, password: password });
    }
  }

    return (
        <div onSubmit={onSubmitHandler} className='input-register'>
            <label htmlFor="text">{locale === 'id' ? 'Nama' : 'Name'}</label>
            <input type="text" placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChange} />
            <label htmlFor="email">{locale === 'id' ? 'Email' : 'Email'}</label>
            <input type="email" placeholder={locale === 'id' ? 'Email' : 'Email'} value={email} onChange={onEmailChange} />
            <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
            <input type="password" placeholder={locale === 'id' ? 'Kata Sandi' : 'Password'} autoComplete='current-password' value={password} onChange={onPasswordChange} />
            <label htmlFor="password">{locale === 'id' ? 'Konfirmasi Kata Sandi' : 'Confirm Password'}</label>
            <input type="password" placeholder={locale === 'id' ? 'Konfirmasi Kata Sandi' : 'Confirm Password'} autoComplete='current-password' value={confirmPassword} onChange={onConfirmPasswordChange} />
            <button onClick={onRegister} type="button">{locale === 'id' ? 'Daftar Akun' : 'Register'}</button>
        </div>
    );
}

export default InputRegister;
  