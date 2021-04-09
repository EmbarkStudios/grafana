import { ThemePalette } from './createPalette';

/** @beta */
export interface ThemeComponents {
  /** Applies to normal buttons, inputs, radio buttons, etc */
  height: {
    sm: number;
    md: number;
    lg: number;
  };
  panel: {
    padding: number;
    headerHeight: number;
  };
  tooltip: {
    background: string;
  };
  menu: {
    background: string;
  };
  dropdown: {
    background: string;
  };
  scrollbar: {
    background: string;
  };
}

export function createComponents(palette: ThemePalette): ThemeComponents {
  return {
    height: {
      sm: 3,
      md: 4,
      lg: 6,
    },
    tooltip: {
      background: palette.layer2,
    },
    menu: {
      background: palette.layer2,
    },
    dropdown: {
      background: palette.layer2,
    },
    scrollbar: {
      background: palette.secondary.main,
    },
    panel: {
      padding: 1,
      headerHeight: 4,
    },
  };
}