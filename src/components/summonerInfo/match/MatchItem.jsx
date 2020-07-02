import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import GameStat from "./GameStat";

const MatchItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 690px;
  height: 100px;
  border-collapse: collapse;
  border-radius: 2px;
  border: 1px solid #cdd2d2;
  margin-bottom: 8px;
  box-sizing: border-box;
  &.Win {
    background-color: #a3cfec;
    border-color: #99b9cf;
  }
  &.Fail {
    background-color: #e2b6b3;
    border-color: #cea7a7;
  }
  &.Win.Regame,
  &.Fail.Regame {
    background-color: #b6b6b6;
    border-color: #a7a7a7;
  }
`;

const MatchItem = ({ matchInfo }) => {
  console.log(matchInfo);

  const { summonerInfoData } = useSelector(({ summoner }) => summoner);
  const summonerName = summonerInfoData.name;

  const [playerInfo] = matchInfo.participantIdentities.filter((summoner) => summoner.player.summonerName === summonerName);
  const [playerStat] = matchInfo.participants.filter((summoner) => summoner.participantId === playerInfo.participantId);
  const win = matchInfo.teams[playerStat.teamId / 100 - 1].win;

  const containerClass = `${win}${matchInfo.gameDuration < 900 ? " Regame" : ""}`;

  return (
    <MatchItemWrap className={containerClass}>
      <GameStat {...{ matchInfo, win }} />
    </MatchItemWrap>
  );
};

export default MatchItem;
