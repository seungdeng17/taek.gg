import React from "react";
import styled from "styled-components";

const MatchItemWrap = styled.div`
  width: 690px;
  height: 100px;
  border-collapse: collapse;
  border-radius: 2px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const MatchItem = ({ matchInfo }) => {
  console.log(matchInfo);
  return <MatchItemWrap>{matchInfo.gameId}</MatchItemWrap>;
};

export default MatchItem;
