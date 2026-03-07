export const chapters = [
  {
    id: 1,
    title: "Introdução: O Poder dos Dados na Sustentabilidade",
    subsections: [
      {
        id: "1.1",
        title: "A Era dos Dados Ambientais",
        content: "Por que biólogos, engenheiros agrônomos e gestores precisam entender de dados hoje. A transição para uma economia verde exige métricas concretas e baseadas em evidências.\n\nA responsabilidade corporativa (ESG) e as leis de proteção exigem que análises rasas deem lugar ao embasamento técnico robusto. Sem dados, qualquer iniciativa sustentável é apenas 'greenwashing'.",
        simulation: "ImpactSimulator"
      },
      {
        id: "1.2",
        title: "O Mindset do Analista",
        content: "Como transformar uma pergunta ambiental (ex: 'O desmatamento aumentou?') em uma análise de dados estruturada, do planejamento à execução.\n\nUm bom analista não procura 'uma planilha qualquer'. Ele define o sujeito geográfico, o recorte temporal e as métricas absolutas que deseja medir antes de tocar no primeiro byte de dado.",
        simulation: "QuestionBuilder"
      }
    ]
  },
  {
    id: 2,
    title: "Onde Estão os Dados? (Fontes Ambientais)",
    subsections: [
      {
        id: "2.1",
        title: "Dados Públicos e APIs",
        content: "Como acessar bases vitais como INPE para monitoramento florestal, IBGE para recortes censitários territoriais e ANA para recursos hídricos.\n\nGrande parte desses dados está disponível via APIs governamentais abertas, prontas para serem mapeadas por scripts.",
        simulation: "DataFetcherMock"
      },
      {
        id: "2.2",
        title: "Satélites e Visão Computacional",
        content: "Organizando planilhas de monitoramento local sem erros comuns. A importância da taxonomia consistente e boas práticas de coleta.\n\nUma introdução visual ao que os dados de sensoriamento remoto podem nos dizer, desde o índice NDVI até rastreamento de focos de calor com a constelação Landsat e Sentinel.",
        simulation: "NDVIViewer"
      },
      {
        id: "2.3",
        title: "Formatos: CSV, JSON e XLSX",
        content: "Nem todo dado é igual. Um CSV é texto puro, leve e rápido. Um XLSX carrega formatação visual, pesando a máquina. Um JSON é hierárquico, ideal para comunicação entre servidores e APIs governamentais (teia de dados). Saber escolher o formato define a eficiência de seu projeto.",
        simulation: "DataFormatQuiz"
      }
    ]
  },
  {
    id: 3,
    title: "Arrumando a Casa: Limpeza de Dados",
    subsections: [
      {
        id: "3.1",
        title: "O Caos das Planilhas e Padronização",
        content: "Como lidar com erros de digitação e a necessidade de unificar unidades de medida (hectares vs acres), formatos de datas (ISO 8601) e coerência em coordenadas geográficas (Lat/Long decimais).",
        simulation: "TableCleaner"
      },
      {
        id: "3.2",
        title: "Lidando com Outliers e Valores Faltantes",
        content: "Um dos maiores dilemas: quando uma célula está vazia (NaN/Null), você deve deletar a linha toda, inferir usando a média local ou ignorar?\n\nDependendo da sua abordagem técnica de 'Imputation', você pode salvar ou destruir os seus resultados estatísticos finais.",
        simulation: "ImputationSim"
      }
    ]
  },
  {
    id: 4,
    title: "Ferramentas 'Low-Code' e 'No-Code'",
    subsections: [
      {
        id: "4.1",
        title: "Escolhendo a Ferramenta Certa",
        content: "Apresentação de ferramentas visuais robustas. O Excel trava com grandes volumes de dados. Ferramentas como Orange Data Mining, QGIS, e Power BI montam pipelines gigantescos sem necessidade de engenharia de software complexa.",
        simulation: "ArchitectureQuiz"
      },
      {
        id: "4.2",
        title: "Lógica de Pipeline Visual",
        content: "Entender de programação é entender de fluxos lógicos. Mesmo no 'No-Code', você aplica um sequenciamento matemático: (1) Ler, (2) Filtrar, (3) Agrupar, (4) Modelar, (5) Visualizar.",
        simulation: "PipelineBuilder"
      },
      {
        id: "4.3",
        title: "O Limite e o Poder das Planilhas",
        content: "Independente do Low-Code, grande parte das análises pontuais ainda acontecem no Excel/Google Sheets. A manipulação fluida de colunas e cálculos locais (ex: SOMA, PROCV) são essenciais para auditar datasets antes das automações.",
        simulation: "ExcelMock"
      }
    ]
  },
  {
    id: 5,
    title: "Estatística Ambiental Descomplicada",
    subsections: [
      {
        id: "5.1",
        title: "Tendências, Médias e Anomalias",
        content: "O que é normal e o que é anomalia em séries temporais climáticas. Como calcular desvios padrões para compreender extremos climáticos, e como eles estão se tornando o 'novo normal'.",
        simulation: "AnomalyDetector"
      },
      {
        id: "5.2",
        title: "Correlação vs Causalidade",
        content: "A relação entre variáveis (ex: Umidade vs. Incidência de Pragas). A correlação de Pearson (R²) varia de 0 (caótico) a 1 (perfeitamente atrelado).\n\nMas lembre-se, o canto dos pássaros não faz o sol nascer, eles apenas têm correlação com o mesmo horário.",
        simulation: "ScatterCorrelation"
      }
    ]
  },
  {
    id: 6,
    title: "Visualização de Dados e Storytelling",
    subsections: [
      {
        id: "6.1",
        title: "O Gráfico Certo para a Pergunta Certa",
        content: "Gráficos de pizza são terríveis para variação temporal. Gráficos de barra escondem distribuições complexas. Box-plots assustam leigos. O segredo da visualização ambiental é a empatia com o público-alvo.",
        simulation: "ChartSelector"
      },
      {
        id: "6.2",
        title: "Cuidado e Acessibilidade nas Cores",
        content: "Escalas de mapas padrão (Arco-Íris) induzem o cérebro a ver barreiras territoriais que não existem na natureza, e destroem a acessibilidade para cerca de 8% da população masculina que possui alguma forma de daltonismo.",
        simulation: "ColorblindTest"
      },
      {
        id: "6.3",
        title: "Sistemas de Informação Geográfica (SIG)",
        content: "A cartografia tradicional evoluiu para Sistemas de Informação Geográfica baseados na Web (WebGIS). Hoje, a análise não termina em um arquivo estático (PDF), mas sim na web, onde os tomadores de decisão podem cruzar camadas, aplicar zoom e investigar dados florestais nativamente nos navegadores.",
        simulation: "SigMapSimulation"
      },
      {
        id: "6.4",
        title: "Laboratório Visual",
        content: "A teoria só é absorvida com a prática. Quando temos dimensões variadas de dados, colocar cada eixo no formato visual adequado é o segredo para transformar números frios em narrativas de impacto.",
        simulation: "ChartBuilder"
      }
    ]
  },
  {
    id: 7,
    title: "O Próximo Passo: IA e Automação",
    subsections: [
      {
        id: "7.1",
        title: "Scripts Rápidos Pelo Mundo Real",
        content: "Como o Machine Learning está ajudando a prever mudanças climáticas e categorizar imagens.\n\nUm convite prático a linguagens como Python (GeoPandas, scikit-learn), desmistificando o prompt e a interface de código.",
        simulation: "PythonTerminal"
      },
      {
        id: "7.2",
        title: "Por Dentro de Uma Árvore de Decisão",
        content: "A 'Inteligência Artificial' mais poderosa do mercado ambiental são os modelos ensembles baseados em árvores, como o Random Forest.\n\nEles votam juntos para classificar se o satélite está vendo um 'Desmatamento' ou apenas um 'Banco de Areia' na margem do rio Seco.",
        simulation: "RandomForestMock"
      }
    ]
  },
  {
    id: 8,
    title: "Módulo Especial: Python Básico para Dados",
    subsections: [
      {
        id: "8.1",
        title: "Pandas: A Planilha do Programador",
        content: "Na ciência de dados Python, o 'Pandas' é a sua tabela. Nele, você manipula 5 milhões de linhas tão rápido quanto manipularia 50 no Excel. Para iniciar, você precisa saber importar o dataset para a mémoria (DataFrame).",
        simulation: "PandasDragDrop"
      },
      {
        id: "8.2",
        title: "Fatiar e Filtrar",
        content: "Com a tabela na memória, o próximo passo lógico é aplicar filtros matemáticos. Assim como no Excel clicamos na 'setinha' do cabeçalho, no Python nós rodamos comandos declarativos para isolar a amostra estudada.",
        simulation: "PandasFilterDragDrop"
      }
    ]
  }
];
