import { useRef } from "react";
import s from "./checkbox.module.scss";

const FormLabelCheckBox = ({ label, checked, onChange }) => {
  const { current: chkId } = useRef(Date.now() + Math.random() * 100);

  return (
    <div className={s.checkbox}>
      <label htmlFor={chkId}>{label}</label>
      <input type="checkbox" id={chkId} checked={checked} onChange={onChange} />
    </div>
  );
};

export default FormLabelCheckBox;
