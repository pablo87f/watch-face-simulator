import React from "react";
import "./styles.scss";
import Indicator from "../Indicator";
import SubIndicator from "../SubIndicator";
import { Circle, Widget } from "./styles";

type Props = {};

const hours = Array.from(Array(12).keys());
const minutes = hours.map(() => [0, 1, 2, 3, 4]).flat(1);
const WatchFace: React.FC<Props> = (props: Props) => {
  // console.warn("mainPositions", mainPositions);
  return (
    // <div className="container">
    //   <div className="content">Hello I am A Circle</div>
    // </div>
    // <div className="container">
    //   {/* <div className="main-indicator-circle-container">
    //     <Indicator pos={0} />
    //     <Indicator pos={1} />
    //     <Indicator pos={2} />
    //     <Indicator pos={3} />
    //     <Indicator pos={4} />
    //     <Indicator pos={5} />
    //     <Indicator pos={6} />
    //     <Indicator pos={7} />
    //     <Indicator pos={8} />
    //     <Indicator pos={9} />
    //     <Indicator pos={10} />
    //     <Indicator pos={11} />
    //   </div> */}
    //   {/* <div className="main-indicator-circle-container">
    //     {hours.map((key) => (
    //       <Indicator pos={key} />
    //     ))}
    //   </div>
    //   <div className="sub-indicator-circle-container">
    //     {minutes.map((key) => (
    //       <Indicator pos={key} />
    //     ))}
    //   </div> */}
    //   <div className="container">
    //     <Widget coordinates={{ angle: 0, radius: 20 }} size="1em" />
    //   </div>
    // </div>
    <Circle radius="20em">
      <Widget coordinates={{ angle: 0, radius: 20 }} size="1em">
        99
      </Widget>
    </Circle>
  );
};

export default WatchFace;
