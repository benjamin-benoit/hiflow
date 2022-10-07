import colors from './colors';

export const mainTheme = {
  palette: {
    white: colors.WHITE,
    grey: colors.GREY,
    greydarker: colors.GREYDARKER,
    background: colors.BACKGROUND,
    blue: colors.BLUE,
    bluelight: colors.BLUELIGHT,
    bluelighter: colors.BLUELIGHTER,
  },
} as const;

export type MainTheme = typeof mainTheme;
