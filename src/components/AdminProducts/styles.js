import styled from 'styled-components';

export const Container = styled.div`
  padding: 36px;
  background: #f2f2f2;
  .table-head,
  .tr-body {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  .table-head {
    background: #333;
    color: #fff;
    padding: 16px 0;
    font-weight: 500;
  }
  .tr-body {
    font-weight: 400;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  img {
    width: 60px;
  }
  .delete-and-edit {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  svg {
    width: 24px;
    height: auto;
    cursor: pointer;
  }
`;

export const Offer = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.isOffer ? '#0f0' : '#f00')};
  border-radius: 50%;
`;
