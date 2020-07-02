import React from "react";
import styled from "styled-components";
import { getKillstreak } from "@utils/util";

const KDAInfoWrap = styled.div`
  width: 114px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KDAWrap = styled.div`
  color: #879292;
  font-size: 15px;
  white-space: nowrap;
  margin-bottom: 12px;
  span {
    color: #555e5e;
    font-weight: 600;
  }
  .deaths {
    color: #c6443e;
  }
`;

const GradeWrap = styled.div`
  color: #555e5e;
  font-size: 13px;
  span {
    font-weight: 600;
  }
`;

const BadgeWrap = styled.div`
  margin-top: 12px;
  font-size: 10px;
  color: #f2f2f2;
  background: #ee5a52;
  border: 1px solid #c6443e;
  border-radius: 15px;
  padding: 2px 5px;
  line-height: 1;
`;

const KDAInfo = ({ playerStat }) => {
  const kills = playerStat.stats.kills;
  const deaths = playerStat.stats.deaths;
  const assists = playerStat.stats.assists;
  const grade = kills + assists > 0 && deaths === 0 ? "Perfect" : isNaN(((kills + assists) / deaths).toFixed(2)) ? "0.00" : ((kills + assists) / deaths).toFixed(2);
  const killstreak = getKillstreak(playerStat);

  return (
    <KDAInfoWrap>
      <KDAWrap>
        <span>{kills}</span> / <span className="deaths">{deaths}</span> / <span>{assists}</span>
      </KDAWrap>
      <GradeWrap>
        <span>{grade}</span> 평점
      </GradeWrap>
      {killstreak && <BadgeWrap>{killstreak}</BadgeWrap>}
    </KDAInfoWrap>
  );
};

export default KDAInfo;
