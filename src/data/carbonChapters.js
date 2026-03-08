export const carbonChapters = [
  {
    id: 1,
    title: "1. A Gênese Climática",
    subsections: [
      {
         id: '1.1',
         title: '1.1 O Clima em Crise',
         content: `A atmosfera terrestre sempre teve gases de efeito estufa (GEE), responsáveis por reter calor e permitir a vida. No entanto, desde a Revolução Industrial, a queima massiva de combustíveis fósseis (carvão, petróleo, gás natural) elevou artificialmente essa concentração, aprisionando mais calor e causando o Aquecimento Global acelerado.
         
A comunidade global percebeu tarde os impactos drásticos: derretimento de gelo, secas extremas e quebras de safra. A necessidade de frear as emissões antes de atingir +1.5°C acima da era pré-industrial tornou-se uma urgência civilizacional.`,
         simulation: null
      },
      {
         id: '1.2',
         title: '1.2 Quioto, Paris e o Mercado',
         content: `O **Protocolo de Quioto (1997)** foi o primeiro grande tratado que impôs metas rígidas de redução de GEE para países desenvolvidos. Ele criou o Mecanismo de Desenvolvimento Limpo (MDL), onde os países ricos podiam investir em projetos sustentáveis nos países em desenvolvimento para abater suas próprias metas. Estava criada a semente do **Crédito de Carbono**.
         
O **Acordo de Paris (2015)** modernizou o cenário: Todos os países, ricos e pobres, assumiram metas de redução (NDCs). O Artigo 6 do Acordo pavimentou a regra para os "Resultados de Mitigação Transferidos Internacionalmente" (ITMOs). Você gera 1 tonelada de Carbono poupada aqui, e vende para um país que poluiu lá. 

Neste cenário de regulação de temperatura global, vamos simular os acordos firmados no tempo contra o aumento da temperatura global. Ajuste nossa linha temporal!`,
         simulation: 'kyoto_timeline'
      }
    ]
  },
  {
    id: 2,
    title: "2. A Matemática do Clima",
    subsections: [
      {
         id: '2.1',
         title: '2.1 NetZero e Contabilidade GHG',
         content: `A jornada para o "Carbono Zero" não significa que a fábrica parou de funcionar e emitir fumaça, mas sim que todo aquele carbono que escapa para a atmosfera (Pegada de Carbono) está sendo compensado na mesma proporção. Isso é o **NetZero**, o balanço matemático da sustentabilidade corporativa.

O **GHG Protocol** é a principal estrutura metodológica usada pelas empresas para medir, gerenciar e relatar emissões de gases de efeito estufa, classificados em três "Escopos":
* **Escopo 1:** Emissões Diretas (frota própria, chaminés).
* **Escopo 2:** Emissões Indiretas por Eletricidade (a energia que a fábrica comprou de uma hidrelétrica).
* **Escopo 3:** A cadeia de valor (fornecedores de aço, logística terceirizada até a prateleira).`,
         simulation: null
      },
      {
         id: '2.2',
         title: '2.2 Não Emissão vs Sequestro',
         content: `O mercado transaciona essencialmente dois tipos de ativos ambientais:
- **Redução ou Evitamento de Emissões:** Quando instalamos torres eólicas em vez de uma termelétrica a carvão, nós *evitamos* a emissão teórica de gás. Quando barramos o corte de uma floresta num projeto REDD+, nós *evitamos* a emissão do CO2 contido nos troncos.
- **Sequestro (Remoção) de Emissões:** Quando plantamos árvores exóticas (Eucalipto) ou uma muda nativa onde só havia pasto degradado, a própria biologia da planta fotossintetiza o ar sujo e *sequestra/remove* o CO2 físico da atmosfera, guardando-o no solo e raízes por décadas.

No **Sistema Cap and Trade** (Limitar e Negociar), o governo impõe um limite (Cap) do quanto uma indústria pode emitir. Distribuem-se "Permissões". Se você passou do limite, precisa comprar Permissões de quem emitiu menos. Assuma o lugar do gestor no painel a seguir!`,
         simulation: 'cap_and_trade'
      }
    ]
  },
  {
    id: 3,
    title: "3. O Cenário Brasileiro",
    subsections: [
      {
         id: '3.1',
         title: '3.1 O Mercado Regulado Nacional',
         content: `O Brasil possui o maior potencial de créditos de carbono de origem natural do mundo, e por anos atuou no mercado voluntário de florestas. Contudo, em virtude do compromisso firmado globalmente de zerar suas emissões até 2050, aprovou-se o **SBCE** (Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa), nascendo assim um **Mercado Regulado** local.
         
Onde antes companhias compravam voluntariamente créditos NBS apenas para "Marketing Verde", a regulação força a mão: Grandes emissores (termoelétricas, aço, cimento, agro) passam a ter cotas mandatórias e tetos preestabelecidos por Lei.`,
         simulation: null
      },
      {
         id: '3.2',
         title: '3.2 Ativos CBE e CRVE',
         content: `Nesse novo arranjo estatal, a bolsa climática brasileira funciona baseada em duas grandes "moedas" oficiais, transacionadas via corretoras financeiras tradicionais:

- o **CBE (Cota Brasileira de Emissão):** Este é o seu "direito" emitido pelo governo. Equivale a uma permissão de 1 tonelada de carbono que a sua usina pode usar legalmente para funcionar naquele ano. Se te sobrarem cotas pelo seu processo eficiente, você pode vendê-las.
- o **CRVE (Certificado de Redução ou Remoção Verificada):** Este é o clássico "Crédito Verde" validado tecnicamente, seja originado de um projeto REDD+, biodigestores de fazendas pecuárias, usina eólica no Nordeste. Servem de abatimento legal de passivos climáticos ou cumprimento das metas empresariais.

Explore uma balança financeira administrando uma carteira de ativos CBE e CRVE reagindo à economia fictícia!`,
         simulation: 'cbe_wallet'
      }
    ]
  },
  {
    id: 4,
    title: "4. Regulação, MRV e Blockchain",
    subsections: [
      {
         id: '4.1',
         title: '4.1 Como Nasce um Crédito Seguro (MRV)',
         content: `Não basta plantar uma floresta e gritar ao vento que se geraram créditos de carbono; você precisa comprovar cientificamente que as árvores não morreram em três anos, que esse dinheiro melhorou a vida social no entorno e que a metodologia aplicada de cálculo seguiu o pilar do **MRV (Mensuração, Relato e Verificação)**.
         
O crédito gerado deve obrigatoriamente contar com *Adicionalidade* (isto é: se ninguém desse dinheiro para sua RPPN, aquela floresta seria inevitavelmente queimada?). Para mitigar golpes e metodologias falsas, conselhos metodológicos caros intermediam o registro.`,
         simulation: null
      },
      {
         id: '4.2',
         title: '4.2 Dupla Contagem e Rastreabilidade Blockchain',
         content: `No mercado original de Ouro, é possível vender a mesma onça de ouro secretamente para duas pessoas. Aconteceu intensamente no mercado de Carbono corporativo no início dos anos 2000.  Para combater fraudes, roubos de créditos virtuais e a temida "Dupla Contagem". o setor casou com a tecnologia das Criptomoedas Web 3.0: O **Blockchain**.

Cada 1 tonelada de carbono verificada que entra na rede recebe um **Token Rastreado e Imutável**. Quando uma empresa como a Microsoft "queima" o ativo verde dela como marketing orgânico, o token se auto-destrói matematicamente (Wallet Burn) no servidor para que nunca mais possa ser revendido pra ninguém. Assim surge a confiança corporativa total no Carbono Tokenizado!`,
         simulation: 'blockchain_mrv'
      }
    ]
  },
  {
    id: 5,
    title: "5. Projetos NBS: Nature-Based Solutions",
    subsections: [
      {
         id: '5.1',
         title: '5.1 O Valor da Natureza',
         content: `Enquanto o mundo procura criar máquinas aspirantes de carbono, as Soluções Baseadas na Natureza (NBS) ainda são a ferramenta de engenharia climática mais antiga e eficiente da espécia humana.

Proteger habitats já ameaçados da Amazônia (evitando queimadas programadas), regenerar restingas destruídas no Sudeste para formar novos depósitos vivos (Manguezais) ou criar lavouras e pastagens agrícolas onde a decomposição de palhada absorva carbono (ILPF - Integração Lavoura-Pecuária-Floresta) resultam em créditos de Altíssima Qualidade. O "Ouro Verde" não limpa apenas o céu, ele mantém a biodiversidade de jaguatiricas viva.`,
         simulation: null
      },
      {
         id: '5.2',
         title: '5.2 A Redução de Desmatamento (REDD+)',
         content: `As florestas antigas em pé são reservatórios densos de carbono. Destruí-las gera uma liberação massiva (como a quebra de um cofre). A sigla central dos Projetos Ambientais da atualidade é **REDD+** (Redução de Emissões provenientes de Desmatamento e Degradação Florestal, incluindo a preservação das margens da biologia). 

Atraves de medições via Satélite Lidar e cálculos volumétricos de cada árvore nativa preservada em 1 Hectare na Amazônia perante ao cenário histórico de ameaça estadual agrária, gera-se uma volumetria quantificada monetária da Natureza. Entenda a correlação jogando nosso construtor a seguir!`,
         simulation: 'redd_calc'
      }
    ]
  },
  {
    id: 6,
    title: "6. Projetos TBS: Technology-Based Solutions",
    subsections: [
      {
         id: '6.1',
         title: '6.1 BECCS e DAC',
         content: `As Soluções Baseadas em Tecnologia (**TBS**) representam a artilharia pesada final e cara do clima. São reatores massivos de engenharia humana. O que falta na expansão territorial planetária (não há mais área na Europa para plantar vastas fronteiras de árvores purificadoras), essas soluções substituem em concentração por metro quadrado de galpão.
         
O **BECCS** (Bioenergia com Captura e Armazenamento de Carbono) utiliza a queima de cogeração vegetal/bagaces, mas antes do CO2 se desgrudar para a atmosfera pelo cano, um reator pega os químicos e esguicha pro subsolo geológico profundo (salinas) pra sempre trancado.
O **DAC** (Direct Air Capture) utiliza hélices monstronas que parecem um motor de avião virado de trás para frente, arrastando vento misturado pela umidade e transformando-o num líquido de calcário hiper denso mineralizado, prendendo instantaneamente as partículas quentes.`,
         simulation: null
      },
      {
         id: '6.2',
         title: '6.2 A Balança Energética do Aspirador de CO2',
         content: `Um problema gravíssimo persegue os engenheiros nas soluções de Bioenergia ou Aspiradores Monolíticos Tecnológicos (Capture Facilities): a Fome Gigantesca de Energia Elétrica. 
         
O mecanismo de absorver do vento umidade carbônica para transformá-la mineralmente exije um pico descomunal de carga por Gigawatt na usina para seus dínamos potentes girarem a mais de 8.000 rpm. Logo... a tecnologia para de fazer sentido (e passa emitir carbono, em vez de sugar) se o cabo da tomada que conecta aquela obra de engenharia futurista provem de uma termelétrica poluente que precisou de carvão pra ascender o ventilador filtrante. Ajuste o Mix no painel de controle!`,
         simulation: 'tech_dac'
      }
    ]
  },
  {
    id: 7,
    title: "7. Voluntário vs Regulado e Fraudes",
    subsections: [
      {
         id: '7.1',
         title: '7.1 Diferenças de Preço e Pressão',
         content: `Você já percebeu uma vasta flutuação dos Custo do Tonelada Equivalente (tCO2e) nesse material. O **Mercado Voluntário** baseia-se em "Offsets": corporações bilionárias da Tech com culpas sociais tentando impressionar investidores. Isso gera uma montanha-russa de preços fracos em certas épocas (U$1,30 - U$5,00 por tonelada), baseados em carisma (projetos florestais sensíveis no Zimbábue vendem mais fácil para os executivos dos EUA).
         
O **Mercado Regulado (Governamental)** é imposto sob a fumaça de impostos punitivos da Receita Federal. Você emitiu acima da cota Estadual? O preço da tonelada vira Lei Europeia Estável (€60,00 - €90,00 por tonelada dependendo do frio do inverno na União Europeia). São economias frias sem apelo social.`,
         simulation: null
      },
      {
         id: '7.2',
         title: '7.2 A Praga do Greenwashing',
         content: `O grande tendão de Aquiles que amedronta todos os investidores do Mercado Financeiro ESG é o "Greenwashing" – ou a Lavagem Verde. É o pesadelo onde um grande selo de Fast-Fashion poluidor patrocina o suposto plantio de meias duzias de árvores fracas, ou jura possuir um prédio administrativo "Lixo Zero" que encobre um oceano de emissões corporativas na supply chain secundária Chinesa. 
         
Dizer ser Zero Emissões sem compensação auditável crível pelo IBAMA, Verra ou Gold Standard desmoralizar e afasta grandes investidores em massa de um polo confiante. Audite os discursos e evite ser enganado pelo Marketing Sustentável predatório nesta máquina em tempo real. Puxe pra Esquerda para acusar de Greewanshing, Puxe para a Direita se a ação corporativa cheira Bem.`,
         simulation: 'greenwash_detector'
      }
    ]
  },
  {
    id: 8,
    title: "8. Finanças Climáticas",
    subsections: [
      {
         id: '8.1',
         title: '8.1 Como Funciona a Precificação',
         content: `Para quem não lida com a biologia ou a engenharia robótica no chão de fábrica, a face restante de todo o Ecosistema Ambiental da nova era repousa no Trader de Risco (Finaceiro de Mercado). Com o mercado internacionalizado do Carbono, a folha de pagamento de empresas de Base vai chacoalhar nos Relatórios Financeiros (DRE).
         
Ativos biológicos e Cotas Climáticas estatais reagem imediatamente como "Ações na Bolsa De Valores": Uma guerra fria entre a China, aprovação de Leis rígidas do Conselho Europeu ou Eleição de presidentes Negacionistas nos EUA criam choques agressivos entre Demanda (empresas precisando correr atrás do prejuízo que o Estado regulou) e Oferta (projetos aprovados de reservas REDD+).`,
         simulation: null
      },
      {
         id: '8.2',
         title: '8.2 O Analista Gráfico Financeiro ESG',
         content: `Como a balança se move, especuladores lucram na arbitragem do Ativo Verde. Uma tonelada flutuando precificada e padronizada vira um futuro promissor, sofrendo ataques globais de Bear (pessimismo) e Bull (otimismo). Teste o poder de especulação do Gráfico CVM contra os eventos climáticos diários e simule sua intuição econômica na compra e venda do Carbono.`,
         simulation: 'carbon_price'
      }
    ]
  },
  {
    id: 9,
    title: "9. O Futuro Profissional",
    subsections: [
      {
         id: '9.1',
         title: '9.1 A Ascensão das Vagas Verdes',
         content: `A economia fóssil tem dias contados ou pelo menos será estrangulada de taxas fiscais por um planeta espremido pela ebulição do aquecimento extremo. O ecossistema ESG tem um gargalo monstruoso de talentos. Se hoje, cada mil analistas em Python focados em Web3 rodam o eixo de Startups, há uma ausência mortal de Pessoas que interligam Ciência de Dados com Modelos da Natureza na indústria.`,
         simulation: null
      },
      {
         id: '9.2',
         title: '9.2 Sua Árvore de Habilidades',
         content: `Não existem só "Engenheiros Florestais Cuidando de Planta". As Startups Web Verde clamam agressivamente por Programadores Blockchain para Tokenização do IBAMA. O mercado Faria Lima clama por Auditores que entendem Big Data Geoespacial (QGIS e Python). Bancos precisam de Advogados climáticos para contratos de 20 anos de REDD+. Use a árvore mística para cruzar seus hobbies (Escritório ou Campo? Linha de Comando ou Relatório Jurídico?) com seu possível futuro milionário no setor. A jornada de Dados começou por aqui.`,
         simulation: 'career_path'
      }
    ]
  }
];
