export const excelChapters = [
  {
    id: 1,
    title: "Fundamentos do Ambiente de Planilhas",
    avatarTip: { pt: "Células, colunas e linhas são o seu novo ecossistema. Vamos plantar fórmulas!", en: "Cells, columns, and rows are your new ecosystem. Let's plant formulas!" },
    subsections: [
      {
        id: "1.1",
        title: "A Anatomia da Planilha",
        content: "Antes de salvar o planeta, você precisa entender o terreno do Excel. Uma planilha é composta de Células organizadas em Linhas (observações do laboratório, ex: 'Amostra Água Ouro Preto') e Colunas (Variáveis medidas, ex: 'pH, Alcalinidade').",
        simulation: "AnatomyGrid"
      },
      {
        id: "1.2",
        title: "Fórmulas Nativas (Matemática Básica)",
        content: "Não digite os dados da calculadora no Excel. Envie o Excel fazer o cálculo! Aprenda como usar o símbolo `=` para iniciar contas de Soma (+), Subtração (-), Divisão (/) e Multiplicação (*), como cruzar capacidade do Aterro vs Lixo Gerado diário.",
        simulation: "FormulaBasic"
      },
      {
        id: "1.3",
        title: "Estatística Descritiva Simples",
        content: "Nenhuma prefeitura se importa com uma única gota de chuva. O que importa é a Média do mês, ou o Máximo de poluição no período. O Excel tem fórmulas nativas para tudo isso.",
        simulation: "StatsBasic"
      },
      {
        id: "1.4",
        title: "Gráficos Básicos",
        content: "Números brutos são chatos de apresentar para a diretoria. Pinte seus dados de natureza com Colunas simpáticas ou Linhas de tendências históricas.",
        simulation: "GraphBasic"
      },
      {
        id: "1.5",
        title: "Importação de Dados (CSV / JSON)",
        content: "O sensor do rio ou os cientistas de campo raramente mandarão dados em '.xlsx'. Tudo vem em texto puro CSV (Valores Separados por Vírgula). Você deve saber como guiar o Assistente para 'explodir' esse texto em uma tabela legível.",
        simulation: "ImportFlow"
      }
    ]
  },
  {
    id: 2,
    title: "Excel Básico: A Entropia da Planilha",
    avatarTip: { pt: "Trate seus dados como trata a natureza: limpe a sujeira antes de construir algo em cima.", en: "Treat your data like you treat nature: clean up the mess before building on top." },
    subsections: [
      {
        id: "2.1",
        title: "O Lixo Entra, O Lixo Sai",
        content: "\"O tratamento de dados é como a entropia: se você não colocar energia para organizar o sistema, a desordem (o erro) só aumenta.\" - Prof. Msc. Chiavini.\n\nAntes de qualquer fórmula complexa, precisamos garantir que base está sólida. A maior parte do tempo de um analista em relatórios ambientais é focado em transformar planilhas bagunçadas de campo em bases de dados tabulares estritas.",
        simulation: "Placeholder"
      }
    ]
  },
  {
    id: 3,
    title: "Organização e Higiene de Dados",
    avatarTip: { pt: "O Power Query é a máquina de reciclagem perfeita. Ele pega tabelas deformadas e devolve ouro auditable.", en: "Power Query is the perfect recycling machine. It takes deformed tables and returns auditable gold." },
    subsections: [
      {
        id: "3.1",
        title: "Tratamento de Dados de Campo",
        content: "O trabalho no campo é exaustivo: sol, lama, planilhas de papel borradas de chuva. Mas quando esses dados chegam ao computador, a tolerância a falhas acaba. Você precisa aplicar o conceito Tidy Data (Dados Limpos): Cada Variável (pH, Temperatura) deve estar numa Coluna própria. Cada Observação (Amostra A, B) numa Linha. Nunca mescle células! O algoritmo odeia design humano.",
        simulation: "Placeholder"
      },
      {
        id: "3.2",
        title: "Limpeza com Power Query",
        content: "A ferramenta mais importante do mundo corporativo moderno, para quem não programa em Python. O Power Query permite que você consolide 12 planilhas de filiais diferentes filtrando 'N/A', corrigindo formatos de data americanos (MM/DD/YYYY) e removendo duplicatas, tudo com botões, gerando um histórico auditável de cada passo aplicado.",
        simulation: "PowerQueryFlow"
      },
      {
        id: "3.3",
        title: "Conversão Automática de Unidades",
        content: "A natureza não respeita suas unidades matemáticas. O laboratório vai entregar concentração em 'mg/L', mas a agência fiscalizadora vai te pedir 'Carga Diária Diária em kg/dia'. Aprenda a criar um índice no Excel multiplicando a concentração pela 'Vazão do Rio (m³/s)' e fixando escalas de conversão absolutas usando o famoso F4 ($A$1).",
        simulation: "Placeholder"
      }
    ]
  },
  {
    id: 4,
    title: "Estatística Ambiental sem Traumas",
    avatarTip: { pt: "Média esconde desastres. A Formatação Condicional para Outliers revela o crime ambiental.", en: "Averages hide disasters. Conditional Formatting for Outliers reveals the environmental crime." },
    subsections: [
      {
        id: "4.1",
        title: "Análise Descritiva Rápida",
        content: "A Média é uma mentirosa crônica na estatística ambiental. Se um rio está limpo 364 dias no ano, mas numa terça-feira um duto estoura e joga 10 toneladas de cianeto nele... a 'Média' anual ainda parecerá excelente, mas o rio estará morto. Aprenda a confiar em funções como =MED() e na exploração do Desvio Padrão para entender o balanço real de ecossistemas instáveis.",
        simulation: "Placeholder"
      },
      {
        id: "4.2",
        title: "Identificação de Outliers pelo CONAMA",
        content: "Ler 50.000 linhas de poluição e procurar infrações é trabalho de estagiário braçal. Profissionais criam sistemas de alerta: A 'Formatação Condicional' examina celulas silenciosamente e pinta de Sangue Vivo caso a medição do 'Fósforo Total' ultrapasse o limite legal de resolução. A planilha precisa gritar para você.",
        simulation: "ExcelStats"
      },
      {
        id: "4.3",
        title: "Correlação de Variáveis no Excel",
        content: "Existe Relação Causal entre o desmatamento da mata ciliar em Km² e a mortandade de peixes da espécie X no mês passado? O Cérebro humano tenta buscar padrões onde não há. O Excel te dá a ferramenta de Matriz de Correlação e o Coeficiente R², transformando achismos ('Eu acho que influencia') em percentuais ('87% da variação se explica pelo desmate').",
        simulation: "Placeholder"
      }
    ]
  },
  {
    id: 5,
    title: "O Coração do Analista (Emissões e ESG)",
    avatarTip: { pt: "O cruzamento de PROCV com a escala do GHG Protocol é o ganha-pão do analista ESG.", en: "The intersection of VLOOKUP with the GHG Protocol table is the ESG analyst's bread and butter." },
    subsections: [
      {
        id: "5.1",
        title: "O GHG Protocol Desmistificado",
        content: "Relatórios Corporativos Sustentáveis (ESG) nascem de cálculos puros. O GHG separa poluição: Escopo 1 (Você queimou lá - ex: Trator da empresa), Escopo 2 (Energia Elétrica Comprada) e Escopo 3 (Lixo da Operação). Para o Excel, isso significa Estruturar Bancos de Dados onde a 'Fonte', 'Atividade' e o 'Combustível' são estritamente categorizados nas Colunas Corretas.",
        simulation: "Placeholder"
      },
      {
        id: "5.2",
        title: "Buscando Fatores via PROCV / XLOOKUP",
        content: "As 'Tabelas Auxiliares' são o oxigênio do Analista. Em vez de decorar que o Diesel S10 polui 2,68 Litros de CO2, você manda o `=PROCV` caçar a aba de Referências do Governo, puxar o fator de emissão do ano correspondente e multiplicar pela Litragem Mensal automaticamente. Um PROCV bem feito previne multas de auditoria.",
        simulation: "CarbonScenario"
      },
      {
        id: "5.3",
        title: "Cenários de Mitigação (What-If)",
        content: "A empresa promete ser 'Net Zero em 2040'. Legal, e como se calcula isso? Usando a ferramenta \"Gerenciador de Cenários\" e \"Tabela de Dados\" nativas do Excel, injetamos hipóteses: Frotas 100% Elétricas (-30%) x Matriz de Energia Limpa (-15%). A ferramenta modela o Futuro sem quebrar a planilha do Presente.",
        simulation: "Placeholder"
      }
    ]
  },
  {
    id: 6,
    title: "Visualização e Storytelling no Excel",
    avatarTip: { pt: "Tabelas Dinâmicas transformam centenas de registros chatos em Dashboards Ambientais Vivos.", en: "Pivot Tables turn hundreds of boring records into Living Environmental Dashboards." },
    subsections: [
      {
        id: "6.1",
        title: "Gráficos Elegantes Além da Pizza",
        content: "Engenheiros amam o Gráfico de Pizza, mas cérebros humanos são horríveis calculando Rádios visuais geométricos. Descubra os poderes do Scatterplot (Dispersão) para mostrar tendência de Clima e o imbatível Boxplot (Gráfico de Caixa) para expor graficamente quando uma empresa poluidora comete um 'Outlier' escandaloso.",
        simulation: "Placeholder"
      },
      {
        id: "6.2",
        title: "Mapas de Calor Numéricos",
        content: "Com a Tabela Dinâmica e a Formatação Condicional aplicadas em conjunto, você constrói Painéis Cruzados onde as Células perdem seus números de concentração e ganham puramente cores (Do Verde para o Negro) identificando as regiões mais afetadas por descargas tóxicas de mineração em bacias hidrográficas. Uma análise SIG poderosa escondida em um simples X e Y.",
        simulation: "Placeholder"
      },
      {
        id: "6.3",
        title: "Dashboards Ambientais Responsivos",
        content: "O Grande Finale. Você limpa os dados brutos com o Power Query, constrói modelagens GHG em tabelas fixas e então, isola tudo em uma Tabela Dinâmica guiada por Slicers (Segmentadores de Dados). O Diretor Ambiental clica no ícone 'NORDESTE', e imediatamente, todas as barras, pizzas e consumos de água do país remodelam-se elegantemente evidenciando apenas o recorte. Você transformou um TCC maçante num Sistema Gerencial Interativo.",
        simulation: "DashboardKpi"
      }
    ]
  }
];
