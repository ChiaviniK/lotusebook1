export const lei15042Chapters = [
  {
    id: 1,
    title: { pt: "Módulo 1: Introdução à Lei nº 15.042 e Arquitetura do SBCE", en: "Module 1: Introduction to Law 15.042 and the SBCE Architecture" },
    avatarTip: { pt: "Este é o marco que transforma fumaça em passivo fiscal no Brasil. A Lei 15.042 não é uma sugestão verde, é uma arquitetura de conformidade econômica brutal.", en: "This is the milestone that turns smoke into a fiscal liability in Brazil. Law 15.042 is not a green suggestion; it's a brutal framework for economic compliance." },
    subsections: [
      {
         id: '1.1',
         title: { pt: '1.1 O Que é o SBCE?', en: '1.1 What is the SBCE?' },
         content: {
            pt: `O Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE) foi instituído para colocar um teto oficial (Cap) nas emissões das maiores indústrias nacionais. Ele adota o modelo 'Cap-and-Trade', onde o Estado limita a poluição e permite que as empresas comprem e vendam licenças de emissão entre si.`,
            en: `The Brazilian Greenhouse Gas Emissions Trading System (SBCE) was established to put an official cap on the emissions of the largest national industries. It adopts the 'Cap-and-Trade' model, where the State limits pollution and allows companies to buy and sell emission allowances among themselves.`
         },
         simulation: null
      },
      {
         id: '1.2',
         title: { pt: '1.2 O Escopo da Lei', en: '1.2 The Scope of the Law' },
         content: {
            pt: `Sancionada após anos de tramitação, a lei visa cumprir os compromissos do Acordo de Paris (NDCs do Brasil). Ao contrário do mercado voluntário movido a RP corporativo, o SBCE é mandatório. Se sua caldeira, frota ou cimenteira ultrapassa o limite de corte definido pelo Estado, ignorar a lei não gera apenas 'bad press', mas multas milionárias bloqueios de operação.`,
            en: `Sanctioned after years of processing, the law aims to fulfill the commitments of the Paris Agreement (Brazil's NDCs). Unlike the voluntary market driven by corporate PR, the SBCE is mandatory. If your boiler, fleet, or cement plant exceeds the cutoff limit set by the State, ignoring the law generates not just 'bad press', but millionaire fines and operational blocks.`
         },
         simulation: null
      },
      {
         id: '1.3',
         title: { pt: '1.3 Impacto Macroecônomico', en: '1.3 Macroeconomic Impact' },
         content: {
            pt: `A Lei força a precificação da externalidade negativa (o Carbono). Isso significa que, a partir da sua implementação, emitir carbono custará dinheiro, enquanto reduzir emissões além da meta formal passa a ser uma nova linha de receita (Venda de Direitos/Cotas sobrantes na B3). O modelo transforma a matriz energética em vetor financeiro principal do CFO.`,
            en: `The Law forces the pricing of the negative externality (Carbon). This means that, from its implementation, emitting carbon will cost money, while reducing emissions beyond the formal target becomes a new revenue line (Selling leftover Rights/Allowances). The model transforms the energy matrix into the core financial vector for the CFO.`
         },
         simulation: 'kyoto_timeline'
      }
    ]
  },
  {
    id: 2,
    title: { pt: "Módulo 2: A Governança (CIMGE) e o Comitê", en: "Module 2: Governance (CIMGE) and the Committee" },
    avatarTip: { pt: "Quem manda no SBCE não é um ministério solitário. O CIMGE será a 'Banca Central' do Carbono Pátrio.", en: "Who rules the SBCE is not a lonely ministry. The CIMGE will be the 'Central Bank' of National Carbon." },
    subsections: [
      {
         id: '2.1',
         title: { pt: '2.1 O Comitê Interministerial (CIMGE)', en: '2.1 The Interministerial Committee (CIMGE)' },
         content: {
            pt: `A lei estabelece o Comitê Interministerial sobre Mudança do Clima como o órgão deliberativo supremo do SBCE. Ele dita as regras do jogo: aprova o Plano Nacional de Alocação, estabelece os tetos de emissão para cada setor da economia e julga de forma soberana a trajetória do Brasil rumo ao Net Zero. As cadeiras deste comitê representam o poder fiscal e ambiental da república em coalisão mista.`,
            en: `The law establishes the Interministerial Committee on Climate Change as the supreme deliberative body of the SBCE. It dictates the rules of the game: approves the National Allocation Plan, sets emission caps for each economic sector, and sovereignly judges Brazil's trajectory towards Net Zero. The seats of this committee represent the republic's fiscal and environmental power in coalition.`
         },
         simulation: null
      },
      {
         id: '2.2',
         title: { pt: '2.2 O Órgão Gestor', en: '2.2 The Management Body' },
         content: {
            pt: `Abaixo do CIMGE atua o 'Órgão Gestor' (Papel direcionado à autarquias/Ministérios focados). Dele emanam as portarias executivas. Ele fará o 'chão de fábrica' acontecer: operacionaliza o Registro Central, audita relatórios, monitora o cumprimento cego dos tetos das empresas siderúrgicas e autoriza leilões oficiais de cotas virtuais na bolsa brasileira.`,
            en: `Below the CIMGE acts the 'Management Body'. Executive ordinances emanate from it. It will make the 'factory floor' happen: operationalizes the Central Registry, audits reports, monitors blind compliance by steel companies with caps, and authorizes official auctions of virtual allowances on the Brazilian stock exchange.`
         },
         simulation: null
      },
      {
         id: '2.3',
         title: { pt: '2.3 Transparência e Lobby Setorial', en: '2.3 Transparency and Sectoral Lobbying' },
         content: {
            pt: `Qualquer Plano Nacional de Alocação define vencedores e perdedores na base da caneta. Como cada setor (Agro vs Indústria Pesada) disputará limites mais frouxos, a Lei 15.042 injetou o Comitê Consultivo Técnico, que possui cadeiras da iniciativa privada e civil, visando amortecer pressões desestabilizadoras e engessar a governança em decisões puramente baseadas em Inventário Científico, blindadas contra lobby.`,
            en: `Any National Allocation Plan defines winners and losers with a pen. As each sector (Agro vs Heavy Industry) will fight for looser limits, Law 15.042 injected the Technical Advisory Committee, which has seats for the private and civil sectors, aiming to cushion destabilizing pressures and cast governance in decisions purely based on Scientific Inventories, shielded against lobbying.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 3,
    title: { pt: "Módulo 3: Instalações Reguladas: O Teto", en: "Module 3: Regulated Facilities: The Cap" },
    avatarTip: { pt: "Sua fábrica queima óleo? O governo agora monitora sua chaminé. Teste o simulador de Escopo para saber de qual lado do machado você se encontra.", en: "Does your factory burn oil? The government now monitors your chimney. Test the Scope simulator to know which side of the axe you are on." },
    subsections: [
      {
         id: '3.1',
         title: { pt: '3.1 O Gatilho das 10.000 Toneladas (Obrigação de Relato)', en: '3.1 The 10,000-Ton Trigger (Reporting Obligation)' },
         content: {
            pt: `O funil de entrada no Radar do Estado. Qualquer CNPJ, Instalação ou Fonte que emita acima de 10.000 toneladas de CO2 equivalente por ano cai na malha fina. Estão formalmente sentenciados a preencher Relatórios de Monitoramento obrigatórios anuais na plataforma federal, com chancela de diretor-responsável (Risco PF). Apenas reportam, mas não pagam Cotas ainda.`,
            en: `The entry funnel into the State's Radar. Any CNPJ, Facility or Source emitting above 10,000 tons of CO2 equivalent per year falls into the fine mesh. They are formally sentenced to fill out mandatory annual Monitoring Reports on the federal platform, stamped by a responsible director (Personal Liability Risk). They only report, but don't pay Allowances yet.`
         },
         simulation: null
      },
      {
         id: '3.2',
         title: { pt: '3.2 A Foice das 25.000 Toneladas (O Preço Final)', en: '3.2 The 25,000-Ton Axe (Compliance Payment)' },
         content: {
            pt: `A dor corporativa começa aqui: Instalações que emitirem anualmente acima de 25.000 toneladas de GEE tornam-se "Operadores Regulados". Além de reportar, possuem obrigações de Conciliação e Compliance. Para cada tonelada cravada no relatório que saiu da sua chaminé (Scope 1 direto), a empresa deverá entregar e "Queimar" compulsoriamente na plataforma do Governo 1 Cota CBE ou 1 Certificado Florestal CRVE autorizado. Quem não tem, terá de comprar a mercado a preços salgados.`,
            en: `Corporate pain begins here: Facilities that annually emit over 25,000 tons of GHG become 'Regulated Operators'. Besides reporting, they have Conciliation and Compliance obligations. For every ton locked in the report that came out of your chimney (direct Scope 1), the company must deliver and compulsorily 'Burn' on the Government platform 1 CBE Allowance or 1 authorized CRVE Forest Certificate. Those driving a deficit will have to buy at market prices.`
         },
         simulation: 'emissions_threshold_checker'
      },
      {
         id: '3.3',
         title: { pt: '3.3 Isenções Especiais e Atividades Primárias Agropecuárias', en: '3.3 Special Exemptions and Primary Agricultural Activities' },
         content: {
            pt: `A grande polêmica da aprovação do Marco foi o "Lobby Agro". Nos termos atuais, as emissões indiretas (Escopo 2) e as operações tipicamente primárias de Agropecuária extensiva nacional foram blindadas de figurarem como "Poluidores Regulados" que são forçados a pagar O CBE. No entanto, usinas sucroalcooleiras e indústrias agro-primárias pesadas estão sujeitas a contagens cruzadas em caldeiras e frotas de maquinário bruto associado. A batalha jurídica do Teto exato ainda reverbera.`,
            en: `The great controversy of the framework's approval was the 'Agro Lobby'. In current terms, indirect emissions (Scope 2) and typical primary operations of expansive national agriculture were shielded from appearing as 'Regulated Polluters' forced to pay CBE. However, sugarcane mills and heavy primary agro-industries are subject to cross-counting in boilers and associated heavy machinery fleets. The legal battle for the exact cutoff limit still reverberates.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 4,
    title: { pt: "Módulo 4: A Moeda Verde (CBE e CRVE)", en: "Module 4: The Green Currency (CBE and CRVE)" },
    avatarTip: { pt: "Decorar essas siglas é vital. CBE é 'Licença governamental para Sujar'. CRVE é o 'Selo de Herói' porque você plantou ou salvou a Amazônia.", en: "Memorizing these acronyms is vital. CBE is 'Government License to Pollute'. CRVE is the 'Hero Badge' because you planted or saved the Amazon." },
    subsections: [
      {
         id: '4.1',
         title: { pt: '4.1 CBE - A Cota Brasileira de Emissões', en: '4.1 CBE - The Brazilian Emission Allowance' },
         content: {
            pt: `A Cota (CBE) é um ativo financeiro incorpóreo criado por Lei, emitido pelo Órgão Gestor. 1 CBE = Direitodespejar 1 Tonelada de CO2e. As indústrias recebem Cotas gratuitas de início (Alocação Gratuita) baseada em métricas históricas, mas o Governo diminui essas Cotas ofertadas ano a ano. Se uma indústria ineficiente torrar todas suas gratuitas e a chaminé continuar acesa, ela vai ao leilão comprar CBE de indústrias eficientes que sobrarem saldo positivo (Trade). Formando Bolsa e Preço Real.`,
            en: `The Allowance (CBE) is an intangible financial asset created by Law, issued by the Management Body. 1 CBE = Right to dump 1 Ton of CO2e. Industries receive free Allowances initially (Free Allocation) based on historical metrics, but the Government shrinks these offered Allowances year by year. If an inefficient industry burns all its free ones and the chimney stays lit, it goes to auction to buy CBE from efficient industries holding positive balances (Trade). Thus, a real stock exchange & pricing formed.`
         },
         simulation: 'cbe_wallet'
      },
      {
         id: '4.2',
         title: { pt: '4.2 CRVE - O Certificado de Remoção (Crédito Nativo)', en: '4.2 CRVE - The Removal Certificate (Native Credit)' },
         content: {
            pt: `O Certificado (CRVE) representa a essência das Soluções Baseadas na Natureza (Projetos Voluntários e Florestas privadas). É o seu velho e famoso 'Crédito de Carbono de ONG'. Validado e atestado por terceiros, ele entra no mercado Regulado. A Lei da a graça vital aos investidores florestais: Permite que indústrias comprem os CRVEs puros como se fossem "Substitutos" perfeitos às Cotas CBE pra escapar de Sanção Punitiva Governamental.`,
            en: `The Certificate (CRVE) represents the core of Nature-Based Solutions (Voluntary Projects and private forests). It's your famous old 'NGO Carbon Credit'. Validated by third parties, it steps into the Regulated market. The Law grants the vital grace to forest investors: IT allows industries to buy pure CRVEs as if they were perfect 'Substitutes' for CBE Allowances to escape government punitive sanctions.`
         },
         simulation: null
      },
      {
         id: '4.3',
         title: { pt: '4.3 A Dinâmica do Trade (Limites de Absorção Multimercado)', en: '4.3 Trading Dynamics (Multi-market Absorption Limits)' },
         content: {
            pt: `Eis o segredo do sucesso e baliza do caos de preços. A CVM regulará a bolsa desses Títulos junto à liquidação em carteiras. Contudo, há freios estruturais e temporais: A Indústria poderá abater parte de seu débito sujo do ano usando Florestas (CRVE), mas a proporção será calibrada pelo Regulador. Não é um salvo conduto absoluto para "continuar poluindo para sempre".`,
            en: `Here lies the secret to success and the guardrail of price chaos. CVM will regulate the exchange of these titles alongside wallet liquidation. However, structural and temporal brakes exist: Industry will be able to write off parts of its dirty yearly debit using Forests (CRVEs), but the proportion will be strictly calibrated by the Regulator. It is not an absolute free pass to 'continue polluting forever'.`
         },
         simulation: 'allocation_market_sim'
      }
    ]
  },
  {
    id: 5,
    title: { pt: "Módulo 5: MRV Nacional e Sistema de Registro", en: "Module 5: National MRV and Registry System" },
    avatarTip: { pt: "A CVM e a Receita Federal abraçam a Contabilidade do Carbono. Sem um Registro Central Único transparente e cravado com UUIDs e Blockchain Cripto, fraudes de dupla contagem afundam o país.", en: "The Revenue Service and SEC embrace Carbon Accounting. Without a transparent Single Central Registry backed by UUID/Blockchain, double-counting fraud sinks the nation." },
    subsections: [
      {
         id: '5.1',
         title: { pt: '5.1 O Registro Central do SBCE', en: '5.1 The SBCE Central Registry' },
         content: {
            pt: `O Banco Central do ar. Um grande banco de dados unificado mantido pelo Poder Executivo Federal em Nuvem Imutável (Central Registry). Ele anota cada Cota e Certificado Mintado/Emitido, suas transações P2P em tempo real de titularidade de Contas Bancárias (A companhia X enviou 10k Cotas CBE para Y) e seu trágico momento de aposentadoria/Cancelamento. Bloqueia a contagem dupla inter-institucional pela raiz matemática.`,
            en: `The Central Bank of air. A massive unified database maintained by the Federal Executive Power on Immutable Cloud. It logs every Minted Allowance and Certificate, their real-time P2P bank account ownership transfers (Company X sent 10k CBEs to Y), and their final tragic moment of retirement/cancellation. It blocks cross-institutional double counting from its mathematical root.`
         },
         simulation: 'mrv_dashboard_sim'
      },
      {
         id: '5.2',
         title: { pt: '5.2 Plano de Monitoramento Anual e Submissão', en: '5.2 Annual Monitoring Plan and Submission' },
         content: {
            pt: `Em dezembro os Operadores Submetem sua proposta de "Plano" para as autoridades de como eles vão contar as emissões na fábrica. No ano seguinte, enviam o "Relato Custeado Final". O Estado analisa essa bucha de papéis via algoritmos pesados batendo a nota fiscal de Insumos da Usina vs a Média gerada de fumaça, gerando a Nota de Despesas de Toneladas Finais Emitidas. O balanço entre a "Banca Estatal" e o "Estoque da Empresa" fica cravado no Painel.`,
            en: `In December, Operators submit their proposed "Plan" to authorities detailing how they intend to count emissions at the plant. In the following year, they send the "Final Counted Report". The State analyzes this massive pile of evidence using heavy algorithms, matching the Plant's invoice of inputs against the average generated smoke, yielding the Final Bill of Emitted Tons. The balance between the "State Desk" and the "Company's Inventory" is pinned onto the Dashboard.`
         },
         simulation: null
      },
      {
         id: '5.3',
         title: { pt: '5.3 A Auditoria Preditiva Obrigatória por Terceiros', en: '5.3 Mandatory Predictive Third-Party Auditing' },
         content: {
            pt: `A Lei vinga: Não adianta mandar para o Cadastro Nacional planilhas enviesadas do Excel manipulados pelo sobrinho CEO de uma metalúrgica regional. Tudo precisa passar previamente pela tesoura de Organismos Acreditados independentes de Auditoria (Acreditação via Inmetro), para validar metodologias MRV exatas sob ISO ambientais extremas antes da assinatura Governamental.`,
            en: `The Law acts: There's no use sending biased Excel sheets forged by the CEO's nephew from a regional steel mill to the National Registry. Everything must previously pass the rigorous ax of Accredited independent Auditing Bodies (Inmetro accreditation), to validate exact MRV methodologies under extreme environmental ISO standards prior to the Government's approval seal.`
         },
         simulation: null
      }
    ]
  },
  {
    id: 6,
    title: { pt: "Módulo 6: Infrações e Penalidades (O Risco Jurídico)", en: "Module 6: Infractions and Penalties (The Legal Risk)" },
    avatarTip: { pt: "Demitir seu auditor e maquiar as toneladas da caldeira resultará no bloqueio fiscal integral e uma multa que arranca milhões da Receita Anual da operação regulada.", en: "Firing your auditor and faking boiler ton data will result in a total fiscal block and a fine ripping millions out of the Regulated operation's Annual Revenue." },
    subsections: [
      {
         id: '6.1',
         title: { pt: '6.1 Infrações Contábeis e Tipificação por Omissão', en: '6.1 Accounting Infractions and Omission Typification' },
         content: {
            pt: `Esquecer, omitir ou preencher dados de relato falsificados intencionalmente no sistema SBCE de registro configura pesada infração administrativa. A autuação fiscal incide até mesmo em companhias do Limite Menor das 10.000t que não tem taxa obrigatória, mas burlaram a inscrição como Sujeito Poluidor perante o Ministério.`,
            en: `Forgetting, omitting, or intentionally filling falsified report data in the SBCE registry system constitutes a heavy administrative infraction. The fiscal autuation strikes even companies under the smaller 10,000t Cap who have no obligatory tax mechanism but avoided enrolling as a Polluting Subject with the Ministry.`
         },
         simulation: null
      },
      {
         id: '6.2',
         title: { pt: '6.2 O Saldo Devedor a Ser Reconciliado (Déficit Grave) ', en: '6.2 The Outstanding Debt (Severe Deficit)' },
         content: {
            pt: `Final do ciclo SBCE (Período de Conciliação). Empresa poluiu 50.000 Tons. O Governo atesta e exige a Devolução pra plataforma de 50.000 CBE (Cotas) para saldar a guia da "fumaça devolvida e compensada". Se você tem apenas 30.000 em carteira porque o Financeiro não comprou Cotas para cobrir a ineficiência Suja e resolve "não pagar o buraco"... Você comete Inadimplência Ambiental Severa. E o pêndulo da justiça do Clima vira sobre o Patrimônio.`,
            en: `End of the SBCE cycle (Reconciliation Period). Company polluted 50,000 Tons. The Gov enforces and demands 50,000 CBEs delivered back to the platform to clear the "compensated smoke" ticket. If you only hold 30,000 in your wallet because the Financial department failed to buy Allowances to cover the Dirty inefficiency and decides "not to pay the gap"... You commit Severe Environmental Default. And the pendulum of Climate Law strikes your Assets.`
         },
         simulation: null
      },
      {
         id: '6.3',
         title: { pt: '6.3 O Machado Fiscal (Taxas de 3% e Preço Máximo)', en: '6.3 The Fiscal Axe (3% Fines and Max Price)' },
         content: {
            pt: `A lei estipula punições severas para inibir quem prefere pagar multa a poluir menos. Entre sanções aplicáveis pelo Gestor Federal estão: Bloqueio imediato de recebimento de novos CBE gratuitos, Suspensões Operacionais por descumprimento brutal, e **Multas Punitivas de até 3% do faturamento bruto da empresa**. Caso falhe no déficit final da reconciliação, paga-se pela tonelada irregular até 5x vezes o LANCE MÁXIMO da ação CBE negociada em bolsa (Uma bomba financeira fatal no fluxo de caixa corporativo que blinda as indústrias ruins do Dumping).`,
            en: `The law stipulates severe punishments to inhibit those who'd rather pay a fine than pollute less. Among sanctions applicable by the Federal Manager are: Immediate block on receiving new free CBEs, brutal operational suspensions, and **Punitive Fines of up to 3% of the company's gross revenue**. If you default during the final reconciliation, you pay for each irregular ton up to 5x times the MAXIMUM BID of the traded CBE stock (A fatal financial bomb wiping out corporate cash flow preventing bad industries from Dumping).`
         },
         simulation: 'penalty_calculator_sim'
      }
    ]
  },
  {
    id: 7,
    title: { pt: "Módulo 7: Conexão Global (Uso Voluntário Equivalente)", en: "Module 7: Global Connection (Equivalent Voluntary Use)" },
    avatarTip: { pt: "Um projeto que plantou árvores há 10 anos na Mata Atlântica será descartado e isolado? Não! A ponte SBCE permite liquidez insana à antigos pioneiros que já seguiam Ouro-Padrão.", en: "Will a 10-year-old tree planting project in the Atlantic Forest be discarded and isolated? No! The SBCE bridge grants insane liquidity to old pioneers following Gold Standards." },
    subsections: [
      {
         id: '7.1',
         title: { pt: '7.1 Programas Voluntários Verificados Externos (VCS e Gold Standard)', en: '7.1 External Verified Voluntary Programs (VCS and Gold Standard)' },
         content: {
            pt: `O SBCE permite o reconhecimento provisório de metodologias e gerações de certificados de Programas Voluntários internacionais (Como os poderosos VCUs do Verra e GS). Isso significa que ativos privados já engavetados com altíssima credibilidade em metodologias aprovadas poderão realizar a portabilidade/equivalência governamental se submetendo à Lei 15.042 para abatimento direto.`,
            en: `The SBCE recognizes provisional methodologies and generated certificates from international Voluntary Programs (Like the potent VCUs array by Verra and GS). This means highly credible privately batched assets built upon approved methodologies can perform government portability/equivalence subjugating to Law 15.042 for direct debit offsets.`
         },
         simulation: null
      },
      {
         id: '7.2',
         title: { pt: '7.2 Os Critérios de Conversibilidade no "Registro Geral"', en: '7.2 Convertibility Criteria at "General Registry"' },
         content: {
            pt: `Converter um VCU privado em um CRVE oficial requer tripla verificação do Comitê Governamental: 1) Prova brutal de adicionalidade. 2) Integridade Social (Impactos a comunidades originárias nativas blindados). 3) Projeção Baseline correta validada. Somente após esta auditoria rígida, o crédito vira a sonhada "Moeda Nacional Oficial", abrindo portas para a empresa Desenvolvedora ganhar milhões nas B3 em negociação com os grandes emissores capados.`,
            en: `Converting a private VCU into an official CRVE requires triple checking by the Governmental Committee: 1) Brutal proof of additionality. 2) Social Integrity (Safeguarded native origins impacts). 3) Validated rigorous Baseline projections. Only post exact auditing, the credit becomes the dreamt "Official National Currency", opening floodgates allowing developer companies to gross millions on national trading B3 rings against heavy polluters.`
         },
         simulation: null
      },
      {
         id: '7.3',
         title: { pt: '7.3 A Regulamentação do Artigo 6.4 de Paris no Brasil', en: '7.3 Enacting Paris Article 6.4 in Brazil' },
         content: {
            pt: `O Artigo 6 permite que Nações soberanas transfiram suas economias (ITMOs) e vendam fatias da Redução (NDCs) a governos gringos com déficits e buracos. O SBCE será o painel que regula a Transferência Internacional. Se um Suíço quiser o carbono Verde do Paraná para bater metas do Acordo Global, haverá de passar nas chaves digitais do comitê Brasileiro aplicando os Ajustes Correspondentes adequados (Evitando Dupla Contagem Soberana ou Exportação excessiva predatória em prejuízo a meta climática própria do Brasil).`,
            en: `Article 6 allows Sovereign Nations to globally transfer their offsets (ITMOs) and sell reduction slices (NDCs) to foreign governments harboring deficits. SBCE acts as the dashboard regulating International Transfers. Should a Swiss entity desire green Parana carbon to match Global accords, it shall interface against Brazilian committee digital gates enforcing adequate Corresponding Adjustments (Preventing Global double sovereignty-counting or predatory over-exporting ruining Brazil's own pledge).`
         },
         simulation: 'jurisdictional_nesting_sim'
      }
    ]
  },
  {
    id: 8,
    title: { pt: "Módulo 8: Alocação no Mercado e Curva de Custos Marginais", en: "Module 8: Market Allocation and Marginal Cost Curves" },
    avatarTip: { pt: "No Leilão Primário do Governo, não existe a bondade do 'Dono da Floresta'. É jogo Econômico Bruto de curvas de abate de custo marginal MACC.", en: "There is no 'Benevolent Forest Owner' grace here in Government Primary Auctions. It's raw Economic warfare playing Marginal Abatement Cost MACC." },
    subsections: [
      {
         id: '8.1',
         title: { pt: '8.1 Alocação Gratuita (PNA) e Transição Justa', en: '8.1 Free Allocation (PNA) and Just Transition' },
         content: {
            pt: `A introdução do Compliance não pode chocar e gerar o Colapso da siderurgia e demissões em massa para países asiáticos da noite para o dia. Portanto o PNA (Plano Nacional) aloca CBEs gratuitas baseadas no histórico de eficiência. Indústrias melhores no ranking de intensidade carbônica ganham prêmios virtuais. Já o "Benchmark Cap" vai apertando e reduzindo os bilhetes grátis gradativamente a cada ano forçando o caixa a buscar adequação Real sem choques sociais drásticos.`,
            en: `The Compliance induction can't shock-trigger mass steel-plant collapses resulting in mass lay-offs favoring asian zones overnight. Thus the National Plan (PNA) awards initial free CBEs based on efficiency tiers. Greener tier-ranking industries reap virtual rewards. Then the 'Benchmark Cap' progressively throttles and reduces these free passes yearly forcing corporate treasuries to attain True suitability without devastating local social rifts.`
         },
         simulation: null
      },
      {
         id: '8.2',
         title: { pt: '8.2 Leilões Primários', en: '8.2 Primary Auctions' },
         content: {
            pt: `Para suprir a necessidade de liquidez dos regulados doentes (Siderúrgicas que estouraram limites pela ineficência das matrizes e caldeiras carvoeiras), a Lei estabeleceu leilões onde o próprio poder governamental venderá novos CBE via "Bolsas Concessionárias" periodicamente. Esse Leilão levanta caixa bilionário, e a legislação estipula rigidamente que estas receitas bilionárias tributadas deverão financiar fundos de ciência Pesquisada Amazônicos do Fundo Clima.`,
            en: `To supply liquidity to sick regulated entities (Steel mills exploding limits due to inefficient local boilers), the Law mandates regular 'Concessionary Exchange Auctions' selling fresh, Government-issued CBEs periodically. This auction generates a billion-dollar liquid fund stream, legally earmarked directly to finance Amazon-driven Scientific Climate Fund researches strictly.`
         },
         simulation: null
      },
      {
         id: '8.3',
         title: { pt: '8.3 Custo Marginal de Abatimento (Curva MACC)', en: '8.3 Marginal Abatement Cost Curve (MACC)' },
         content: {
            pt: `Uma mineradora faz o seu CFO desenhar a Curva MAC: "Custa R$ 100 Mil para trocar nossa britadeira diesel por elétrica para remover - 5 Tons/mês. Custa U$D 3 Mil na Bolsa (B3) comprar Cotas Verdes Limpas CBE de 5 Tons do Mercado de Outra Fábrica". Se o valor de abater internamente sua fornalha for mais caro que "Pagar pelo Pecado de Outro" no Mercado de CBE, a C-Suite irá aos operadores pedir CBE massiva e postergar a reforma da caldeira nativa. Até a balança reverter pela escassez Cap.`,
            en: `A mining firm forces its CFO drawing MAC curves: "It costs $100K replacing internal diesel breakers to electrical mitigating -5 Tons/month. It costs $3K on Exchange pulling 5 Tons worth of CBE Clean Allowances from another plant's pool." If internal abatement upgrades cost brutally heavier than 'Paying for Someone Else's Efficiency Margin', C-Suite pushes massive buying orders postponing native Boiler refits. Until the scarcity Cap swings equilibrium violently back.`
         },
         simulation: 'portfolio_allocator_sim'
      }
    ]
  },
  {
    id: 9,
    title: { pt: "Módulo 9: Estratégias Corporativas com a Nova Era SBCE", en: "Module 9: Corporate Strategies within the New SBCE Era" },
    avatarTip: { pt: "Sobrevivem as Diretorias de Sustentabilidade que entenderem Derivativos Atrelados a Mudanças Climáticas, e não só plantar árvores nos jardins das Sedes.", en: "The Sustainability Boardrooms surviving are those mastering derivative climate hedging instruments, bypassing simple HQ Garden tree-planting schemes." },
    subsections: [
      {
         id: '9.1',
         title: { pt: '9.1 Operações de Hedge Financeiro contra o SBCE', en: '9.1 SBCE Direct Financial Hedge Operations' },
         content: {
            pt: `O CBE virou commodity volátil. A tesouraria deve operar contratos futuros garantindo e comprando "Opções / Forward Contracts" para cotas do CBE. A ideia é fixar o valor que você irá fechar em 2030 no Painel de Conciliação em 2024, protegendo a cimenteira de saltos macro-políticos insanos, da quebra do próprio Governo ou de anos com climas perigosos de El-Ninho secando florestas mundiais base CRVE.`,
            en: `CBE became volatile commodity. Corporate treasury must maneuver future contracts purchasing "Option/Forwards Contracts" upon CBE quotas. The goal is locking in 2030 Reconciliation board closing prices squarely in 2024, screening the cement outfit out of insane macro-political leaps, Sovereign bankruptcies or El-Ninho's catastrophic droughts burning global CRVE-based forest backing arrays.`
         },
         simulation: null
      },
      {
         id: '9.2',
         title: { pt: '9.2 Reestruturação Ágil em Capex de Transição e P&D', en: '9.2 Agile Restructuring on Transitional R&D Capex' },
         content: {
            pt: `Bilionárias do Petróleo correm para injetar linhas em R&D (Pesquisa e Desenvolvimento) criando o 'Custo Sombra de Carbono'. Todo novo plano de Capex (Abrir planta fabril B vs C) exigirá modelagem contábil de poluição como 'Custo base Interno'. Vence a consultoria que convencer Diretoria Técnica Operacional com um relatório que antecipe as taxações de Escopo SBCE vindouras e alicie as montadoras para cadeias de Fornecimento Elétricas Circulares Escopo 3 sem perda brutal Operacional.`,
            en: `Oil Megacorps race funneling R&D to spawn the 'Shadow Carbon Price'. Every new Capex modeling (Launching Plant B vs C) will enforce absolute pollution accounting acting as an 'Internal Base Line Cost'. The consulting squad winning is the one demonstrating to Technical Boards forecasting impending SBCE Scope taxes mapping automakers directly onto Circular EV logistics avoiding brutal Tier-3 supply chain implosions.`
         },
         simulation: null
      },
      {
         id: '9.3',
         title: { pt: '9.3 O Novo Status Quo do Brasil CVM Integrado (Veredito Final)', en: '9.3 The CVM Handshake Brazil New Status Quo (Final Verdict)' },
         content: {
            pt: `A Lei 15.042 solidifica de forma inquestionável que Fumaça é Tributo. Indústrias bilionárias obsoletas secarão sob Pesos e Medidas severas (Preço CBE a USD 50+), enquanto startups Ágeis baseadas na natureza e no Descarbonizamento ganharão prêmios e valuations imensos da Wall Street / Faria Lima por absorverem ineficiências estatais prestando serviços essenciais em Compliance CVM. O "Ouro Verde" não é mais promessa Filantrópica. É o código civil inquebrável da sobrevivência Capitalista.`,
            en: `Law 15.042 solidifies unquestioningly that Smoke is a Tax Equivalent. Obsolete billion-dollar industries will wither subjected under severe Measures and Weights (CBE Price @ $50+), whilst Agile nature-based startups and Decarbonizing platforms snatch up immense premiums mirroring Wall Street / Brazilian Exchange valuations feeding off inefficiencies bridging essential CVM compliance. "Green Gold" isn't a philanthropic promise anymore. It is the unbreakable civic code governing Capitalist survival.`
         },
         simulation: 'career_path'
      }
    ]
  }
];
