import colors from './colors';

export const mainTheme = {
  palette: {
    background: colors.WHITE,
    grey: colors.GREY,
    greylight: colors.GREYLIGHT
  },
} as const;

export type MainTheme = typeof mainTheme;
