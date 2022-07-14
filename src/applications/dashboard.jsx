import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function Dashboard() {
  const fireAlert = useAlert();

  useEffect(() => {
    fireAlert('success', 'You entered Dashboard!');
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
