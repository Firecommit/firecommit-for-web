import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

export type Scale = number;

const initScale = 1;

type Action =
  | {
      type: 'SET_SCALE';
      scale: number;
    }
  | {
      type: 'SET_SCALE_FUNCTION';
      scale: (scale: number) => number;
    };

const reducer = (state: Scale, action: Action): Scale => {
  switch (action.type) {
    case 'SET_SCALE':
      return action.scale;
    case 'SET_SCALE_FUNCTION':
      return action.scale(state);
    default:
      return state;
  }
};

export const ScaleContext = createContext<Scale>(initScale);
export const ScaleDispatchContext = createContext({} as Dispatch<Action>);

type Props = { children: ReactNode };
export const ScaleProvider = ({ children }: Props) => {
  const [scale, dispatch] = useReducer(reducer, initScale);

  return (
    <ScaleContext.Provider value={scale}>
      <ScaleDispatchContext.Provider value={dispatch}>
        {children}
      </ScaleDispatchContext.Provider>
    </ScaleContext.Provider>
  );
};
