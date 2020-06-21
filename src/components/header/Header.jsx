import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import lolIcon from "@assets/images/lol-icon.svg";

import HeaderSearchForm from "./HeaderSearchForm";

const HeaderWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #232f46;
`;

const HeaderNavTop = styled.ul`
  display: flex;
  color: #fff;
  font-size: 13px;
  li {
    padding: 0 20px;
    line-height: 40px;
    background-color: ${({ theme }) => theme.color.brandColor};
  }
  .header-logo {
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
  }
  .header-lol {
    display: flex;
  }
`;

const HeaderNavBottomWrap = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.brandColor};
`;

const HeaderNavBottomInner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
  .header-search-form {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

const HeaderNavBottom = styled.ul`
  display: flex;
  background-color: ${({ theme }) => theme.color.brandColor};
  color: #b3cdff;
  font-size: 16px;
  box-sizing: border-box;
  li {
    margin-right: 30px;
    line-height: 50px;
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.color.brandColor};
    :hover {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }
`;

const Header = () => {
  const { bOpenHeaderSearchForm } = useSelector(({ header }) => header);
  const history = useHistory();

  const handleHeaderLogoClick = () => history.push("/");

  return (
    <HeaderWrap>
      <HeaderNavTop>
        <li className="header-logo" onClick={handleHeaderLogoClick}>
          <h1>TAEK.GG</h1>
        </li>
        <li className="header-lol">
          <img src={lolIcon} alt="lol-icon" /> 리그오브레전드
        </li>
      </HeaderNavTop>
      <HeaderNavBottomWrap>
        <HeaderNavBottomInner>
          <HeaderNavBottom>
            <li>#집에있자</li>
            <li>챔피언 분석</li>
          </HeaderNavBottom>
          <div className="header-search-form">{bOpenHeaderSearchForm && <HeaderSearchForm />}</div>
        </HeaderNavBottomInner>
      </HeaderNavBottomWrap>
    </HeaderWrap>
  );
};

export default Header;
