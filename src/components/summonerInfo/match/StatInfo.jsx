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
  const champLevel = playerStat.stats.champLevel;
  const totalCS = playerStat.stats.totalMinionsKilled + playerStat.stats.neutralMinionsKilled;
  const minutePerCS = +(totalCS / Math.floor(matchInfo.gameDuration / 60)).toFixed(1);
  const killParticipation = Math.ceil(((playerStat.stats.kills + playerStat.stats.assists) / getTeamTotalKills(matchInfo.participants, playerStat.teamId)) * 100);

  console.log(matchInfo);
  console.log(playerStat);
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
