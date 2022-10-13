import React from "react";
import { FiSave } from "react-icons/fi";

function ButtonSimpan() {
  return (
    <button className="action" type="submit" title="Simpan">
      <FiSave />
    </button>
  );
}

export default ButtonSimpan;
