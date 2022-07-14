import React, { useEffect } from 'react';

import { useAlert } from '../contexts/alert-message';

function SellItems() {
  const fireAlert = useAlert();

  useEffect(() => {
    fireAlert('success', 'You entered Sell Items!');
  }, []);
  return <div>Sell Items</div>;
}

export default SellItems;
