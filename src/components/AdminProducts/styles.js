import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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
  background-color: ${(props) => (props.isOffer ? '	#008000' : '#f00')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #fff;
`;
export const ContainerForm = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 260px;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
`;
export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 16px;
  padding: 24px;
  border-radius: 8px;
  background: #a499a6;
  position: relative;
  span {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 4px;
  }
  input,
  > button {
    width: 200px;
    height: 36px;
    border-radius: 8px;
    border: none;
  }
  input {
    padding-left: 8px;
  }
  .label-checkbox {
    flex-direction: row;
    input {
      width: 20px;
      height: 20px;
    }
  }
`;
