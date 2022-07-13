import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Box, useTheme } from '@mui/material';
import React from 'react';

import { IconButton, IconTextButton } from '../elements/buttons';

function Topbar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(2),
        gap: theme.spacing(2),
      }}
    >
      <IconTextButton icon={AccountBalanceWalletOutlinedIcon} text="Wallet" onClick={() => {}} />
      <IconTextButton icon={ContactlessOutlinedIcon} text="Contact" onClick={() => {}} />
      <IconButton icon={NotificationsNoneOutlinedIcon} onClick={() => {}} />
    </Box>
  );
}

export default Topbar;
