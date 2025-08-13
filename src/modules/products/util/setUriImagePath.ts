import { env } from '../../../infra/config/env';

export function setUriImagePath(imagePath?: string) {
  return `${env.VITE_APP_BASE_URL}/uploads/${imagePath}`;
}
