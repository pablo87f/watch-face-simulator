import React from "react";
import "./styles.scss";
// import Indicator from "../Indicator";
// import SubIndicator from "../SubIndicator";
// import { Circle, Widget } from "./styles";
import Circle from "../Circle";
import Item from "../Item";
import util from "../../util/util";

type Props = {};

const hours = Array.from(Array(12).keys());
const minutes = hours.map(() => [0, 1, 2, 3, 4]).flat(1);

const circleSize = 20;
console.warn(util.polarToCartesian(5, 0));
console.warn(util.polarToCartesian(5, 45));
console.warn(util.polarToCartesian(5, 90));
console.warn(util.polarToCartesian(5, 180));

const WatchFace: React.FC<Props> = (props: Props) => {
  // console.warn("mainPositions", mainPositions);

  return (
    <div className="container">
      <Circle radius={circleSize} style={{ backgroundColor: "#EBA9BA" }}>
        <Item
          key="96"
          circleRadius={circleSize}
          rotation={0}
          width={1}
          height={10}
          style={{ backgroundColor: "blue" }}
          coordinates={{ radius: 10, angle: 0 }}
        ></Item>
        <Item
          key="93"
          circleRadius={circleSize}
          rotation={45}
          width={1}
          height={8}
          style={{ backgroundColor: "green" }}
          coordinates={{ radius: 8, angle: 45 }}
        ></Item>
        <Item
          key="94"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{ backgroundColor: "red" }}
          coordinates={{ radius: 18, angle: 30 }}
        >
          11
        </Item>
        <Item
          key="94"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            backgroundColor: "purple",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          99
        </Item>
      </Circle>
    </div>
  );
};

export default WatchFace;
