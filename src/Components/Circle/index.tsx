import { CSSObject } from "styled-components";
import { WidgetProps } from "../Widget";
import { CircleContainer } from "./style";

export type CircleProps = {
  radius: number;
  children?:
    | React.ReactElement<WidgetProps>[]
    | React.ReactElement<WidgetProps>;
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
