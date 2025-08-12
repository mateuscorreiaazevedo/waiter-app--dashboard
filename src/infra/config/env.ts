import z from 'zod';

const envConfig = z.object({
  VITE_APP_BASE_URL: z.string(),
});

export const env = envConfig.parse(import.meta.env);
