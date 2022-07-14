import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function BuyItems() {
  const fireAlert = useAlert();

  useEffect(() => {
    fireAlert('success', 'You entered Buy Items!');
  }, []);

  return <div>Buy Items</div>;
}

export default BuyItems;
