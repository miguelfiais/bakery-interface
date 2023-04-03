import styled from 'styled-components';
import banner from '../../assets/banner-cart.png';

export const Container = styled.div`
  background: #f2f2f2;
  min-height: 100vh;
  height: 100%;
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #8c4d46;
    text-align: center;
    margin-top: 16px;
  }
`;

export const BannerCart = styled.section`
  width: 100%;
  height: 500px;
  background: url('${banner}') no-repeat center;
  background-size: cover;
`;
