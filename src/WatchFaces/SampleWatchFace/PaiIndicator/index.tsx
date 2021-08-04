import Widget from "@Components/Widget";

type Props = {
  circleRadius: number;
  paiValue: number;
};

const StepCountIndicator: React.FC<Props> = ({
  circleRadius,
  paiValue,
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
        angle: 215,
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
          alignItems: "center",
        }}
      >
        <span style={{ color: "red", fontSize: 18, marginRight: 2 }}>PAI</span>
        {paiValue}
      </div>
    </Widget>
  );
};

export default StepCountIndicator;
