import React from "react";
import BentoPie from "./BentoPie";
import TestVictoryPie from "./TestVictoryPie";
import {
  phenotypicFeatures,
  experiment_type_array,
  ages_array,
  sex_array,
} from "../data";
import BentoClassPie from "./BentoClassPie";
import ChartWrapper from "./ChartWrapper";
import BentoBarChart from "./BentoBarChart";

// victory expects array of {x: category_name, y: value}
// bento expects array of {name: category_name, value: value}

// example input phenotypicFeatures is an object with catname: catvalue pairs

const Dashboard = () => {
  const victoryTitle = "Experiment Type";
  const victoryData = experiment_type_array;
  const victorySize = 200;

  const bentoTitle = "Phenotypic Features";
  const bentoData = experiment_type_array.map((e) => ({
    name: e.x,
    value: e.y,
  }));
  const bentoHeight = 100;

  const wrapperHeight = 250;

  return (
    <div style={{ width: "500px" }}>
      <h1>Dashboard</h1>
      <BentoPie
        title={"Bento function pie"}
        data={bentoData}
        chartHeight={victorySize}
      />
      <TestVictoryPie
        title={victoryTitle}
        data={victoryData}
        height={victorySize}
      />
      <BentoClassPie
        title='Bento Class Pie'
        data={bentoData}
        chartHeight={victorySize}
        chartAspectRatio={1.0}
        fieldLabel={"[dataset item].subject.sex"}
        setAutoQueryPageTransition={null}
        autoQueryDataType={null}
      />
      <ChartWrapper
        chartType={"pie"}
        title={"Experiment Type"}
        data={bentoData}
        height={wrapperHeight}
      />
      <BentoBarChart
        title={"Bento Bar"}
        data={victoryData}
        units={"mg/L"}
        height={300}
      />
      <BentoBarChart
        title={"Ages"}
        data={ages_array}
        units={"years"}
        height={300}
      />
      <BentoBarChart title={"Sexes"} data={sex_array} units={""} height={300} />
    </div>
  );
};

export default Dashboard;
