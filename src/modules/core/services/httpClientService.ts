import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { env } from '@/infra/config';
import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../types/HttpClient';

class HttpClientService implements HttpClient {
  private instance: AxiosInstance;

  constructor(private readonly BASE_URL: string = env.VITE_APP_BASE_URL) {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  async request<TData = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TData>> {
    const { url, method = 'GET', body, headers, params } = request;
    let response: AxiosResponse;

    try {
      response = await this.instance.request<TData>({
        url,
        method,
        data: body,
        headers,
        params,
      });
    } catch (err) {
      const error = (err as AxiosError).response;

      if (error) {
        response = error;
      } else {
        throw err;
      }
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  }
}

export const httpClientService = new HttpClientService();
