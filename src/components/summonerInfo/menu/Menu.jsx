import React from "react";
import styled from "styled-components";

const MenuWrap = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border-bottom: 1px solid #c6cbcb;
  background-color: #f5f5f5;
`;

const MenuInner = styled.div`
  width: 1050px;
  margin: 0 auto;
  ul {
    font-size: 14px;
    letter-spacing: 1px;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
  }
  li {
    background-color: ${({ theme }) => theme.color.lowBackground};
    box-sizing: border-box;
    color: #000;
    width: 90px;
    height: 45px;
    text-align: center;
    border: 1px solid #c6cbcb;
    border-bottom: 1px solid ${({ theme }) => theme.color.lowBackground};
    cursor: pointer;
  }
`;

const Menu = () => {
  return (
    <MenuWrap>
      <MenuInner>
        <ul>
          <li>종합</li>
        </ul>
      </MenuInner>
    </MenuWrap>
  );
};

export default Menu;
