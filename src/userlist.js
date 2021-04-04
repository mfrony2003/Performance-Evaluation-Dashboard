import React from "react";

function UserList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>
      <a href="#">{number}</a>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
export default UserList;
