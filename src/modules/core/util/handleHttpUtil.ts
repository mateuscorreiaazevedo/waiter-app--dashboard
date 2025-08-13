import {
  type HttpError,
  type HttpResponse,
  HttpStatusCode,
} from '../types/HttpClient';

type HandleHttpResponseType<T = unknown> = HttpResponse<T & HttpError>;

export function handleHttpUtil<T = unknown>(
  response: HandleHttpResponseType<T>
): T | undefined {
  switch (response.statusCode) {
    case HttpStatusCode.OK:
      return response.data!;
    case HttpStatusCode.CREATED:
      return response.data!;
    case HttpStatusCode.NO_CONTENT:
      return;
    case HttpStatusCode.BAD_REQUEST:
      throw new Error(response.data!.message);
    case HttpStatusCode.UNAUTHORIZED:
      throw new Error(response.data!.message);
    case HttpStatusCode.FORBIDDEN:
      throw new Error(response.data!.message);
    case HttpStatusCode.NOT_FOUND:
      throw new Error(response.data!.message);
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      throw new Error(response.data!.message);
    default:
      throw new Error(response.data!.message);
  }
}
