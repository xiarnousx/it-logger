import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { LogItem } from "./LogItem";
import { Loader } from "../layout/Loader";
import { deleteLog, getLogs, setCurrent } from "../../actions/logsActions";

const Logs = ({ log: { logs, loading }, getLogs, deleteLog, setCurrent }) => {

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 && (
        <li>
          <p className="center">No Logs</p>
        </li>
      )}
      {!loading && logs.map((log) => <LogItem key={log.id} log={log} deleteLog={deleteLog} setCurrent={setCurrent} />)}
    </ul>
  );
};

const mapStateToProps = state => ({
  log: state.log,
})

export default connect(mapStateToProps, { getLogs, deleteLog, setCurrent })(Logs);
