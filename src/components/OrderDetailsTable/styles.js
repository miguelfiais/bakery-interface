import styled from 'styled-components';

export const TrSecondary = styled.div`
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: 80px 1fr 1fr 1fr 1fr 1fr;
  img {
    width: 50px;
  }
`;

export const Span = styled.span`
  transform: ${(props) => (props.isVisible ? '0' : 'rotate(-90deg)')};
  transition: 0.3s;
`;
