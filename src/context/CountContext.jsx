import { createContext, useContext, useMemo, useReducer } from 'react';

const CountContext = createContext(null);

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const initialState = { count: 0 };

export function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}

export function useCount() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within CountProvider');
  }

  return context;
}
