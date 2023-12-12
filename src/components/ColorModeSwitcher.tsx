import * as React from 'react';
import { IconButton, useTheme } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

type ColorModeSwitcherProps = {
  toggleTheme: () => void;
} & React.ComponentProps<typeof IconButton>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = ({
  toggleTheme,
  ...props
}) => {
  const theme = useTheme();
  const SwitchIcon =
    theme.palette.type === 'dark' ? Brightness7Icon : Brightness4Icon;

  return (
    <IconButton color="inherit" onClick={toggleTheme} {...props}>
      <SwitchIcon />
    </IconButton>
  );
};
