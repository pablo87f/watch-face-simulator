import Widget from "@Components/Widget";

type Props = {
  secondAngle: number;
  circleRadius: number;
};

const SecondHand: React.FC<Props> = ({ circleRadius, secondAngle }: Props) => {
  return (
    <Widget
      key="second"
      circleRadius={circleRadius}
      rotation={secondAngle}
      width={0.07}
      height={10.5}
      style={{ backgroundColor: "red" }}
      coordinates={{ radius: 8.5, angle: secondAngle }}
    ></Widget>
  );
};

export default SecondHand;
