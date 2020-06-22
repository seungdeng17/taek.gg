import React from "react";
import styled from "styled-components";

const SoloRankInfoWrap = styled.div`
  width: 300px;
  height: 140px;
  position: relative;
  color: #879292;
  border: 1px solid #c6cbcb;
  background-color: #f2f2f2;
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

const TierImg = styled.img`
  width: 104px;
  height: 104px;
  padding: 0 10px;
`;

const RankTextWrap = styled.div`
  .rank-type {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .tier-rank {
    &.unranked {
      font-size: 16px;
      font-weight: 600;
    }
    .tier {
      font-size: 15px;
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

const SoloRankInfo = ({ soloRankData, tierImages }) => {
  const tierImg = soloRankData ? tierImages[soloRankData.tier] : tierImages.UNRANKED;
  const tierRank = soloRankData ? (
    <div className="tier-rank">
      <div className="tier">
        {soloRankData.tier} {soloRankData.rank}
      </div>
      <div>
        <span className="league-points">{soloRankData.leaguePoints} LP </span>
        <span className="win-lose">
          / {soloRankData.wins}승 {soloRankData.losses}패
        </span>
      </div>
    </div>
  ) : (
    <div className="tier-rank unranked">Unranked</div>
  );

  return (
    <SoloRankInfoWrap>
      <TierImg src={tierImg} alt="tier-img" />
      <RankTextWrap>
        <h3 className="rank-type">솔로랭크</h3>
        {tierRank}
      </RankTextWrap>
    </SoloRankInfoWrap>
  );
};

export default SoloRankInfo;