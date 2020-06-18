import React from "react";
import styled from "styled-components";

import logo from "@assets/images/logo.png";

const SearchFormWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchFormInput = styled.input`
  margin-top: 30px;
  display: block;
  width: 500px;
  padding: 15px 150px 18px 17px;
  border: none;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
`;

const SearchForm = () => {
  return (
    <SearchFormWrap>
      <img src={logo} alt="logo" />
      <SearchFormInput type="text" />
    </SearchFormWrap>
  );
};

export default SearchForm;
