import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
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

const LogoImg = styled.img`
  margin: -140px 0;
  width: 750px;
  height: auto;
`;

const Form = styled.form`
  margin-top: 30px;
  position: relative;
  width: 624px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #fff;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 15px 150px 18px 17px;
  background: none;
  border: none;
  line-height: 17px;
  font-size: 15px;
  color: #9b9b9b;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
`;

const FormSubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 10px 0 0;
  width: 60px;
  height: 30px;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  background-color: #00a9ff;
  cursor: pointer;
`;

const SearchForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => history.push(`/summoner/${data.searchId}`);

  return (
    <SearchFormWrap>
      <LogoImg src={logo} alt="logo" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput type="text" placeholder="소환사명" name="searchId" ref={register} />
        <FormSubmitBtn type="submit">.GG</FormSubmitBtn>
      </Form>
    </SearchFormWrap>
  );
};

export default SearchForm;
