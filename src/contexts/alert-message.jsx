import { Alert, Snackbar } from '@mui/material';
import { PropTypes } from 'prop-types';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const AlertMessageContext = createContext();

function AlertMessageProvider({ children }) {
  const [alertPack, setAlertPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [alertType, setAlertType] = useState('success');

  useEffect(() => {
    if (alertPack.length && !message) {
      setOpen(true);
      setMessage(alertPack[0].message);
      setAlertType(alertPack[0].alertType);
      setAlertPack((prev) => prev.slice(1));
    } else if (alertPack.length && message && open) {
      setOpen(false);
    }
  }, [alertPack, open, message, alertType]);

  const fireAlert = useCallback((type, text) => {
    setAlertPack((prev) => [...prev, { message: text, alertType: type }]);
  }, []);

  return (
    <AlertMessageContext.Provider value={fireAlert}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={() => {
          setOpen(false);
        }}
        TransitionProps={{
          onExited: () => {
            setMessage(undefined);
          },
        }}
      >
        <Alert onClose={() => setOpen(false)} severity={alertType}>
          {message}
        </Alert>
      </Snackbar>

      {children}
    </AlertMessageContext.Provider>
  );
}

AlertMessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAlert = () => useContext(AlertMessageContext);

export { AlertMessageProvider, useAlert };
