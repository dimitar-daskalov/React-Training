import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  classes += " clickable";

  return <i onClick={props.onClick} aria-hidden="true" className={classes}></i>;
};

export default Like;
