import React from "react";
import FontAwesomeIconFooter from "../Common/FontAwesomeIconFooter";
import Card from "../Common/Card";
function Profile(props) {
  
  const { userName, profileImage, email, phone } = props.userInfo;

  const iconType = {
    firstIcon: "envelope",
    firstIconText: email,
    secondIcon: "phone",
    secondIconText: phone,
  };
  return (
    <div className="card card-rounded">
      <div className="content">
        <Card
          header={
            <img className="profileimg" src={profileImage} alt="Avatar" />
          }
          body={userName}
        />
        <FontAwesomeIconFooter iconType={iconType} />
      </div>
    </div>
  );
}
export default Profile;
