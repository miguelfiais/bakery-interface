import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  background: #333;
  border-radius: 10px;
  padding: 32px;
  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }
  input,
  select,
  button {
    width: 100%;
    height: 36px;
    border-radius: 8px;
    border: none;
  }
  input {
    padding-left: 8px;
  }
  button {
    background: #8c4d46;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  .label-file {
    width: 290px;
    border: 1px dashed #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    cursor: pointer;
    input {
      opacity: 0;
      width: 0;
      padding: 0;
    }
  }
  label,
  div {
    position: relative;
  }
  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #f00;
    position: absolute;
    bottom: -16px;
  }
`;
