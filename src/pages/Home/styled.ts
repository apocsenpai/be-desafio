import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium['60']}
    ${({ theme }) => theme.spacing.medium['32']}
    ${({ theme }) => theme.spacing.medium['80']};
`;

