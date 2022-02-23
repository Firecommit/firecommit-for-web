import { useContext, useEffect } from 'react';
import {
  AdjustedOffset,
  AdjustedOffsetContext,
  AdjustedOffsetDispatchContext,
} from '../component/AdjustedOffsetProvider';

export const useAdjustedOffset = (
  init?: AdjustedOffset
): [AdjustedOffset, (newOffset: AdjustedOffset) => void] => {
  const offset = useContext(AdjustedOffsetContext);
  const dispatch = useContext(AdjustedOffsetDispatchContext);
  const setAdjustedOffset = (newOffset: AdjustedOffset) => {
    dispatch({
      type: 'SET_ADJUSTED_OFFSET',
      offset: newOffset,
    });
  };

  useEffect(() => {
    if (init !== undefined) {
      dispatch({
        type: 'SET_ADJUSTED_OFFSET',
        offset: init,
      });
    }
  }, [init, dispatch]);

  return [offset, setAdjustedOffset];
};
