import { ComponentPropsWithoutRef, forwardRef } from "react";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <input
        className={styles.formControl}
        type="text"
        placeholder={label}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
