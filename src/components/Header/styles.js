import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    img {
      justify-self: flex-start;
    }
  }
  ul {
    display: flex;
    gap: 48px;
  }
  a {
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
    justify-self: flex-end;
    display: flex;
    align-items: center;
    gap: 36px;
    .login,
    .logout,
    .orders {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    .logout,
    .orders {
      background: transparent;
      border: none;
    }
  }
  svg {
    width: 24px;
    height: auto;
    cursor: pointer;
    color: #fff;
  }
`;
export const Li = styled.li`
  border-bottom: ${(props) => (props.isActive ? '3px solid #8c4d46' : 'none')};
`;

export const LinkStyles = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  position: relative;
`;
