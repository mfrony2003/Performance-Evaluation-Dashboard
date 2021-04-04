import React from "react";
import StarRating from "./StarRating";
import FontAwesomeIconFooter from "../Common/FontAwesomeIconFooter";
import Card from "../Common/Card";

function EmployeeRating(props) {
  const { rating, joining, designaton } = props.userInfo;

  const iconType = {
    firstIcon: "calendar",
    firstIconText: "Joining : " + joining,
    secondIcon: "address-card",
    secondIconText: designaton,
  };
  return (
    <div className="card card-rounded">
      <div className="content">
        <Card header="Employee Rating" body={<StarRating value={rating} />} />
        <FontAwesomeIconFooter iconType={iconType} />
      </div>
    </div>
  );
}

export default EmployeeRating;
