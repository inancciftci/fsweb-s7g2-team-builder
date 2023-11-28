import React from "react";
import "./TeamList.css";

export default function TeamList({ teamList }) {
  return (
    <div>
      <ul>
        {teamList.map((e) => (
          <li key={teamList.indexOf(e)}>
            <button id={teamList.indexOf(e)}>düzenle</button>
            {e.name} - {e.email} - {e.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
