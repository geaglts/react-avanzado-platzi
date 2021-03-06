import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h2`
  font-size: 14pt;
  font-weight: normal;
  margin: 10px 0;
`;

export const Input = styled.input`
  border: none;
  font-size: 12pt;
  height: 35px;
  margin: 5px 0;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  transition: background-color 550ms ease;
  background-color: #4287f5;
  height: 35px;
  font-size: 12pt;
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    transition: background-color 350ms ease;
    background-color: #42bff5;
  }
  &[disabled] {
    cursor: default;
    background-color: #4287f5;
    opacity: 0.5;
  }
  ${(props) =>
    props.red &&
    css`
      background-color: #eb3461;
    `}
  ${(props) =>
    props.only &&
    css`
      border-radius: 3px;
      padding: 0 20px;
    `}
`;

export const Error = styled.span`
  text-align: center;
  padding: 10px 0;
  color: #ed462f;
`;
