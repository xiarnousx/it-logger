import React from "react";

export const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div className="">
        {tech.firstName} {tech.lastName}
      </div>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};
