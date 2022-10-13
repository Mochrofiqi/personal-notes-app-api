import React from "react";
import PropsTypes from 'prop-types';
import ItemCatatan from "./ItemCatatan";

function ListCatatan({ catatans }) {

  return (
    <section className="notes-list">
      {catatans.map((catatan) => (
          <ItemCatatan key={catatan.id} id={catatan.id} {...catatan} />
        ))}
    </section>
  );
}

ListCatatan.propsTypes = {
    catatans: PropsTypes.arrayOf(PropsTypes.object).isRequired,
}

export default ListCatatan;