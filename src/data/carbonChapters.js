export const carbonChapters = [
  {
    id: 1,
    title: "Módulo 1: Introdução aos Créditos de Carbono",
    avatarTip: { pt: "Bem-vindo ao Kuro-Obi do ESG! Para faturar no mercado climático, você primeiro precisa entender o 'porquê' a tonelada de fumaça virou dinheiro.", en: "Welcome to the ESG Black Belt! To profit in the climate market, you first need to understand 'why' a ton of smoke became money." },
    subsections: [
      {
         id: '1.1',
         title: '1.1 A Emergência dos Gases de Efeito Estufa (GEE)',
         content: `A atmosfera terrestre sempre teve gases de efeito estufa (GEE), responsáveis por reter calor e permitir a vida. No entanto, desde a Revolução Industrial, a queima massiva de combustíveis fósseis (carvão, petróleo, gás natural) pelo homo sapiens elevou artificialmente essa concentração, aprisionando muito mais radiação solar e causando a fervura global acelerada.
         
A comunidade global e a Faria Lima perceberam tarde os impactos drásticos nos Portfólios de Riscos (Climate Risk): derretimento de rotas marítimas, secas extremas quebrando safras do Agro e perda colossal de bilhões em infraestrutura. A necessidade de frear as emissões antes de atingir +1.5°C tornou-se uma urgência civilizacional e econômica.`,
         simulation: null
      },
      {
         id: '1.2',
         title: '1.2 O Protocolo de Quioto e a Precificação',
         content: `O **Protocolo de Quioto (1997)** foi o primeiro grande tratado (binding treaty) que impôs metas rígidas e quantificadas de redução de GEE para países desenvolvidos do Anexo I. Ele criou o Mecanismo de Desenvolvimento Limpo (MDL), uma genialidade financeira onde os países ricos podiam investir em projetos sustentáveis nos países em desenvolvimento (mais baratos) para abater suas próprias metas caras em casa. Estava criada a semente do **Crédito de Carbono**.
         
Em essência, colocou-se um "Preço" na tonelada invisível. Se custa 100 Dólares para trocar a termelétrica por Solar na Alemanha, mas custa 10 Dólares preservar uma Floresta no Brasil que suga a mesma quantidade de impacto, o fluxo de capital verde começou a fluir do Norte para o Sul Global.`,
         simulation: null,
         videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=T-bXZvD8e0G-eR_S" // Placeholder educativo
      },
      {
         id: '1.3',
         title: '1.3 O Acordo de Paris e o Artigo 6',
         content: `O **Acordo de Paris (2015)** modernizou o cenário engessado de Quioto. A grande virada de chave: Todos os países, ricos e pobres, assumiram metas voluntárias de redução chamadas NDCs (Contribuições Nacionalmente Determinadas). 
         
O coração do mercado pós-2020 é o **Artigo 6** do Acordo, que pavimentou a regra de Ouro para os "Resultados de Mitigação Transferidos Internacionalmente" (ITMOs). A Suíça, por exemplo, não tem terras suficientes para plantar árvores e zerar suas NDCs, então ela paga milhões para registrar toneladas economizadas em Biogás no Senegal ou Gana. É o suprassumo do Comércio Internacional Climático.`,
         simulation: null
      },
      {
         id: '1.4',
         title: '1.4 Mercados: Regulado vs Voluntário',
         content: `Não confunda as prateleiras: o "Supermercado do Carbono" é dividido em dois andares muito distintos que moldam o jogo de quem vive disso.
         
1. **Mercado Regulado (Compliance):** Criado por Força de Lei. Os governos tributam empresas sujas ou criam limites mandatórios (Cap). Cimenteiras, Siderúrgicas e Companhias Aéreas são obrigadas por Lei a buscar cotas oficiais. É onde rolam os Bilhões sistêmicos em bolsas (como o ETS Europeu).
2. **Mercado Voluntário (VCM):** Sem leis, apenas reputação. Move-se por gigantes como Apple e Disney que querem prometer aos seus acionistas produtos 'Neutros em Carbono'. Eles financiam voluntariamente ONGs e Desenvolvedores de Projetos (REDD+) na Amazônia ou África por uma questão de Marketing Verde (ESG Rating) e antecipação de risco de imagem.`,
         simulation: 'kyoto_timeline'
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Conceitos Gerais e Realidade Atual",
    avatarTip: { pt: "Cuidado! Na Faria Lima, NetZero não significa 'parar de poluir', significa compensar toda a fumaça que você faz usando a matemática de um P&L (Profit and Loss).", en: "Careful! In Wall Street, NetZero doesn't mean 'stop polluting', it means offsetting all the smoke you make using P&L math." },
    subsections: [
      {
         id: '2.1',
         title: '2.1 Neutralidade vs Carbono Negativo vs NetZero',
         content: `A confusão semântica lidera o Greenwashing corporativo. Vamos alinhar como a Faria Lima e o C-Level tratam esses conceitos vitais:
         
* **Neutralidade de Carbono (Carbon Neutral):** A empresa mediu sua emissão X e comprou projetos florestais (Créditos) no valor X para igualar a balança. Ela não mudou seu processo interno sujo, apenas pagou o "pedágio".
* **NetZero (O Padrão Ouro SBTi):** A empresa não apenas compra créditos para encobrir suas falhas, ela ativamente modifica sua matriz produtiva. Reduz 90% das suas emissões trocando frotas por elétricos, alterando design industrial etc. Os 10% residuais "impossíveis" de cortar com tecnologia hoje, ela compra de Projetos de Remoção (Sequestro).
* **Carbono Negativo / Climate Positive:** Extrema excelência. A Microsoft declarou isso: Não só a empresa suga mais carbono hoje do que emite anualmente, ela comprou projetos massivos de captura direta do ar e plantio (NBS e TBS) para tentar apagar todo o Carbono histórico que ela emitiu desde o ano em que foi fundada na década de 70.`,
         simulation: null
      },
      {
         id: '2.2',
         title: '2.2 A Matemática Contábil: GHG Protocol',
         content: `O **GHG Protocol** (Greenhouse Gas Protocol) é o livro-caixa global, a Bíblia contábil usada pelas empresas para medir e relatar emissões de Gases de Efeito Estufa nas DR (Demonstrações de Resultados) ESG. É classificado em três temíveis "Escopos":
         
1. **Escopo 1 (Controle Total Direto):** As chaminés da sua fábrica. Os escapamentos da frota de caminhões que leva o seu logo na caçamba. O gás vazando da sua caldeira. 
2. **Escopo 2 (Eletricidade Adquirida):** Você não queima carvão, mas a Enel de quem você compra energia de Itaipu pra ligar sua fábrica de sapatos, sim. Se a grade nacional do país é suja, o seu Escopo 2 explode.
3. **Escopo 3 (Cadeia de Valor Oculta):** O terror dos Auditores. Representa entre 70% a 90% da pegada corporativa. São as emissões de tudo que você não controla: A fumaça do barco na China que trouxe a sola do seu tênis; O lixo que o cliente gera quando joga a caixa do seu tênis no mar; Os voos de Uber que seus funcionários pegam pra ir pro trabalho.`,
         simulation: null
      },
      {
         id: '2.3',
         title: '2.3 Não Emissão (Evitamento) versus Sequestro',
         content: `No mercado de ativos, "Salvar uma árvore" vale diferente de "Plantar uma árvore", mesmo que o volume de GEE impactado seja o mesmo de 1 Tonelada Equivalente (tCO2e).
         
- **Projetos de Evitamento (Avoidance):** O desmatamento ia ocorrer no Mato Grosso, e o dono da terra comprova matematicamente que paralisou os tratores para vender o carbono em vez da soja. Você *evitou* a fumaça de subir. Projetos Eólicos também evitam (porque evitam o país de queimar carvão térmico). São projetos de ação no *presente* para frear as emissões brutas daquela conta.
- **Projetos de Remoção/Sequestro (Removal):** O Carbono já está fedendo lá na Atmosfera. Aqui, investe-se em pastos mortos para plantar árvores Nativa que crescerão sugando fisicamente (fotossíntese biológica) o ar sujo. Custa muito mais caro que o Evitamento, mas tem maior robustez no longo prazo do selo NetZero corporativo, pois é uma ação de limpeza real (Aspirador).`,
         simulation: null
      },
      {
         id: '2.4',
         title: '2.4 O Sistema Europeu Cap & Trade (ETS)',
         content: `O pináculo da burocracia bem-sucedida do Mercado Regulado é o **EU ETS** (European Union Emissions Trading System). Ele funciona sob o princípio de "Cap and Trade" (Limite e Comércio).
         
O governo estabelece um Limite (Cap) rígido de emissões para o país. Ele reparte esse cap na forma de "Cotas Virtuais" e dá pras Siderúrgicas. Se a fábrica X emitiu menos GEE que o seu Limite anual porque melhorou suas caldeiras para Hidrogênio Verde, sobram Cotas na sua carteira. A Siderúrgica Y estourou o limite e vai sofrer multas milionárias da Coroa. O que a Empresa X faz? Ela vai na "Bolsa de Valores" e negocia a sobra de suas cotas (Trade) cobrando caro da Empresa Y. Ganha-se dinheiro sendo eficiente. Pratique esse modelo a seguir.`,
         simulation: 'cap_and_trade'
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: O Mercado Regulado Brasileiro",
    avatarTip: { pt: "O Brasil aprovou o Lei para o SBCE. Em breve, agronegócio e a indústria estarão pagando e sentindo na pele as penalidades climáticas, assim como multas fiscais comuns.", en: "Brazil approved the ETS Law. Soon, agribusiness and industry will be paying and feeling climate penalties, just like common tax fines." },
    subsections: [
      {
         id: '3.1',
         title: '3.1 O Nascimento do SBCE',
         content: `Após quase uma década de intensa estruturação de projeto de Lei, o gigante Sul-americano finalmente concebeu o seu **SBCE (Sistema Brasileiro de Comércio de Emissões)**. O Brasil se torna o epicentro global definitivo por possuir o maior potencial de Bioeconomia natural da Via Láctea, cruzando a barreira puramente agropecuária para a Regulação de Alta Finança Climática.
         
A regra é clara: Empresas/Atividades que emitirem mais de *10 Milhões de Toneladas* ao ano caem na "Obrigação de Relato" formal. E a tesoura principal opera sob as que quebrarem a tampa dos *25 Milhões de Toneladas* ou mais (Siderurgia, Cimentarias, Eletrointensivas, Óleo & Gás) que entram plenamente como **Operadores Regulados**. Essas gigantes corporativas deverão casar as suas planilhas de chaminé contra Cotas ou Certificados para evitar sanções cruéis.`,
         simulation: null
      },
      {
         id: '3.2',
         title: '3.2 Ativos Estatais: CBE (A Cota de Emissão)',
         content: `O sangue que flui nos data-centers do Governo será o **CBE (Cota Brasileira de Emissão)**. Uma (1) CBE lhe dá o direito formal legal de jogar na atmosfera do Brasil Uma (1) tonelada de Gases de Efeito Estufa (tCO2e).
         
Nenhum CBE é "Criado pela Natureza". É um arquivo digital outorgado ou leiloado pelo Ministério da Fazenda / Meio Ambiente. O mercado corporativo opera os CBEs. Se uma Termoelétrica do Sul fechar em déficit, ela é autuada. Logo sua Mesa de Operações buscará Ativos CBE em corretoras B3 das Mãos das poucas indústrias que tiveram folga operacional e "fizeram o dever de casa melhor". A eficiência industrial vira Commodity pura.`,
         simulation: null
      },
      {
         id: '3.3',
         title: '3.3 Ativos Biológicos: CRVE (O Crédito de Carbono Real)',
         content: `Aqui mora a magia do Bioma. Enquanto o CBE é "uma permissão do governo para poluir", o **CRVE (Certificado de Redução ou Remoção Verificada de Emissões)** atesta que você destruiu carbono de verdade perante a química do globo.
         
Nasce de Reduções (NBS) e de Remoções (TBS ou Reflorestamentos Ouro). Quem compra Floresta e salva a Amazônia ganha CRVE. Qual é o Link maravilhoso entre os dois mundos? O Governo permite que as Indústrias Sujas Reguladas usem CRVEs para "Tampar os Furos" das suas faltas de Cotas (CBE). Isso suga a liquidez do ativo biológico do desenvolvedor florestal e inunda de dinheiro a base da pirâmide sustentável de quem plantou e guardou a floresta brasileira em biomas nativos.`,
         simulation: null
      },
      {
         id: '3.4',
         title: '3.4 Obrigações Financeiras e Penalidades Fiscais',
         content: `Ignorar o painel da contabilidade do Carbono vai sair mais caro do que falhar com a Receita Federal ou com a CVM. No SBCE, a Inadimplência Climática carrega força de sansão severa. A multa prevista recai até Milhões de Reais ou percentuais destrutivos sobre o Faturamento Bruto da Companhia que não fechar a conta do "Reconcile" anual de emissões.
         
Além da multa punitiva, a "Vergonha Pública" por Listas Negras que arranham a governança Corporativa trava Empréstimos Subsidiados no BNDES ou impede que o CNPJ opere em blocos globais exigentes como a Europa. Pratique o balanço (Tesouraria X Cotas) usando seu chapéu FariaLimer.`,
         simulation: 'cbe_wallet'
      }
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Regulação, MRV e Blockchain",
    avatarTip: { pt: "Não existe confiança no Excel se as planilhas forem forjadas pelo Desenvolvedor! É aqui que o MRV exigido pela ONU e apoiado por Criptógrafias vira a auditoria perfeita que a Faria Lima e Wall Street abraçam como verdade absoluta.", en: "There is no trust in Excel if spreadsheets are forged! This is where UN-required MRV supported by Cryptography becomes the perfect audit." },
    subsections: [
      {
         id: '4.1',
         title: '4.1 Ciência Contábil: MRV',
         content: `Qualquer menino pode tirar foto de uma muda de Pitangueira e dizer: "Me passa 50 Reais, plantei um Crédito". O pilar de concreto que evita que bilhões em capital sumam em golpes e poeira verde é a santa Trindade: o **MRV (Mensuração, Relato e Verificação)**.
         
- **M (Mensuração):** Dados satelitais LIDAR, Equações Alométricas pesadíssimas de biometria florestal (Qual é o diâmetro da Casca? Qual a altura? Equivale a quantos Kilos de biomassa morta/viva?).
- **R (Relato - Reporting):** Escrever laudos complexos (PDDs - Project Design Documents), preencher extensas evidências documentais das aldeias ao Governo.
- **V (Verificação):** O projeto preencheu tudo no M e no R brilhantemente? Chama-se a VVB (Validation and Verification Body) — que é obrigatoriamente um auditor externo, chato, pago pela ONU ou terceiros imaculados (SGS, TUV) para viajar dias de canoa, visitar a fazenda, medir as madeiras com as próprias mãos (Trena Florestal) para aprovar cada documento Excel assinado em sangue.`,
         simulation: null
      },
      {
         id: '4.2',
         title: '4.2 A Lei da Adicionalidade',
         content: `A Regra de Ouro Inviolável do mercado: "**Adicionalidade**". Um projeto ESG só tem o direito biológico, ético e contábil de virar um CRVE e ser negociado na Bolsa para abater as emissões da Coca-Cola se for provado que "Essa área teria inevitavelmente queimado ou sido devastada e destruída não fosse o aporte e o freio que o projeto financeiro e intervenção atípica que meu esforço originou".
         
Se você é dono de uma RPPN intocada do Governo onde já é Crime Inafiançável cortar árvores por Lei, a Faria Lima não paga por ela. Porquê? Porque você era OBRIGADO a cuidar dela, então não houve nenhum "esforço adicional de melhoria" em relação à linha de base trágica ("Business as Usual" - BAU). O adicional mede a curva que você evitou.`,
         simulation: null
      },
      {
         id: '4.3',
         title: '4.3 O Terror Corporativo: A Dupla Contagem',
         content: `Múltiplos escândalos internacionais do Acordo de Paris primitivo originaram-se num golpe contábil trivial: A "Dupla Contagem" (Double Counting). 
         
A Fazenda Boa Vista gerou e validou legalmente 100 Mil Tons de Ouro Verde via MRV robusto. Em vez de vender na Plataforma Limpa do Verra, vendeu off-script pra Alemanha para bater NDCs estatais. Meses depois, a Fazenda imprime um relatório falsificado alegando "Venda Corporativa" da mesmíssima safra e vende os 100 Mil de novo (para a Shell se dizer Net Zero na propaganda do F1). O planeta continuou fumaçando por 200 Mil (as dezenas das empresas e governos compensadas) e apenas metade do benefício real existiu. Todo mundo foi enganado pela maquiagem do Banco de Dados Centralizado (SQL).`,
         simulation: null
      },
      {
         id: '4.4',
         title: '4.4 A Revolução do Blockchain em Registros Climáticos',
         content: `Para curar o câncer da Dupla Contagem, fundações como VCU, Flowcarbon ou entidades Registradoras Federais abraçam a força irrastreável Web3: os Smart Contracts e Meta-Dados imutáveis num **Blockchain**.
         
As 100 mil Tons são cunhadas ("Mintadas") numa rede pública rastreável pela CVM (Como Polkadot ou Ethereum Clima). Cada Tonelada vira 1 Token Não-Fungível ou Ativo de Contrato de Token, portando a Data Espacial do Satélite. Quando a Shell "compra" para compensar as emissões das plataformas de Petróleo, ela precisa ejetar aquele token e realizar o "Burn in" num endereço de queima pública de Wallet nula ("0x00...00"). A cadeia é registrada irreversivelmente na Mainnet. Se a fazenda tenta re-vendar, o Hash acusa saldo zero, invalidando o esquema contábil. Sinta na prática o registro interativo abaixo!`,
         simulation: 'blockchain_mrv'
      }
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Projetos NBS (Nature-Based Solutions)",
    avatarTip: { pt: "Para vender floresta pra Americano, não basta ter onça-pintada. Tem que ter matemática. A Faria Lima exige Lidar e Biométrica no PD da Reserva.", en: "To sell forests to Americans, a jaguar isn't enough. You need math. Wall Street demands Lidar and Biometrics in the Reserve's PD." },
    subsections: [
      {
         id: '5.1',
         title: '5.1 O Valor Financeiro da Natureza',
         content: `Enquanto o mundo procura criar máquinas aspirantes de carbono, as Soluções Baseadas na Natureza (NBS) ainda são a ferramenta de engenharia climática mais antiga, barata e eficiente da espécie humana.
         
1 Hectare de Floresta Amazônica Madura (Não-perturbada) esconde cerca de 300 Toneladas a 500 Toneladas de Carbono Estocado no tronco, nas folhas e no subsolo. Isso é Caixa Forte. Quando um trator passa o correntão, essas centenas de toneladas oxidam e viram Fumaça (GEE) rumo à atmosfera. O mercado paga para que você tranque a fechadura desse cofre.`,
         simulation: null
      },
      {
         id: '5.2',
         title: '5.2 O Pilar Florestal: REDD+ e ARR',
         content: `No mercado financeiro NBS, você vai ouvir duas grandes siglas de originação:
         
- **REDD+ (Redução de Emissões de Desmatamento e Degradação):** É a defesa territorial. Você tem uma fazenda no Mato Grosso ao lado de um assentamento agrícola que está desmatando vorazmente. Você blinda 10.000 Hectares com vigilância satelital. Você calculou a "Taxa de Desmatamento Projetada" e provou que, se não fosse seu dinheiro e seus fiscais, a floresta sumiria em 10 anos. Você vende o carbono evitado.
- **ARR (Afforestation, Reforestation and Revegetation):** É o ataque. Você compra um pasto de gado degradado de 50 anos atrás. Aluga tratores, planta 2 Milhões de mudas de Ipê, Jatobá e Muiracatiara. Enquanto essas árvores crescem nos primeiros 10 anos, elas sugam ativamente CO2 do ar. Projetos de ARR valem Ouro Premium porque são "Remoções" puras.`,
         simulation: null
      },
      {
         id: '5.3',
         title: '5.3 Além do Carbono: Co-Benefícios e Jurisdicional',
         content: `A tonelada "Pelada" (só do gás mitigado) custa barato (U$ 3 a U$ 5,00). O que arranca dólares dos grandes fundos gringos é a palavra "Co-Benefício" (CCB - Climate, Community and Biodiversity).
         
Se o seu relatório da Verra mostrar que, além de não derrubar a árvore, você usou a verba da venda do carbono para construir uma Escola para Ribeirinhos locais e usou câmeras trap (armadilhas) para provar o salvamento de uma Onça Pintada do tráfico, aquele seu VCU (Verified Carbon Unit) ganha "Selos" e a tonelada passa a ser vendida por U$ 20,00 ou mais a clientes Premium (Disney, Shell).`,
         simulation: 'redd_calc'
      }
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Projetos TBS (Technology-Based Solutions)",
    avatarTip: { pt: "Cuidado com quem foca 100% no Bio. O futuro trilionário pertence à Engenharia Mecânica Pesada que suga o carbono de um jeito não-natural, mas industrialmente previsível.", en: "Beware of those who focus 100% on Bio. The trillion-dollar future belongs to Heavy Mechanical Engineering that sucks carbon." },
    subsections: [
      {
         id: '6.1',
         title: '6.1 A Necessidade Tecnológica Crucial',
         content: `As Soluções Baseadas em Tecnologia (**TBS**) representam a artilharia pesada e cara do clima. São reatores massivos de engenharia. O modelo Biológico NBS (Florestas) sofre de dois riscos massivos para as carteiras corporativas:
         
1. Fogo natural (Risco de Inpermanência). Florestas pegam fogo se secarem e todo o seu "crédito compensado" vira cinzas ao ar livre.
2. Limite Geográfico: A Europa Central e os EUA não possuem mais áreas ociosas gigantescas para plantar árvores suficientes para compensar os próprios vôos aéreos.

É aí que o Vale do Silício e companhias como Climeworks entram para verticalizar a remoção de gás dentro de galpões cibernéticos com pegada por M² altamente concentrada.`,
         simulation: null
      },
      {
         id: '6.2',
         title: '6.2 BECCS: Bioenergia com Captura Geológica',
         content: `O **BECCS** junta o melhor dos dois mundos. Usinas de Etanol brasileiras (Raízen) queimam bagaço de cana (biomassa orgânica neutra) para gerar vapor/energia para as cidades brasileiras.
         
A revolução? Em vez dessa caldeira jogar fumaça carbônica pelo duto, eles injetam solventes de amina ali no meio. Capturam químicamente o CO2 no escapamento, pressurizam até ele virar um líquido gelado (Fluido Supercrítico) e "injetam" em buracos do fundo do mar ou salinas cavas, trancado lá por milhões de anos geológicos, impedindo o retorno ao Ciclo das Estações.`,
         simulation: null
      },
      {
         id: '6.3',
         title: '6.3 DAC: Captura Direta do Ar',
         content: `O **DAC (Direct Air Capture)** parece algo de Sci-Fi. São paredões repletos de "Ventiladores Gigantes" que simplesmente engolem o vento livre ambiente. Ao longo dos compressores cheios de filtros alcalinos caríssimos, o ar comum perde suas poucas moléculas de Dióxido de Caborno puro, devolvendo oxigênio puro pro outro lado.
         
É um aspirador celestial. As petroleiras pagam o dobro para comprar toneladas DAC pelo selo de Engenharia Pura Oculta. Assista no laboratório europeu a seguir como se projeta isso fisicamente na Islândia onde há energia vulcânica excedente.`,
         simulation: null,
         videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=T-bXZvD8e0G-eR_S" // Fictional placeholder video
      },
      {
         id: '6.4',
         title: '6.4 O Paradoxo da Tomada Limpa',
         content: `Um problema fatal persegue os engenheiros de TBS: O reator de DAC exige picos absurdos de alimentação elétrica por Megawatts. A energia gasta pra rodar 100 Ventiladores gigantes pode gerar mais carbono na tomada da operadora do que o carbono que o reator vai purificar do lado de dento.
         
Se tentar plugar um equipamento desse na malha de Berlim à noite - puxando carvão polonês - o reator de captura de carbono emitirá mais Sujeira na usina de energia do que purificará. Pratique a balança energética dessa fraude abaixo.`,
         simulation: 'tech_dac'
      }
    ]
  },
  {
    id: 7,
    title: "Módulo 7: Voluntário vs Regulado e Fraudes",
    avatarTip: { pt: "Selo ruim contamina o Portfólio inteiro! Quem paga Mico usando crédito fajuto pra dar nota na ESG Release acaba virando capa da Reuters ou da Bloomberg numa sexta-feira e toma prejuízo em ações.", en: "A bad label contaminates the whole Portfolio! Fake credits end up on the cover of Reuters or Bloomberg on a Friday with stock losses." },
    subsections: [
      {
         id: '7.1',
         title: '7.1 Offsets Voluntários: Marketing e Riscos',
         content: `Onde não tem CVM ou Ministério do Meio Ambiente obrigando multas tributárias por teto, roda-se o **Mercado Voluntário de Offsets** (Compensações).
         
Gigantes do entretenimento, Streaming e Celulares compram esses "descontos" para botarem no Rótulo que o "Vídeo Game XYZ é Neutro Neutro". Como esses projetos são comprados sob livre Demanda por "boa história", projetos focados em proteção animal ou com tribos nativas podem sofrer imensos prêmios especulavéis pelas Big Techs pela "Força da História Contada" para seus acionistas em Wall Street. O lado obscuro? É fácil falsificar carisma.`,
         simulation: null
      },
      {
         id: '7.2',
         title: '7.2 Greenwashing: A Lavagem Imunda',
         content: `O colapso da reputação corporativa em ESG se assenta sob o Tsunami do "Greenwashing" (Lavagem Verde ou Discurso Pseudo-Ambiental).
         
Ele acontece em duas vias primordiais:
1. **O Escopo Minúsculo:** O Fast-food gigante de 10.000 lojas investe milhões comprando sacolas bioplásticas e divulga "Somos 100% Renováveis nos Plásticos!". A sacada oculta? O bife deles compra gado da Amazônia que devasta milhares de árvores e chaminés de transporte de boi sem fim. O foco está de propósito onde poupa dinheiro pro marketing sem tocar na linha dura do negócio.
2. **Double Counting Corporativo:** Mostrar planilhas para a mídia que batem no "zero", escondendo emissões críticas nas cadeias não publicadas abertamente.`,
         simulation: null
      },
      {
         id: '7.3',
         title: '7.3 O Cão de Guarda: Agências e Ratings Punitivos',
         content: `Se outrora passar batido com selinho Eco era fácil, hoje a conta de Wall Street chega pesada nas Costas. Agências globais como S&P Global, CDP e Rating agencies especializadas rasgam de ponta a ponta as declarações de sustentabilidade.
         
A Comissão Europeia também aprovou leis anti-Greenwashing duríssimas: Multas milionárias atreladas à publicidade abusiva "Neutro". Para sobreviver no topo corporativo do Século 21, o CTO tem que saber separar a Publicidade Barata da Ação Verdadeira (Substituição Genuína). Treine seu faro nas falas dos executivos fictícios.`,
         simulation: 'greenwash_detector'
      }
    ]
  },
  {
    id: 8,
    title: "Módulo 8: Finanças Climáticas Genuínas",
    avatarTip: { pt: "Não existe caridade, mas sim Realocação Bilionária Oportunista! Dinheiro Verde é Dinheiro, e opera sobre a base mais sagrada do Mundo Capitalista Moderno: Risco vs Escassez.", en: "There is no charity, only Opportunistic Billionaire Reallocation! Green Money is Money, and it operates on Risk vs Scarcity." },
    subsections: [
      {
         id: '8.1',
         title: '8.1 Títulos Verdes (Green Bonds) CVM',
         content: `A Finança ESG vai muito além do "Token" e dos Recibos de Floresta. O Mercado Financeiro Clássico injetou trilhões ao desenvolver "Títulos Sustentáveis de Dívida".
         
**Green Bonds**: Uma concessionária de Água Paulista quer modernizar o tratamento de efluentes mas não tem Riso. Ela emite debêntures (Títulos da Dívida) na bolsa, prometendo devolver à sociedade Investidora juros interessantes (Ex: IPCA + 4%), se e SOMENTE SE todo esse dinheiro carimbado de investidores for unicamente alocado nos dutos sustentáveis. Os fundos de previdência da Europa, caçando rentabilidade com Baixo Risco Social compram tudo em 1 hora.`,
         simulation: null
      },
      {
         id: '8.2',
         title: '8.2 Créditos de Carbono Atrelados à E-Mobility e Agropecuária',
         content: `A fronteira atual de ganho corporativo explodiu para a indústria convencional e pra Roça, através da **ILPF** e dos **Incentivos em Frota**.
         
A Usina não vende apenas álcool. Projetos modernos mapeiam caminhões movidos 100% a Biometano tirado de fezes. Cada boi soltando menos Metano por ração aditivada, e aquele resíduo medido perante sensores, transformado num contrato Imutável e vendido pras corretoras Internacionais. De repente, a cana virou só o negócio "físico", e o Ativo Verde, o Grande Lucro puro P&L do conglomerado.`,
         simulation: null
      },
      {
         id: '8.3',
         title: '8.3 A Precificação Especulativa de Curto Prazo',
         content: `Com bolsas como o ETS Europeu firmadas, Toneladas de EUA viraram derivativos e Futuros. Operadores de prop-trading apostam na seca, na chuva e na briga da Rússia e Europa do Leste.
         
A Rússia trava a exportação de Gás Limpo Natural. Europa acende Urgente suas antigas indústrias Fósseis (Carvão) para aquecer cidades e não morrer de Frio no inverno. Ao emitir fumaça, eles quebram brutalmente seu Cap Regulamentar, precisando ir as bolsas Comprar Cotas pra pagar Multas. O Preço Global da Tonelada de Caborno da Europa sobe violentamente (Bull Run)! Entenda na Bolsa a seguir.`,
         simulation: 'carbon_price'
      }
    ]
  },
  {
    id: 9,
    title: "Módulo 9: O Futuro Profissional",
    avatarTip: { pt: "Seus relatórios dizem que tem 5 vagas pedindo Cientista de Dados pra cada 1 disponível no mercado Brasileiro, mas no Ouro Verde (Carreiras Climáticas Tecnológicas)... A razão é de 30 pra 1. É o Oceano Dourado definitivo.", en: "Reports say there are 5 vacant Data Scientist spots for everyone, but in Climate Tech Careers... The ratio is 30 to 1. It is the Golden Ocean." },
    subsections: [
      {
         id: '9.1',
         title: '9.1 O Gargalo Universal de Talentos',
         content: `A economia fóssil será estrangulada de taxas fiscais e regulamentação rígida pelo G20. Devido a corrida gigantesca ao tesouro do Compliance, formou-se o gargalo perfeito: o "Especialista Climático Escasso".
         
Não basta apenas possuir mestrado em biologia, engenharia ou direito. Porque todos os papéis viraram tokens e os mapas viraram Satélites Pixels? Aqueles profissionais com Habilidade em Matemática Python, Ciência de Dados para modelar tendências Financeiras, junto a Linguagem de Contratos Blockchain para SmartContracts, formam o que a McKinsey chamou de "Profissional Ouro do Clima".`,
         simulation: null
      },
      {
         id: '9.2',
         title: '9.2 Cargo A: O Desenvolvedor Quant de Projetos NBS',
         content: `Paga-se centenas de milhares em bônus para Equipes de Dev NBS. Eles são responsáveis por chegar na Fazenda no Amapá vazia, cruzar API Pública de desmatamentos do Governo usando SQL ou Python Pandas. Extrair a Análise Alométrica dos Troncos pela imagem Lidar.
         
Esses profissionais provam as métricas com scripts, não com as pernas, e aprovam nos EUA projetos gigantes de "Carbon Credit Issuance" pra Siderurgia Nacional inteira comprar e bater o saldo anual com o Governo lá no SBCE. São analistas imersivos que usam Computação Bruta na Amazônia Legal em Laptops em São Paulo.`,
         simulation: null
      },
      {
         id: '9.3',
         title: '9.3 Cargo B e C: O Corretor e o Web3 Dev',
         content: `As pontas das Flechas para quem deseja ficar no Ar Condicionado. 
O **Carbon Broker (Trader Analista)** lida com Compliance Governamental, lendo tabelas Financeiras (B3 / CBIOs / EU ETS) e compra créditos sub-valorizados em Projetos Jovens para vender pras Gigantes (Gerdau/Vale). 
O **Desenvolvedor ClimaTech Web3** elabora Registries Inteligentes, ligando Sensores nas Chaminés ou na Floresta DIRETAMENTE ligados a Contratos Tokenizados na Web3, impedindo relatórios falsos de Greenwashing e fechando DREX em tempo real pro Tesouro Nacional. É o pináculo da eficiência humana contra o tempo do relógio da morte Climática.

Descubra o quão apto e qual o seu Caminho na Skill-Tree! A jornada verde te espera.`,
         simulation: 'career_path'
      }
    ]
  }
];
