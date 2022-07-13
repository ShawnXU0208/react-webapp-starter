import { Button } from '@mui/material';
import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function Dashboard() {
  const showAlert = useAlert();

  useEffect(() => {
    console.log('re-render dashboard component');
  });

  const setState = () => {
    showAlert('success', 'dashboard is rendered');
  };
  return (
    <div>
      Dashboard <Button onClick={setState}>Change State</Button>
    </div>
  );
}

export default Dashboard;
