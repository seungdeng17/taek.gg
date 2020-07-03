import React from "react";
import styled from "styled-components";
import { getQueueType, getDuration, getResultColor } from "@utils/util";
import moment from "moment";
import "moment/locale/ko";

const GameStatWrap = styled.div`
  width: 70px;
  text-align: center;
  font-size: 12px;
  color: #555;
  line-height: 16px;
  .game-queue {
    font-weight: 600;
  }
  .bar {
    display: block;
    width: 27px;
    margin: 5px auto;
    height: 2px;
    background-color: #95a5a670;
  }
  .game-result {
    font-weight: 600;
    color: ${(props) => props.gameResultColor};
  }
`;

const GameStat = ({ matchInfo, win }) => {
  const gameQueue = getQueueType(matchInfo.queueId);
  const gameCreation = moment(new Date(matchInfo.gameCreation)).fromNow();
  const gameResult = matchInfo.gameDuration < 900 && matchInfo.queueId >= 420 && matchInfo.queueId <= 440 ? "다시하기" : win === "Win" ? "승리" : "패배";
  const gameDuration = getDuration(matchInfo.gameDuration);
  const gameResultColor = getResultColor(gameResult);

  return (
    <GameStatWrap {...{ gameResultColor }}>
      <div className="game-queue">{gameQueue}</div>
      <div>{gameCreation}</div>
      <div className="bar" />
      <div className="game-result">{gameResult}</div>
      <div>{gameDuration}</div>
    </GameStatWrap>
  );
};

export default GameStat;
