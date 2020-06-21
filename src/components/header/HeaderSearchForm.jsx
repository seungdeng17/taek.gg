import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: flex;
  height: 32px;
  background: #fff;
  border-radius: 4px;
  width: 340px;
`;

const FormInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  padding: 9px 42px 8px 14px;
  font-size: 13px;
  line-height: 15px;
  color: #727272;
  outline: none;
  box-sizing: border-box;
`;

const FormSubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 54px;
  text-align: center;
  background: none;
  border: none;
  line-height: 32px;
  color: ${({ theme }) => theme.color.brandColor};
  font-weight: 600;
  font-size: 17px;
  outline: none;
  cursor: pointer;
`;

const HeaderSearchForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => history.push(`/summoner/${data.searchId}`);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput type="text" placeholder="소환사명" name="searchId" ref={register} />
      <FormSubmitBtn type="submit">.GG</FormSubmitBtn>
    </Form>
  );
};

export default HeaderSearchForm;
