import { Button, Typography, useTheme } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';

function IconButton(props) {
  const theme = useTheme();
  const { icon, onClick } = props;
  const Icon = icon;
  return (
    <Button
      sx={{
        padding: theme.spacing(1),
        minWidth: 'initial',
        borderRadius: '8px',
        '&:hover': { backgroundColor: theme.palette.background },
      }}
      onClick={onClick}
    >
      <Icon sx={{ fontSize: '25px', color: theme.palette.body }} />
    </Button>
  );
}

IconButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

function IconTextButton(props) {
  const theme = useTheme();
  const { icon, text, onClick } = props;
  const Icon = icon;

  return (
    <Button
      sx={{
        padding: theme.spacing(1),
        minWidth: 'initial',
        borderRadius: '8px',
        textTransform: 'none',
        '&:hover': { backgroundColor: theme.palette.info.main, '& *': { color: theme.palette.white } },
      }}
      onClick={onClick}
    >
      <Icon
        sx={{
          fontSize: '22px',
          color: theme.palette.info.main,
          mr: theme.spacing(1),
        }}
      />
      <Typography variant="body" sx={{ color: theme.palette.info.main }}>
        {text}
      </Typography>
    </Button>
  );
}

IconTextButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function TextButton(props) {
  const { children } = props;
  return <Button>{children}</Button>;
}

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export { IconButton, IconTextButton, TextButton };
