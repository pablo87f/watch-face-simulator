import Widget from "@Components/Widget";

type Props = {
  circleRadius: number;
  powerLevel: number;
};

const PowerIndicator: React.FC<Props> = ({
  circleRadius,
  powerLevel,
}: Props) => {
  return (
    <Widget
      key="hour"
      circleRadius={circleRadius}
      rotation={0}
      width={3}
      height={1.8}
      style={{
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
      coordinates={{
        radius: circleRadius + 3,
        angle: 35,
      }}
    >
      <div
        style={{
          fontSize: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "#babaca",
          fontStretch: "bold",
        }}
      >
        {powerLevel}%
        <img src={"/red-bolt.svg"} alt="power" style={{ width: 22 }} />
      </div>
    </Widget>
  );
};

export default PowerIndicator;
