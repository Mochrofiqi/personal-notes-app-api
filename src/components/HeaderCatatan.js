import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import PropTypes from 'prop-types';
import { FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from '../context/LocaleContext';
import { BsTranslate } from 'react-icons/bs';

function HeaderCatatan({logout, name}) {
  return(
  <LocaleConsumer>
  {
    ({ locale, toggleLocale}) => {
      return (
        <>
          <h1>
            <Link to="/">{locale === 'id' ? 'Catatan Aplikasi' : 'Notes App'}</Link>
          </h1>
          

          <nav className="navigation">
          <ul>
            <li>
              <Link to="/arsip">Arsip</Link>
            </li>
            <li>
            <ToggleTheme />
            </li>
            <li>
              <button onClick={toggleLocale}><BsTranslate /></button>
            </li>
            <li>
              <button onClick={logout}><h3>{name}</h3><FiLogOut /></button>
            </li>
          </ul>
        </nav>
      </> 
      )
    }
  }
  </LocaleConsumer>
  )
};

function Tombol(){
  return(
    <LocaleConsumer>
    {
      ({ locale, toggleLocale}) => {
        return (
          <>
          <h1>
            {locale === 'id' ? 'Catatan Aplikasi' : 'Notes App'}
          </h1>
            <nav className="navigation">
            <ul>
              <li>
              <ToggleTheme />
              </li>
              <li>
                <button onClick={toggleLocale}><BsTranslate /></button>
              </li>
            </ul>
          </nav>
        </> 
        )
      }
    }
    </LocaleConsumer>
    )
}

HeaderCatatan.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export {HeaderCatatan, Tombol};
