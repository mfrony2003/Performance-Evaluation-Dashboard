import React from "react";

export default function Card(props) {
  return (
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8 center">
        <div className="detail ">
          <p className="detail-subtitle">{props.header}</p>
          <div className="number">{props.body}</div>
        </div>
      </div>
      <div className="col-sm-2"></div>
    </div>
  );
}
