import { useState } from "react";
import styles from "./input.css";
export const Input = ({
  onChange: onChangeProp,
  value: valueProp,
  ...props
}) => {
  const [value, setValue] = useState(valueProp);
  const onInputChange = (event) => {
    setValue(event.target.value);
    onChangeProp && onChangeProp(event.target.value);
  };

  return (
    <input
      className={styles.inputElement}
      value={value}
      onChange={onInputChange}
      {...props}
    />
  );
};
