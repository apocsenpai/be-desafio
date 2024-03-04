import styled from 'styled-components';

interface ITableRowProps {
  $header?: boolean;
}

interface IImageWrapper {
  $image: string;
}

export const Table = styled.ul`
  width: min(100%, 1440px);
`;

export const TableRow = styled.li<ITableRowProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;

  height: ${({ theme }) => theme.spacing.medium['48']};
  box-shadow: ${({ theme }) => theme.shadow['sm']};
  padding: 0 ${({ theme }) => theme.spacing.medium['32']};

  ${({ $header, theme }) =>
    $header &&
    ` font-weight: 500;
  color: ${theme.colors.white};
  background: ${theme.colors.background.gradientPrimary};
  border-top-right-radius: ${theme.spacing.little['08']};
  border-top-left-radius: ${theme.spacing.little['08']};`}
`;

export const ImageWrapper = styled.div<IImageWrapper>`
  width: 34px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
`;
