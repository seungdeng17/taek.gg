import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummonerRank } from "@modules/rank";
import styled from "styled-components";

import UNRANKED from "@assets/images/default-tier.png";
import CHALLENGER from "@assets/images/challenger-tier.png";
import GRANDMASTER from "@assets/images/grandmaster-tier.png";
import MASTER from "@assets/images/master-tier.png";
import DIAMOND from "@assets/images/diamond-tier.png";
import PLATINUM from "@assets/images/platinum-tier.png";
import GOLD from "@assets/images/gold-tier.png";
import SILVER from "@assets/images/silver-tier.png";
import BRONZE from "@assets/images/bronze-tier.png";
import IRON from "@assets/images/iron-tier.png";

import SoloRankInfo from "./SoloRankInfo";
import TeamRankInfo from "./TeamRankInfo";

const SummonerRankWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lowBackground};
  padding: 15px;
`;

const SummonerRank = ({ summonerInfoData }) => {
  const dispatch = useDispatch();
  const { summonerRankData } = useSelector(({ rank }) => rank);
  const [soloRankData] = summonerRankData ? summonerRankData.filter((rankData) => rankData.queueType === "RANKED_SOLO_5x5") : [null];
  const [teamRankData] = summonerRankData ? summonerRankData.filter((rankData) => rankData.queueType === "RANKED_FLEX_SR") : [null];
  const tierImages = { UNRANKED, CHALLENGER, GRANDMASTER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, IRON };

  useEffect(() => {
    dispatch(getSummonerRank(summonerInfoData.id));
  }, [dispatch, summonerInfoData.id]);

  return (
    <SummonerRankWrap>
      {<SoloRankInfo {...{ soloRankData, tierImages }} />}
      {<TeamRankInfo {...{ teamRankData, tierImages }} />}
    </SummonerRankWrap>
  );
};

export default SummonerRank;
