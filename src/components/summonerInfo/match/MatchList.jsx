import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getMatchListData, getMatchDatas } from "@modules/match";

import MatchItem from "./MatchItem";

const MatchListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
  padding: 15px 0 30px 15px;
`;

const MoreMatchesButton = styled.div`
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

const MatchList = ({ summonerInfoData }) => {
  const dispatch = useDispatch();
  const { bValidSummoner } = useSelector(({ summoner }) => summoner);
  const { matchData, matchesInfo, index } = useSelector(({ match }) => match);

  const matchList = matchesInfo.map((matchInfo) => <MatchItem key={matchInfo.gameId} {...{ matchInfo }} />);

  const handleMoreMatches = () => {
    dispatch(getMatchDatas(index.start, index.end, matchData));
  };

  useEffect(() => {
    bValidSummoner && dispatch(getMatchListData(summonerInfoData.accountId));
  }, [dispatch, bValidSummoner, summonerInfoData.accountId]);

  return (
    <>
      {matchData && (
        <MatchListWrap>
          {matchList}
          <MoreMatchesButton onClick={handleMoreMatches}>더 보기</MoreMatchesButton>
        </MatchListWrap>
      )}
    </>
  );
};

export default MatchList;
