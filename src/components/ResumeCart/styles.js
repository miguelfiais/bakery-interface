import styled from 'styled-components';

export const Container = styled.div`
  > div {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 16px;
    border-radius: 12px;
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .products {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 8px;
  }
  .total {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  button {
    width: 100%;
    border: none;
    background: #8c4d46;
    border-radius: 12px;
    padding: 8px 20px;
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
`;
