import socketIo, { type Socket } from 'socket.io-client';
import { env } from '@/infra/config';
import type {
  SocketClient,
  SocketRequest,
  SocketResponse,
} from '../types/SocketClient';

class SocketClientService implements SocketClient {
  private socket: Socket;

  constructor(private readonly BASE_URL: string = env.VITE_APP_BASE_URL) {
    this.socket = socketIo(this.BASE_URL, {
      transports: ['websocket'],
      autoConnect: false,
    });
  }

  emit<TData = unknown, TResponse = unknown>(
    request: SocketRequest<TData>
  ): Promise<SocketResponse<TResponse>> {
    const { event, data, room } = request;

    return new Promise(resolve => {
      try {
        if (room) {
          this.socket.emit('join-room', room);
        }

        this.socket.emit(event, data, (response: TResponse) => {
          resolve({
            success: true,
            data: response,
          });
        });

        setTimeout(() => {
          resolve({
            success: false,
            error: 'Socket request timeout',
          });
        }, 10_000);
      } catch (error) {
        resolve({
          success: false,
          error:
            error instanceof Error ? error.message : 'Unknown socket error',
        });
      }
    });
  }

  on<TData = unknown>(event: string, callback: (data: TData) => void): void {
    this.socket.on(event, callback);
  }

  off(event: string, callback?: (...args: unknown[]) => void): void {
    if (callback) {
      this.socket.off(event, callback);
    } else {
      this.socket.off(event);
    }
  }

  connect(): void {
    if (!this.socket.connected) {
      this.socket.connect();
    }
  }

  disconnect(): void {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  }

  isConnected(): boolean {
    return this.socket.connected;
  }
}

export const socketClientService = new SocketClientService();
