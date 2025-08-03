import { type HttpResponse, HttpStatusCode } from '@/services/http';

export function httpHandlerHelper<T = unknown>(httpResponse: HttpResponse<T>) {
  const { statusCode, body } = httpResponse;

  switch (statusCode) {
    case HttpStatusCode.OK:
      return body;
    case HttpStatusCode.CREATED:
      return body;
    case HttpStatusCode.NO_CONTENT:
      return body;
    case HttpStatusCode.BAD_REQUEST:
      throw body;
    case HttpStatusCode.UNAUTHORIZED:
      throw body;
    case HttpStatusCode.FORBIDDEN:
      throw body;
    case HttpStatusCode.NOT_FOUND:
      throw body;
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      throw body;
    default:
      throw new Error('Unexpected Error');
  }
}
