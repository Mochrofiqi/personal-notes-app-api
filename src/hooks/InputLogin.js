import React from "react";
import LocaleContext from "../context/LocaleContext";
import useInput from "./UseInput";

function InputLogin({ login }) {
  const { locale } = React.useContext(LocaleContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
 
      login({
      email: '',
      password: '',
    });
  }

  const onLogin = () => {
      login({ email: email, password: password});
  }
  

    return (
      <div onSubmit={onSubmitHandler} className="input-login">
        <label htmlFor="email">{locale === 'id' ? 'Email' : 'Email'}</label>
        <input type="email" id="email" placeholder={locale === 'id' ? 'Email' : 'Email'} value={email} onChange={onEmailChange} />
        <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
        <input type="password" placeholder={locale === 'id' ? 'Kata Sandi' : 'Password'} id="password" value={password} onChange={onPasswordChange} />
        <button onClick={onLogin} type="button">Masuk</button>
      </div>
    );
}

export default InputLogin;
  