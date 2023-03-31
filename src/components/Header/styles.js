import styled from 'styled-components';

export const Container = styled.header`
  background: #a499a6;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0 48px;
  color: #fff;
  position: fixed;
  width: 100vw;
  z-index: 2;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 48px;
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
  }
`;
