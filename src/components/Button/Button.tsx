import React, { ReactEventHandler } from "react";

export type ButtonProps = {
  onClick: ReactEventHandler;
  title: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <div className="btn btn-primary">
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );
};

export default Button;
