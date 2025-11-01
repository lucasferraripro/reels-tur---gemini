import { Template } from './types';

export const FREE_TEMPLATES_COUNT = 6;
export const FREE_SCRIPT_GENERATIONS = 1;
export const FREE_AUDIO_GENERATIONS = 1;
export const FREE_IMAGE_EDITS = 2;
export const FREE_CAMPAIGN_GENERATIONS = 0; // New premium feature
export const PREMIUM_PRICE = "29";

export const TEMPLATES: Template[] = [
  {
    id: 1,
    title: 'Maragogi - Promo 30s',
    description: 'Abertura aérea, mergulho e CTA “Reserve já”.',
    canvaLink: 'https://www.canva.com/design/DAGhw_eHvbM/qxWP7WwLFPC7KF7NySVs4g/view?utm_content=DAGhw_eHvbM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['praia', 'promo', '30s', 'nacional'],
    isFree: true,
    imagePlaceholderQuery: 'Maragogi alagoas',
    coverImage: 'https://maragogiresorts.com.br/wp-content/uploads/2019/03/gales-maragogi.jpg',
  },
  {
    id: 2,
    title: 'Florianópolis',
    description: 'Explore as praias mágicas de Florianópolis.',
    canvaLink: 'https://www.canva.com/design/DAGhwSfDeH4/RuNAiv6jYqNO5DgZkingog/view?utm_content=DAGhwSfDeH4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['praia', 'ilha', 'sul', 'nacional'],
    isFree: true,
    imagePlaceholderQuery: 'florianopolis brazil',
    coverImage: 'https://cdn.myside.com.br/base/ea5/0fb/37f/beira-mar-florianopolis.jpg',
  },
  {
    id: 3,
    title: 'Natal - Sol e Mar',
    description: 'Dunas, praias e a cultura vibrante de Natal.',
    canvaLink: 'https://www.canva.com/design/DAGhwzeB__g/tzzeNJVuhZ69H9bzdqjyAA/view?utm_content=DAGhwzeB__g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['praia', 'nordeste', 'dunas', 'nacional'],
    isFree: true,
    imagePlaceholderQuery: 'natal rio grande do norte',
    coverImage: 'https://imagedelivery.net/EafvxYlk8cSUsWEWsetEdQ/92bfbe5f-f971-4d1c-0ce4-688ed8a56300/public',
  },
  {
    id: 4,
    title: 'Destinos Feriados',
    description: 'Template versátil para qualquer feriado.',
    canvaLink: 'https://www.canva.com/design/DAG2e15f7q4/CwiKH8s1RN4IZDbZvYMsGg/view?utm_content=DAG2e11f7q4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'promo', 'versátil'],
    isFree: true,
    imagePlaceholderQuery: 'viagem feriado',
    coverImage: 'https://reveillon.rio/wp-content/uploads/2025/01/Reveillon-2025-Palco-Copacabana-Samba-Foto-Gabriel-Monteiro-Riotur.jpg',
  },
  {
    id: 5,
    title: 'Fernando de Noronha',
    description: 'O paraíso brasileiro em um vídeo incrível.',
    canvaLink: 'https://www.canva.com/design/DAGgHZ-fCuI/RFrxKhGE6O92snzhuuv0BA/view?utm_content=DAGgHZ-fCuI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['ilha', 'luxo', 'natureza', 'nacional'],
    isFree: true,
    imagePlaceholderQuery: 'fernando de noronha',
    coverImage: 'https://www.rodamundo.tur.br/blog/wp-content/uploads/2019/03/Ba%C3%ADa-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg',
  },
  {
    id: 6,
    title: 'Rio de Janeiro',
    description: 'As maravilhas da cidade maravilhosa.',
    canvaLink: 'https://www.canva.com/design/DAGhx_YRl4E/KkH3YyyjWUbaHasgdbRhnw/view?utm_content=DAGhx_YRl4E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['cidade', 'sudeste', 'praia', 'nacional'],
    isFree: true,
    imagePlaceholderQuery: 'rio de janeiro cristo redentor',
    coverImage: 'https://www.orlario.com.br/wp-content/uploads/2020/10/Turismo-no-Rio-scaled.jpg',
  },
  {
    id: 7,
    title: 'Fortaleza - CE',
    description: 'Sol, praia e muita diversão em Fortaleza.',
    canvaLink: 'https://www.canva.com/design/DAGhx2zhYTo/TP_AUJzDtnYgSNnPH1pBQQ/view?utm_content=DAGhx2zhYTo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nordeste', 'praia', 'cultura', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'praia de iracema fortaleza',
    coverImage: 'https://turismo.b-cdn.net/wp-content/uploads/2013/01/Fortaleza-a-capital-do-Ceara.webp',
  },
  {
    id: 8,
    title: 'Paris - França',
    description: 'Viva o romance na cidade luz.',
    canvaLink: 'https://www.canva.com/design/DAGgIVn4s4Q/6CSoVcYM3EqimBownlS3Bw/view?utm_content=DAGgIVn4s4Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['europa', 'romance', 'cidade', 'internacional'],
    isFree: false,
    imagePlaceholderQuery: 'paris eiffel tower',
    coverImage: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg',
  },
  {
    id: 9,
    title: 'Chapada Diamantina',
    description: 'Aventura e natureza exuberante.',
    canvaLink: '#',
    tags: ['nacional', 'trilha', 'aventura', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'chapada diamantina',
    coverImage: 'https://www.adventureclub.com.br/wp-content/uploads/2023/03/poco-azul-chapada-diamantina-topo-80.jpg',
  },
  {
    id: 10,
    title: 'Jalapão - Tocantins',
    description: 'Descubra o deserto das águas.',
    canvaLink: 'https://www.canva.com/design/DAGhwEYMGGc/UG3YbQaMWIPKSpohnITB1w/view?utm_content=DAGhwEYMGGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'ecoturismo', 'deserto', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'jalapao tocantins',
    coverImage: 'https://s2-g1.glbimg.com/ufPlSwFbPKXRRruEV7Wg0MM7ILQ=/1200x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/P/B/RiAohARXKqEnFRLclCCw/whatsapp-image-2023-11-27-at-17.15.55-1-.jpeg',
  },
  {
    id: 11,
    title: 'Nova York - EUA',
    description: 'A cidade que nunca dorme.',
    canvaLink: 'https://www.canva.com/design/DAGgIBHfJ2U/qla_d-c4Ka9R9mknJp9-Qw/view?utm_content=DAGgIBHfJ2U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'cidade', 'eua'],
    isFree: false,
    imagePlaceholderQuery: 'new york city',
    coverImage: 'https://www.segueviagem.com.br/wp-content/uploads/2021/12/Estados-Unidos-Nova-York-shutterstock_248799484.jpg',
  },
   {
    id: 12,
    title: 'Tóquio - Japão',
    description: 'Tradição e modernidade em um só lugar.',
    canvaLink: 'https://www.canva.com/design/DAGgIBc0onY/x4vLLY939_RdIrA4XICf5w/view?utm_content=DAGgIBc0onY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['asia', 'cultura', 'cidade', 'internacional'],
    isFree: false,
    imagePlaceholderQuery: 'tokyo japan',
  },
  {
    id: 13,
    title: 'Roma - Itália',
    description: 'História e gastronomia em cada esquina.',
    canvaLink: 'https://www.canva.com/design/DAGgIU7GrTM/gd3BcmnPgPeSzfxEpgqH3w/view?utm_content=DAGgIU7GrTM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['europa', 'historia', 'italia', 'internacional'],
    isFree: false,
    imagePlaceholderQuery: 'rome colosseum',
  },
  {
    id: 99,
    title: "Influencers (Eva, Mel & Bia)",
    description: "Vídeos com influencers para dar mais credibilidade às suas ofertas. Conteúdo exclusivo.",
    canvaLink: "#",
    tags: ['influencers', 'media-pack', 'exclusivo'],
    isFree: false,
    imagePlaceholderQuery: 'influencers',
    coverImage: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Iyd2V2Y2ppNTJoN29ibm1md3NnazVhenhjemVueGIwcTE3MjIxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyTAPOqOtouwEsQNZN/giphy.gif'
  },
  {
    id: 98,
    title: "Stories Criativos",
    description: "Templates de stories criativos e editáveis para engajar sua audiência diariamente.",
    canvaLink: "#",
    tags: ['stories', 'templates', 'editáveis', 'media-pack'],
    isFree: false,
    imagePlaceholderQuery: 'stories',
    coverImage: 'https://static-media.hotmart.com/DzhNS7m-XIvpdLFAn11wIwNxE3Y=/300x300/filters:quality(100)/hotmart/product_pictures/a333319c-7320-4c97-aab7-b54fcacabca3/VIDEOSPRONTOSPARAAGENCIASDEVIAGENS1080x1080px1.png'
  },
  {
    id: 97,
    title: "Artes Prontas",
    description: "Artes prontas para feed, carrossel e conteúdos interativos. Diários criativos para engajamento.",
    canvaLink: "#",
    tags: ['artes', 'feed', 'carrossel', 'media-pack'],
    isFree: false,
    imagePlaceholderQuery: 'artes',
    coverImage: 'https://static-media.hotmart.com/k0fKFjy7m3Y5pngKgNeKewD1ewI=/300x300/filters:quality(100)/hotmart/product_pictures/fb588bc3-3be9-4f3d-8f0f-c2129a7a16a6/VIDEOSPRONTOSPARAAGENCIASDEVIAGENS1080x1080px2.png'
  },
  // NEW TEMPLATES START HERE
  {
    id: 100,
    title: '1ª vez no aeroporto',
    description: 'Dicas essenciais para sua primeira viagem de avião.',
    canvaLink: 'https://www.canva.com/design/DAGkwz6Stn8/5DPMi1DhNpaXJI-J3NKGxw/view?utm_content=DAGkwz6Stn8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'aeroporto', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'first time at airport'
  },
  {
    id: 101,
    title: '5 motivos stopover',
    description: 'Descubra as vantagens de fazer um stopover em suas viagens.',
    canvaLink: 'https://www.canva.com/design/DAGgIR03ya4/uIilbTx2KqhMAcvum1zJhA/view?utm_content=DAGgIR03ya4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'stopover', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'travel stopover'
  },
  {
    id: 102,
    title: 'Bagagem de mãos',
    description: 'O que levar na sua bagagem de mão para uma viagem tranquila.',
    canvaLink: 'https://www.canva.com/design/DAGiIypPPKM/ekpIHP0DECKGnpD8Ab7yfw/view?utm_content=DAGiIypPPKM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'bagagem', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'carry on luggage'
  },
  {
    id: 103,
    title: 'Colômbia',
    description: 'Explore a cultura vibrante e as paisagens da Colômbia.',
    canvaLink: 'https://www.canva.com/design/DAGgIc5rv80/gVw4XEdLKrZwSdcz1yXHug/view?utm_content=DAGgIc5rv80&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'colombia', 'america do sul'],
    isFree: false,
    imagePlaceholderQuery: 'colombia travel'
  },
  {
    id: 104,
    title: 'Destinos Europa',
    description: 'Um tour pelos destinos mais incríveis da Europa.',
    canvaLink: 'https://www.canva.com/design/DAGgIUG7euo/Js89o2jxqADTtUSWygOcXQ/view?utm_content=DAGgIUG7euo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'europe destinations'
  },
  {
    id: 105,
    title: 'Erros Aeroporto',
    description: 'Evite esses erros comuns no aeroporto e viaje sem estresse.',
    canvaLink: 'https://www.canva.com/design/DAGh7kfQjS0/hCb2QaCmX653zGW3vXxsXQ/view?utm_content=DAGh7kfQjS0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'aeroporto', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'airport mistakes'
  },
  {
    id: 106,
    title: 'Eu sei que...',
    description: 'Um vídeo inspirador para despertar o desejo de viajar.',
    canvaLink: 'https://www.canva.com/design/DAGgIQOdvZg/1LxyXTMTADzvAoVI2dTXUQ/view?utm_content=DAGgIQOdvZg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['inspiracional', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'travel inspiration'
  },
  {
    id: 107,
    title: 'Green Island',
    description: 'Descubra o paraíso natural de Green Island.',
    canvaLink: 'https://www.canva.com/design/DAGgIbjdtE0/eYVe9FWc-0ZHcOYKLnsi8w/view?utm_content=DAGgIbjdtE0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'ilha', 'natureza'],
    isFree: false,
    imagePlaceholderQuery: 'green island'
  },
  {
    id: 108,
    title: 'Itália',
    description: 'A culinária, a história e a beleza da Itália em um só lugar.',
    canvaLink: 'https://www.canva.com/design/DAGgIYNbZUY/eqdtdLIqCxdg_LcMsx_Kiw/view?utm_content=DAGgIYNbZUY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'italia'],
    isFree: false,
    imagePlaceholderQuery: 'italy travel'
  },
  {
    id: 109,
    title: 'Itens Proibidos na Viagem',
    description: 'Saiba o que não levar na mala para evitar problemas.',
    canvaLink: 'https://www.canva.com/design/DAGiH3WGzjI/3zoZqBG1jNnHUuyIqka2Tg/view?utm_content=DAGiH3WGzjI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'bagagem', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'prohibited items travel'
  },
  {
    id: 110,
    title: 'Lugares para conhecer',
    description: 'Inspire-se com alguns dos lugares mais incríveis do mundo.',
    canvaLink: 'https://www.canva.com/design/DAGgIVPtLog/cIOBFuXjIwlyjMqFCkZmxg/view?utm_content=DAGgIVPtLog&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['inspiracional', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'places to visit'
  },
  {
    id: 111,
    title: 'Passeios vale a pena?',
    description: 'Descubra se vale a pena incluir passeios extras no seu roteiro.',
    canvaLink: 'https://www.canva.com/design/DAGkxBw6Vsk/oXeUFCy0U8zvvCxZeIYdQQ/view?utm_content=DAGkxBw6Vsk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['dicas', 'planejamento', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'travel tours'
  },
  {
    id: 112,
    title: 'Resort All inclusive',
    description: 'As vantagens e maravilhas de se hospedar em um resort all inclusive.',
    canvaLink: 'https://www.canva.com/design/DAGgITNYaS4/RMeuZ_9Sg776J6t7WpCfiw/view?utm_content=DAGgITNYaS4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['resort', 'luxo', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'all inclusive resort'
  },
  {
    id: 113,
    title: 'Tipos de viajantes',
    description: 'Qual tipo de viajante é você? Um vídeo divertido para engajar.',
    canvaLink: 'https://www.canva.com/design/DAGiH0U9WOk/qIKJKOYtQr-FJPyq0Bu-Vw/view?utm_content=DAGiH0U9WOk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['engajamento', 'extras'],
    isFree: false,
    imagePlaceholderQuery: 'types of travelers'
  },
  {
    id: 114,
    title: 'Vale Sagrado',
    description: 'Explore a magia e a história do Vale Sagrado dos Incas.',
    canvaLink: 'https://www.canva.com/design/DAGgIaWq6JM/w5oMJAcSAnbT-IdIr4RHhg/view?utm_content=DAGgIaWq6JM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'peru', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'sacred valley peru'
  },
  {
    id: 115,
    title: 'Veneza',
    description: 'Navegue pelos canais e se encante com a beleza de Veneza.',
    canvaLink: 'https://www.canva.com/design/DAGgIb2XeXY/7fKgFr7W8fFjrsIYVscUsw/view?utm_content=DAGgIb2XeXY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'italia'],
    isFree: false,
    imagePlaceholderQuery: 'venice italy'
  },
  {
    id: 116,
    title: 'Gramado',
    description: 'O charme da serra gaúcha em um vídeo encantador.',
    canvaLink: 'https://www.canva.com/design/DAGhwMD4p38/n5PE59SkUst9g6gz9r8TGA/view?utm_content=DAGhwMD4p38&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'serra', 'sul'],
    isFree: false,
    imagePlaceholderQuery: 'gramado rio grande do sul'
  },
  {
    id: 117,
    title: 'João Pessoa',
    description: 'Descubra as belezas e a tranquilidade de João Pessoa.',
    canvaLink: 'https://www.canva.com/design/DAGhwZzplL0/fEvo_iUeyHONkXVHzfYWJA/view?utm_content=DAGhwZzplL0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'joao pessoa paraiba'
  },
  {
    id: 118,
    title: 'Maceió - AL',
    description: 'As praias paradisíacas de Maceió esperam por você.',
    canvaLink: 'https://www.canva.com/design/DAGhwnD60oU/drXQPfEBddupMAG1nRFLFw/view?utm_content=DAGhwnD60oU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'maceio alagoas'
  },
  {
    id: 119,
    title: 'Pantanal',
    description: 'Aventura e vida selvagem no coração do Brasil.',
    canvaLink: 'https://www.canva.com/design/DAGhwGGAzDo/k-esCqBx31QG2ZoilCXc_w/view?utm_content=DAGhwGGAzDo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'natureza', 'aventura'],
    isFree: false,
    imagePlaceholderQuery: 'pantanal brazil'
  },
  {
    id: 120,
    title: 'Rota das Emoções',
    description: 'Uma jornada inesquecível pela Rota das Emoções.',
    canvaLink: 'https://www.canva.com/design/DAGhweeLbpA/vjpvI0SswmRQO9eMVodzPw/view?utm_content=DAGhweeLbpA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'aventura'],
    isFree: false,
    imagePlaceholderQuery: 'rota das emoções'
  },
  {
    id: 121,
    title: 'Seychelles',
    description: 'O paraíso tropical de Seychelles em um vídeo deslumbrante.',
    canvaLink: 'https://www.canva.com/design/DAGgIZTaKmY/p_oJQNqw2lzTi9Iwsn8j2A/view?utm_content=DAGgIZTaKmY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'ilha', 'luxo'],
    isFree: false,
    imagePlaceholderQuery: 'seychelles islands'
  },
  {
    id: 122,
    title: 'Talin Estônia',
    description: 'Descubra o charme medieval de Talin, na Estônia.',
    canvaLink: 'https://www.canva.com/design/DAGgIcMi9Cw/iMTL2rcrMkidPTfF26_wvA/view?utm_content=DAGgIcMi9Cw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'tallinn estonia'
  },
  {
    id: 123,
    title: 'Tailândia',
    description: 'Templos, praias e uma cultura fascinante na Tailândia.',
    canvaLink: 'https://www.canva.com/design/DAGgIW08oec/20D9OkJgnfUwUPf7HY5zdw/view?utm_content=DAGgIW08oec&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'cultura'],
    isFree: false,
    imagePlaceholderQuery: 'thailand travel'
  },
  {
    id: 124,
    title: 'Bia (Black Friday)',
    description: 'A influencer Bia traz as melhores ofertas da Black Friday.',
    canvaLink: 'https://www.canva.com/design/DAG2Tvngdhs/My6C92vRgzpf_z4ibppq5Q/view?utm_content=DAG2Tvngdhs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'influencer black friday'
  },
  {
    id: 125,
    title: 'Bia (Carnaval Salvador)',
    description: 'Caia na folia com a Bia no carnaval de Salvador.',
    canvaLink: 'https://www.canva.com/design/DAG2dvQ0Yz8/ihxicpkJls4fNaU7LY4n7g/view?utm_content=DAG2dvQ0Yz8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'carnaval salvador'
  },
  {
    id: 126,
    title: 'Bia (Destino dos sonhos)',
    description: 'Bia te leva para o destino dos seus sonhos.',
    canvaLink: 'https://www.canva.com/design/DAG2ShXwTgQ/TykqR0LrPfrflxz-arMk2A/view?utm_content=DAG2ShXwTgQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'inspiracional'],
    isFree: false,
    imagePlaceholderQuery: 'dream destination'
  },
  {
    id: 127,
    title: 'Bia (Natal em família)',
    description: 'Celebre o Natal em família com as dicas da Bia.',
    canvaLink: 'https://www.canva.com/design/DAG2esOrpvA/dXYNi37HEi9FT98QlBWGrQ/view?utm_content=DAG2esOrpvA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'natal'],
    isFree: false,
    imagePlaceholderQuery: 'christmas with family'
  },
  {
    id: 128,
    title: 'Bia (Pacote Completo)',
    description: 'Bia apresenta um pacote de viagem completo e imperdível.',
    canvaLink: 'https://www.canva.com/design/DAG2bL4Y8hQ/9i5oG8w_x6xY2b8hL4Y8hQ/view?utm_content=DAG2bL4Y8hQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'complete travel package'
  },
  {
    id: 129,
    title: 'Bia (Presente Natal)',
    description: 'Dê uma viagem de presente neste Natal com a Bia.',
    canvaLink: 'https://www.canva.com/design/DAG2LaxD0w4/sfuP-w_Lqeo2hIn7NhT_6Q/view?utm_content=DAG2LaxD0w4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'natal'],
    isFree: false,
    imagePlaceholderQuery: 'christmas travel gift'
  },
  {
    id: 130,
    title: 'Bia (Réveillon Rio)',
    description: 'Passe o réveillon no Rio de Janeiro com a Bia.',
    canvaLink: 'https://www.canva.com/design/DAG2esOrpvA/dXYNi37HEi9FT98QlBWGrQ/view?utm_content=DAG2esOrpvA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'reveillon rio de janeiro'
  },
  {
    id: 131,
    title: 'Bia Black Friday 2',
    description: 'Mais ofertas de Black Friday com a influencer Bia.',
    canvaLink: 'https://www.canva.com/design/DAG2fD0RJF4/cFRDjOLIAPSHOM-C88saTw/view?utm_content=DAG2fD0RJF4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'influencer black friday sale'
  },
  {
    id: 132,
    title: 'Black Friday 35% Off',
    description: 'Aproveite 35% de desconto na nossa Black Friday.',
    canvaLink: 'https://www.canva.com/design/DAG2ewQXkWs/ytL5S0yd5-feIUfWmn9SjA/view?utm_content=DAG2ewQXkWs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'black friday 35 off'
  },
  {
    id: 133,
    title: 'Carnaval Nordeste',
    description: 'Pule o carnaval no melhor do Nordeste.',
    canvaLink: 'https://www.canva.com/design/DAG2NTVWbtU/G1B3M23OhAgpJWIszRqdHw/view?utm_content=DAG2NTVWbtU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'nacional', 'carnaval'],
    isFree: false,
    imagePlaceholderQuery: 'carnaval nordeste'
  },
  {
    id: 134,
    title: 'Celebre o Natal',
    description: 'Um template especial para celebrar a magia do Natal.',
    canvaLink: 'https://www.canva.com/design/DAG2LkHZ4Sk/_yTOsI7028OobGeEPyDGDA/view?utm_content=DAG2LkHZ4Sk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'natal'],
    isFree: false,
    imagePlaceholderQuery: 'celebrate christmas'
  },
  {
    id: 135,
    title: 'Eva - Black Friday',
    description: 'A influencer Eva com as melhores promoções de Black Friday.',
    canvaLink: 'https://www.canva.com/design/DAG2fJqDKbI/FT7f4rvEJEpfQI7WT1E46Q/view?utm_content=DAG2fJqDKbI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'influencer eva black friday'
  },
  {
    id: 136,
    title: 'Eva - Destinos Feriados',
    description: 'Eva mostra os melhores destinos para os feriados.',
    canvaLink: 'https://www.canva.com/design/DAG2e15f7q4/CwiKH8s1RN4IZDbZvYMsGg/view?utm_content=DAG2e15f7q4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'holiday destinations'
  },
  {
    id: 137,
    title: 'Eva - Feriados Viagens',
    description: 'Viaje nos feriados com as dicas da Eva.',
    canvaLink: 'https://www.canva.com/design/DAG2fJqDKbI/FT7f4rvEJEpfQI7WT1E46Q/view?utm_content=DAG2fJqDKbI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'holiday travel'
  },
  {
    id: 138,
    title: 'Frase de Natal',
    description: 'Uma mensagem especial de Natal para seus seguidores.',
    canvaLink: 'https://www.canva.com/design/DAG2MP7UnZ8/B3FaakS8WlmUjEVdhGvBhw/view?utm_content=DAG2MP7UnZ8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'natal', 'inspiracional'],
    isFree: false,
    imagePlaceholderQuery: 'christmas quote'
  },
  {
    id: 139,
    title: 'Frase Réveillon',
    description: 'Uma mensagem de otimismo para o Ano Novo.',
    canvaLink: 'https://www.canva.com/design/DAG2MUhlXWc/kBvjZrgkKpeZLDoaipjxjw/view?utm_content=DAG2MUhlXWc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'reveillon', 'inspiracional'],
    isFree: false,
    imagePlaceholderQuery: 'new year quote'
  },
  {
    id: 140,
    title: 'Mel (Black Friday)',
    description: 'A influencer Mel apresenta ofertas imperdíveis de Black Friday.',
    canvaLink: 'https://www.canva.com/design/DAG2bL4Y8hQ/9i5oG8w_x6xY2b8hL4Y8hQ/view?utm_content=DAG2bL4Y8hQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'promo'],
    isFree: false,
    imagePlaceholderQuery: 'influencer mel black friday'
  },
  {
    id: 141,
    title: 'Mel (Destinos Feriados)',
    description: 'Descubra destinos para o feriado com a Mel.',
    canvaLink: 'https://www.canva.com/design/DAG2e15f7q4/CwiKH8s1RN4IZDbZvYMsGg/view?utm_content=DAG2e15f7q4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'holiday destinations influencer'
  },
  {
    id: 142,
    title: 'Mel (Semana Santa)',
    description: 'Aproveite a Semana Santa com as sugestões da Mel.',
    canvaLink: 'https://www.canva.com/design/DAG2bL4Y8hQ/9i5oG8w_x6xY2b8hL4Y8hQ/view?utm_content=DAG2bL4Y8hQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'easter holiday travel'
  },
  {
    id: 143,
    title: 'Mel - Black Friday Europa',
    description: 'Mel traz ofertas de Black Friday para a Europa.',
    canvaLink: 'https://www.canva.com/design/DAG2bL4Y8hQ/9i5oG8w_x6xY2b8hL4Y8hQ/view?utm_content=DAG2bL4Y8hQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado', 'internacional'],
    isFree: false,
    imagePlaceholderQuery: 'black friday europe'
  },
  {
    id: 144,
    title: 'Mel - Feriado Páscoa',
    description: 'Curta o feriado de Páscoa com as dicas da Mel.',
    canvaLink: 'https://www.canva.com/design/DAG2ezMKhPE/l7CGJgr73Nb_sPiQ7SGvTw/view?utm_content=DAG2ezMKhPE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'easter holiday'
  },
  {
    id: 145,
    title: 'Mel - Viagens Feriados',
    description: 'A influencer Mel te ajuda a planejar sua viagem de feriado.',
    canvaLink: 'https://www.canva.com/design/DAG2ewQXkWs/ytL5S0yd5-feIUfWmn9SjA/view?utm_content=DAG2ewQXkWs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['influencers', 'feriado'],
    isFree: false,
    imagePlaceholderQuery: 'holiday travel deals'
  },
  {
    id: 146,
    title: 'Natal dos Sonhos',
    description: 'Realize a viagem de Natal dos seus sonhos.',
    canvaLink: 'https://www.canva.com/design/DAG2LnOTuIA/6CltNCXcbKnxlObEPzB0eg/view?utm_content=DAG2LnOTuIA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'natal'],
    isFree: false,
    imagePlaceholderQuery: 'dream christmas'
  },
  {
    id: 147,
    title: 'Natal Gramado',
    description: 'Viva a magia do Natal Luz em Gramado.',
    canvaLink: 'https://www.canva.com/design/DAG2N5iiD_g/qSqV4BXxZNT629GfErS42A/view?utm_content=DAG2N5iiD_g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'natal', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'natal luz gramado'
  },
  {
    id: 148,
    title: 'Páscoa Relaxante',
    description: 'Um feriado de Páscoa para relaxar e recarregar as energias.',
    canvaLink: 'https://www.canva.com/design/DAG2N7dTofI/wJapsS0wfFGkYAVzUSm6hA/view?utm_content=DAG2N7dTofI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'pascoa'],
    isFree: false,
    imagePlaceholderQuery: 'relaxing easter'
  },
  {
    id: 149,
    title: 'Réveillon Nacional',
    description: 'As melhores opções para passar o réveillon no Brasil.',
    canvaLink: 'https://www.canva.com/design/DAG2M7BqCnk/YXHk02BfhrC5HyjO04Ji0w/view?utm_content=DAG2M7BqCnk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'reveillon', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'reveillon brasil'
  },
  {
    id: 150,
    title: 'Réveillon Rio',
    description: 'A virada de ano mais famosa do mundo, no Rio de Janeiro.',
    canvaLink: 'https://www.canva.com/design/DAG2N67Bnf0/k79e-9a0IrLHB5OHKo9JWw/view?utm_content=DAG2N67Bnf0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'reveillon', 'nacional'],
    isFree: false,
    imagePlaceholderQuery: 'reveillon rio'
  },
  {
    id: 151,
    title: 'Réveillon Viagem',
    description: 'Comece o ano novo viajando para um lugar incrível.',
    canvaLink: 'https://www.canva.com/design/DAG2L3wN6BE/NVmirH2Ki59fgKEWBf0t3Q/view?utm_content=DAG2L3wN6BE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['feriado', 'reveillon'],
    isFree: false,
    imagePlaceholderQuery: 'new year travel'
  },
  {
    id: 152,
    title: 'África',
    description: 'Explore a diversidade e a beleza do continente africano.',
    canvaLink: 'https://www.canva.com/design/DAGgIEMmR_M/9f-k7CtYZlHsTYhCHkg/view?utm_content=DAGgIEMmR_M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'africa', 'safari'],
    isFree: false,
    imagePlaceholderQuery: 'africa safari'
  },
  {
    id: 153,
    title: 'Aruba',
    description: 'Relaxe nas praias de areia branca e mar azul de Aruba.',
    canvaLink: 'https://www.canva.com/design/DAGgIFd9l88/54j3J9Q23L8z0P4f-p_j1Q/view?utm_content=DAGgIFd9l88&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'caribe', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'aruba beach'
  },
  {
    id: 154,
    title: 'Bariloche',
    description: 'Neve, chocolate e paisagens deslumbrantes em Bariloche.',
    canvaLink: 'https://www.canva.com/design/DAGgICGduVA/AE_OxvSOWEEtHfPOD_4AWA/view?utm_content=DAGgICGduVA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'neve', 'argentina'],
    isFree: false,
    imagePlaceholderQuery: 'bariloche argentina'
  },
  {
    id: 155,
    title: 'Boston',
    description: 'Descubra a história e o charme de Boston.',
    canvaLink: 'https://www.canva.com/design/DAGgIGMu4RE/Tnp3KV3JhHKDaxuoPwunBQ/view?utm_content=DAGgIGMu4RE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'boston usa'
  },
  {
    id: 156,
    title: 'Bruxelas',
    description: 'Explore a capital da Bélgica, com sua arquitetura e chocolates.',
    canvaLink: 'https://www.canva.com/design/DAGgIHM3a8A/8sTBGWxCgx5a_V33JtFu_A/view?utm_content=DAGgIHM3a8A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'belgica'],
    isFree: false,
    imagePlaceholderQuery: 'brussels belgium'
  },
  {
    id: 157,
    title: 'Budapeste',
    description: 'A pérola do Danúbio: conheça a bela Budapeste.',
    canvaLink: 'https://www.canva.com/design/DAGkxkJV9sU/D72AYyJxa27ztlbkzrRHzg/view?utm_content=DAGkxkJV9sU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'hungria'],
    isFree: false,
    imagePlaceholderQuery: 'budapest hungary'
  },
  {
    id: 158,
    title: 'Cancún',
    description: 'Festas, praias e muita diversão em Cancún, no México.',
    canvaLink: 'https://www.canva.com/design/DAGleD4ewV0/h6k2V1slWWhWMjBOb6RqvA/view?utm_content=DAGleD4ewV0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'mexico', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'cancun mexico'
  },
  {
    id: 159,
    title: 'Capadócia',
    description: 'Voe de balão sobre as paisagens únicas da Capadócia.',
    canvaLink: 'https://www.canva.com/design/DAGgIMYGeUo/hNOn3acstET00eZMSZevCQ/view?utm_content=DAGgIMYGeUo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'turquia', 'balao'],
    isFree: false,
    imagePlaceholderQuery: 'cappadocia turkey'
  },
  {
    id: 160,
    title: 'Chicago',
    description: 'A arquitetura e a vida cultural de Chicago.',
    canvaLink: 'https://www.canva.com/design/DAGgIEv81n8/16sFv3o7t2n_95k022u8_A/view?utm_content=DAGgIEv81n8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'chicago usa'
  },
  {
    id: 161,
    title: 'Cozumel',
    description: 'Mergulhe nas águas cristalinas de Cozumel.',
    canvaLink: 'https://www.canva.com/design/DAGgIGpU45c/L2mK-u75F_cQ_i-q1R2D6w/view?utm_content=DAGgIGpU45c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'mexico', 'mergulho'],
    isFree: false,
    imagePlaceholderQuery: 'cozumel mexico'
  },
  {
    id: 162,
    title: 'Cusco',
    description: 'A porta de entrada para a cultura Inca e Machu Picchu.',
    canvaLink: 'https://www.canva.com/design/DAGgIH1_gY8/11l8w_5g_5v_7y_7x_8o_A/view?utm_content=DAGgIH1_gY8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'peru', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'cusco peru'
  },
  {
    id: 163,
    title: 'DISNEY',
    description: 'A magia da Disney espera por você em Orlando.',
    canvaLink: 'https://www.canva.com/design/DAG2LCX13mE/xUzLv91eUXUH_vWak40iaA/view?utm_content=DAG2LCX13mE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'disney'],
    isFree: false,
    imagePlaceholderQuery: 'disney orlando'
  },
  {
    id: 164,
    title: 'Dublin',
    description: 'Pubs, história e a hospitalidade irlandesa em Dublin.',
    canvaLink: 'https://www.canva.com/design/DAGgIAhaqtE/12aTG-FlJoUZgKv6eYjfYQ/view?utm_content=DAGgIAhaqtE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'irlanda'],
    isFree: false,
    imagePlaceholderQuery: 'dublin ireland'
  },
  {
    id: 165,
    title: 'Egito',
    description: 'Viaje no tempo e descubra os mistérios do Egito Antigo.',
    canvaLink: 'https://www.canva.com/design/DAGgIH1_gY8/11l8w_5g_5v_7y_7x_8o_A/view?utm_content=DAGgIH1_gY8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'egito', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'egypt pyramids'
  },
  {
    id: 166,
    title: 'Filipinas',
    description: 'Explore as ilhas e praias paradisíacas das Filipinas.',
    canvaLink: 'https://www.canva.com/design/DAGgIE0GMEg/nMMdOVIYmO1IUpw4vOLmQg/view?utm_content=DAGgIE0GMEg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'philippines islands'
  },
  {
    id: 167,
    title: 'Fort Lauderdale',
    description: 'Os canais e praias de Fort Lauderdale, a "Veneza da América".',
    canvaLink: 'https://www.canva.com/design/DAGgIAhaqtE/12aTG-FlJoUZgKv6eYjfYQ/view?utm_content=DAGgIAhaqtE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'fort lauderdale florida'
  },
  {
    id: 168,
    title: 'Grécia',
    description: 'As ilhas, a história e a beleza incomparável da Grécia.',
    canvaLink: 'https://www.canva.com/design/DAGgIGpU45c/L2mK-u75F_cQ_i-q1R2D6w/view?utm_content=DAGgIGpU45c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'grecia'],
    isFree: false,
    imagePlaceholderQuery: 'greece santorini'
  },
  {
    id: 169,
    title: 'Israel',
    description: 'Uma jornada de fé e história pela Terra Santa.',
    canvaLink: 'https://www.canva.com/design/DAGgIEv81n8/16sFv3o7t2n_95k022u8_A/view?utm_content=DAGgIEv81n8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'israel', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'israel jerusalem'
  },
  {
    id: 170,
    title: 'Jordânia',
    description: 'Descubra a cidade perdida de Petra e as maravilhas da Jordânia.',
    canvaLink: 'https://www.canva.com/design/DAGgIFd9l88/54j3J9Q23L8z0P4f-p_j1Q/view?utm_content=DAGgIFd9l88&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'jordania', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'jordan petra'
  },
  {
    id: 171,
    title: 'Lima',
    description: 'A capital gastronômica da América Latina espera por você.',
    canvaLink: 'https://www.canva.com/design/DAGgIABwarE/NZnn5WxJGQOvbzt2lS70KA/view?utm_content=DAGgIABwarE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'peru', 'gastronomia'],
    isFree: false,
    imagePlaceholderQuery: 'lima peru'
  },
  {
    id: 172,
    title: 'Machu Picchu',
    description: 'A energia e a beleza da cidade perdida dos Incas.',
    canvaLink: 'https://www.canva.com/design/DAGgIFd9l88/54j3J9Q23L8z0P4f-p_j1Q/view?utm_content=DAGgIFd9l88&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'peru', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'machu picchu'
  },
  {
    id: 173,
    title: 'Maldivas',
    description: 'Luxo e romance nos bangalôs sobre as águas das Maldivas.',
    canvaLink: 'https://www.canva.com/design/DAGgIDyBNgg/iqZtppBAHjRERXni8aH7Uw/view?utm_content=DAGgIDyBNgg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'maldivas', 'luxo'],
    isFree: false,
    imagePlaceholderQuery: 'maldives bungalow'
  },
  {
    id: 174,
    title: 'Montevidéu',
    description: 'O charme e a tranquilidade da capital uruguaia.',
    canvaLink: 'https://www.canva.com/design/DAGgIEv81n8/16sFv3o7t2n_95k022u8_A/view?utm_content=DAGgIEv81n8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'uruguai', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'montevideo uruguay'
  },
  {
    id: 175,
    title: 'Namíbia',
    description: 'As paisagens desérticas e a vida selvagem da Namíbia.',
    canvaLink: 'https://www.canva.com/design/DAGkxaKBTk8/vnaegHxIpjNZhs7iXhEyQA/view?utm_content=DAGkxaKBTk8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'africa', 'deserto'],
    isFree: false,
    imagePlaceholderQuery: 'namibia desert'
  },
  {
    id: 176,
    title: 'Nova Zelândia',
    description: 'Aventura e paisagens cinematográficas na Nova Zelândia.',
    canvaLink: 'https://www.canva.com/design/DAGgINGc6Z8/OsM-5OopG49o8mN0rd0RMg/view?utm_content=DAGgINGc6Z8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'oceania', 'aventura'],
    isFree: false,
    imagePlaceholderQuery: 'new zealand landscape'
  },
  {
    id: 177,
    title: 'Orlando',
    description: 'Diversão para toda a família nos parques de Orlando.',
    canvaLink: 'https://www.canva.com/design/DAGgIPVEnEk/wbm0-iA2_9PQ2cCOmJ6bAw/view?utm_content=DAGgIPVEnEk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'disney'],
    isFree: false,
    imagePlaceholderQuery: 'orlando florida'
  },
  {
    id: 178,
    title: 'Phi Phi',
    description: 'As famosas ilhas Phi Phi na Tailândia.',
    canvaLink: 'https://www.canva.com/design/DAGgIHM3a8A/8sTBGWxCgx5a_V33JtFu_A/view?utm_content=DAGgIHM3a8A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'tailandia', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'phi phi islands'
  },
  {
    id: 179,
    title: 'Pisa',
    description: 'Conheça a famosa Torre de Pisa e a beleza da Toscana.',
    canvaLink: 'https://www.canva.com/design/DAGgIEMmR_M/9f-k7CtYZlHsTYhCHkg/view?utm_content=DAGgIEMmR_M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'italia', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'leaning tower of pisa'
  },
  {
    id: 180,
    title: 'Praga',
    description: 'Um conto de fadas na cidade de Praga, República Tcheca.',
    canvaLink: 'https://www.canva.com/design/DAGgIH1_gY8/11l8w_5g_5v_7y_7x_8o_A/view?utm_content=DAGgIH1_gY8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'republica tcheca'],
    isFree: false,
    imagePlaceholderQuery: 'prague czech republic'
  },
  {
    id: 181,
    title: 'Punta Cana',
    description: 'Sol, mar e resorts incríveis em Punta Cana.',
    canvaLink: 'https://www.canva.com/design/DAGgIKZu79g/cML-09vBKb9uzoxMLro2sA/view?utm_content=DAGgIKZu79g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'caribe', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'punta cana'
  },
  {
    id: 182,
    title: 'Salar de Uyuni',
    description: 'O maior deserto de sal do mundo, uma paisagem surreal.',
    canvaLink: 'https://www.canva.com/design/DAGgIMYGeUo/hNOn3acstET00eZMSZevCQ/view?utm_content=DAGgIMYGeUo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'bolivia', 'deserto'],
    isFree: false,
    imagePlaceholderQuery: 'salar de uyuni bolivia'
  },
  {
    id: 183,
    title: 'São Francisco',
    description: 'A Golden Gate e o charme de São Francisco, Califórnia.',
    canvaLink: 'https://www.canva.com/design/DAGgICJnnqQ/bmbU2kAUJFJUYIf2woRW3g/view?utm_content=DAGgICJnnqQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'san francisco golden gate'
  },
  {
    id: 184,
    title: 'Singapura',
    description: 'Modernidade e natureza se encontram em Singapura.',
    canvaLink: 'https://www.canva.com/design/DAGgINGc6Z8/OsM-5OopG49o8mN0rd0RMg/view?utm_content=DAGgINGc6Z8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'singapore gardens by the bay'
  },
  {
    id: 185,
    title: 'Suiça',
    description: 'Os Alpes, lagos e a beleza estonteante da Suíça.',
    canvaLink: 'https://www.canva.com/design/DAGgIFd9l88/54j3J9Q23L8z0P4f-p_j1Q/view?utm_content=DAGgIFd9l88&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'suica'],
    isFree: false,
    imagePlaceholderQuery: 'switzerland alps'
  },
  {
    id: 186,
    title: 'Taiwan',
    description: 'Descubra a cultura e a tecnologia de Taiwan.',
    canvaLink: 'https://www.canva.com/design/DAGgICx70m4/6gpner1Xp3SaWs5zhm8fnQ/view?utm_content=DAGgICx70m4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'taiwan taipei 101'
  },
  {
    id: 187,
    title: 'Ushuaia',
    description: 'A cidade do fim do mundo, na Patagônia Argentina.',
    canvaLink: 'https://www.canva.com/design/DAGgIOfB964/Pt9ixDYkUe4pHBxt9U_L8g/view?utm_content=DAGgIOfB964&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'argentina', 'patagonia'],
    isFree: false,
    imagePlaceholderQuery: 'ushuaia argentina'
  },
  {
    id: 188,
    title: 'Washington',
    description: 'A capital dos Estados Unidos e seus monumentos históricos.',
    canvaLink: 'https://www.canva.com/design/DAGgIDWqY5E/A96uH3kJXwqZiWTr51nXRg/view?utm_content=DAGgIDWqY5E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'washington dc'
  },
  {
    id: 189,
    title: 'Amsterdã',
    description: 'Os canais, bicicletas e a atmosfera única de Amsterdã.',
    canvaLink: 'https://www.canva.com/design/DAGgIR3Uj_s/J7DMRsphXv0alSR7Pdb9eg/view?utm_content=DAGgIR3Uj_s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'holanda'],
    isFree: false,
    imagePlaceholderQuery: 'amsterdam canals'
  },
  {
    id: 190,
    title: 'Atenas',
    description: 'O berço da civilização ocidental, explore a Acrópole.',
    canvaLink: 'https://www.canva.com/design/DAGgIVLFL6c/sN4xUOkZJTbGJ5vZ6kQ18Q/view?utm_content=DAGgIVLFL6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'grecia'],
    isFree: false,
    imagePlaceholderQuery: 'athens acropolis'
  },
  {
    id: 191,
    title: 'Bali',
    description: 'A ilha dos deuses, com sua espiritualidade e praias.',
    canvaLink: 'https://www.canva.com/design/DAGgIBc0onY/x4vLLY939_RdIrA4XICf5w/view?utm_content=DAGgIBc0onY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'indonesia'],
    isFree: false,
    imagePlaceholderQuery: 'bali indonesia'
  },
  {
    id: 192,
    title: 'Bangkok',
    description: 'A energia e os templos da capital da Tailândia.',
    canvaLink: 'https://www.canva.com/design/DAGgIeC0clw/AowfyjEsUwNBiOEGmYqUTw/view?utm_content=DAGgIeC0clw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'tailandia'],
    isFree: false,
    imagePlaceholderQuery: 'bangkok thailand'
  },
  {
    id: 193,
    title: 'Barcelona',
    description: 'A arte de Gaudí e a vibração de Barcelona.',
    canvaLink: 'https://www.canva.com/design/DAGgIVLFL6c/sN4xUOkZJTbGJ5vZ6kQ18Q/view?utm_content=DAGgIVLFL6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'espanha'],
    isFree: false,
    imagePlaceholderQuery: 'barcelona sagrada familia'
  },
  {
    id: 194,
    title: 'Berlim',
    description: 'História, arte e cultura na vibrante capital alemã.',
    canvaLink: 'https://www.canva.com/design/DAGgICa3icM/XUL5DCACv4mYeGq4syIzmw/view?utm_content=DAGgICa3icM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'europa', 'alemanha'],
    isFree: false,
    imagePlaceholderQuery: 'berlin germany'
  },
  {
    id: 195,
    title: 'Buenos Aires',
    description: 'O tango, a culinária e o charme europeu de Buenos Aires.',
    canvaLink: 'https://www.canva.com/design/DAGgIfy2Ca0/Hr95Q6ST7258CMco-HbxDQ/view?utm_content=DAGgIfy2Ca0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'argentina', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'buenos aires argentina'
  },
  {
    id: 196,
    title: 'Cartagena',
    description: 'As cores e a história da cidade murada de Cartagena.',
    canvaLink: 'https://www.canva.com/design/DAGgIaIGeIM/JYgK-PBpXfnIqH0znFw-zw/view?utm_content=DAGgIaIGeIM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'colombia', 'caribe'],
    isFree: false,
    imagePlaceholderQuery: 'cartagena colombia'
  },
  {
    id: 197,
    title: 'Dubai',
    description: 'Luxo, modernidade e o deserto em Dubai.',
    canvaLink: 'https://www.canva.com/design/DAGgIQx3iW8/D8lV3a_3aHeKQ1JI3Pd3OQ/view?utm_content=DAGgIQx3iW8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'dubai', 'luxo'],
    isFree: false,
    imagePlaceholderQuery: 'dubai city'
  },
  {
    id: 198,
    title: 'Florença',
    description: 'O berço do Renascimento, explore a arte em Florença.',
    canvaLink: 'https://www.canva.com/design/DAGgIe1FmSk/bFSgFqaodmrSZsV04AtBhQ/view?utm_content=DAGgIe1FmSk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'italia', 'arte'],
    isFree: false,
    imagePlaceholderQuery: 'florence italy'
  },
  {
    id: 199,
    title: 'Frankfurt',
    description: 'O centro financeiro da Alemanha com um charmoso centro histórico.',
    canvaLink: 'https://www.canva.com/design/DAGgIaE8E9Q/jnbP70f-e2-JTnfHvpFIIw/view?utm_content=DAGgIaE8E9Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'alemanha', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'frankfurt germany'
  },
  {
    id: 200,
    title: 'Havana',
    description: 'Carros clássicos, música e a história de Havana, Cuba.',
    canvaLink: 'https://www.canva.com/design/DAGgIIzdW8Q/pCZAay9vuoXa2Xms6_So5w/view?utm_content=DAGgIIzdW8Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'cuba', 'caribe'],
    isFree: false,
    imagePlaceholderQuery: 'havana cuba'
  },
  {
    id: 201,
    title: 'Hong Kong',
    description: 'A vibrante metrópole de Hong Kong, onde o oriente encontra o ocidente.',
    canvaLink: 'https://www.canva.com/design/DAGkxrEQhaA/Uxja1UOzzbRORe3gapcq9A/view?utm_content=DAGkxrEQhaA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'asia', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'hong kong skyline'
  },
  {
    id: 202,
    title: 'Ilha de Páscoa',
    description: 'Os misteriosos Moais da Ilha de Páscoa.',
    canvaLink: 'https://www.canva.com/design/DAGgIBc0onY/x4vLLY939_RdIrA4XICf5w/view?utm_content=DAGgIBc0onY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'chile', 'misterio'],
    isFree: false,
    imagePlaceholderQuery: 'easter island moai'
  },
  {
    id: 203,
    title: 'Istambul',
    description: 'A cidade que une dois continentes, com sua rica história.',
    canvaLink: 'https://www.canva.com/design/DAGgIFgynkQ/sTk_DjnzNhbRFLmpJgDAkQ/view?utm_content=DAGgIFgynkQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'turquia', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'istanbul turkey'
  },
  {
    id: 204,
    title: 'Las Vegas',
    description: 'Entretenimento, shows e luzes na cidade de Las Vegas.',
    canvaLink: 'https://www.canva.com/design/DAGgIaE8E9Q/jnbP70f-e2-JTnfHvpFIIw/view?utm_content=DAGgIaE8E9Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'las vegas strip'
  },
  {
    id: 205,
    title: 'Lisboa',
    description: 'O charme, a história e os pastéis de Belém em Lisboa.',
    canvaLink: 'https://www.canva.com/design/DAGgIVf4UOQ/50ss3rLMLZTo86vSgVp1gA/view?utm_content=DAGgIVf4UOQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'portugal', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'lisbon portugal'
  },
  {
    id: 206,
    title: 'Londres',
    description: 'A realeza, a cultura e os pontos turísticos de Londres.',
    canvaLink: 'https://www.canva.com/design/DAGkxrEQhaA/Uxja1UOzzbRORe3gapcq9A/view?utm_content=DAGkxrEQhaA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'inglaterra', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'london england'
  },
  {
    id: 207,
    title: 'Los Angeles',
    description: 'A calçada da fama e o glamour de Hollywood em Los Angeles.',
    canvaLink: 'https://www.canva.com/design/DAGgIFgynkQ/sTk_DjnzNhbRFLmpJgDAkQ/view?utm_content=DAGgIFgynkQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'los angeles hollywood'
  },
  {
    id: 208,
    title: 'Madri',
    description: 'A vida noturna, a arte e a cultura da capital espanhola.',
    canvaLink: 'https://www.canva.com/design/DAGgIOg8LZs/ktrot3t27LZWsHrQz6iOHQ/view?utm_content=DAGgIOg8LZs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'espanha', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'madrid spain'
  },
  {
    id: 209,
    title: 'Miami',
    description: 'Praias, compras e a agitação de Miami.',
    canvaLink: 'https://www.canva.com/design/DAGgIaIGeIM/JYgK-PBpXfnIqH0znFw-zw/view?utm_content=DAGgIaIGeIM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'eua', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'miami beach'
  },
  {
    id: 210,
    title: 'Milão',
    description: 'A capital da moda e do design na Itália.',
    canvaLink: 'https://www.canva.com/design/DAGgIeC0clw/AowfyjEsUwNBiOEGmYqUTw/view?utm_content=DAGgIeC0clw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'italia', 'moda'],
    isFree: false,
    imagePlaceholderQuery: 'milan italy'
  },
  {
    id: 211,
    title: 'Munique',
    description: 'A cultura da Baviera e a famosa Oktoberfest em Munique.',
    canvaLink: 'https://www.canva.com/design/DAGgIWvNtdA/agfWkW39gzVWXYhlPdvOzg/view?utm_content=DAGgIWvNtdA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'alemanha', 'europa'],
    isFree: false,
    imagePlaceholderQuery: 'munich germany'
  },
  {
    id: 212,
    title: 'Phuket',
    description: 'As praias e a vida noturna de Phuket, na Tailândia.',
    canvaLink: 'https://www.canva.com/design/DAGgIe1FmSk/bFSgFqaodmrSZsV04AtBhQ/view?utm_content=DAGgIe1FmSk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'tailandia', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'phuket thailand'
  },
  {
    id: 213,
    title: 'Playa Del Carmen',
    description: 'Um paraíso na Riviera Maya, com praias e cenotes.',
    canvaLink: 'https://www.canva.com/design/DAGgIU7GrTM/gd3BcmnPgPeSzfxEpgqH3w/view?utm_content=DAGgIU7GrTM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'mexico', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'playa del carmen'
  },
  {
    id: 214,
    title: 'Riviera Maya',
    description: 'Explore as ruínas, praias e a cultura da Riviera Maya.',
    canvaLink: 'https://www.canva.com/design/DAGgIQX9aoE/NzEO3LVAaZLmNIrFwf0OjA/view?utm_content=DAGgIQX9aoE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'mexico', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'riviera maya'
  },
  {
    id: 215,
    title: 'Santiago',
    description: 'A capital chilena, aos pés da Cordilheira dos Andes.',
    canvaLink: 'https://www.canva.com/design/DAGgIVEAcbs/CbiYmoUZtQTIGMBt5QLl2w/view?utm_content=DAGgIVEAcbs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'chile', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'santiago chile'
  },
  {
    id: 216,
    title: 'Siena',
    description: 'O charme medieval da cidade de Siena, na Toscana.',
    canvaLink: 'https://www.canva.com/design/DAGgIVEAcbs/CbiYmoUZtQTIGMBt5QLl2w/view?utm_content=DAGgIVEAcbs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'italia', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'siena italy'
  },
  {
    id: 217,
    title: 'Sydney',
    description: 'A icônica Opera House e a beleza de Sydney, Austrália.',
    canvaLink: 'https://www.canva.com/design/DAGgIVXEKro/XqlAf6FYlwxdYIJyOZzZiw/view?utm_content=DAGgIVXEKro&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'australia', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'sydney opera house'
  },
  {
    id: 218,
    title: 'Toronto',
    description: 'A diversidade cultural e a CN Tower em Toronto, Canadá.',
    canvaLink: 'https://www.canva.com/design/DAGgIOg8LZs/ktrot3t27LZWsHrQz6iOHQ/view?utm_content=DAGgIOg8LZs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'canada', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'toronto canada'
  },
  {
    id: 219,
    title: 'Tulum',
    description: 'As ruínas maias à beira-mar em Tulum, México.',
    canvaLink: 'https://www.canva.com/design/DAGgIVf4UOQ/50ss3rLMLZTo86vSgVp1gA/view?utm_content=DAGgIVf4UOQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'mexico', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'tulum mexico'
  },
  {
    id: 220,
    title: 'Vancouver',
    description: 'A natureza e a cidade se encontram em Vancouver, Canadá.',
    canvaLink: 'https://www.canva.com/design/DAGgICa3icM/XUL5DCACv4mYeGq4syIzmw/view?utm_content=DAGgICa3icM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['internacional', 'canada', 'natureza'],
    isFree: false,
    imagePlaceholderQuery: 'vancouver canada'
  },
  {
    id: 221,
    title: '5 Praias Floripa',
    description: 'Descubra 5 praias imperdíveis em Florianópolis.',
    canvaLink: 'https://www.canva.com/design/DAGhwS47xPc/nB1DGxHhCj4jH1ZATP8xeQ/view?utm_content=DAGhwS47xPc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'praia', 'dicas'],
    isFree: false,
    imagePlaceholderQuery: 'florianopolis praias'
  },
  {
    id: 222,
    title: 'Alagoas',
    description: 'O caribe brasileiro te espera em Alagoas.',
    canvaLink: 'https://www.canva.com/design/DAGhw3sD28w/yFm8fW4z_5yXo0Xf_8_p_A/view?utm_content=DAGhw3sD28w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'alagoas brasil'
  },
  {
    id: 223,
    title: 'Alter do Chão',
    description: 'O caribe amazônico em Alter do Chão, Pará.',
    canvaLink: 'https://www.canva.com/design/DAGhwMPXsXA/RvDv-RPL5DPL73FWyISG_w/view?utm_content=DAGhwMPXsXA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'norte', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'alter do chao'
  },
  {
    id: 224,
    title: 'Amazônia',
    description: 'Uma imersão na maior floresta tropical do mundo.',
    canvaLink: 'https://www.canva.com/design/DAGhw828f00/kS69K92z1Zf-c30Hw20DkQ/view?utm_content=DAGhw828f00&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'norte', 'natureza'],
    isFree: false,
    imagePlaceholderQuery: 'amazonia brasil'
  },
  {
    id: 225,
    title: 'Angra dos Reis',
    description: 'Ilhas paradisíacas e mar verde em Angra dos Reis.',
    canvaLink: 'https://www.canva.com/design/DAGhvTRTvRg/PPKZZv7xizd-XnytywMa7Q/view?utm_content=DAGhvTRTvRg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'sudeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'angra dos reis'
  },
  {
    id: 226,
    title: 'Arraial do Cabo',
    description: 'O caribe brasileiro te espera em Arraial do Cabo.',
    canvaLink: 'https://www.canva.com/design/DAGhx1FIZ9A/8qF6DjcZAv4_IN_qwJuYMw/view?utm_content=DAGhx1FIZ9A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'sudeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'arraial do cabo'
  },
  {
    id: 227,
    title: 'Balneário Camboriú',
    description: 'A Dubai brasileira, com seus arranha-céus e praias.',
    canvaLink: 'https://www.canva.com/design/DAGkxPpLy4w/HSkS1GTYdNiwDfyG9B1f9g/view?utm_content=DAGkxPpLy4w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'sul', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'balneario camboriu'
  },
  {
    id: 228,
    title: 'Foz do Iguaçu',
    description: 'A grandiosidade das Cataratas do Iguaçu.',
    canvaLink: 'https://www.canva.com/design/DAGhx1v1w7w/F17wJ25v9l9cQ65F-E_36g/view?utm_content=DAGhx1v1w7w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'sul', 'natureza'],
    isFree: false,
    imagePlaceholderQuery: 'foz do iguacu'
  },
  {
    id: 229,
    title: 'Genipabu',
    description: 'Passeios de buggy e dromedários nas dunas de Genipabu.',
    canvaLink: 'https://www.canva.com/design/DAGhwaQuLJg/kKB3SFgHCa39cJx01EnpNg/view?utm_content=DAGhwaQuLJg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'dunas'],
    isFree: false,
    imagePlaceholderQuery: 'genipabu natal'
  },
  {
    id: 230,
    title: 'Jericoacoara - CE',
    description: 'O paraíso de Jericoacoara, com suas lagoas e dunas.',
    canvaLink: 'https://www.canva.com/design/DAGhxtB6T-o/RCEDEQt4lZNBjH4PvtHkag/view?utm_content=DAGhxtB6T-o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'jericoacoara'
  },
  {
    id: 231,
    title: 'Lençóis Maranhenses',
    description: 'Um deserto de dunas brancas e lagoas cristalinas.',
    canvaLink: 'https://www.canva.com/design/DAGhv3tKwjM/hkKEdAi4X4NLB0fkiaIMVw/view?utm_content=DAGhv3tKwjM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'natureza'],
    isFree: false,
    imagePlaceholderQuery: 'lencois maranhenses'
  },
  {
    id: 232,
    title: 'Ouro Preto',
    description: 'Viaje pela história do Brasil nas ladeiras de Ouro Preto.',
    canvaLink: 'https://www.canva.com/design/DAGhyI8YO-s/7t2BK0UOu13ckNb6PEbl6A/view?utm_content=DAGhyI8YO-s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'sudeste', 'historia'],
    isFree: false,
    imagePlaceholderQuery: 'ouro preto minas gerais'
  },
  {
    id: 233,
    title: 'Porto de Galinhas',
    description: 'As piscinas naturais e praias de Porto de Galinhas.',
    canvaLink: 'https://www.canva.com/design/DAGhwGiUmwQ/yUkdvMfiPGQS6oeEOVG3aQ/view?utm_content=DAGhwGiUmwQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'porto de galinhas'
  },
  {
    id: 234,
    title: 'Recife',
    description: 'A Veneza brasileira, com sua cultura e história.',
    canvaLink: 'https://www.canva.com/design/DAGhw3sD28w/yFm8fW4z_5yXo0Xf_8_p_A/view?utm_content=DAGhw3sD28w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'cidade'],
    isFree: false,
    imagePlaceholderQuery: 'recife antigo'
  },
  {
    id: 235,
    title: 'Salvador - BA',
    description: 'A energia do Pelourinho e o axé de Salvador.',
    canvaLink: 'https://www.canva.com/design/DAGhw9-Yw7k/g_192p953xYd8gGf3D7W9w/view?utm_content=DAGhw9-Yw7k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'cultura'],
    isFree: false,
    imagePlaceholderQuery: 'salvador bahia pelourinho'
  },
  {
    id: 236,
    title: 'Trancoso - BA',
    description: 'O charme rústico e as praias de Trancoso.',
    canvaLink: 'https://www.canva.com/design/DAGhx91gbYs/ZrP6pSy-0JFNwSuMRCuL0g/view?utm_content=DAGhx91gbYs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview',
    tags: ['nacional', 'nordeste', 'praia'],
    isFree: false,
    imagePlaceholderQuery: 'trancoso bahia'
  }
];
