import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  aside {
    width: 100%;
    background: #333;
    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      display: block;
    }
    nav ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0 16px;
      margin-top: 120px;
    }
  }
`;

export const Li = styled.li`
  padding: 12px;
  background: ${(props) => (props.isActive ? '#444' : '1')};
`;
