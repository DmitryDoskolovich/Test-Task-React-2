import React from "react";
import classNames from "classnames";
import "./Button.css";

const Button = ({ className, ...props }) => {
  return <button {...props} className={classNames("button", className)} />;
};

export default Button;
