import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Label, Cell } from "recharts";

const ASPECT_RATIO = 1.2;
const MAX_LABEL_CHARS = 15;
const BIN_PIXEL_WIDTH = 50;
const NON_BIN_CONTENT_WIDTH = 50;
const FILL_COLOUR = "#ff0000";
const MISSING_FILL_COLOUR = "#bbbbbb";

const BentoBarChart = ({ title, data, units, height }) => {
  const titleStyle = {
    fontStyle: "italic",
    fontSize: "1.5em",
    textAlign: "center",
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "lightGrey",
    // border: "1px solid black"
  };

  const tickFormatter = (tickLabel) => {
    if (tickLabel.length <= MAX_LABEL_CHARS) {
      return tickLabel;
    }
    return tickLabel.substring(0, MAX_LABEL_CHARS) + "...";
  };

  const totalCount = data.reduce((sum, e) => sum + e.y, 0);
  const chartWidth = BIN_PIXEL_WIDTH * data.length + NON_BIN_CONTENT_WIDTH;
  console.log({ chartWidth: chartWidth });

  const fill = (entry) => {
    return entry.x == "missing" ? MISSING_FILL_COLOUR : FILL_COLOUR;
  };

  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>{title}</div>
      <BarChart
        // width={height * ASPECT_RATIO}
        width={chartWidth}
        height={height}
        data={data}
        margin={{ bottom: 100 }}
      >
        <XAxis
          dataKey='x'
          height={20}
          angle={-45}
          dy={15}
          dx={0}
          tickFormatter={tickFormatter}
          textAnchor='end'
          interval={"preserveStartEnd"}
        >
          <Label value={units} offset={-40} position='insideBottom' />
        </XAxis>
        <YAxis>
          <Label value='Count' offset={-10} position='left' angle={270} />
        </YAxis>
        <Tooltip content={<BarTooltip totalCount={totalCount} />} />
        {/* <Bar dataKey='y' fill='#ff0000' isAnimationActive={false} /> */}
        <Bar dataKey='y'>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry}`}
              stroke={"black"}
              fill={fill(entry)}
              strokeWidth={1}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

const BarTooltip = ({ active, payload, totalCount }) => {
  if (!active) {
    return null;
  }

  const name = payload[0]?.payload?.x || "";
  const value = payload[0]?.value || 0;
  const percentage = totalCount ? Math.round((value / totalCount) * 100) : 0;

  const toolTipStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "5px",
    border: "1px solid grey",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.9)",
    borderRadius: "2px",
    textAlign: "left",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "12px",
    padding: "0",
    margin: "0",
  };

  const countStyle = {
    fontWeight: "normal",
    fontSize: "11px",
    padding: "0",
    margin: "0",
  };

  return (
    <div style={toolTipStyle}>
      <p style={labelStyle}>{name}</p>
      <p style={countStyle}>
        {value} ({percentage}%)
      </p>
    </div>
  );
};

export default BentoBarChart;
