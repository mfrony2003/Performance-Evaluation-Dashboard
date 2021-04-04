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
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h5 className="text-muted">Select The Report</h5>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="canvas-wrapper">
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
            </div>
          </div>
          {seleceCardLoad()}
        </div>
      </div>
    </div>
  );
}
export default Graph;
