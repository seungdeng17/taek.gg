import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getMatchListData } from "@modules/match";

import MatchItem from "./MatchItem";
import MoreMatchesButton from "./MoreMatchesButton";

const MatchListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
  padding: 15px 0 30px 15px;
`;

const MatchList = ({ summonerInfoData }) => {
  const dispatch = useDispatch();
  const { bValidSummoner } = useSelector(({ summoner }) => summoner);
  const { matchData, matchesInfo } = useSelector(({ match }) => match);

  const matchList = matchesInfo.map((matchInfo) => <MatchItem key={matchInfo.gameId} {...{ matchInfo }} />);

  useEffect(() => {
    bValidSummoner && dispatch(getMatchListData(summonerInfoData.accountId));
  }, [dispatch, bValidSummoner, summonerInfoData.accountId]);

  return (
    <>
      {matchData && (
        <MatchListWrap>
          {matchList}
          <MoreMatchesButton />
        </MatchListWrap>
      )}
    </>
  );
};

export default MatchList;
