import React from "react";
import Circle from "@Components/Circle";
import Widget from "@Components/Widget";
import { useWatch } from "../../hooks";
import "./style.scss";
import HourIndicator from "./HourIndicator";
import MinuteHand from "./MinuteHand";
import HourHand from "./HourHand";
import SecondHand from "./SecondHand";
import MinuteIndicator from "./MinuteIndicator";
import CenterBall from "./CenterBall";
import HeartBitIndicator from "./HeartBitIndicator";
import PowerIndicator from "./PowerIndicator";
import StepCountIndicator from "./StepCountIndicator";
import PaiIndicator from "./PaiIndicator";

type Props = {};

const circleSize = 20;

const watchHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const watchMinutes = Array.from(Array(60).keys());

const WatchFace: React.FC<Props> = (props: Props) => {
  const { timeInfo, handAngles } = useWatch();

  const { hour, minute, second } = timeInfo;
  const { hourAngle, minuteAngle, secondAngle } = handAngles;

  return (
    <>
      <div className="container" style={{ backgroundColor: "#1b1b1b" }}>
        <Circle radius={circleSize} style={{ backgroundColor: "#1b1b1b" }}>
          {watchMinutes.map((wMinute) => (
            <MinuteIndicator
              minute={wMinute}
              circleRadius={circleSize}
              horizontal={false}
            >
              .
            </MinuteIndicator>
          ))}
          {watchHours.map((wHour) => (
            <HourIndicator
              hour={wHour}
              circleRadius={circleSize}
              horizontal={false}
            >
              |
            </HourIndicator>
          ))}
          <MinuteHand circleRadius={circleSize} minuteAngle={minuteAngle} />
          <HourHand circleRadius={circleSize} hourAngle={hourAngle} />
          <SecondHand circleRadius={circleSize} secondAngle={secondAngle} />
          <CenterBall circleRadius={circleSize} />
          <HeartBitIndicator circleRadius={circleSize} heartBitValue={89} />
          <PowerIndicator circleRadius={circleSize} powerLevel={100} />
          <StepCountIndicator circleRadius={circleSize} stepCount={8000} />
          <PaiIndicator circleRadius={circleSize} paiValue={83} />
        </Circle>
      </div>
      {/* <div>
        {hour}:{minute}:{second}
      </div> */}
    </>
  );
};

export default WatchFace;
