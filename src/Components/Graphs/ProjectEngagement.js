import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Project Engagement",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
    },
  ],
};

function ProjectEngagement(props) {
  const { ProjectEngagement } = props.GraphsData;
  data.labels = ProjectEngagement.labels;
  data.datasets[0].data = ProjectEngagement.data;
  return (
    <div>
      <h2 className="text-muted">Project Engagement</h2>
      <HorizontalBar data={data} />
    </div>
  );
}
export default ProjectEngagement;
