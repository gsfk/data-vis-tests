import React from "react";
import BentoPie from "./BentoPie";
import TestVictoryPie from "./TestVictoryPie";
import BentoClassPie from "./BentoClassPie";
import { Pie } from "recharts";

const chartType = {
  PIE: "pie",
  BAR_CHART: "bar_chart",
  HISTOGRAM: "histogram",
};

const ChartWrapper = ({ chartType, title, data, height }) => {
  const wrapperStyle = {
    border: "1px solid grey",
    borderRadius: "4px",
    height: `${height}px`,
    width: `${height}px`,
    margin: "5px 5px 0 5px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "stretch"
  };

  const headerStyle = {
    borderBottom: "1px solid gray",
    background: "#f5f5f5",
    fontWeight: "bold",
    padding: "5px 0 5px 0",
    // alignSelf: "strech"
  };

  const pieStyle = {
    alignSelf: "center",
  };

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle}>{title}</div>
      <div style={pieStyle}>
        <BentoPie title={title} data={data} chartHeight={height} />
      </div>
    </div>
  );
};

export default ChartWrapper;
