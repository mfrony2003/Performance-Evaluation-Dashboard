import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faUniversity,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
library.add(faAddressCard, faCalendar, faUniversity, faEnvelope, faPhone);

export default function FontAwesomeIconFooter(props) {
  const {
    firstIcon,
    firstIconText,
    secondIcon,
    secondIconText,
  } = props.iconType;
  return (
    <div className="footer">
      <hr />
      <div className="d-flex justify-content-between box-font-medium">
        <div className="col-md-12 stats">
          <span className="row">
            <div className="col-md-2 stats">
              <FontAwesomeIcon icon={["fa", firstIcon]} />
            </div>
            <div className="col-md-10 stats">{firstIconText} </div>
          </span>
          <span className="row">
            <div className="col-md-2 stats">
              <FontAwesomeIcon icon={["fa", secondIcon]} />
            </div>
            <div className="col-md-10 stats">{secondIconText}</div>
          </span>
        </div>
      </div>
    </div>
  );
}
