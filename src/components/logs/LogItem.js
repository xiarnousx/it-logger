import React, { useState } from "react";
import Moment from "react-moment";

export const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          <a className="secondary-content" href="!#">
            <i className="material-icons grey-text">delete</i>
          </a>
        </span>
      </div>
    </li>
  );
};
