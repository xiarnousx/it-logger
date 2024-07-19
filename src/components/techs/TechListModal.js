import React, { useState, useEffect } from "react";
import { TechItem } from "./TechItem";

export const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div id="tech-list-modal" className="modal" style={modalStyle}>
        <div className="modal-content">Loading</div>
      </div>
    );
  }

  return (
    <div id="tech-list-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Techs List</h4>
        <ul className="collection">
          {!loading && techs.length === 0 && (
            <li>
              <p className="center">No Techs</p>
            </li>
          )}
          {!loading &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
