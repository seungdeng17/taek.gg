import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showHeaderSearchForm } from "@modules/header";

import SearchForm from "./MainSearchForm";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHeaderSearchForm(false));
  }, [dispatch]);

  return (
    <MainSearchWrap>
      <MainSearchInner>
        <SearchForm />
      </MainSearchInner>
    </MainSearchWrap>
  );
};

export default MainSearch;
