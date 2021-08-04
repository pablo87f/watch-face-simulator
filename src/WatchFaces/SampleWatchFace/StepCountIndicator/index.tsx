import Widget from "@Components/Widget";

type Props = {
  circleRadius: number;
  stepCount: number;
};

const StepCountIndicator: React.FC<Props> = ({
  circleRadius,
  stepCount,
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
        radius: circleRadius + 4.5,
        angle: 138,
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
        {stepCount}
        <img src={"/footprints.svg"} alt="power" style={{ width: 24 }} />
      </div>
    </Widget>
  );
};

export default StepCountIndicator;
