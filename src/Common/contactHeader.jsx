import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ContactHeader.css";
function ContactHeader() {
  return (
    <div className="parant">
      <div className="container">
        <div>
          <p>
            <FontAwesomeIcon icon={faPhone} /> + 1235 2355 98
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faPaperPlane} /> YOUREMAIL@EMAIL.COM
          </p>
        </div>
        <div>
          <p>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
