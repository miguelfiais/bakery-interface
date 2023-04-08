import styled from 'styled-components';

export const TrSecondary = styled.tr`
  display: ${(props) => (props.isVisible ? 'table-row' : 'none')};
  img {
    width: 50px;
  }
  th {
    font-size: 14px;
  }
`;

export const Span = styled.span`
  transform: ${(props) => (props.isVisible ? 'rotate(0)' : 'rotate(-90deg)')};
  transition: 0.3s;
`;
