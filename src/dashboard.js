import React, { useState, useEffect } from "react";
import Graph from "./Components/Graphs/Graph";
import data from "./data.json";
import UserList from "./Components/UserList/UserList";
import {
  Profile,
  EmployeeRating,
  Experience,
  SoftSkills,
  Recomendation,
} from "./Components";

function Dashboard() {
  const userInfo = data.UserInfo;
  const [firstElement] = userInfo;
  const [selectedUser, setSelectedUser] = useState(firstElement);

  const getSelectUserId = (id) => {
    var result = userInfo.filter((e) => e.userId == id);
    const [firstElement] = result;
    setSelectedUser(firstElement);
  };

  return (
    <div>
      <div className="d-flex flex-column h-100">
        <div id="page">
          <div className="wrapper">
            <div id="bodywrapper" className="container-fluid showhidetoggle">
              <div className="content">
                <div className="container-fluid">
                  <div className="row mt-2">
                    <div className="col-md-6 float-start">
                      <h4 className="m-0 text-dark text-muted">
                        Performance Dashboard
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <ol className="breadcrumb float-end">
                        <li className="breadcrumb-item">
                          <a href="#"> Home</a>{" "}
                        </li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                      <UserList
                        userInfo={userInfo}
                        onUserSelect={getSelectUserId}
                      />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                          <Profile userInfo={selectedUser} />
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                          <EmployeeRating userInfo={selectedUser} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                          <Experience userInfo={selectedUser} />
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                          <SoftSkills userInfo={selectedUser} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <Graph
                                init="ProjectEngagement"
                                userInfo={selectedUser}
                              />
                            </div>
                            <div className="col-md-6">
                              <Graph init="Overtime" userInfo={selectedUser} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <Recomendation
                            isReadOnly={true}
                            header="Recomendation"
                            value={selectedUser.recomendation}
                            showSaveButton={false}
                            placeholder=""
                          />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <Recomendation
                            isReadOnly={false}
                            header="Write Your Recomendation (if Any)"
                            showSaveButton={true}
                            placeholder="Write Your Recomendation ... "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
