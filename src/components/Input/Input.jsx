import { useState } from "react";
import "./Input.css";

function Input(props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => {
          inputProps.name === "confirmpassword" && setFocused(true);
        }}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default Input;
