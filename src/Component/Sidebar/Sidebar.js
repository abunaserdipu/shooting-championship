import React from "react";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  console.log(props.sidebar.name);
  const { name, salary } = props.sidebar;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h5>
            Name: {name}, salary: <FontAwesomeIcon icon={faDollarSign} />
            {salary}
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
