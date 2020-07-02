import React from "react";
import styled from "styled-components";
import { romanNumberConverter } from "@utils/util";

import defaultTier from "@assets/images/default-tier.png";

const TeamRankInfoWrap = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 100px;
  position: relative;
  color: #879292;
  border: 1px solid #c6cbcb;
  background-color: #f2f2f2;
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

const TierImg = styled.img`
  width: 64px;
  height: 64px;
  padding: 0 30px;
`;

const RankTextWrap = styled.div`
  .rank-type {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .tier-rank {
    &.unranked {
      font-size: 14px;
      font-weight: 600;
    }
    .tier {
      font-size: 14px;
      font-weight: 600;
      color: #1f8ecd;
      margin-bottom: 3px;
    }
    .league-points {
      color: #555e5e;
      font-weight: 600;
      font-size: 12px;
    }
    .win-lose {
      font-size: 12px;
    }
  }
`;

const TeamRankInfo = ({ teamRankData }) => {
  const tierImg = teamRankData ? process.env.REACT_APP_SUMMONER_TIER_IMAGE.replace("{tier}", teamRankData.tier).replace("{rank}", romanNumberConverter(teamRankData.rank)) : defaultTier;
  const tierRank = teamRankData ? (
    <div className="tier-rank">
      <div className="tier">
        {teamRankData.tier} {teamRankData.rank}
      </div>
      <div>
        <span className="league-points">{teamRankData.leaguePoints} LP </span>
        <span className="win-lose">
          / {teamRankData.wins}승 {teamRankData.losses}패
        </span>
      </div>
    </div>
  ) : (
    <div className="tier-rank unranked">Unranked</div>
  );

  return (
    <TeamRankInfoWrap>
      <TierImg src={tierImg} alt="tier-img" />
      <RankTextWrap>
        <h3 className="rank-type">자유 5:5 랭크</h3>
        {tierRank}
      </RankTextWrap>
    </TeamRankInfoWrap>
  );
};

export default TeamRankInfo;
