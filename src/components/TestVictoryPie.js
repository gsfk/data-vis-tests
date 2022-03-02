import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";
import {COLOURS} from "../constants"

const wrapperStyle = {width: "200px", border: "1px solid #dddddd", borderRadius: "4px"}


const TestVictoryPie = ({ title, data, height }) => {
  return (
    <div style={wrapperStyle}>
    <VictoryPie
      data={data}
      width={height}
      height={height}
      labelComponent={<VictoryTooltip/>}
      colorScale={COLOURS}
      style={{
        labels: {
          fontSize: 6,
        },
      }}
    />
    </div>
  );
};

export default TestVictoryPie;
