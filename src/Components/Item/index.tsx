import React, { CSSProperties, useState } from "react";
import { ItemContainer } from "./style";

import util from "../../util/util";

type PolarCoordinates = {
  radius: number;
  angle: number;
};

export type ItemProps = {
  width: number;
  height: number;
  children?: React.ReactNode;
  circleRadius: number;
  rotation: number;
  style?: CSSProperties;
  coordinates?: PolarCoordinates;
};

const defaultUnit = "em";

const Item: React.FC<ItemProps> = ({
  width,
  height,
  children,
  circleRadius,
  rotation,
  style,
  coordinates = { radius: 0, angle: 0 },
}: ItemProps) => {
  const xCenter = width / 2;
  const yCenter = height / 2;

  const top = `${circleRadius / 2 - yCenter}${defaultUnit}`;
  const left = `${circleRadius / 2 - xCenter}${defaultUnit}`;

  const { radius, angle } = coordinates;
  const { x, y } = util.polarToCartesian(radius / 2, angle - 90);

  return (
    <ItemContainer
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
    </ItemContainer>
  );
};

export default Item;
