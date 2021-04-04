import React from "react";

export default function Recomendation(props) {
  const isReadOnly = props.isReadOnly;
  const showSaveButton = props.showSaveButton;
  return (
    <div className="card card-rounded">
      <div className="content">
        <div className="form-group purple-border">
          <label htmlFor="exampleFormControlTextarea4">{props.header}</label>
          <textarea
            disabled={isReadOnly}
            className="form-control"
            id="exampleFormControlTextarea4"
            rows="6"
            value={props.value}
            placeholder={props.placeholder}
          ></textarea>
          <div className="float-right mt-1">
            {showSaveButton && (
              <button type="button" className="btn btn-primary">
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
