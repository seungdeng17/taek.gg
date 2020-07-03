import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMatchDatas } from "@modules/match";

const MoreMatchesButtonWrap = styled.div`
  border: 1px solid #cdd2d2;
  background: #f2f2f2;
  border-radius: 2px;
  box-sizing: border-box;
  height: 50px;
  color: #555e5e;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const MoreMatchesButton = () => {
  const dispatch = useDispatch();
  const { matchData, index } = useSelector(({ match }) => match);

  const handleMoreMatches = () => {
    dispatch(getMatchDatas(index.start, index.end, matchData));
  };

  return <MoreMatchesButtonWrap onClick={handleMoreMatches}>더 보기</MoreMatchesButtonWrap>;
};

export default MoreMatchesButton;
