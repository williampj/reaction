import React from "react";
import List from "./List";

function Lists(props) {
  return (
    <div id="existing-lists" className="existing-lists">
      {props.lists.map((list) => (
        <List key={list.id} {...list} />
      ))}
    </div>
  );
}

export default Lists;
