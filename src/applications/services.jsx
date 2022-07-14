import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function Services() {
  const fireAlert = useAlert();

  useEffect(() => {
    fireAlert('success', 'You entered Services!');
  }, []);
  return <div>Services</div>;
}

export default Services;
