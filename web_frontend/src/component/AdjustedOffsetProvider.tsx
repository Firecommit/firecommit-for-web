import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { Point } from '../types/Point';

export type AdjustedOffset = Point;

const initAdjustedOffset: AdjustedOffset = {
  x: 0,
  y: 0,
};

type Action = {
  type: 'SET_ADJUSTED_OFFSET';
  offset: AdjustedOffset;
};

const reducer = (state: AdjustedOffset, action: Action): AdjustedOffset => {
  switch (action.type) {
    case 'SET_ADJUSTED_OFFSET':
      return action.offset;
    default:
      return state;
  }
};

export const AdjustedOffsetContext =
  createContext<AdjustedOffset>(initAdjustedOffset);
export const AdjustedOffsetDispatchContext = createContext(
  {} as Dispatch<Action>
);

type Props = { children: ReactNode };
export const AdjustedOffsetProvider = ({ children }: Props) => {
  const [adjustedOffset, dispatch] = useReducer(reducer, initAdjustedOffset);

  return (
    <AdjustedOffsetContext.Provider value={adjustedOffset}>
      <AdjustedOffsetDispatchContext.Provider value={dispatch}>
        {children}
      </AdjustedOffsetDispatchContext.Provider>
    </AdjustedOffsetContext.Provider>
  );
};
