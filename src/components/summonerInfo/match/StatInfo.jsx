import React from "react";
import styled from "styled-components";
import { getTeamTotalKills } from "@utils/util";

const StatInfoWrap = styled.div`
  width: 90px;
  height: 96px;
  vertical-align: middle;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  color: #555e5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .kill-participation {
    color: #c6443e;
  }
`;

const StatInfo = ({ matchInfo, playerStat }) => {
  const { gameDuration, participants } = matchInfo;
  const { teamId } = playerStat;
  const { champLevel, totalMinionsKilled, neutralMinionsKilled, kills, assists } = playerStat.stats;

  const totalCS = totalMinionsKilled + neutralMinionsKilled;
  const minutePerCS = +(totalCS / Math.floor(gameDuration / 60)).toFixed(1);
  const killParticipation = Math.ceil(((kills + assists) / getTeamTotalKills(participants, teamId)) * 100) || 0;

  return (
    <StatInfoWrap>
      <div>레벨{champLevel}</div>
      <div>
        {totalCS} ({minutePerCS}) CS
      </div>
      <div className="kill-participation">킬관여 {killParticipation}%</div>
    </StatInfoWrap>
  );
};

export default StatInfo;
