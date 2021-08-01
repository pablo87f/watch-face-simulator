import {
  getDay,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
} from "date-fns";
import React, { useCallback, useState } from "react";
import { useInterval } from "../../hooks";
import util from "../../util/util";
import Circle from "../Circle";
import Item from "../Item";
import "./styles.scss";
type Props = {};

type DateTimeInfo = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const circleSize = 20;

function angleClock(hour: number, minutes: number) {
  const minuteAngle = minutes * 6;
  const hourAngle = hour * 30 + minutes * 0.5;
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
}

function getTimeInfo(date: Date): DateTimeInfo {
  return {
    year: getYear(date),
    month: getMonth(date),
    day: getDay(date),
    hour: getHours(date),
    minute: getMinutes(date),
    second: getSeconds(date),
  };
}

const WatchFace: React.FC<Props> = (props: Props) => {
  const startTimeInfo = getTimeInfo(new Date());

  const { second: startSecond, minute: startMinute } = startTimeInfo;
  const [timeInfo, setTimeInfo] = useState<DateTimeInfo>(startTimeInfo);

  const [hourAngle, setHourAngle] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(startMinute);
  const [totalSeconds, setTotalSeconds] = useState(startSecond);

  const updateTime = useCallback(() => {
    const timeInfo = getTimeInfo(new Date());
    setTimeInfo(timeInfo);

    const { hour, minute, second } = timeInfo;

    setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
    if (totalSeconds > 0 && second === 0) {
      setTotalMinutes((prevTotalMinutes) => prevTotalMinutes + 1);
    }
    setHourAngle(hour * 30);
  }, []);

  useInterval(updateTime, 1000);

  const { hour, minute, second } = timeInfo;
  return (
    <>
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
            key="minute"
            circleRadius={circleSize}
            rotation={totalMinutes * 6}
            width={0.2}
            height={8}
            style={{ backgroundColor: "blue" }}
            coordinates={{ radius: 8, angle: totalMinutes * 6 }}
          ></Item>
          <Item
            key="hour"
            circleRadius={circleSize}
            rotation={hour * 30}
            width={0.3}
            height={6}
            style={{ backgroundColor: "green" }}
            coordinates={{ radius: 6, angle: hour * 30 }}
          ></Item>
          <Item
            key="second"
            circleRadius={circleSize}
            rotation={totalSeconds * 6}
            width={0.1}
            height={9}
            style={{ backgroundColor: "red" }}
            coordinates={{ radius: 8, angle: totalSeconds * 6 }}
          ></Item>
        </Circle>
      </div>
      <div>
        {hour}:{minute}:{second}
      </div>
      <div>{totalSeconds}</div>
      <div>{totalMinutes}</div>
    </>
  );
};

export default WatchFace;
