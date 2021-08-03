import React from "react";
import { CSSObject } from "styled-components";
import { CircleContainer } from "./style";

export type CircleProps = {
  radius: number;
  children?: React.ReactNode;
  style: CSSObject;
};

const Circle: React.FC<CircleProps> = ({
  radius,
  children,
  style,
}: CircleProps) => {
  return (
    <CircleContainer radius={radius} style={style}>
      {children}
    </CircleContainer>
  );
};

export default Circle;
