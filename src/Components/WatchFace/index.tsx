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
          key="0"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 0 }}
        >
          12
        </Item>
        <Item
          key="1"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 30 }}
        >
          1
        </Item>
        <Item
          key="2"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 60 }}
        >
          2
        </Item>
        <Item
          key="3"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 90 }}
        >
          3
        </Item>
        <Item
          key="4"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 120 }}
        >
          4
        </Item>
        <Item
          key="5"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 150 }}
        >
          5
        </Item>
        <Item
          key="6"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 180 }}
        >
          6
        </Item>
        <Item
          key="7"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 210 }}
        >
          7
        </Item>

        <Item
          key="8"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 240 }}
        >
          8
        </Item>

        <Item
          key="9"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 270 }}
        >
          9
        </Item>

        <Item
          key="10"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 300 }}
        >
          10
        </Item>

        <Item
          key="11"
          circleRadius={circleSize}
          rotation={0}
          width={2}
          height={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          coordinates={{ radius: 18, angle: 330 }}
        >
          11
        </Item>
        <Item
          key="96"
          circleRadius={circleSize}
          rotation={0}
          width={0.2}
          height={8}
          style={{ backgroundColor: "blue" }}
          coordinates={{ radius: 8, angle: 0 }}
        ></Item>
        <Item
          key="93"
          circleRadius={circleSize}
          rotation={45}
          width={0.3}
          height={6}
          style={{ backgroundColor: "green" }}
          coordinates={{ radius: 6, angle: 45 }}
        ></Item>
        <Item
          key="92"
          circleRadius={circleSize}
          rotation={300}
          width={0.1}
          height={8.8}
          style={{ backgroundColor: "red" }}
          coordinates={{ radius: 8.8, angle: 300 }}
        ></Item>
      </Circle>
    </div>
  );
};

export default WatchFace;
