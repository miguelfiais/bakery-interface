import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

export const ImageCategory = styled.img`
  display: block;
  margin: 0 auto;
`;

export const LinkCategory = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  background: #a499a6;
  border-radius: 0px 0px 12px 12px;
  padding: 8px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
