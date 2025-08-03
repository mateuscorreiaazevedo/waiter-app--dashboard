import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { env } from '@/config';

export class HttpClientService implements IHttpClientService {
  private instance: AxiosInstance;

  constructor(BASE_URL: string = env.VITE_APP_BASE_URL) {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
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
      axiosResponse = (err as AxiosError).response as AxiosResponse<TResponse>;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
