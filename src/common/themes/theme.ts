import colors from './colors';

export const mainTheme = {
  palette: {
    white: colors.WHITE,
    grey: colors.GREY,
    greydarker: colors.GREYDARKER,
    background: colors.BACKGROUND,
    blue: colors.BLUE,
  },
} as const;

export type MainTheme = typeof mainTheme;
