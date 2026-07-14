# Yada — Site institucional

Site da **Yada**, arte profética em cerâmica feita à mão.
O site não é uma loja: apresenta a criadora, o propósito, as peças e os
canais de contato (incluindo encomendas).

Construído com [Astro](https://astro.build) — site 100% estático, rápido e
gratuito de hospedar.

## Endereço

Publicado automaticamente no GitHub Pages:
**https://danielmoraescoca.github.io/Yada/**

> **Ativação (uma única vez):** no GitHub, vá em
> **Settings → Pages → Build and deployment → Source** e escolha
> **GitHub Actions**. A partir daí, todo push na branch `main` publica o
> site sozinho.

## Como editar o conteúdo

### Textos da marca, contatos e redes sociais

Tudo em um só lugar: [`src/data/site.ts`](src/data/site.ts).
Lá estão o Instagram (@yada.arte), o WhatsApp, o e-mail, o slogan e os
três pilares.

### Adicionar uma peça à galeria

1. Coloque as fotos da peça em `src/assets/pecas/` (ex.: `minha-peca.jpg`).
2. Crie um arquivo `src/content/pecas/minha-peca.md` seguindo este modelo:

```markdown
---
titulo: 'Nome da Peça'
categoria: 'escultura' # escultura | mesa | ambiente
descricao: 'Uma frase curta sobre a peça (aparece no cartão da galeria).'
imagens:
  - '../../assets/pecas/minha-peca.jpg'
tecnica: 'Torno, esmalte acetinado' # opcional
data: 2026-07-01
destaque: true # true = aparece na página inicial
disponivel: true
---

Aqui vai a história da peça — a revelação por trás dela.
Pode ter vários parágrafos, em Markdown.
```

3. Salve, faça commit e push. Pronto — a peça entra na galeria e ganha a
   própria página em `/galeria/minha-peca/`.

### Remover ou editar uma peça

Edite ou apague o arquivo `.md` correspondente em `src/content/pecas/`.

### Textos das páginas

| Página | Arquivo |
| --- | --- |
| Início | `src/pages/index.astro` |
| História | `src/pages/historia.astro` |
| Galeria | `src/pages/galeria/index.astro` |
| Encomendas | `src/pages/encomendas.astro` |
| Contato | `src/pages/contato.astro` |

> Os trechos marcados com `[texto ilustrativo — substituir]` são
> provisórios e devem ser trocados pelos textos reais da artista. As
> imagens em `src/assets/pecas/*.svg` também são ilustrativas — substitua
> por fotos reais das peças.

### Logotipo

A marca no cabeçalho é uma recriação fiel do logotipo oficial, desenhada
em código (`src/components/Marca.astro` + `src/data/laco.ts`). Se um dia
quiser usar o arquivo vetorial original, substitua o conteúdo desse
componente. O ícone da aba do navegador é `public/favicon.svg`.

## Rodando localmente

```bash
npm install
npm run dev      # abre em http://localhost:4321/Yada
npm run build    # gera o site estático em dist/
```

## Próximos passos (quando fizer sentido)

- **Domínio próprio** (ex.: `yada.art.br`): configure em
  Settings → Pages → Custom domain, e depois ajuste `site`/`base` em
  `astro.config.mjs`.
- **URL mais limpa sem domínio**: importe este repositório na
  [Vercel](https://vercel.com) ou [Netlify](https://netlify.com)
  (gratuito) para ter algo como `yada.vercel.app` — nesse caso remova o
  `base` do `astro.config.mjs`.
