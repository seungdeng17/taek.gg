import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSummonerInfo } from "@modules/summoner";

import SummonerProfile from "@components/summonerInfo/SummonerProfile";

const SummonerInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lowBackground};
`;

const SummonerInfoInner = styled.div`
  width: 1000px;
`;

const SummonerInfo = () => {
  const dispatch = useDispatch();
  const { summonerInfoData } = useSelector(({ summoner }) => summoner);
  const { summonerName } = useParams();

  useEffect(() => {
    dispatch(getSummonerInfo(summonerName));
  }, [dispatch, summonerName]);

  return (
    <SummonerInfoWrap>
      <SummonerInfoInner>{summonerInfoData && <SummonerProfile {...{ summonerInfoData }} />}</SummonerInfoInner>
    </SummonerInfoWrap>
  );
};

export default SummonerInfo;
