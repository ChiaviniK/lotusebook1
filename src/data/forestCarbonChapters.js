export const forestCarbonChapters = [
  {
    id: 1,
    title: { pt: "Módulo 1: Introdução aos Créditos de Carbono Florestal", en: "Module 1: Introduction to Forest Carbon Credits" },
    avatarTip: { pt: "Bem-vindo aos Créditos de Carbono Florestal! O mercado voluntário depende pesadamente desses ativos baseados na natureza para atingir as metas globais de Net Zero.", en: "Welcome to Forest Carbon Credits! The voluntary market relies heavily on these nature-based assets to achieve global Net Zero goals." },
    subsections: [
      {
         id: '1.1',
         title: { pt: '1.1 O Básico do Carbono Florestal', en: '1.1 The Basics of Forest Carbon' },
         content: {
            pt: `As florestas desempenham um papel crucial na mitigação das mudanças climáticas ao absorver dióxido de carbono da atmosfera e armazená-lo em sua biomassa. Esse processo natural é quantificado e monetizado através de créditos de carbono florestal. Cada crédito tipicamente representa uma tonelada métrica de CO2 removida da atmosfera ou evitada de ser emitida.`,
            en: `Forests play a crucial role in mitigating climate change by absorbing carbon dioxide from the atmosphere and storing it in their biomass. This natural process is quantified and monetized through forest carbon credits. Each credit typically represents one metric ton of CO2 either removed from the atmosphere or prevented from being emitted.`
         },
         simulation: null
      },
      {
         id: '1.2',
         title: { pt: '1.2 Tipos de Projetos Florestais', en: '1.2 Types of Forest Carbon Projects' },
         content: {
            pt: `Existem três categorias principais:
         
1. **Florestamento/Reflorestamento (ARR):** Plantio de árvores em terras que historicamente não eram florestas ou foram desmatadas há muito tempo.
2. **Manejo Florestal Melhorado (IFM):** Alterar práticas de colheita para aumentar os estoques de carbono em comparação a um cenário "business-as-usual".
3. **Redução de Emissões por Desmatamento e Degradação (REDD+):** Proteger florestas ameaçadas de serem desmatadas, gerando créditos de emissão evitada.`,
            en: `There are three primary categories:
         
1. **Afforestation/Reforestation (ARR):** Planting trees on lands that were historically not forests or were cleared long ago.
2. **Improved Forest Management (IFM):** Altering harvesting practices to increase carbon stocks compared to a business-as-usual scenario.
3. **Reducing Emissions from Deforestation and Degradation (REDD+):** Protecting threatened forests from being cleared, generating avoided emission credits.`
         },
         simulation: 'carbon_cycle_drag_drop',
         videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=T-bXZvD8e0G-eR_S"
      },
      {
         id: '1.3',
         title: { pt: '1.3 Mercado Voluntário vs. Regulado', en: '1.3 The Voluntary vs. Compliance Markets' },
         content: {
            pt: `Entender a diferença é essencial para estruturar um projeto. Mercados regulados (como Cap-and-Trade da Califórnia) têm regras rígidas obrigatórias e geralmente preços maiores. Mercados voluntários (movidos por metas ESG corporativas) oferecem mais flexibilidade, mas enfrentam escrutínio intenso sobre a qualidade e "adicionalidade".`,
            en: `Understanding the difference is key to structuring a project. Compliance markets (like the California Cap-and-Trade) have strict, government-mandated rules and usually higher prices. Voluntary markets (driven by corporate ESG goals) offer more flexibility but face intense scrutiny regarding quality and "additionality".`
         },
         simulation: null
      }
    ]
  },
  {
    id: 2,
    title: { pt: "Módulo 2: Sequestro e Adicionalidade", en: "Module 2: Sequestration and Additionality" },
    avatarTip: { pt: "Sem Adicionalidade, seu projeto é apenas um parque municipal, não um ativo comerciável! Vamos mergulhar na Linha de Base.", en: "Without Additionality, your project is just a park, not a marketable asset! Let's dive into baselines." },
    subsections: [
      {
         id: '2.1',
         title: { pt: '2.1 O Conceito de Adicionalidade', en: '2.1 The Concept of Additionality' },
         content: {
            pt: `A adicionalidade é a rocha matriz dos mercados de carbono. Um projeto é adicional se a remoção de gases de efeito estufa não ocorreria sem a receita da venda de créditos de carbono. Se você já tem obrigação legal de preservar a floresta, não pode vender créditos sobre ela.`,
            en: `Additionality is the bedrock of carbon markets. A project is additional if the greenhouse gas emission reductions or removals would not have occurred without the revenue from the carbon credits. If you were legally required to protect the forest anyway, you cannot sell credits for it.`
         },
         simulation: null
      },
      {
         id: '2.2',
         title: { pt: '2.2 Estabelecendo a Linha de Base (Baseline)', en: '2.2 Establishing Baselines' },
         content: {
            pt: `Uma linha de base é o cenário "Business as Usual" (BAU, o "Cenário Realista"). Ela desenha o que aconteceria se o projeto não existisse. O número de créditos colhidos é a diferença matemática na área entre a curva de desmatamento BAU e a curva gerada pelo seu projeto.`,
            en: `A baseline is the "Business as Usual" (BAU) scenario. It paints a picture of what happens to the carbon stocks if the project is never implemented. The number of saleable credits is the mathematical difference between your project's carbon curve and the baseline curve over the decades.`
         },
         simulation: 'baseline_builder'
      },
      {
         id: '2.3',
         title: { pt: '2.3 Risco de Vazamento (Leakage)', en: '2.3 Leakage Risk' },
         content: {
            pt: `O vazamento ocorre quando o seu projeto empurra inadvertidamente o esmatamento para outro lugar. Por exemplo, se você proibe motosserras, o madeireiro simplesmente migra para a fazenda vizinha. Desenvolvedores devem calcular e subtrair esse 'vazamento' dos créditos emitidos.`,
            en: `Leakage occurs when your project inadvertently shifts the emissions elsewhere. For example, if you protect a forest from logging, the loggers might simply move to the neighboring unprotected forest. Project developers must calculate and deduct this 'leakage' from their total issued credits.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 3,
    title: { pt: "Módulo 3: Desenho do Projeto e Viabilidade", en: "Module 3: Project Design and Feasibility" },
    avatarTip: { pt: "Antes de plantar qualquer coisa, você precisa rodar um PDD e uma dolorosa Matriz de Riscos.", en: "Before planting a single tree, you need a PDD (Project Design Document) and a robust Risk Matrix." },
    subsections: [
      {
         id: '3.1',
         title: { pt: '3.1 Avaliando a Viabilidade', en: '3.1 Assessing Feasibility' },
         content: {
            pt: `Nem toda floresta faz sentido financeiro. Fatores incluem segurança jurídica/fundiária, altos custos iniciais (cercas, guardas) e a escala mínima exigida para cobrir as auditorias caríssimas dos padrões Verra ou Gold Standard (acima de R$ 500mil).`,
            en: `Not every forest makes financial sense for carbon. Factors include land tenure security (who owns the trees?), implementation costs (fences, guards, seedlings), and the minimum scale required to cover the expensive auditing fees from bodies like Verra or Gold Standard.`
         },
         simulation: null
      },
      {
         id: '3.2',
         title: { pt: '3.2 Permanência e Riscos de Reversão', en: '3.2 Permanence and Reversal Risks' },
         content: {
            pt: `O Carbono deve ficar no solo (Geralmente por 100 anos). Um incêndio, pulgão ou invasão constitui uma "Reversão". Para mitigar este furo contábil, os registros segregam um % de seus créditos num fundo retido coletivo, conhecido como 'Buffer Pool'.`,
            en: `Carbon must stay out of the atmosphere for a long time (often 100 years). A forest fire, pest outbreak, or illegal logging event constitutes a "reversal". Registries mitigate this by holding a percentage of your generated credits in a communal "Buffer Pool" insurance fund.`
         },
         simulation: 'forest_risk_matrix'
      },
      {
         id: '3.3',
         title: { pt: '3.3 Modelagem Financeira para NBS', en: '3.3 Financial Modeling for NBS' },
         content: {
            pt: `O custo de implantação/CAPEX (viveiros de muda, infraestrutura humana) é pesadíssimo antes de 1 foha surgir, mas o retorno por remoção/emissão só acontece anos depois. Estruturar Venda à Termo (forward contracts) e financiamento alavancado (Blended) é critério vital de sobrevivência inicial do projeto de carbono florestal.`,
            en: `The upfront costs (CAPEX) of ARR projects are massive (nurseries, planting tech), while the credit issuance only happens years later when trees grow. Structuring blended finance and forward-selling contracts is critical to keeping the project alive in the early years.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 4,
    title: { pt: "Módulo 4: Quantificação e Dados", en: "Module 4: Quantification and Data" },
    avatarTip: { pt: "Auditores confiam apenas no que pode ser medido. Da fita métrica aos satélites, dados são soberanos aqui.", en: "Auditors only trust what can be measured. From tape measures to satellites, data is king here." },
    subsections: [
      {
         id: '4.1',
         title: { pt: '4.1 Inventário Florestal Tradicional', en: '4.1 Forest Inventory' },
         content: {
            pt: `O método manual em campo envolve a criação de parcelas amostrais e o uso de suta/fita diamétrica para verificar e tabelar o Diâmetro à Altura do Peito (DAP) de dezenas de árvores. Alimentadas em Equações Alométricas pesadas, nos darão a "matéria seca" total acumulada acima e abaixo do solo.`,
            en: `Traditional mensuration involves establishing sample plots and physically measuring the Diameter at Breast Height (DBH) and total height of trees. These field metrics are fed into allometric equations to estimate the total above-ground and below-ground dry biomass.`
         },
         simulation: null
      },
      {
         id: '4.2',
         title: { pt: '4.2 Sensoriamento Remoto e LiDAR', en: '4.2 Remote Sensing and Lidar' },
         content: {
            pt: `Projetos modernos mesclam amostragem física de campo com voos LiDAR (Laser pulse). Ao penetrar nos gaps da floresta nativa densa em modelo 3D, reduz drasticamente o trabalho braçal e humano em áreas superiores a 100.000 Hectares, dando precisão inquestionável para os auditores.`,
            en: `Modern projects blend field plots with LiDAR (Light Detection and Ranging) and drone imagery. Laser pulses penetrate the canopy to create high-resolution 3D models of the forest structure, vastly reducing the cost of manual labor over 100,000-hectare projects.`
         },
         simulation: 'lidar_point_scanner',
         videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=T-bXZvD8e0G-eR_S"
      },
      {
         id: '4.3',
         title: { pt: '4.3 Convertendo Biomassa em CO2 Equivalente', en: '4.3 Converting Biomass to CO2' },
         content: {
            pt: `Cerca de 50% do material seco e particulado total de uma folha é Carbono Elemental. Para comercializá-lo você precisa transformá-lo na unidade transacional: O CO2e. O multiplicador da ligação iônica do Oxigênio (O2) que reajusta a massa molecular realça a soma final (razão química 44/12). Resulto prático: 1t de Carbono se convergem em surpreendentes e rentáveis 3,67t de CO2.`,
            en: `Roughly 50% of dry wood biomass is carbon. To convert carbon mass to CO2 equivalent (CO2e), you multiply by the molecular ratio of CO2 to Carbon (which is 44/12, or exactly 3.667). 1 Ton of Carbon equals 3.667 Tons of sellable CO2e credits.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 5,
    title: { pt: "Módulo 5: Monitoramento e Verificação (MRV)", en: "Module 5: Monitoring and Verification" },
    avatarTip: { pt: "A esteira burocrática de emissão de um crédito MRV é densa e demorada. Nenhuma linha numa planilha passa em branco pela VVB.", en: "The MRV process is strict. VVB auditors will scrutinize every spreadsheet cell you've created." },
    subsections: [
      {
         id: '5.1',
         title: { pt: '5.1 O Ciclo MRV', en: '5.1 The MRV Cycle' },
         content: {
            pt: `Mensuração (M), Reporte (R), e Validação/Verificação (V). O Ciclo sagrado. Um processo constante. Todo 1 até 5 anos, o criador do PD afere a mortalidade florestal e entrega relatórios brutais de comprovação auditados estritamente por terceiros (Verification Body).`,
            en: `Measurement, Reporting, and Verification (MRV) is an ongoing cycle. Every 1 to 5 years, the developer must measure the growth, report it in a monitoring document, and hire a third-party VVB (Validation and Verification Body) to audit the claims.`
         },
         simulation: null
      },
      {
         id: '5.2',
         title: { pt: '5.2 Navegando pelos Registros Oficiais', en: '5.2 Navigating Registries' },
         content: {
            pt: `Marcas de Crivo Oficial: Verra, Gold Standart, Bionic, entre outros, engessam suas premissas baseados em "Metodologias". VM0047, VM0015, e demais. Fugas extremistas de aproximação quantitativa ou qualitativa (Vincular equações duvidosas ou contornar leis governamentais falhas) gera invalidação liminar do Projeto por décadas e estigmatização corporativa ("Bad assets").`,
            en: `Verra (VCS), Gold Standard, and the American Carbon Registry (ACR) are the gatekeepers. You must choose an approved "Methodology" (a mathematical formula manual) before the project starts. If you deviate from the Methodology, the registry will deny issuance.`
         },
         simulation: 'mrv_dashboard_sim'
      },
      {
         id: '5.3',
         title: { pt: '5.3 Emissão e Aposentadoria (Retirement)', en: '5.3 Issuance and Retirement' },
         content: {
            pt: `Os Toneladas auditadas limpas pelo processo são geradas na Blockchain de um "Bolsão central" sob um Token Unicó e transferíveis ao proprietário de origem primária (A Instituição de Fomento) - O VCU. Após a multinacional end-user gastar seu token (Atestando Carbon Neutrality), cancela-se publicamente aquele número e o crédito se auto-deleta permanentemente. É ilegal usá-lo 2 vezes.`,
            en: `Once verified, the registry mints the unique serial numbers for your credits (e.g., VCUs). When a corporation like Microsoft buys them to claim "carbon neutrality", the credits must be permanently "retired" on the public ledger so they cannot be sold twice.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 6,
    title: { pt: "Módulo 6: Impactos e Salvaguardas Sociais", en: "Module 6: Social Impacts and Safeguards" },
    avatarTip: { pt: "Ninguém aprova que multicionais enriqueçam encurralando a Comunidade isolada originária na floresta. Projetos justos entregam benefícios sólidos aos humanos sob a lona Verde.", en: "Carbon Colonialism is a severe risk. You must prove the local peoples are primary beneficiaries." },
    subsections: [
      {
         id: '6.1',
         title: { pt: '6.1 Consulta Prévias (CLPI - FPIC)', en: '6.1 Free, Prior and Informed Consent (FPIC)' },
         content: {
            pt: `Direito Humano de Povos. Nenhum consórcio financeiro entra eticamente em solo e mata da população Originária Nativa e Tradicional Indígina na Amazônia sem O Consenso Prévio, Livre, e Informado. Assinatura formal de clareza mútua que autoriza a proteção da região por 30 décadas sob regime privado - E Direito claro a dizer "Não".`,
            en: `No project can ethically or legally go forward on indigenous or traditional lands without FPIC. The community has the right to fully understand the 30-year contractual lock-in and the right to say "No" at any design stage without coercion.`
         },
         simulation: null
      },
      {
         id: '6.2',
         title: { pt: '6.2 O Padrão Premium: CCB', en: '6.2 CCB Standards' },
         content: {
            pt: `Para um crédito de Carbono saltar de 'bom' para "excepcional" e justificar prêmios no mercado corporativo ESG: Necessita-se do selo CCB (Clipa, Comunidade, Biodiversidade). Garantindo que além das árvores mantidas na fronteira deflorestal do projeto... Você implementou energia e escolas, e manteve corredores ecológicos vitais de Onças-Pintadas.`,
            en: `The Climate, Community & Biodiversity (CCB) Standards are a premium label applied on top of standard Carbon units. Buyers pay significantly more for credits that prove they build schools, protect endangered species, and provide direct cash transfers to locals.`
         },
         simulation: 'community_benefit_allocator'
      },
      {
         id: '6.3',
         title: { pt: '6.3 O Mecanismo de Repartição Financeira de Benefícios', en: '6.3 Benefit Sharing Mechanisms' },
         content: {
            pt: `Quem cuida e monitora todo o perímetro de proteção perene florestal e apaga os fogos? Uma parte brutal do Revenue Final é contratualmente direcionada às associações locais de base originária e protetora, num Benefit Sharing Framework. Repartição Justa dos Vínculos Verdes que mantêm as matrizes vivas a longo prazo.`,
            en: `A core component of the PDD is the Benefit Sharing Plan. How much of the carbon revenue goes to the developer vs. the government vs. the local families patrolling the forest? Equitable models ensure the forest is worth more standing to the locals than cut down.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 7,
    title: { pt: "Módulo 7: Tecnologia Avançada MRV na Floresta", en: "Module 7: Advanced Technology in Forestry" },
    avatarTip: { pt: "O DMRV e Satélites Militares encurtaram a verificação burocrática massiva pra meses ao invés de anos longos.", en: "Digital MRV (dMRV) is cutting the time from planting to credit issuance by half using AI." },
    subsections: [
      {
         id: '7.1',
         title: { pt: '7.1 Machine Learning no Controle do Desmatamento Premeditado', en: '7.1 AI in Deforestation Prediction' },
         content: {
            pt: `O Treino de IA cruzado com imagens retroativas de Sentinel/Landsat digere as intersecções de hidrovias e rodovias próximas prevendo as rotas exatas, manchas rurais subjacentes, prever áreas onde será iniciada incursão madeireira ilícita a fim de priorizar recursos operacionais logísticos pra Policiamento ou baseline de modelagem Adicional.`,
            en: `Machine Learning models now digest decades of satellite imagery, road networks, and commodity prices to predict exactly which forest pixels are at the highest risk of illegal logging next year, allowing for precision policing and robust BAU baselines.`
         },
         simulation: null
      },
      {
         id: '7.2',
         title: { pt: '7.2 Drones Autônomos em Processos Edge AI', en: '7.2 Drones and Edge Computing' },
         content: {
            pt: `Uma malha automatizada aérea de Drones cobrindo densidades equatoriais impenetráveis por jipes com sensores termais potentes que rodam processamento on-the-fly das chamas. Modelos autônomos pesados filtrados pelas plaquinhas de embarque eliminam a ida e vinda massante dos Gigabytes cruciais da borda periférica da floresta.`,
            en: `Swarm drones equipped with multispectral cameras can fly autonomously over dense jungles, identifying specific tree species health and soil moisture in real-time. Edge computing allows these drones to process the gigabytes of data before even landing.`
         },
         simulation: null
      },
      {
         id: '7.3',
         title: { pt: '7.3 MRV em Blockchain Web3 Decentralizada', en: '7.3 Tokenization (Web3)' },
         content: {
            pt: `As Smart Contracts (Contratos em Ethereum) garantem a distribuição dos micro-lotéricos dividendos da Natureza fragmentados direto na carteira Pix dos agricultores no exato nanosegundo automatizado pelas pontes do 'Satélite/Oracle', provando desmatamento mitigado diário sem burocracia de intermediários internacionais e ONGS sugadoras do recurso base.`,
            en: `Blockchain applications are fractionalizing ton-credits into micro-tokens, allowing retail investors to buy "kilograms" of carbon impact. Smart contracts also enable programmable payouts directly to farmers' digital wallets immediately when a satellite verifies the trees are intact.`
         },
         simulation: 'drone_forest_scanner'
      }
    ]
  },
  {
    id: 8,
    title: { pt: "Módulo 8: A Evolução Gigante do REDD+", en: "Module 8: The Evolution of REDD+" },
    avatarTip: { pt: "Sair de projetinhos pequenos para dominar Unidades Federativas (J-REDD+) evita VAZAMENTOS regionais. O estado Pará e afins já migraram.", en: "Jurisdictional REDD+ is replacing isolated projects. Entire nations are now the 'project boundary'." },
    subsections: [
      {
         id: '8.1',
         title: { pt: '8.1 Migração Total de Projetos Unitários para "Juridisionais"', en: '8.1 From Projects to Jurisdictions (J-REDD)' },
         content: {
            pt: `Acabar de uma vez com o buraco-infinito lógico em áreas de 20.000 Hectares privados onde o crime da Extração se desloca e "Vaza" pras margens do projeto (Leakage Problem). A base "Jurisdisões Envolvidas - ART TREES" faz do Estado Governo do Acre, Rondônia ou Pará um unico Projeto GIGANTE sob responsábilide sistêmica federal/Estadual totalitária.`,
            en: `To combat the "Leakage" problem inherent in small private projects, the UN and registries are pushing for Jurisdictional REDD+ (J-REDD). Here, the entire State or Country sets a baseline. If the whole State reduces deforestation, the government earns the credits (e.g., ART TREES standard).`
         },
         simulation: null
      },
      {
         id: '8.2',
         title: { pt: '8.2 Aninhamento Contábil de "Linhas" Base', en: '8.2 Nested Projects' },
         content: {
            pt: `Nesting. Não se assuste muito. Simplesmente atrelando o cálculo individual da sua fazenda protegida de 150 mil hectares ao cálculo Global Governamental das NDC Nacionais de Metas de Reduções estaduais e pátrias... Assim, evitam as catástrofes de registros de contabilização paralela dupla num país soberano e fragmentais de desvio burocrático.`,
            en: `Nesting is the complex accounting framework where a private developer's small 10,000-ha project is mathematically integrated into the Country's national carbon accounting. It ensures the private project doesn't claim credits that the government has already claimed for the Paris Agreement.`
         },
         simulation: 'jurisdictional_nesting_sim'
      },
      {
         id: '8.3',
         title: { pt: '8.3 Artigo 6 & Ajuste Correspondente Genuíno Global', en: '8.3 Corresponding Adjustments' },
         content: {
            pt: `Uma corporação estrangeira europeia da Suécia financia e retira crédito privado emitido dentro da floresta nacional Brasileira. O Regulamento base do Acordo Paris (Sessão Seis) infere que a Contabilização e a tonelada exaurida do carbono pelo Sueco seja brutalmente descontado e "DEDUZIDO" do Inventário Brasileiro. E o Brasil não pode somar politicamente na sua Meta NDC (Dupla Contagem Anulada).`,
            en: `Under Article 6 of the Paris Agreement, if a project in Brazil sells a credit to a company in Switzerland, and Switzerland uses it for its compliance, Brazil must deduct that ton from its own national inventory to prevent Double Claiming on a global level.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 9,
    title: { pt: "Módulo 9: Mercados ESG Premium e Estratégia Corporativa", en: "Module 9: High-Integrity Markets & Portfolios" },
    avatarTip: { pt: "Bancos não gostam de focar os cofres inteiramente em evitar derrubar árvores. Eles estruturam um mosaico de Plantios Extremos.", en: "Institutional investors want a mix of high-risk/high-reward pre-issuance ARR and stable IFM." },
    subsections: [
      {
         id: '9.1',
         title: { pt: '9.1 Core Carbon Principles e A Selagem de Ouro', en: '9.1 ICVCM and High-Integrity Labels' },
         content: {
            pt: `ICVCM geriu os (CCP). Frente ao enxame terrível da mídia, e alegações polêmicas pesadas que destruíram o volume global de mercado entre o biênio crítico de 22/24. Um mega-consenso que escrutina e chuta sumariamente metodologias fragilizadas. Projetos validados e auditados com carimbo Supremo do CCP serão e já são liquidados e pre-vendidos a cifras superiores por credibilidade de marca.`,
            en: `The Integrity Council for the Voluntary Carbon Market (ICVCM) established the Core Carbon Principles (CCPs). It's an overarching meta-standard meant to restore trust in the market after media scandals. Credits that earn the CCP label trade at a premium volume.`
         },
         simulation: null
      },
      {
         id: '9.2',
         title: { pt: '9.2 Transição Baseada nos Princípios NetZero de "Oxford"', en: '9.2 Portfolio Diversification' },
         content: {
            pt: `Tesourarias da Google e Meta não compram os ativos atrelados 100% num crédito "REDUCIONISTA" REDD+. Ao invés deles encheram todo o leque: 40% Florestas Salvas (Básico Defesa) 30% Florestas Plantadas Naturais ARR, e apostas severas de "Remoção Definitiva BioQuimica e Geológica". Transições contínuas e agressivas de remoção bruta absoluta em longo prazo.`,
            en: `A smart corporate buyer doesn't rely entirely on REDD+ due to permanence risks. They build a portfolio: 50% Avoidance (Forest Protection), 30% Nature Removals (Tree Planting), and 20% Technical Removals (Biochar or DAC) to hedge against reputational risks.`
         },
         simulation: 'portfolio_allocator_sim'
      },
      {
         id: '9.3',
         title: { pt: '9.3 Conclusão do Especialista: O Futuro Macro-Econômico Deste Ouro Invisível', en: '9.3 The Future of Forest Carbon' },
         content: {
            pt: `Convergindo aos gargalos inevitáveis dos Target Dates Globais: Décadas Limites 2030 (Eixo Crítico) e 2050. Escassez da matriz bruta que remove biologicamente ar livre de forma passiva trará as altas de preço assustadoramente exponenciais numa escala irreversível de Finanças Climáticas nascentes na America Latina Global Sul. O Capital verde dominará a economia.`,
            en: `As net-zero deadlines approach (2030 and 2050), the demand for high-quality nature-based removals is projected to vastly outstrip supply. The shift from cheap avoidance to expensive, durable removal credits will define the next two decades of global climate finance.`
         },
         simulation: null
      }
    ]
  }
];
