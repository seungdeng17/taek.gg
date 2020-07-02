import React from "react";
import styled from "styled-components";
import { getChampionName, getSpellName, translateChampionName } from "@utils/util";

const GameSettingInfoWrap = styled.div`
  width: 100px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GameSettingInfoInner = styled.div`
  display: flex;
`;

const ChampionImg = styled.img`
  width: 46px;
  height: 46px;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
`;

const StatImgWrap = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4px;
`;

const StatImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  overflow: hidden;
  &.perk {
    background-color: #000;
    border-radius: 50%;
  }
`;

const ChampionName = styled.div`
  font-size: 12px;
  color: #555;
  text-align: center;
  white-space: nowrap;
  margin-top: 9px;
`;

const GameSettingInfo = ({ playerStat }) => {
  const champion = getChampionName(playerStat.championId);
  const championNameKR = translateChampionName(champion);
  const championImgSrc = process.env.REACT_APP_CHAMPION_IMAGE.replace("{champion}", champion);

  const spellA = getSpellName(playerStat.spell1Id);
  const spellB = getSpellName(playerStat.spell2Id);
  const spellAImgSrc = process.env.REACT_APP_SPELL_IMAGE.replace("{spell}", spellA);
  const spellBImgSrc = process.env.REACT_APP_SPELL_IMAGE.replace("{spell}", spellB);

  const mainPerk = playerStat.stats.perk0;
  const subPerk = playerStat.stats.perkSubStyle;
  const mainPerkImgSrc = process.env.REACT_APP_SUMMONER_MAIN_PERK_IMAGE.replace("{perk}", mainPerk);
  const subPerkImgSrc = process.env.REACT_APP_SUMMONER_SUB_PERK_IMAGE.replace("{perk}", subPerk);

  return (
    <GameSettingInfoWrap>
      <GameSettingInfoInner>
        <ChampionImg src={championImgSrc} alt="champion-img" />
        <StatImgWrap>
          <StatImg src={spellAImgSrc} alt="spell-img" />
          <StatImg src={spellBImgSrc} alt="spell-img" />
        </StatImgWrap>
        <StatImgWrap>
          <StatImg className="perk" src={mainPerkImgSrc} alt="spell-img" />
          <StatImg src={subPerkImgSrc} alt="spell-img" />
        </StatImgWrap>
      </GameSettingInfoInner>
      <ChampionName>{championNameKR}</ChampionName>
    </GameSettingInfoWrap>
  );
};

export default GameSettingInfo;
