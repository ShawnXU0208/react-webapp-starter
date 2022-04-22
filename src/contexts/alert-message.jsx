import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { PropTypes } from 'prop-types';

const AlertMessageContext = React.createContext();

const initialState = { type: '', text: '', open: false };

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { type: action.payload.type, text: action.payload.text, open: true };
    case 'close':
      return { type: 'success', text: '', open: false };
    default:
      throw new Error();
  }
};

function AlertMessageProvider({ children }) {
  const [state, dispatch] = React.useReducer(alertReducer, initialState);

  const fireAlert = (type, text) => {
    dispatch({ type: 'open', payload: { type, text } });
  };

  return (
    <AlertMessageContext.Provider value={{ fireAlert }}>
      <Snackbar open={state.open} autoHideDuration={6000} onClose={() => dispatch({ type: 'close' })}>
        <Alert onClose={() => dispatch({ type: 'close' })} severity={state.type}>
          {state.text}
        </Alert>
      </Snackbar>
      {children}
    </AlertMessageContext.Provider>
  );
}

AlertMessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAlertMessageContext = () => (React.useContext(AlertMessageContext));

export { AlertMessageProvider, useAlertMessageContext };
