import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropsTypes from 'prop-types';


function ItemCatatan({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title" title={title}>
        <Link to={`/catatan/${id}`} title={title}> {title}</Link>
      </h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

ItemCatatan.propsTypes = {
  id: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  createdAt: PropsTypes.string.isRequired,
  body: PropsTypes.string.isRequired,
}

export default ItemCatatan;