import React, { ReactNode } from "react";
import "./Container.css";

type ContainerProps = { children: ReactNode; className?: string };

const Container = (props: ContainerProps) =>
{
  return <div className={props.className}>{props.children}</div>;
};

export default Container;
