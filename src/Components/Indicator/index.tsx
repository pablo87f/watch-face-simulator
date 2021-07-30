import React from "react";
import "./styles.scss";

type Coordinates = {
  angle: number;
  size: number;
};

type Props = {
  pos: React.ReactNode;
  coordinates?: Coordinates;
};

const Indicator: React.FC<Props> = ({ pos }: Props) => {
  return <div className="indicator">{pos}</div>;
};

export default Indicator;
