import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Average overtime per month",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
    },
  ],
};

function Overtime(props) {
  const { Overtime } = props.GraphsData;
  data.labels = Overtime.labels;
  data.datasets[0].data = Overtime.data;
  return (
    <div>
      <Bar data={data} />
      <h5 className="text-muted center">Overtime per month</h5>
    </div>
  );
}
export default Overtime;
