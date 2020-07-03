import React from "react";
import styled from "styled-components";

const ItemsInfoWrap = styled.div`
  width: 114px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemsWrap = styled.div`
  width: 100px;
`;

const ItemImgBox = styled.img`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  overflow: hidden;
`;

const EmptyImgBox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  overflow: hidden;
  background-color: #95a5a670;
`;

const WardBox = styled.div`
  margin-top: 10px;
  color: #353a3a;
  line-height: 13px;
  font-size: 12px;
  text-align: center;
`;

const ItemsInfo = ({ playerStat }) => {
  const { item0, item1, item2, item3, item4, item5, item6, visionWardsBoughtInGame } = playerStat.stats;

  const items = [item0, item1, item2, item6, item3, item4, item5].map((item, idx) => {
    const imgSrc = process.env.REACT_APP_ITEM_IMAGE.replace("{item}", item);
    if (!item) return <EmptyImgBox key={`${item}-${idx}`} />;
    return <ItemImgBox key={`${item}-${idx}`} src={imgSrc} alt="item-img" />;
  });

  return (
    <ItemsInfoWrap>
      <ItemsWrap>{items}</ItemsWrap>
      <WardBox>제어 와드 {visionWardsBoughtInGame}</WardBox>
    </ItemsInfoWrap>
  );
};

export default ItemsInfo;
