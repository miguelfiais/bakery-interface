import styled from 'styled-components';
import banner from '../../assets/banner-orders.png';

export const Container = styled.div`
  background: #f2f2f2;
  min-height: 100vh;
`;

export const BannerOrders = styled.div`
  width: 100%;
  height: 400px;
  background: url('${banner}') no-repeat center;
  background-size: cover;
`;
