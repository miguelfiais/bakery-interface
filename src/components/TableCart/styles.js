import styled from 'styled-components';

export const ContainerTable = styled.table`
  width: 100%;
  max-width: 1000px;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  th {
    text-align: center;
    width: max-content;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #8c4d46;
  }
  td {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    img {
      width: 80px;
    }
    span {
      margin: 0 4px;
    }
    button {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #8c4d46;
      border: none;
      background: transparent;
    }
    svg {
      display: block;
      margin: 0 auto;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;
