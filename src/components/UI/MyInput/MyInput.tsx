import React, { ChangeEventHandler } from "react";
import styles from './MyInput.module.css'

interface iInput {
  value?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type: string;
  id?: string;
  error?: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
  className?: string;
  // register: "DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>";
}

export default function MyInput({
  value,
  label,
  name,
  placeholder,
  type,
  className,
  onChange,
  autoComplete,
  error,
  // register,
}: iInput) {
    
  return (
    <div className={styles.form_group}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
      // register={register}
        id={name}
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        style={error && { border: "solid 1px red" }}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

MyInput.defaultProps = {
  type: "text",
  className: "",
};
