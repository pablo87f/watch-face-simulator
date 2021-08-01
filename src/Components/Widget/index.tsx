import React, { CSSProperties } from "react";
import util from "../../util/util";
import { WidgetContainer } from "./style";

type PolarCoordinates = {
  radius: number;
  angle: number;
};

export type WidgetProps = {
  width: number;
  height: number;
  children?: React.ReactNode;
  circleRadius: number;
  rotation: number;
  style?: CSSProperties;
  coordinates?: PolarCoordinates;
};

const defaultUnit = "em";

const Widget: React.FC<WidgetProps> = ({
  width,
  height,
  children,
  circleRadius,
  rotation,
  style,
  coordinates = { radius: 0, angle: 0 },
}: WidgetProps) => {
  const xCenter = width / 2;
  const yCenter = height / 2;

  const top = `${circleRadius / 2 - yCenter}${defaultUnit}`;
  const left = `${circleRadius / 2 - xCenter}${defaultUnit}`;

  const { radius, angle } = coordinates;
  const { x, y } = util.polarToCartesian(radius / 2, angle - 90);

  return (
    <WidgetContainer
      top={top}
      left={left}
      width={`${width}${defaultUnit}`}
      height={`${height}${defaultUnit}`}
      rotation={`${rotation}deg`}
      translateX={`${x}${defaultUnit}`}
      translateY={`${y}${defaultUnit}`}
      style={style}
    >
      {children}
    </WidgetContainer>
  );
};

export default Widget;
