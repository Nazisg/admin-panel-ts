import React from "react";
import "./style.scss";

export default function index() {
  return (
    <div className="side-menu">
      <h2>Admin Panel</h2>
      <ul className="menu">
        <li>User</li>
        <li>Teams</li>
        <li>Daily Report</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
