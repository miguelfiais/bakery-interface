import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  background: #f2f2f2;
  padding: 36px 0;
  h4 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #461d1a;
  }
  p {
    font-weight: 400;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
  .benefits-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    svg {
      width: 24px;
      height: auto;
      color: #8c4d46;
    }
  }
`;
