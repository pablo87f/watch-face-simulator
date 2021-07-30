import styled from "styled-components";

type PolarCoordinates = {
  radius: number;
  angle: number;
};

type WidgetProps = {
  coordinates: PolarCoordinates;
  size: string;
  keepRotation?: boolean;
};

type CircleProps = {
  radius: string;
};

const Circle = styled.div<CircleProps>`
  position: relative;
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  padding: 0;
  margin: 0 auto;
`;

const Widget = styled.div<WidgetProps>`
  position: relative;
  display: block;
  position: absolute;
  background-color: red;
  top: (${(props) => props.coordinates.radius} / 2) -
    (${(props) => props.size} / 2);
  left: (${(props) => props.coordinates.radius} / 2) -
    (${(props) => props.size} / 2);
  width: $item-size;
  height: $item-size;
  margin: 0px;
  padding: 0px;
  text-align: center;

  transform: rotate(270deg + 0deg)
    translate(${(props) => props.coordinates.radius});
  /* rotate(
      ${(props) => (props.keepRotation ? 0 : props.coordinates.angle)}deg * -1
    ); */
`;

export { Circle, Widget };
