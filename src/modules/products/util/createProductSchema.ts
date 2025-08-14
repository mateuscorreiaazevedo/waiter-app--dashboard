import z from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  description: z.string().min(3, 'Descrição deve ter pelo menos 3 caracteres'),
  price: z.string().refine(value => {
    const cleanValue = value
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '.');
    const price = Number(cleanValue);

    return price > 0;
  }, 'Preço deve ser maior que 0'),
  category: z.string().min(1, 'Categoria deve ser selecionada'),
  image: z
    .instanceof(File)
    .refine(file => file.size <= 5 * 1024 * 1024, {
      message: 'Imagem deve ter no máximo 5MB',
    })
    .refine(
      file =>
        ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
          file.type
        ),
      {
        message: 'Formato de imagem inválido. Use JPEG, PNG ou WebP',
      }
    ),
  ingredients: z.optional(
    z.array(
      z.object({
        name: z
          .string()
          .min(3, 'Nome do ingrediente deve ter pelo menos 3 caracteres'),
        icon: z.string().min(1, 'Icone do ingrediente deve ser selecionado'),
      })
    )
  ),
});
