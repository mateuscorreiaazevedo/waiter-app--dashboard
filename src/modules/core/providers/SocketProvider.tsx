import { type PropsWithChildren, useEffect } from 'react';
import { socketClientService } from '../services/socketClientService';

export function SocketProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    socketClientService.connect();
  }, []);

  return children;
}
