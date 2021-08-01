import { useCallback, useState } from "react";
import { useInterval } from "./useInterval";
import {
  getDay,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
} from "date-fns";

type DateTimeInfo = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

function getHourAngle(hours: number, minutes: number) {
  return hours * 30 + minutes * 0.5;
}

function getMinuteAngle(minutes: number) {
  return minutes * 6;
}

function getSecondAngle(seconds: number) {
  return seconds * 6;
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

function useWatch() {
  const startTimeInfo = getTimeInfo(new Date());

  const {
    second: startSecond,
    minute: startMinute,
    hour: startHour,
  } = startTimeInfo;

  const [timeInfo, setTimeInfo] = useState<DateTimeInfo>(startTimeInfo);

  const [totalHours, setTotalHours] = useState(startHour);
  const [totalMinutes, setTotalMinutes] = useState(startMinute);
  const [totalSeconds, setTotalSeconds] = useState(startSecond);

  const updateTime = useCallback(() => {
    const timeInfo = getTimeInfo(new Date());
    setTimeInfo(timeInfo);

    const { minute, second } = timeInfo;

    setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);

    if (totalSeconds > 0 && second === 0) {
      setTotalMinutes((prevTotalMinutes) => prevTotalMinutes + 1);
    }

    if (totalMinutes > 0 && minute === 0 && second === 0) {
      setTotalHours((prevTotalMinutes) => prevTotalMinutes + 1);
    }
  }, []);

  useInterval(updateTime, 1000);

  return {
    timeInfo,
    handAngles: {
      secondAngle: getSecondAngle(totalSeconds),
      minuteAngle: getMinuteAngle(totalMinutes),
      hourAngle: getHourAngle(totalHours, timeInfo.minute),
    },
  };
}

export { useWatch };
