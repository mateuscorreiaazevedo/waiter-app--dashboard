export interface HttpRequest<TBody = unknown> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: TBody;
  headers?: Record<string, string | number>;
  params?: object;
}

export interface HttpResponse<TData = unknown> {
  statusCode: number;
  data?: TData;
}

export interface HttpError {
  message?: string;
}

export interface HttpClient {
  request<TData = unknown, TBody = unknown>(
    props: HttpRequest<TBody>
  ): Promise<HttpResponse<TData>>;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
