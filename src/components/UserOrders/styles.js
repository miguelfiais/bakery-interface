import styled from 'styled-components';

export const Span = styled.span``;

export const ContainerTable = styled.table`
  width: 100%;
  max-width: 1200px;
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  margin: 32px auto;
  td {
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
  }
  .main-td td {
    padding: 16px 0;
  }
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    svg {
      width: 24px;
      height: auto;
    }
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
