import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #f2f2f2;
  padding: 32px;
  ul {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  button {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: none;
    background: transparent;
    padding: 0 12px;
  }
  .table {
    max-width: 1200px;
    margin-top: 48px;
    p {
      text-align: center;
      font-size: 16px;
      line-height: 19px;
    }
  }
  .table-head,
  .tr-body {
    display: grid;
    grid-template-columns: 30px 1fr 1fr 1fr 1fr;
    p {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .table-head {
    background: #fff;
    p {
      font-weight: 600;
    }
  }
  .table-body {
    background: #333;
    .tr-body {
      color: #fff;
    }
    .select {
      display: flex;
      align-items: center;
      justify-content: center;
      select {
        width: 70%;
        height: 60%;
        border-radius: 8px;
        padding-left: 12px;
      }
    }
  }
  .head-details {
    padding: 8px;
    p {
      font-weight: 600;
    }
  }
  .body-details {
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Li = styled.li`
  border-bottom: ${(props) => (props.isActive ? '3px solid #8c4d46' : 'none')};
`;

export const Details = styled.div`
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  img {
    width: 50px;
    display: block;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  svg {
    width: 24px;
    height: auto;
    transform: ${(props) => (props.isVisible ? '0' : 'rotate(-90deg);')};
    transition: 0.3s;
  }
`;
