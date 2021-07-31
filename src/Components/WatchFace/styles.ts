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
  display: flex;
  align-self: center;
  border-radius: 50%;
`;

const Widget = styled.div<WidgetProps>`
  position: absolute;
  display: block;
  background-color: red;
  /* top: (${(props) => props.coordinates.radius}em / 2) -
    (${(props) => props.size} / 2);
  left: (${(props) => props.coordinates.radius}em / 2) -
    (${(props) => props.size} / 2); */
  top: 10em;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: 0px;
  padding: 0px;
  text-align: center;

  /* $circle-size: ${(props) => props.coordinates.radius}em;

  $initial_angle: 270deg;
  $actual_angle: calc(
    $initial_angle + ${(props) => props.coordinates.angle}deg
  ); */

  transform: rotate(30deg) translate(20em / 2) rotate(30deg * -1);
  /* transform: rotate(${(props) => props.coordinates.angle}deg)
    translate(${(props) => props.coordinates.radius})
    rotate(
      ${(props) => (props.keepRotation ? 0 : props.coordinates.angle)}deg * -1
    ); */
`;

export { Circle, Widget };
