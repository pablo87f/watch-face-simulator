import React from "react";
import "./styles.scss";

type Props = {
  children: React.ReactNode;
};
const SubIndicator: React.FC<Props> = ({ children }: Props) => {
  return <div className="sub-indicator">{children}</div>;
};

export default SubIndicator;
