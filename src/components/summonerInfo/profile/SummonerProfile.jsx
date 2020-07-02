import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import bgLevelBox from "@assets/images/bg-levelbox.png";

const SummonerProfileWrap = styled.div`
  background-color: #f5f5f5;
`;

const SummonerProfileInner = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
`;

const ProfileIcon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 30px;
`;

const ProfileBorder = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  width: 120px;
  height: 120px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background: url(${(props) => `${process.env.REACT_APP_SUMMONER_PROFILE_BORDER.replace("{tier}", props.tier.toLowerCase())}`});
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const ProfileLevel = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: -14px;
  margin-left: -22px;
  width: 44px;
  height: 24px;
  padding-top: 3px;
  box-sizing: border-box;
  background: url(${bgLevelBox});
  background-size: 100%;
  line-height: 17px;
  font-size: 14px;
  text-align: center;
  color: #eabd56;
`;

const ProfileName = styled.span`
  color: #242929;
  font-size: 24px;
  font-weight: 600;
`;

const SummonerProfile = ({ summonerInfoData }) => {
  const { soloRankData } = useSelector(({ rank }) => rank);
  const profileImgSrc = process.env.REACT_APP_SUMMONER_PROFILE_ICON.replace("{profileIconId}", summonerInfoData.profileIconId);
  const summonerLevel = summonerInfoData.summonerLevel;
  const summonerName = summonerInfoData.name;

  return (
    <SummonerProfileWrap>
      <SummonerProfileInner>
        <ProfileIcon>
          {soloRankData && <ProfileBorder tier={soloRankData.tier} />}
          <ProfileImg src={profileImgSrc} alt="summoner-profile-icon" />
          <ProfileLevel>{summonerLevel}</ProfileLevel>
        </ProfileIcon>
        <ProfileName>{summonerName}</ProfileName>
      </SummonerProfileInner>
    </SummonerProfileWrap>
  );
};

export default SummonerProfile;
