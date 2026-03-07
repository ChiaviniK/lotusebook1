export const pythonChapters = [
  {
    id: 1,
    title: "O 'Setup' do Analista Ambiental",
    content: "Instalar Python no Windows da empresa geralmente requer permissões de TI irritantes que levam semanas. Para evitar a burocracia e pular direto para a análise, O Analista Moderno usa a Nuvem.\n\nNós usamos Plataformas como o Google Colab ou Kaggle: Máquinas alugadas gratuitas do Google que rodam diretamente no seu Navegador, com toda a potência de processamento instalada. Você abre uma aba, digita o código, e tem resposta instantânea.",
    subsections: [
      {
        id: "1.1",
        title: "Ambiente de Trabalho (Colab)",
        content: "O 'Caderno Jupyter' (Notebook) é uma folha em branco interativa. Você pode misturar Texto com formatação (para explicar sua metodologia de cálculo) e Células Executáveis Poluidoras (onde roda o script). É a forma perfeita de montar Laudos Técnicos que contêm toda a prova matemática que originaram o resultado final. O IBAMA não quer apenas ver seu gráfico, ele quer rodar sua matemática.",
        simulation: "ColabSimulator"
      },
      {
        id: "1.2",
        title: "Variáveis e Tipos",
        content: "Computadores são burros, apenas muito rápidos. Você precisa dizer a eles qual o contexto de algo. Uma Temperatura de 34.5°C é um 'Float' (Número Quebrado). Uma espécie de Macaco ('Alouatta guariba') é uma 'String' (Texto, isolado por aspas). Uma data de chuva ('2025-10-12') precisa ser ensinada como 'Datetime', do contrário o computador pode tentar subtrair o ano do mês.",
        simulation: "PythonVariables"
      },
      {
        id: "1.3",
        title: "Lógica de Automação (IF/ELSE)",
        content: "A Lógica de Programação é a essência de como conversar com o Cérebro de Silício. Baseia-se em Condições de Causa e Efeito. Se ('IF') o Sensor Na represa indicar Nível > 4 Metros, Faça Isso ('THEN') - Envie e-mail para defesa civil. Senão ('ELSE'), mantenha a bomba ligada. Essa fundação permite vigiar reservatórios industriais 24h por dia sem intervir humanamente.",
        simulation: "LogicBuilder"
      }
    ]
  },
  {
    id: 2,
    title: "O Canivete Suíço (Biblioteca Pandas)",
    content: "Você aprendeu as variáveis puras do Python. Lindo. Mas planilhas florestais com 30 anos de dados florestais têm milhões de cédulas. O Python Base engasgaria.\n\nAqui, entra o grande Matador: a biblioteca PANDAS (Python Data Analysis). Importamos ela no formato `import pandas as pd`. Ela adiciona a super-classe estrutural chamada 'DataFrame'. Um DataFrame não é uma tabela... É um banco de dados que voa com aceleração baseada em Vetores matemáticos de Memória RAM.",
    subsections: [
      {
        id: "2.1",
        title: "Importação: Destruindo o Loading",
        content: "Abrir um arquivo gigante num Excel comum bloqueia sua tela com a temida roda azul giratória de loading por 5 minutos antes de, fatalmente, fechar sozinho por 'Falta de Memória'. No Pandas, você instrui a leitura `pd.read_csv('clima_historico.csv')` e em Frações de segundo a matriz está disponível para cálculos porque ela jamais desenha de fato toda a tabela na sua interface gráfica limitante.",
        simulation: "PandasVsExcel"
      },
      {
        id: "2.2",
        title: "Filtros Inteligentes de Bioma",
        content: "No painel visual o estagiário clicaria no Funil e desmarcaria quadradinhos 500 vezes para selecionar apenas 'Amazônia'. O Engenheiro de Pandas usa sub-seleções matriciais ou máscaras booleanas. `df[df['Bioma'] == 'Amazonia']`. E pronto. Quer ser mais complexo? Traga apenas Áreas Queimadas MAIOR QUE 50 Hectares NO ANO de 2024. Uma sintaxe de uma linha `(df['ano']==2024) & (df['area'] > 50)` retorna seu DataSet purificado para a próxima etapa sem suar ou perder o histórico.",
        simulation: "PandasFilter"
      },
      {
        id: "2.3",
        title: "Cálculos em Massa Verticais",
        content: "O GroupBy do Pandas. A ferramenta agregadora definitiva de Cientistas de Dados. Você possui os laudos de 45 Estações de Tratamento de Esgoto durante os 12 meses do ano. Quantos laudos médios a Estação Y tirou em Julho? Aplicando `.groupby(['Estacao', 'Mes']).mean()`, ele dobra a malha multidimensional, condensa as colunas requisitadas, ignora erros e gospe uma matriz perfeitamente limpa para plotagem em Milissegundos.",
        simulation: "PandasGroupby"
      }
    ]
  },
  {
    id: 3,
    title: "Visualização Científica Elegante (Seaborn)",
    content: "Quando você termina seus filtros com a força de manipulação do PANDAS, você terá uma tabela condensada perfeita. Mas, ninguém lê tabelas no Linkedin ou em Jornais Acadêmicos, as pessoas leem Figuras.\n\nAqui usaremos as potentes bibliotecas de plotagem Vetorial `Matplotlib` e a sua prima estética de alto padrão `Seaborn`. Esqueça os Gráficos Pizza sem graça do Word, você criará arquiteturas visuais que contam verdades irrefutáveis do meio ambiente.",
    subsections: [
      {
        id: "3.1",
        title: "Gráficos de Linha - Séries Temporais",
        content: "A série Temporal prova tendências. Usando pacotes Python podemos tratar dados diários de chuva e rodar Janelas de Média Móvel (`rolling()`). Ao invés de exibir todos os dias que choveu no rio ativando uma imagem barulhenta e denteada (Spikes)... você instrui o Matplotlib a desenhar uma linha de Tendência Anual Suave, clareando aos acionistas que ano a ano (independentemente do mês isolado), a região sofre Stress Hídrico grave acelerado.",
        simulation: "TimeTrendPlot"
      },
      {
        id: "3.2",
        title: "Histograma - Distribuição Biológica",
        content: "O Histograma não olha tendências temporais. O Histograma é a Fotografia da Saúde Fisiológica atual de uma população. Imagine plotar 50.000 árvores coletadas em um inventário em um eixo de Diâmetro da Copa. Se você tiver uma curva Bell curvada apenas nos diâmetros pequenos, parabéns: A floresta é secundária e em regeneração precoce pós corte-raso. O Histograma não perdoa erros.",
        simulation: "SeabornPlotter"
      },
      {
        id: "3.3",
        title: "Mapas de Calor (Heatmaps) e Correlação",
        content: "Para desmitificar conexões impossíveis. Você cruza o Ph do efluente, A Temperatura ambiente e o Peso das Iscas capturadas de um manancial poluído. Passar isso por um `sns.heatmap(df.corr())` vai gerar quadrados variando do Vermelho Queimado ao Azul Frio baseados em 1 e -1 (Correlação de Pearson). Se Variável X subir e Y descer radicalmente... a cor escurece e grita em vermelho na cara da diretoria a culpabilidade material do maquinário industrial da fábrica.",
        simulation: "CorrelationHeatmap"
      }
    ]
  },
  {
    id: 4,
    title: "Introdução Espacial (Geopandas)",
    content: "Estatísticas em planilhas são abstratas. Mas a poluição escorre em bacias geológicas reais. A cereja do bolo da capacitação ambiental avançada em Python envolve lidar com Geometrias.\n\nO `GeoPandas` não lê dados; ele lê Formatos Espaciais (Shapefiles). E então subitamente, suas colunas recebem um polígono espacial de GPS. E tabelas passam a ser desenhadas em Cartogramas que o Governo entende e fiscaliza (Auditoria cruzada com CAR, SIGEF, CCIR).",
    subsections: [
      {
        id: "4.1",
        title: "A Lógica de Formatos Geo",
        content: "Diferencie dados Raster e Vetor. O Shapefile (.shp) da ESRI era Rei mas engessava seus cruzamentos e exigia sub-arquivos paralelos inseparáveis (.shx, .dbf). O formato Moderno de integração WEB Livre e veloz para Python e Javascript é o `GeoJSON`. Ele converte os vértices de uma propriedade rural ou reserva inteira em código texto puro, e o analista pode usar APIs para checar remotamente se o Poligono interceptou um Território Indígena sem abrir os 15 Gigas do Qgis.",
        simulation: "GeojsonViewer"
      },
      {
        id: "4.2",
        title: "Plotagem Espacial Rápida",
        content: "Assim como o Plot Simples do Pandas. O GeoPandas usa um único `.plot()` após carregar seu Shapefile. Mas invés de gerar gráficos eixos X Y de Barras... Ele desenha no Vazio o mapa perfeitamente contornado e escalado dos recortes territoriais (Uma Cidade e os Pontos de Incêndio dentro dela). Tudo isso programado em 3 linhas.",
        simulation: "SpatialPlot"
      },
      {
        id: "4.3",
        title: "Intersect e BufferGeo",
        content: "O cruzamento Analítico Geoespacial de Causa Raiz. Em vez do \"Seja CNPJ Y\", nós executamos `gpd.sjoin()`. \"Some todos os Incêndios que a Coordenada X (Ponto) intersecta Exatamente em Cima (Intersects) e à Raio de até 300 Metros (Buffer Distance) do Polígono Demarcado de Fazenda Z\". Essa rotina algoritmica detecta grilagem automática varrendo deuses cartesianos em frações de segundos.",
        simulation: "BufferIntersect"
      }
    ]
  }
];
