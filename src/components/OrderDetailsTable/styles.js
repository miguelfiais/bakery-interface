import styled from 'styled-components';

export const TrSecondary = styled.tr`
  display: ${(props) => (props.isVisible ? 'table-row' : 'none')};
  img {
    width: 50px;
  }
`;
