import React, { useState, useEffect } from "react";
import { LogItem } from "./LogItem";
import { Loader } from "../layout/Loader";
export const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

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
      {!loading && logs.map((log) => <LogItem key={log.id} log={log} />)}
    </ul>
  );
};
