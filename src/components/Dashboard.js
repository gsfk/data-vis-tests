import React from "react";
import BentoPie from "./BentoPie";
import TestVictoryPie from "./TestVictoryPie";
import { phenotypicFeatures, experiment_type_array } from "../data";

const Dashboard = () => {
  const bentoTitle = "Phenotypic Features";
  const bentoData = phenotypicFeatures;
  const bentoHeight = 100;

  const victoryTitle = "Experiment type";
  const victoryData = experiment_type_array;
  const victorySize = 200;

  return (
    <>
      <h1>Dashboard</h1>
      <BentoPie
        title={victoryTitle}
        data={victoryData}
        chartHeight={victorySize}
      />
      <TestVictoryPie
        title={victoryTitle}
        data={victoryData}
        height={victorySize}
      />
    </>
  );
};

export default Dashboard;
