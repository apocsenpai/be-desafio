import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  height: ${({ theme }) => theme.spacing.medium['60']};
  background-color: ${({ theme }) => theme.colors.background['white']};
  padding: 0 ${({ theme }) => theme.spacing.medium['32']};
  box-shadow: ${({ theme }) => theme.shadow['sm']};
`;
