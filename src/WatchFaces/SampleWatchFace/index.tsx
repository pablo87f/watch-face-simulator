import React from "react";
import Circle from "../../Components/Circle";
import Widget from "../../Components/Widget";
import { useWatch } from "../../hooks";
import "./style.scss";

type Props = {};

const circleSize = 20;

const WatchFace: React.FC<Props> = (props: Props) => {
  const { timeInfo, handAngles } = useWatch();

  const { hour, minute, second } = timeInfo;
  const { hourAngle, minuteAngle, secondAngle } = handAngles;

  return (
    <>
      <div className="container" style={{ backgroundColor: "#2E2E2E" }}>
        <Circle radius={circleSize} style={{ backgroundColor: "#EBA9BA" }}>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>
          <Widget
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
          </Widget>

          <Widget
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
          </Widget>

          <Widget
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
          </Widget>

          <Widget
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
          </Widget>

          <Widget
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
          </Widget>
          <Widget
            key="minute"
            circleRadius={circleSize}
            rotation={minuteAngle}
            width={0.2}
            height={8}
            style={{ backgroundColor: "blue" }}
            coordinates={{ radius: 8, angle: minuteAngle }}
          ></Widget>
          <Widget
            key="hour"
            circleRadius={circleSize}
            rotation={hourAngle}
            width={0.3}
            height={6}
            style={{ backgroundColor: "green" }}
            coordinates={{
              radius: 6,
              angle: hourAngle,
            }}
          ></Widget>
          <Widget
            key="second"
            circleRadius={circleSize}
            rotation={secondAngle}
            width={0.1}
            height={9}
            style={{ backgroundColor: "red" }}
            coordinates={{ radius: 8, angle: secondAngle }}
          ></Widget>
        </Circle>
      </div>
      <div>
        {hour}:{minute}:{second}
      </div>
    </>
  );
};

export default WatchFace;
