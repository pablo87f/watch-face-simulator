import Widget from "@Components/Widget";

type Props = {
  hourAngle: number;
  circleRadius: number;
};

const HourHand: React.FC<Props> = ({ circleRadius, hourAngle }: Props) => {
  return (
    <Widget
      key="hour"
      circleRadius={circleRadius}
      rotation={hourAngle}
      width={0.3}
      height={6}
      style={{ backgroundColor: "white", borderRadius: "0.5em" }}
      coordinates={{
        radius: 6,
        angle: hourAngle,
      }}
    ></Widget>
  );
};

export default HourHand;
