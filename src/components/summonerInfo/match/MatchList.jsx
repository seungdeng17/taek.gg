import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchListData, getMatchDatas } from "@modules/match";

const MatchList = ({ summonerInfoData }) => {
  const dispatch = useDispatch();
  const { bValidSummoner } = useSelector(({ summoner }) => summoner);
  const { matchData, index } = useSelector(({ match }) => match);

  const handleMoreMatches = () => {
    dispatch(getMatchDatas(index.start, index.end, matchData));
  };

  useEffect(() => {
    bValidSummoner && dispatch(getMatchListData(summonerInfoData.accountId));
  }, [dispatch, bValidSummoner, summonerInfoData.accountId]);

  return <div></div>;
};

export default MatchList;
