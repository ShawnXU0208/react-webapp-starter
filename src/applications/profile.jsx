import { Box, Button } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
// import { useAlertMessageContext } from '../contexts/alert-message';

function Profile() {
  // const { fireAlert } = useAlertMessageContext();

  // useEffect(() => {
  //   fireAlert('success', 'You entered Profile!');
  // }, []);
  // return <div>Profile</div>;
  const [test, setTest] = useState(0);

  const change = () => {
    setTest(test + 1);
  };
  useEffect(() => {
    console.log('render');
  });

  const doSomething = () => {
    console.log('call function');
    return 'function is called';
  };
  const memoDoSomething = useMemo(() => doSomething(), []);

  return (
    <Box>
      Profile {test} <Button onClick={change}>change test</Button>
      <div>{memoDoSomething}</div>
    </Box>
  );
}

export default Profile;
