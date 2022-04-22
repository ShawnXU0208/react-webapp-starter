import React, { useEffect } from 'react';

import { useAlertMessageContext } from '../contexts/alert-message';

function App1() {
  const { fireAlert } = useAlertMessageContext();

  useEffect(() => {
    fireAlert('success', 'You entered App 1!');
  }, []);
  return (<div>App 1</div>);
}

export default App1;