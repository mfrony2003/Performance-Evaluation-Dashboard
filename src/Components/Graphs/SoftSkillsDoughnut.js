import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from "./colors";

const options = {
  legend: {
    display: true,
    position: "bottom",
  },
  maintainAspectRatio: false,
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

function SoftSkillsDoughnut(props) {
  const { data, labels } = props;
  const graphdata = {
    responsive: true,
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };

  let chartInstance = null;

  return (
    <div style={styles.pieContainer}>
      <Doughnut data={graphdata} options={options} />
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "auto",
    height: "auto",
    position: "relative",
  },
  relative: {
    position: "relative",
  },
};

export default SoftSkillsDoughnut;
