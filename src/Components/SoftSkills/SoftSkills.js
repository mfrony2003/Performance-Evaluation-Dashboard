import React from "react";
import { SoftSkillsDoughnut } from "../Graphs";
import Card from "../Common/Card";
function SoftSkills(props) {
  const { SoftSkills } = props.userInfo.Graphs;
  return (
    <div className="card card-rounded">
      <div className="content">
        <Card
          header="Soft Skills"
          body={
            <SoftSkillsDoughnut
              data={SoftSkills.data}
              labels={SoftSkills.labels}
            />
          }
        />
      </div>
    </div>
  );
}
export default SoftSkills;
