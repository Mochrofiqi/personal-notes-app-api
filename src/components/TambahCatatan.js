import React from 'react';
import autoBindReact from "auto-bind/react";
import { addNote } from '../utils/api';
import ButtonSimpan from '../components/Button/ButtonSimpan';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Alert from '../components/Alert/Alert';

// function TambahCatatan() {
//   const [title, setTitle] = useState();
//   const [body, setBody] = useState();
//   const navigate = useNavigate();

//   const onSubmit =() => {
//     addNote({title, body})
//     navigate();
//   }

//   return(
//     <section className="add-new-page">
//       <form onSubmit={this.onSubmitEventHandler}>
//         <div className="add-new-page__input">
//           <input className="add-new-page__input__title" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleInputHandler} />
//         <div className="add-new-page__input__body" contentEditable data-placeholder="Isi Catatan.." onInput={this.onBodyInputHandler} /></div>
//         <div className="add-new-page__action">
//           <ButtonSimpan />
//         </div>
//       </form>
//     </section>
//   )
// }

// export default TambahCatatan;

function TambahCatatanWrapper() {
  const navigate = useNavigate();

  return <TambahCatatan navigate={navigate} />;
}


class TambahCatatan extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: "", body: "",
    };
    autoBindReact(this);
  }

  onTitleInputHandler(event) {
    this.setState(() => ({
      title: event.target.value,
    }));
  }

  onBodyInputHandler(event) {
    this.setState(() => ({
      body: event.target.innerHTML,
    }));
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    addNote(this.state);
    Alert({ title: "Berhasil", message: "Catatan berhasil ditambahkan!" });
    this.props.navigate("/");
  }

  render(){
    return(
      <section className="add-new-page">
      <form onSubmit={this.onSubmitEventHandler}>
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleInputHandler} />
          <div className="add-new-page__input__body" contentEditable data-placeholder="Isi Catatan.." onInput={this.onBodyInputHandler} />
        </div>
        <div className="add-new-page__action">
          <ButtonSimpan />
        </div>
      </form>
    </section>
    )
  }
}

TambahCatatan.propsTypes = {
  navigate: PropTypes.func.isRequired,
}

export default TambahCatatanWrapper;