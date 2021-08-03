import Widget from "@Components/Widget";

type Props = {
  circleRadius: number;
};

const CenterBall: React.FC<Props> = ({ circleRadius }: Props) => {
  return (
    <Widget
      key="hour"
      circleRadius={circleRadius}
      rotation={0}
      width={0.5}
      height={0.5}
      style={{
        backgroundColor: "red",
        borderRadius: "0.5em",
        border: "0.01em solid white",
        display: "flex",
        justifyContent: "start",
        flexDirection: "row",
      }}
      coordinates={{
        radius: 0,
        angle: 0,
      }}
    ></Widget>
  );
};

export default CenterBall;
