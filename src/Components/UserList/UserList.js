import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkButton = (props) => (
  <a
    href="#"
    onClick={() => {
      props.onUserSelect(props.userId);
    }}
  >
    {props.userName}
  </a>
);
export default function UserList(props) {
  const [userInfoList, setUserInfo] = useState(props.userInfo);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-block d-sm-none ">
            <a
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Click To Select User
              <FontAwesomeIcon
                className="ml-2"
                icon={["fa", "hand-point-left"]}
              />
            </a>

            <div className="collapse" id="collapseExample">
              <nav>
                <ul>
                  {userInfoList.map((item) => (
                    <li key={item.userId}>
                      <LinkButton
                        userId={item.userId}
                        userName={item.userName}
                        onUserSelect={props.onUserSelect}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <aside className="sidebar  d-none d-xl-block d-none d-sm-block d-md-none">
            <div className="dynamicDiv" id="dd.0.4.0">
              <div className="sidebar-wrapper">
                <nav>
                  <ul>
                    {userInfoList.map((item) => (
                      <li key={item.userId}>
                        <LinkButton
                          userId={item.userId}
                          userName={item.userName}
                          onUserSelect={props.onUserSelect}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
