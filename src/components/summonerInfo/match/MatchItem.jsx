import React from "react";

const MatchItem = ({ matchInfo }) => {
  console.log(matchInfo);
  return <div>{matchInfo.gameId}</div>;
};

export default MatchItem;
