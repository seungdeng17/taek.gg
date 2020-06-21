import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSummonerInfo } from "@modules/summoner";
import { showHeaderSearchForm } from "@modules/header";

import SummonerProfile from "./profile/SummonerProfile";
import Menu from "./menu/Menu";

const SummonerInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const SummonerInfo = () => {
  const dispatch = useDispatch();
  const { summonerInfoData } = useSelector(({ summoner }) => summoner);
  const { summonerName } = useParams();

  useEffect(() => {
    dispatch(getSummonerInfo(summonerName));
    dispatch(showHeaderSearchForm(true));
  }, [dispatch, summonerName]);

  return (
    <SummonerInfoWrap>
      {summonerInfoData && <SummonerProfile {...{ summonerInfoData }} />}
      <Menu />
    </SummonerInfoWrap>
  );
};

export default SummonerInfo;
