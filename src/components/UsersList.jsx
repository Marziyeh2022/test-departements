import React from "react";
import Data from "../data.json";

function UsersList() {
  return (
    <>
      <h2>La liste des personnes :</h2>
      <ol>
        {Data.map((data) => {
          return <li>{data.name}</li>;
        })}
      </ol>
    </>
  );
}
export default UsersList;
