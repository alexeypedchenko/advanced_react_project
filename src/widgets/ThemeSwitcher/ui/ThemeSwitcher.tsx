import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import IconDark from 'shared/assets/icons/theme-dark.svg';
import IconLight from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <IconDark /> : <IconLight />}
    </Button>
  );
};
