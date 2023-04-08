import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NameProduct = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8c4d46;
`;

export const PriceProduct = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #461d1a;
`;

export const DescriptionProduct = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  max-width: 250px;
  margin-top: 8px;
`;

export const ImageProduct = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
`;

export const ButtonProduct = styled.button`
  width: 100%;
  border: none;
  background: #8c4d46;
  border-radius: 6px;
  padding: 8px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
