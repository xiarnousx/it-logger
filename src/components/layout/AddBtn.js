import React from "react";

export const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        className="btn-floating btn-large blue darken-2 modal-trigger"
        href="#add-log-modal"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          {" "}
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
