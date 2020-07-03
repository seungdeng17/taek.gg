import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMatchDatas } from "@modules/match";

import loadingIcon from "@assets/images/loading.svg";

const MoreMatchesButtonWrap = styled.div`
  border: 1px solid #cdd2d2;
  background: #f2f2f2;
  border-radius: 2px;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 14px;
  color: #555e5e;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Loading = styled.div`
  width: 45px;
  height: 45px;
  background: url(${loadingIcon});
  background-size: 100%;
`;

const MoreMatchesButton = () => {
  const dispatch = useDispatch();
  const { matchData, index, bLoading } = useSelector(({ match }) => match);

  const handleMoreMatches = () => {
    dispatch(getMatchDatas(index.start, index.end, matchData));
  };

  return (
    <MoreMatchesButtonWrap>
      {bLoading ? (
        <Loading />
      ) : (
        <Button onClick={handleMoreMatches} disabled={bLoading}>
          더 보기
        </Button>
      )}
    </MoreMatchesButtonWrap>
  );
};

export default MoreMatchesButton;
