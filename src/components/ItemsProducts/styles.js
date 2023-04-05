import styled from 'styled-components';

export const NavCategory = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 48px;
    padding: 16px;
  }
`;

export const Li = styled.li`
  border-bottom: ${(props) => (props.active ? '2px solid #461d1a' : 'none')};
  font-weight: ${(props) => (props.active ? '500' : '400')};
  font-size: 16px;
  line-height: 19px;
  color: #461d1a;
  cursor: pointer;
`;

export const AllProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  flex-wrap: wrap;
  padding: 36px;
`;
