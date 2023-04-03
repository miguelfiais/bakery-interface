import styled from 'styled-components';

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 48px;
  position: fixed;
  width: 100%;
  z-index: 2;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    gap: 48px;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    position: relative;
    span {
      background: #8c4d46;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      border-radius: 50%;
      position: absolute;
      top: -8px;
      right: -12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 36px;
    button {
      padding: 8px 20px;
      border: none;
      border-radius: 4px;
      background: #fff;
      color: #461d1a;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
  }
  svg {
    width: 24px;
    height: auto;
    cursor: pointer;
    color: #fff;
  }
`;
