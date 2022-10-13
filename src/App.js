import React from 'react';
import { HeaderCatatan, Tombol } from './components/HeaderCatatan';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArsipPage from './pages/ArsipPage';
import DetailPage from './pages/DetailPage';
import HalamanKosong from './pages/HalamanKosong';
import TambahPage from './pages/TambahPage';
import { ThemeProvider } from './context/ThemeContext';
import HalamanRegister from './pages/HalamanRegister';
import HalamanLogin from './pages/HalamanLogin';
import autoBindReact from "auto-bind/react";
import { getUserLogged, putAccessToken} from './utils/api';
import { LocaleProvider } from './context/LocaleContext';
import Alert from './components/Alert/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);

          return {
            theme: newTheme
          };
        });
      },

      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          });
        }
      }
    };
    autoBindReact(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
    Alert({ title: "Berhasil", message: "Berhasil Melakukan Logout!" });
  }
 
  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {

    if (this.state.initializing) {
      return null;
    }
   
    if (this.state.loading) {
      return (
        <div className='loading'>
          <h5>Harap Tunggu Masih Loading!!</h5>
        </div>
      );
    }

    if (this.state.authedUser === null) {
      
      return (
        <LocaleProvider value={this.state.localeContext}> 
        <ThemeProvider value={this.state} >
        <div className='app-container'>
          <header>
            <Tombol  />
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<HalamanLogin loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<HalamanRegister /> }/>
            </Routes>
          </main>
        </div>
        </ThemeProvider>
        </LocaleProvider>
      )
    }

  return (
    <LocaleProvider value={this.state.localeContext}>
    <ThemeProvider value={this.state} >
    <div className="app-container">
      <header>
        <HeaderCatatan logout={this.onLogout} name={this.state.authedUser.name}/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catatan/input" element={<TambahPage />} />
          <Route path="/catatan/:id" element={<DetailPage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="*" element={<HalamanKosong />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </LocaleProvider>
  );
  }
}

export default App;
