import styled from 'styled-components';
interface ITableRowProps {
  $header?: boolean;
}

interface IImageWrapper {
  $image: string;
}

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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium['60']}
    ${({ theme }) => theme.spacing.medium['32']}
    ${({ theme }) => theme.spacing.medium['80']};
`;

export const SearchContainer = styled.header`
  width: min(100%, 1440px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.spacing.medium['32']} 0;

  h1 {
    font-weight: 500;

    font-size: ${({ theme }) => theme.spacing.regular['24']};
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;

  input {
    width: 287px;
    padding: 14px 16px;

    border-radius: ${({ theme }) => theme.spacing.little['08']};
    border: 1px solid ${({ theme }) => theme.colors['gray-10']};
    background-color: ${({ theme }) => theme.colors.background.white};
    font-size: ${({ theme }) => theme.spacing.regular['16']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-20']};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.black};
    }

    &:focus ~ svg {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  svg {
    position: absolute;
    right: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors['gray-20']};
    align-self: center;
  }
`;

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
