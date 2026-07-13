import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleção "pecas": cada arquivo .md em src/content/pecas/ é uma peça.
 * O corpo do arquivo (abaixo do ---) é a história/revelação por trás da peça.
 */
const pecas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pecas' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      categoria: z.enum(['escultura', 'mesa', 'ambiente']),
      descricao: z.string().max(200),
      imagens: z.array(image()).min(1),
      tecnica: z.string().optional(),
      data: z.coerce.date(),
      destaque: z.boolean().default(false),
      disponivel: z.boolean().default(true),
    }),
});

export const collections = { pecas };
