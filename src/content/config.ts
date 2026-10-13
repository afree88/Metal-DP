import { defineCollection, z } from 'astro:content';

const produtosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    preco: z.number(),
    precoPromocional: z.number().optional().nullable(),
    unidade: z.string().default('peça'),
    categoria: z.string(),
    descricao: z.string(),
    imagem: z.string(),
    disponivel: z.boolean().default(true),
    destaque: z.boolean().default(false),
  }),
});

const configuracoesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nomeLoja: z.string().default('Metal DP'),
    slogan: z.string().default('Serralheria artística sob medida em Dom Pedro - MA. Solda MMA reforçada e pintura profissional a compressor.'),
    telefone: z.string(),
    whatsapp: z.string(),
    endereco: z.string(),
    cidadeBairro: z.string(),
    googleMapsUrl: z.string(),
    googleMapsEmbed: z.string(),
    horarioSemana: z.string(),
    horarioDomingo: z.string(),
    bannerAviso: z.string().optional().nullable(),
    bannerTitulo: z.string(),
    bannerSubtitulo: z.string(),
    // Meios de Pagamento Editáveis no Painel Admin
    aceitaPix: z.boolean().default(true),
    chavePix: z.string().default('559991756968'),
    tipoChavePix: z.string().default('Celular / WhatsApp'),
    titularPix: z.string().default('Metal DP Serralheria Artística'),
    aceitaDinheiro: z.boolean().default(true),
    obsDinheiro: z.string().default('Dinheiro à vista na entrega ou retirada'),
    aceitaCartao: z.boolean().default(false),
    obsCartao: z.string().optional().nullable().default('Cartão de Débito / Crédito'),
    aceitaBitcoinLightning: z.boolean().default(true),
    enderecoLightning: z.string().optional().nullable().default('talison@walletofsatoshi.com'),
    obsBitcoinLightning: z.string().optional().nullable().default('Pagamento instantâneo via Lightning Network (BTC)'),
  }),
});

export const collections = {
  produtos: produtosCollection,
  configuracoes: configuracoesCollection,
};
