import styled from 'styled-components';
import banner from '../../assets/banner-home.jpg';

export const SectionBanner = styled.section`
  width: 100%;
  height: 500px;
  background: url('${banner}') center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  div {
    position: relative;
    margin-left: 36px;
    color: #ffffff;
    h1 {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
    }
    p {
      margin: 16px 0 32px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    a {
      padding: 12px 20px;
      border: none;
      background: #c09191;
      border-radius: 6px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 500px;
    background: #000;
    opacity: 0.45;
  }
`;
