import React from "react";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const MainSearchWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.brandColor};
`;

const MainSearchInner = styled.div`
  width: 1000px;
`;

const MainSearch = () => {
  return (
    <MainSearchWrap>
      <MainSearchInner>
        <SearchForm />
      </MainSearchInner>
    </MainSearchWrap>
  );
};

export default MainSearch;
