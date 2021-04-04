import React from "react";
import FontAwesomeIconFooter from "../Common/FontAwesomeIconFooter";
import Card from "../Common/Card";
function Experience(props) {
  const { experience, instiute, degree } = props.userInfo;
  const iconType = {
    firstIcon: "university",
    firstIconText: instiute,
    secondIcon: "address-card",
    secondIconText: degree,
  };
  return (
    <div className="card card-rounded">
      <div className="content">
        <Card header="Experience" body={experience} />
        <FontAwesomeIconFooter iconType={iconType} />
      </div>
    </div>
  );
}
export default Experience;
