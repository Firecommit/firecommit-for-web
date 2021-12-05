import React, { useReducer, createContext } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';

export type Notification = {
  type: AlertColor;
  open: boolean;
  message?: string;
};

const initNotification: Notification = {
  type: 'info',
  open: false,
};

type Action =
  | {
      type: 'SET_SUCCESS';
      message?: string;
    }
  | {
      type: 'SET_WARNING';
      message?: string;
    }
  | {
      type: 'SET_ERROR';
      message?: string;
    }
  | {
      type: 'SET_INFO';
      message: string;
    }
  | {
      type: 'CLOSE';
    };

const reducer = (state: Notification, action: Action): Notification => {
  switch (action.type) {
    case 'SET_SUCCESS':
      return {
        type: 'success',
        open: true,
        message: action.message ?? 'Success',
      };
    case 'SET_WARNING':
      return {
        type: 'warning',
        open: true,
        message: action.message ?? 'Warning',
      };
    case 'SET_ERROR':
      return {
        type: 'error',
        open: true,
        message: action.message ?? 'Error',
      };
    case 'SET_INFO':
      return {
        type: 'info',
        open: true,
        message: action.message,
      };
    case 'CLOSE':
      return {
        ...state,
        open: false,
      };
    default:
      return initNotification;
  }
};

export const NotificationContext = createContext(initNotification);
export const NotificationDispatchContext = createContext(
  {} as React.Dispatch<Action>
);

type Props = { children: React.ReactNode };
export const NotificationProvider = ({ children }: Props) => {
  const [notification, dispatch] = useReducer(reducer, initNotification);
  const handleClose = () => dispatch({ type: 'CLOSE' });

  return (
    <NotificationContext.Provider value={notification}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={notification.open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert severity={notification.type}>{notification.message}</Alert>
        </Snackbar>
      </NotificationDispatchContext.Provider>
    </NotificationContext.Provider>
  );
};
