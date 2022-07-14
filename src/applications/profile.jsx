import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function Profile() {
  const fireAlert = useAlert();

  useEffect(() => {
    fireAlert('success', 'You entered Profile!');
  }, []);

  return <div>Profile</div>;
}

export default Profile;
