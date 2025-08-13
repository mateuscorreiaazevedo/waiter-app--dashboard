export interface SocketRequest<TData = unknown> {
  event: string;
  data?: TData;
  room?: string;
}

export interface SocketResponse<TData = unknown> {
  success: boolean;
  data?: TData;
  error?: string;
}

export interface SocketError {
  message?: string;
  code?: string;
}

export interface SocketClient {
  emit<TData = unknown, TResponse = unknown>(
    request: SocketRequest<TData>
  ): Promise<SocketResponse<TResponse>>;

  on<TData = unknown>(event: string, callback: (data: TData) => void): void;

  off(event: string, callback?: (...args: unknown[]) => void): void;

  connect(): void;

  disconnect(): void;

  isConnected(): boolean;
}

export enum SocketEvents {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  ERROR = 'error',
  RECONNECT = 'reconnect',
  RECONNECT_ERROR = 'reconnect_error',
}
