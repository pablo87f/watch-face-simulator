import Widget from "@Components/Widget";

type Props = {
  minuteAngle: number;
  circleRadius: number;
};

const MinuteHand: React.FC<Props> = ({ circleRadius, minuteAngle }: Props) => {
  return (
    <Widget
      key="minute"
      circleRadius={circleRadius}
      rotation={minuteAngle}
      width={0.15}
      height={9}
      style={{ backgroundColor: "white", borderRadius: "0.5em" }}
      coordinates={{ radius: 9, angle: minuteAngle }}
    ></Widget>
  );
};

export default MinuteHand;
