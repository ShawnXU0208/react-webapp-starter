import React, { useEffect } from 'react';

import { useAlertMessageContext } from '../contexts/alert-message';

function Dashboard() {
  const { fireAlert } = useAlertMessageContext();

  useEffect(() => {
    fireAlert('success', 'You entered dashboard!');
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
