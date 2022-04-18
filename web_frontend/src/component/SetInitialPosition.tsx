import React, { useContext, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import { useAdjustedOffset } from '../hooks/useAdjustedOffset';
import { ScaleContext } from './ScaleProvider';

const Container = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Corner = styled('div')`
  position: absolute;
  margin: 2px;
  height: 10vw;
  width: 10vw;
  opacity: 1;
`;

export type SetInitialPositionProps = {
  layer: number;
  open: boolean;
  onClose: () => void;
};
export const SetInitialPosition = ({
  layer,
  open,
  onClose,
}: SetInitialPositionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scale = useContext(ScaleContext);
  const [adjustedOffset] = useAdjustedOffset();
  useEffect(() => {
    if (!open) return () => () => {};
    const f = (e: TouchEvent) => {
      if ('ReactNativeWebView' in window) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            x: e.changedTouches[0].pageX / scale + adjustedOffset.x,
            y: e.changedTouches[0].pageY / scale + adjustedOffset.y,
            layer,
          })
        );
      }
      onClose();
    };
    const container = containerRef.current;
    container?.addEventListener('touchend', f);
    return () => {
      container?.removeEventListener('touchend', f);
    };
  }, [open, onClose, adjustedOffset, layer, scale]);
  return (
    <Container
      ref={containerRef}
      sx={{
        display: open ? 'inherit' : 'none',
      }}
    >
      <Corner
        sx={{
          top: 0,
          left: 0,
          borderTop: 'solid 8px #000',
          borderLeft: 'solid 8px #000',
        }}
      />
      <Corner
        sx={{
          top: 0,
          right: 0,
          borderTop: 'solid 8px #000',
          borderRight: 'solid 8px #000',
        }}
      />
      <Corner
        sx={{
          bottom: 0,
          left: 0,
          borderBottom: 'solid 8px #000',
          borderLeft: 'solid 8px #000',
        }}
      />
      <Corner
        sx={{
          bottom: 0,
          right: 0,
          borderBottom: 'solid 8px #000',
          borderRight: 'solid 8px #000',
        }}
      />
    </Container>
  );
};
