import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSummonerInfo, resetSummonerState } from "@modules/summoner";
import { resetRankState } from "@modules/rank";
import { resetMatchState } from "@modules/match";
import { showHeaderSearchForm } from "@modules/header";

import SummonerProfile from "./profile/SummonerProfile";
import Menu from "./menu/Menu";
import SummonerRank from "./tier/SummonerRank";
import MatchList from "./match/MatchList";

const SummonerInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lowBackground};
`;

const SummonerInfoContentsWrap = styled.div`
  width: 1050px;
  display: flex;
  margin: 0 auto;
`;

const SummonerInfo = () => {
  const dispatch = useDispatch();
  const { bValidSummoner, summonerInfoData } = useSelector(({ summoner }) => summoner);
  const { summonerName } = useParams();

  useEffect(() => {
    dispatch(resetSummonerState());
    dispatch(resetRankState());
    dispatch(resetMatchState());
    dispatch(getSummonerInfo(summonerName));
    dispatch(showHeaderSearchForm(true));
  }, [dispatch, summonerName]);

  return (
    <SummonerInfoWrap>
      {bValidSummoner && (
        <>
          <SummonerProfile {...{ summonerInfoData }} />
          <Menu />
          <SummonerInfoContentsWrap>
            <SummonerRank {...{ summonerInfoData }} />
            <MatchList {...{ summonerInfoData }} />
          </SummonerInfoContentsWrap>
        </>
      )}
    </SummonerInfoWrap>
  );
};

export default SummonerInfo;
