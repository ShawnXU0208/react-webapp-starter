import React, { useEffect } from 'react';

import { useAlertMessageContext } from '../contexts/alert-message';

function App2() {
  const { fireAlert } = useAlertMessageContext();

  useEffect(() => {
    fireAlert('success', 'You entered App 2!');
  }, []);
  return (<div>App 2</div>);
}

export default App2;