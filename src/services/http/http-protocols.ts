export type HttpRequest<TBody = unknown> = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: TBody;
  headers?: Record<string, string>;
  params?: object;
};

export type HttpResponse<TResponse = unknown> = {
  statusCode: number;
  body: TResponse;
};

export interface IHttpClientService {
  jwtInterceptor(token: string | null): void;

  request<TResponse = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>>;
}

export const HttpStatusCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
