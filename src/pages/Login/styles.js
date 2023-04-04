import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('${background}') no-repeat center;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: 60% 40%;
`;

export const LeftContainer = styled.div`
  background: linear-gradient(180deg, #c09191 0%, #8c4d46 100%);
  border-radius: 32px 0 0 32px;
  position: relative;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-left: 32px;
  img {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    max-width: 350px;
  }
`;

export const RightContainer = styled.div`
  background: #fff;
  border-radius: 0 32px 32px 0;
  padding: 32px;
  h2 {
    margin-bottom: 48px;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #8c4d46;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  label {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: relative;
  }
  button {
    background: #8c4d46;
    border-radius: 12px;
    height: 56px;
    border: none;
    margin: 18px 0 32px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }
  a {
    font-weight: 600;
    color: #8c4d46;
  }
  span {
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #f00;
    position: absolute;
    bottom: -16px;
  }
`;
export const Input = styled.input`
  border: ${(props) => (props.error ? '1px solid #f00' : '1px solid #c3c3c3')};
  border-radius: 12px;
  height: 46px;
  padding-left: 12px;
  margin-top: 4px;
`;
