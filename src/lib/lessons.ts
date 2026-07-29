import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
}

// IMPORTANT: To change the video lessons, edit the videoUrl in the objects below.
// The URL should be the "embed" URL for the video.
// For YouTube, it's https://www.youtube.com/embed/VIDEO_ID
// For Vimeo, it's https://player.vimeo.com/video/VIDEO_ID

export const lessons: Lesson[] = [
  {
    id: "01",
    title: "Ferramentas iniciais para manutenção de celulares",
    description:
      "Conheça as principais ferramentas necessárias para começar na manutenção de celulares.",
    videoUrl: "https://www.youtube.com/embed/hOmM5mb__h0",
    imageUrl: "https://i.ytimg.com/vi/hOmM5mb__h0/hqdefault.jpg",
  },
  {
    id: "02",
    title: "Como desmontar qualquer celular do jeito certo",
    description:
      "Aprenda o passo a passo seguro para desmontar smartphones sem danificar os componentes.",
    videoUrl: "https://www.youtube.com/embed/qDhGUhAqunM",
    imageUrl: "https://i.ytimg.com/vi/qDhGUhAqunM/hqdefault.jpg",
  },
  {
    id: "03",
    title: "Como funciona um celular por dentro",
    description:
      "Entenda a arquitetura interna e a organização dos componentes em um smartphone.",
    videoUrl: "https://www.youtube.com/embed/IupdzwMbSxI",
    imageUrl: "https://i.ytimg.com/vi/IupdzwMbSxI/hqdefault.jpg",
  },
  {
    id: "04",
    title: "Como aprender conserto de celular com sucatas",
    description:
      "Descubra como utilizar placas e celulares antigos para treinar técnicas de reparo.",
    videoUrl: "https://www.youtube.com/embed/JeINn6045r8",
    imageUrl: "https://i.ytimg.com/vi/JeINn6045r8/hqdefault.jpg",
  },
  {
    id: "05",
    title: "O que é IMEI? Como consultar e desbloquear",
    description:
      "Saiba tudo sobre a identificação do celular, como fazer consultas e entender status de bloqueios.",
    videoUrl: "https://www.youtube.com/embed/E0ym-6My9Qw",
    imageUrl: "https://i.ytimg.com/vi/E0ym-6My9Qw/hqdefault.jpg",
  },
  {
    id: "06",
    title: "Diferença entre tela, touch e display",
    description:
      "Aprenda a identificar cada camada da tela para realizar diagnósticos e trocas precisas.",
    videoUrl: "https://www.youtube.com/embed/beS4c7aYtgk",
    imageUrl: "https://i.ytimg.com/vi/beS4c7aYtgk/hqdefault.jpg",
  },
  {
    id: "07",
    title: "Os defeitos mais comuns em celulares",
    description:
      "Conheça os principais problemas enfrentados no dia a dia da bancada e suas soluções.",
    videoUrl: "https://www.youtube.com/embed/aunt7NzIuJ4",
    imageUrl: "https://i.ytimg.com/vi/aunt7NzIuJ4/hqdefault.jpg",
  },
  {
    id: "08",
    title: "Como funciona a corrente elétrica na eletrônica",
    description:
      "Entenda o conceito de corrente elétrica e como ela se comporta no circuito do smartphone.",
    videoUrl: "https://www.youtube.com/embed/I3gnqpZwpcI",
    imageUrl: "https://i.ytimg.com/vi/I3gnqpZwpcI/hqdefault.jpg",
  },
  {
    id: "09",
    title: "Como funciona a tensão elétrica nos eletrônicos",
    description:
      "Aprenda sobre a diferença de potencial (ddp) e a alimentação dos componentes.",
    videoUrl: "https://www.youtube.com/embed/ZzZDKrs_uAc",
    imageUrl: "https://i.ytimg.com/vi/ZzZDKrs_uAc/hqdefault.jpg",
  },
  {
    id: "10",
    title: "Como funciona a resistência elétrica",
    description:
      "Entenda a oposição à passagem de corrente e como medir resistências no circuito.",
    videoUrl: "https://www.youtube.com/embed/e0kAqXxaQDs",
    imageUrl: "https://i.ytimg.com/vi/e0kAqXxaQDs/hqdefault.jpg",
  },
  {
    id: "11",
    title: "Resistores na placa: para que servem e como funcionam",
    description:
      "Descubra a função dos resistores no circuito do celular e como testá-los.",
    videoUrl: "https://www.youtube.com/embed/DBjkxvL5DNY",
    imageUrl: "https://i.ytimg.com/vi/DBjkxvL5DNY/hqdefault.jpg",
  },
  {
    id: "12",
    title: "Capacitores SMD: como funcionam na placa",
    description:
      "Aprenda o papel dos capacitores na filtragem e armazenamento de energia no celular.",
    videoUrl: "https://www.youtube.com/embed/ueeVfWjsQyo",
    imageUrl: "https://i.ytimg.com/vi/ueeVfWjsQyo/hqdefault.jpg",
  },
  {
    id: "13",
    title: "Bobinas (indutores): qual a função no celular?",
    description:
      "Entenda o funcionamento de indutores e bobinas nos circuitos de alimentação e RF.",
    videoUrl: "https://www.youtube.com/embed/ovOQj6qaMe4",
    imageUrl: "https://i.ytimg.com/vi/ovOQj6qaMe4/hqdefault.jpg",
  },
  {
    id: "14",
    title: "Diodo: como funciona na eletrônica",
    description:
      "Saiba como os diodos garantem o fluxo unidirecional da corrente e protegem o circuito.",
    videoUrl: "https://www.youtube.com/embed/1g2C5UM4C4c",
    imageUrl: "https://i.ytimg.com/vi/1g2C5UM4C4c/hqdefault.jpg",
  },
  {
    id: "15",
    title: "Como funciona a placa de circuito impresso no celular",
    description:
      "Compreenda as camadas (multilayer) da placa de circuito impresso do smartphone.",
    videoUrl: "https://www.youtube.com/embed/fxoB1zu0Tl8",
    imageUrl: "https://i.ytimg.com/vi/fxoB1zu0Tl8/hqdefault.jpg",
  },
  {
    id: "16",
    title: "Circuito integrado (CI): como funciona no celular",
    description:
      "Conheça a função dos CIs responsáveis pelo gerenciamento de energia, áudio e processamento.",
    videoUrl: "https://www.youtube.com/embed/_8aFvDpXn6A",
    imageUrl: "https://i.ytimg.com/vi/_8aFvDpXn6A/hqdefault.jpg",
  },
  {
    id: "17",
    title: "Como usar o multímetro para encontrar defeitos no celular",
    description:
      "Aprenda a manusear o multímetro em escalas de tensão, continuidade e condução reversa.",
    videoUrl: "https://www.youtube.com/embed/oewRo7msYSA",
    imageUrl: "https://i.ytimg.com/vi/oewRo7msYSA/hqdefault.jpg",
  },
  {
    id: "18",
    title: "Componentes em série e paralelo: entenda as diferenças",
    description:
      "Aprenda a diferenciar ligação em série de paralelo e como isso afeta as medições.",
    videoUrl: "https://www.youtube.com/embed/F-q04Hm4b_Q",
    imageUrl: "https://i.ytimg.com/vi/F-q04Hm4b_Q/hqdefault.jpg",
  },
  {
    id: "19",
    title: "Principais defeitos em capacitores",
    description:
      "Identifique capacitores em curto, com fuga de corrente ou abertos no circuito.",
    videoUrl: "https://www.youtube.com/embed/w-DUdyhD_JY",
    imageUrl: "https://i.ytimg.com/vi/w-DUdyhD_JY/hqdefault.jpg",
  },
  {
    id: "20",
    title: "Como testar capacitores SMD na placa",
    description:
      "Passo a passo para medir e identificar falhas em capacitores sem remoção precipitada.",
    videoUrl: "https://www.youtube.com/embed/LS_aVLZhTKQ",
    imageUrl: "https://i.ytimg.com/vi/LS_aVLZhTKQ/hqdefault.jpg",
  },
  {
    id: "21",
    title: "Como testar bobinas e identificar defeitos",
    description:
      "Aprenda os testes práticos para diagnosticar bobinas abertas ou danificadas.",
    videoUrl: "https://www.youtube.com/embed/46FbttivIhg",
    imageUrl: "https://i.ytimg.com/vi/46FbttivIhg/hqdefault.jpg",
  },
  {
    id: "22",
    title: "Como testar diodos e encontrar curtos na placa",
    description:
      "Utilize a escala de diodo/continuidade para rastrear falhas e curtos-circuitos.",
    videoUrl: "https://www.youtube.com/embed/7ZEA0fuYeg4",
    imageUrl: "https://i.ytimg.com/vi/7ZEA0fuYeg4/hqdefault.jpg",
  },
  {
    id: "23",
    title: "Como testar resistores e identificar defeitos na placa",
    description:
      "Técnicas de medição de resistência para verificar valores alterados na placa.",
    videoUrl: "https://www.youtube.com/embed/THqDMXEHrc0",
    imageUrl: "https://i.ytimg.com/vi/THqDMXEHrc0/hqdefault.jpg",
  },
  {
    id: "24",
    title: "Como diagnosticar o defeito de qualquer celular",
    description:
      "Raciocínio lógico e rotina de bancada para chegar ao diagnóstico correto de forma rápida.",
    videoUrl: "https://www.youtube.com/embed/TzmavwAo8os",
    imageUrl: "https://i.ytimg.com/vi/TzmavwAo8os/hqdefault.jpg",
  },
  {
    id: "25",
    title: "Celular não liga: como encontrar curtos na tensão primária",
    description:
      "Diagnóstico completo para aparelhos mortos com curto-circuito na malha primária de alimentação.",
    videoUrl: "https://www.youtube.com/embed/Z91TW_tY52E",
    imageUrl: "https://i.ytimg.com/vi/Z91TW_tY52E/hqdefault.jpg",
  },
  {
    id: "26",
    title: "Celular liga, mas não dá imagem: diagnóstico da tensão secundária",
    description:
      "Técnicas para solucionar problemas de imagem, backlight e falhas em linhas secundárias.",
    videoUrl: "https://www.youtube.com/embed/9wgd227Weno",
    imageUrl: "https://i.ytimg.com/vi/9wgd227Weno/hqdefault.jpg",
  },
  {
    id: "27",
    title: "Celular desliga ao conectar o carregador: falhas na tensão neutra",
    description:
      "Análise de falhas e diagnósticos quando o aparelho desliga imediatamente ao conectar o cabo de carga.",
    videoUrl: "https://www.youtube.com/embed/Y0i8XXmVW0c",
    imageUrl: "https://i.ytimg.com/vi/Y0i8XXmVW0c/hqdefault.jpg",
  },
  {
    id: "28",
    title: "Moto G7 Play desligando ao carregar: diagnóstico completo",
    description:
      "Estudo de caso prático do Moto G7 Play desligando na bancada ao receber alimentação de carga.",
    videoUrl: "https://www.youtube.com/embed/T7fmpRTtUz4",
    imageUrl: "https://i.ytimg.com/vi/T7fmpRTtUz4/hqdefault.jpg",
  },
  {
    id: "29",
    title: "Setor de carga do celular: funcionamento e principais componentes",
    description:
      "Entenda a arquitetura do setor de carga, IF-PMIC, OVP e linhas VBUS, VBAT e USB.",
    videoUrl: "https://www.youtube.com/embed/vldrJq79DWQ",
    imageUrl: "https://i.ytimg.com/vi/vldrJq79DWQ/hqdefault.jpg",
  },
  {
    id: "30",
    title: "Celular não carrega: causas, testes e soluções",
    description:
      "Identifique as causas mais frequentes para falhas de carregamento e as etapas de testes.",
    videoUrl: "https://www.youtube.com/embed/4PLlJgyjKqI",
    imageUrl: "https://i.ytimg.com/vi/4PLlJgyjKqI/hqdefault.jpg",
  },
  {
    id: "31",
    title: "Como testar os componentes do setor de carga",
    description:
      "Passo a passo para medir tensões, condução reversa e componentes do circuito de carga.",
    videoUrl: "https://www.youtube.com/embed/hHgAQX-yd5w",
    imageUrl: "https://i.ytimg.com/vi/hHgAQX-yd5w/hqdefault.jpg",
  },
  {
    id: "32",
    title: "Troca do conector de carga: procedimento completo para iniciantes",
    description:
      "Aprenda a realizar a substituição do conector Micro USB / Tipo-C com ferro de solda e estação de ar.",
    videoUrl: "https://www.youtube.com/embed/t0l0z1kksfo",
    imageUrl: "https://i.ytimg.com/vi/t0l0z1kksfo/hqdefault.jpg",
  },
  {
    id: "33",
    title: "Troca de tela de celular: procedimento completo (parte 1)",
    description:
      "Primeiros passos para desmontagem, aquecimento da frontal e remoção da tela danificada.",
    videoUrl: "https://www.youtube.com/embed/dtAFcolWu54",
    imageUrl: "https://i.ytimg.com/vi/dtAFcolWu54/hqdefault.jpg",
  },
  {
    id: "34",
    title: "Troca de display do Moto G7 Play na prática (parte 2)",
    description:
      "Limpeza do aro, aplicação da cola, encaixe e colagem final do novo display.",
    videoUrl: "https://www.youtube.com/embed/EFAidg23n2I",
    imageUrl: "https://i.ytimg.com/vi/EFAidg23n2I/hqdefault.jpg",
  },
  {
    id: "35",
    title: "Celular com tela preta ou sem imagem: diagnóstico e solução",
    description:
      "Diferencie problemas de software, tela com defeito e falhas de imagem na placa mãe.",
    videoUrl: "https://www.youtube.com/embed/N0GbvFJqxiE",
    imageUrl: "https://i.ytimg.com/vi/N0GbvFJqxiE/hqdefault.jpg",
  },
  {
    id: "36",
    title: "Celular sem iluminação na tela: diagnóstico do circuito de backlight",
    description:
      "Análise do circuito conversor boost de backlight (diodo, bobina e CI de iluminação).",
    videoUrl: "https://www.youtube.com/embed/poYrLvCSJhI",
    imageUrl: "https://i.ytimg.com/vi/poYrLvCSJhI/hqdefault.jpg",
  },
  {
    id: "37",
    title: "Celular caiu na água: procedimentos para diagnóstico e reparo",
    description:
      "Protocolo de desoxidação em cuba ultrassônica e recuperação de placas molhadas.",
    videoUrl: "https://www.youtube.com/embed/3iTOfC2ztJ4",
    imageUrl: "https://i.ytimg.com/vi/3iTOfC2ztJ4/hqdefault.jpg",
  },
  {
    id: "38",
    title: "Como consertar o botão power do celular",
    description:
      "Reparo e substituição da chave tact, malha flex e medição das linhas do botão power.",
    videoUrl: "https://www.youtube.com/embed/EztLR-Yq6WM",
    imageUrl: "https://i.ytimg.com/vi/EztLR-Yq6WM/hqdefault.jpg",
  },
  {
    id: "39",
    title: "Celular desligou e não liga mais: diagnóstico passo a passo",
    description:
      "Roteiro completo de análise para aparelhos que apagam repentinamente e não dão sinal de vida.",
    videoUrl: "https://www.youtube.com/embed/SgTZ5hI11EM",
    imageUrl: "https://i.ytimg.com/vi/SgTZ5hI11EM/hqdefault.jpg",
  },
  {
    id: "40",
    title: "Como trocar o flex power e volume de qualquer celular",
    description:
      "Técnicas seguras para remoção e substituição dos cabos flex laterais sem romper as pistas.",
    videoUrl: "https://www.youtube.com/embed/9dhc1BGssHA",
    imageUrl: "https://i.ytimg.com/vi/9dhc1BGssHA/hqdefault.jpg",
  },
];
