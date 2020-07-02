import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getMatchListData, getMatchDatas } from "@modules/match";

import MatchItem from "./MatchItem";

const MatchListWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lowBackground};
  padding: 15px;
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

  return <>{matchData && <MatchListWrap>{matchList}</MatchListWrap>}</>;
};

export default MatchList;
