import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getChampionName, getPlayersNames } from "@utils/util";

const FollowPlayersNamesWrap = styled.div`
  width: 170px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamWrap = styled.div`
  width: 85px;
  height: 90px;
`;

const Summoner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  a {
    max-width: 60px;
    font-size: 11px;
    color: #555;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  :last-child {
    margin: 0;
  }
`;

const FollowPlayersNames = ({ matchInfo }) => {
  const { participants, participantIdentities } = matchInfo;

  const teamA = getPlayersNames(participants, participantIdentities, 100);
  const teamB = getPlayersNames(participants, participantIdentities, 200);

  const teamAList = teamA.map((player) => {
    const champion = getChampionName(player.championId);
    const championImgSrc = process.env.REACT_APP_CHAMPION_IMAGE.replace("{champion}", champion);
    return (
      <Summoner key={player.championId}>
        <img src={championImgSrc} alt="champion-img" />
        <Link to={`/summoner/${player.summonerName}`}>{player.summonerName}</Link>
      </Summoner>
    );
  });

  const teamBList = teamB.map((player) => {
    const champion = getChampionName(player.championId);
    const championImgSrc = process.env.REACT_APP_CHAMPION_IMAGE.replace("{champion}", champion);
    return (
      <Summoner key={player.championId}>
        <img src={championImgSrc} alt="champion-img" />
        <Link to={`/summoner/${player.summonerName}`}>{player.summonerName}</Link>
      </Summoner>
    );
  });

  return (
    <FollowPlayersNamesWrap>
      <TeamWrap>{teamAList}</TeamWrap>
      <TeamWrap>{teamBList}</TeamWrap>
    </FollowPlayersNamesWrap>
  );
};

export default FollowPlayersNames;
