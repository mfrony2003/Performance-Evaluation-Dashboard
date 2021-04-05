import React, { useState } from "react";
import * as graphs from ".";

function Graph(props) {
  const [currentValue, selectValue] = useState(props.init);

  const handleChange = (e) => {
    selectValue(e.target.value);
  };
  const seleceCardLoad = () => {
    var Graph = graphs[currentValue];
    return <Graph GraphsData={props.userInfo.Graphs} />;
  };

  return (
    <div className="card">
      <div className="content">
        <div className="head">
          <div className="wrapper">
            <span className="wrapper">
              <h5 className="text-muted">Select Report</h5>
            </span>
            <span>
              <div className="wrapper">
                <select
                  className="selectOption"
                  value={currentValue}
                  onChange={handleChange}
                >
                  <option value="ProjectEngagement">Project Engagement</option>
                  <option value="Overtime">Overtime Per Month</option>
                  <option value="AbsenteeismRate">Absenteeism Rate </option>
                  <option value="TechinicalExperties">
                    Techinical Experties{" "}
                  </option>
                </select>
              </div>
            </span>
          </div>
          {seleceCardLoad()}
        </div>
      </div>
    </div>
  );
}
export default Graph;
