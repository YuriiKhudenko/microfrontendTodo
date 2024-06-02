import { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  styleClass: string | string[];
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, styleClass, ...otherProps }: ButtonProps) => {
  const classes = Array.isArray(styleClass)
    ? styleClass
    : styleClass.split(" ");

  const className = [styles.btn, ...classes.map((cls) => styles[cls])].join(
    " "
  );

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
