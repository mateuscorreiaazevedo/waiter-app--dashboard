import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { env } from '@/config';
import type {
  HttpRequest,
  HttpResponse,
  IHttpClientService,
} from './http-protocols';

export class AxiosHttpClientService implements IHttpClientService {
  private instance: AxiosInstance;

  constructor(BASE_URL: string = env.VITE_APP_BASE_URL) {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
  }

  jwtInterceptor(token: string | null): void {
    this.instance.defaults.headers.common.Authorization = token
      ? `Bearer ${token}`
      : null;
  }

  async request<TResponse = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>> {
    const { url, method = 'GET', body, headers, params } = request;
    let axiosResponse: AxiosResponse<TResponse>;

    try {
      axiosResponse = await this.instance.request<TResponse>({
        url,
        method,
        data: body,
        headers,
        params,
      });
    } catch (err) {
      const { response } = err as AxiosError<TResponse>;
      axiosResponse = response!;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
