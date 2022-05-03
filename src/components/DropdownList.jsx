import React from "react";
import { useState } from "react";
import Data from "../data.json";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";

export default function DropdownList() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("litse des départements");
  const [persons, setPersons] = useState([]);

  const departments = Data.map((data) => data.departments).reduce(
    (prev, current) => [...prev, ...current]
  );
  const handelClick = (e) => {
    const zone = Data.filter((area) =>
      area.departments.includes(parseInt(e.target.textContent))
    );
    setPersons(zone);
  };
  return (
    <div className="dropdown">
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn"
      >
        {selected}
        <span className={isActive ? "fa fa-caret-up" : "fa fa-caret-down"} />
      </div>
      <div
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        {departments.map((zone, index) => (
          <div
            key={index}
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
              handelClick(e);
            }}
          >
            {zone}
          </div>
        ))}
      </div>

      {persons.map((person, index) => (
        <li key={index} style={{ display: isActive ? "none" : "block" }}>
          {person.name}
        </li>
      ))}
    </div>
  );
}
