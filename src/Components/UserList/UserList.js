import React, { useState } from "react";

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
      <div className="search-container mb-2">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
        </form>
      </div>
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
    </>
  );
}
