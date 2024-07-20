import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { clearCurrent, updateLog } from "../../actions/logsActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ log, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (log !== null) {
      setMessage(log.message);
      setAttention(log.attention);
      setTech(log.tech);
    }
  }, [log])

  const onSubmit = () => {
    if (message.trim() === "" || tech.trim() === "")
      return M.toast({ html: "Please Enter a message and tech" });
    updateLog({
      id: log.id,
      message,
      attention,
      tech,
      date: new Date()
    })
    setMessage("");
    setTech("");
    setAttention(false);
    clearCurrent();
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  log: state.log.current
})

export default connect(mapStateToProps, { updateLog, clearCurrent })(EditLogModal)