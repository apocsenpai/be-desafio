import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        background: {
          gradientPrimary: string,
          white: string,
        },
        black: string,
        'gray-20': string,
        'gray-10': string,
        'gray-00': string,
        white: string,
      },
      font: {
        md: string,
        lg: string,
      },
      spacing: {
        medium: {
          '80': string,
          '60': string,
          '48': string,
          '40': string,
          '32': string,
        },
        regular: {
          '28': string,
          '24': string,
          '20': string,
          '16': string,
        },
        little: {
          '08': string,
          '04': string,
        },
      },
      shadow: {
        sm: string,
        md: string,
      },
      family: {
        sans: string,
      },
  }
}