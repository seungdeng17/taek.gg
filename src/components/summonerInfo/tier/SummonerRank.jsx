import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummonerRank } from "@modules/rank";
import styled from "styled-components";

import SoloRankInfo from "./SoloRankInfo";
import TeamRankInfo from "./TeamRankInfo";

const SummonerRankWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px 0;
`;

const SummonerRank = ({ summonerInfoData }) => {
  const dispatch = useDispatch();
  const { soloRankData, teamRankData } = useSelector(({ rank }) => rank);
  const { bValidSummoner } = useSelector(({ summoner }) => summoner);

  useEffect(() => {
    bValidSummoner && dispatch(getSummonerRank(summonerInfoData.id));
  }, [dispatch, bValidSummoner, summonerInfoData.id]);

  return (
    <SummonerRankWrap>
      {<SoloRankInfo {...{ soloRankData }} />}
      {<TeamRankInfo {...{ teamRankData }} />}
    </SummonerRankWrap>
  );
};

export default SummonerRank;
