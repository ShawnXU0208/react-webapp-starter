import { Alert, Snackbar } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';

const AlertMessageContext = React.createContext();

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        type: action.payload.type,
        text: action.payload.text,
        open: true,
      };
    case 'close':
      return { type: 'success', text: '', open: false };
    default:
      throw new Error();
  }
};

function AlertMessageProvider({ children }) {
  const [alert, dispatchAlert] = React.useReducer(alertReducer, {
    type: 'success',
    text: '',
    open: false,
  });

  const fireAlert = React.useCallback((type, text) => {
    dispatchAlert({ type: 'open', payload: { type, text } });
  }, []);

  return (
    <AlertMessageContext.Provider value={fireAlert}>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={() => dispatchAlert({ type: 'close' })}
      >
        <Alert onClose={() => dispatchAlert({ type: 'close' })} severity={alert.type}>
          {alert.text}
        </Alert>
      </Snackbar>

      {children}
    </AlertMessageContext.Provider>
  );
}

AlertMessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAlert = () => React.useContext(AlertMessageContext);

export { AlertMessageProvider, useAlert };
