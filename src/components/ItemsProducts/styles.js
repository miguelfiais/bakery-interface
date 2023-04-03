import styled from 'styled-components';

export const NavCategory = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 48px;
    padding: 16px;
  }
  li:first-child {
    font-weight: 500;
    border-bottom: 2px solid #461d1a;
  }
  li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #461d1a;
    cursor: pointer;
  }
`;

export const AllProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  flex-wrap: wrap;
  padding: 36px;
`;
