import Widget from "@Components/Widget";

type Props = {
  minute: number;
  circleRadius: number;
  children: React.ReactNode;
  horizontal?: boolean;
};

const MinuteIndicator: React.FC<Props> = ({
  circleRadius,
  minute,
  children,
  horizontal = true,
}: Props) => {
  return (
    <Widget
      key={`minute-${minute}`}
      circleRadius={circleRadius}
      rotation={horizontal ? 0 : minute * 6}
      width={1}
      height={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
      coordinates={{ radius: circleRadius - 1, angle: minute * 6 }}
    >
      <div style={{ fontSize: "0.5em" }}>{children}</div>
    </Widget>
  );
};

export default MinuteIndicator;
