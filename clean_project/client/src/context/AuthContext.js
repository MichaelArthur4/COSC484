import { createContext } from 'react';

export const AuthContext = createContext({
  userId: null,
  token: null,
  curUser: null,
  login: () => {},
  logout: () => {},
  getCurrentUser: () => {}
});

