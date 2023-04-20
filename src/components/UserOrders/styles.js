import styled from 'styled-components';

export const Span = styled.span``;

export const ContainerTable = styled.div`
  width: 98%;
  max-width: 1200px;
  background: #fff;
  border-radius: 12px;
  margin: 32px auto;
  p {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  .thead {
    display: grid;
    grid-template-columns: 30px 1fr 1fr 1fr;
    padding: 12px 0;
    p {
      font-weight: 500;
    }
  }
  .head-body {
    display: grid;
    grid-template-columns: 30px 1fr 1fr 1fr;
    border-top: 1px solid #e5e5e5;
    padding: 8px 0;
  }
  .title-details {
    background: rgba(140, 77, 70, 0.5);
    padding: 8px 0;
    p {
      font-weight: 500;
    }
  }
  .content-details {
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      margin: 0 auto;
    }
    border-top: 1px solid #f0f0f0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    svg {
      width: 24px;
      height: auto;
    }
  }
`;
