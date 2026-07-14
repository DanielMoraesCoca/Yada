/**
 * Dados centrais da marca — edite AQUI para atualizar textos e contatos
 * que aparecem em todo o site.
 */

export const marca = {
  nome: 'Yada',
  slogan: 'Arte em cerâmica',
  lema: 'Conhecer de perto',
  descricao:
    'Yada é arte profética em cerâmica, feita à mão. ' +
    'Peças que nascem de revelação — um convite a conhecer de perto.',

  instagram: 'https://www.instagram.com/yada.arte',
  instagramArroba: '@yada.arte',
  whatsapp: 'https://wa.me/5561996799111',
  email: 'yadaarte@gmail.com',
};

/** Os três pilares da marca (bio do Instagram) */
export const pilares = [
  {
    id: 'escultura',
    titulo: 'Contemplar a escultura',
    curto: 'Escultura',
    texto:
      'Peças únicas que nascem de revelação — formas para parar, olhar e reconhecer o Autor por trás da obra.',
  },
  {
    id: 'mesa',
    titulo: 'Comungar à mesa',
    curto: 'Mesa',
    texto:
      'Utilitários feitos à mão para a mesa — o lugar do encontro, do pão repartido e da comunhão.',
  },
  {
    id: 'ambiente',
    titulo: 'Habitar o ambiente',
    curto: 'Ambiente',
    texto:
      'Objetos que transformam a casa em morada — cerâmica que carrega presença para o cotidiano.',
  },
] as const;

export type PilarId = (typeof pilares)[number]['id'];

/** Itens de navegação do cabeçalho */
export const navegacao = [
  { rotulo: 'Início', caminho: '/' },
  { rotulo: 'História', caminho: '/historia/' },
  { rotulo: 'Galeria', caminho: '/galeria/' },
  { rotulo: 'Encomendas', caminho: '/encomendas/' },
  { rotulo: 'Contato', caminho: '/contato/' },
];

/**
 * Monta um link interno respeitando o `base` do site (GitHub Pages serve
 * o site em /Yada/). Use sempre: href={caminho('/galeria/')}
 */
export function caminho(rota: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${rota.startsWith('/') ? rota : `/${rota}`}`;
}
