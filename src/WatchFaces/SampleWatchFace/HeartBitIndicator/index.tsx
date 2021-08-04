import Widget from "@Components/Widget";

type Props = {
  circleRadius: number;
  heartBitValue: number;
};

const HeartBitIndicator: React.FC<Props> = ({
  circleRadius,
  heartBitValue,
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
        angle: 318,
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
        <img src={"/heart.svg"} alt="heart" style={{ width: 22 }} />
        {heartBitValue}
      </div>
    </Widget>
  );
};

export default HeartBitIndicator;
