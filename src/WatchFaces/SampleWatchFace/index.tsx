import React from "react";
import Circle from "@Components/Circle";
import Widget from "@Components/Widget";
import { useWatch } from "../../hooks";
import "./style.scss";
import HourIndicator from "./HourIndicator";

type Props = {};

const circleSize = 20;

const watchHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const WatchFace: React.FC<Props> = (props: Props) => {
  const { timeInfo, handAngles } = useWatch();

  const { hour, minute, second } = timeInfo;
  const { hourAngle, minuteAngle, secondAngle } = handAngles;

  return (
    <>
      <div className="container" style={{ backgroundColor: "#2E2E2E" }}>
        <Circle radius={circleSize} style={{ backgroundColor: "#EBA9BA" }}>
          {watchHours.map((wHour) => (
            <HourIndicator hour={wHour} circleRadius={circleSize}>
              {wHour === 0 ? "12" : `${wHour}`}
            </HourIndicator>
          ))}
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
