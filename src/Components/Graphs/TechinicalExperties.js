import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Techinical Experties",
      maintainAspectRatio: true,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function TechinicalExperties(props) {
  const { TechinicalExperties } = props.GraphsData;
  data.labels = TechinicalExperties.labels;
  data.datasets[0].data = TechinicalExperties.data;
  return (
    <div>
      <Pie data={data} />
      <h5 className="text-muted center">Technical Experties</h5>
    </div>
  );
}
export default TechinicalExperties;
