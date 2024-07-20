import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TechItem } from "./TechItem";
import { deleteTechs, getTechs } from "../../actions/techActions";

const TechListModal = ({ tech: { techs, loading }, getTechs, deleteTechs }) => {


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
          {!loading && techs && techs.length === 0 && (
            <li>
              <p className="center">No Techs</p>
            </li>
          )}
          {!loading && techs &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} deleteTechs={deleteTechs} />)}
        </ul>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = state => ({
  tech: state.tech,
})

export default connect(mapStateToProps, { getTechs, deleteTechs })(TechListModal)
