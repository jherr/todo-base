import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

type TopBarProps = {
  toggleTheme: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Top Bar
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            console.log('Theme toggle button clicked');
            toggleTheme();
          }}
        >
          {theme.palette.type === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
