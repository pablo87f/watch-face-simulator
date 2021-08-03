import Widget from "@Components/Widget";

type Props = {
  hour: number;
  circleRadius: number;
  children: React.ReactNode;
  horizontal?: boolean;
};

const HourIndicator: React.FC<Props> = ({
  circleRadius,
  hour,
  children,
  horizontal = true,
}: Props) => {
  return (
    <Widget
      key={`hour-${hour}`}
      circleRadius={circleRadius}
      rotation={horizontal ? 0 : hour * 30}
      width={2}
      height={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      coordinates={{ radius: circleRadius - 2, angle: hour * 30 }}
    >
      {children}
    </Widget>
  );
};

export default HourIndicator;
