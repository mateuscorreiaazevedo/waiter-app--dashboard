declare type HttpRequest<TBody = unknown> = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: TBody;
  headers?: Record<string, string>;
  params?: object;
};

declare type HttpResponse<TResponse = unknown> = {
  statusCode: number;
  body: TResponse;
};

declare interface IHttpClientService {
  request<TResponse = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>>;
}
