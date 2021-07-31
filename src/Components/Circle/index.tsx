import { CSSObject } from "styled-components";
import { ItemProps } from "../Item";
import { Container } from "./style";

type CircleProps = {
  radius: number;
  children?: React.ReactElement<ItemProps>[] | React.ReactElement<ItemProps>;
  style: CSSObject;
};

const Circle: React.FC<CircleProps> = ({
  radius,
  children,
  style,
}: CircleProps) => {
  return (
    <Container radius={radius} style={style}>
      {children}
    </Container>
  );
};

export default Circle;
