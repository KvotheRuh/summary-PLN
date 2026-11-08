// topicoId links each question to a topic in topicos.js
const questoes = [
  // ----------------------------------------------------
  // TÓPICO: Processamento de Linguagem Natural (PLN) - Fundamentos
  // ----------------------------------------------------
  {
    id: 1,
    topicoId: 1,
    provaId: 1,
    question: "De acordo com os conceitos básicos de PLN, o que define o campo da Linguística Computacional?",
    options: [
      "O estudo das linguagens de programação utilizadas para construir bancos de dados relacionais.",
      "O estudo dos fenômenos linguísticos para apoiar o computador na interpretação e geração da linguagem natural.",
      "A área responsável exclusivamente pela tradução manual de textos antigos.",
      "O processo de armazenamento físico de dados não estruturados em servidores.",
      "A criação de hardware especializado para captação e processamento de áudio."
    ],
    correct: 1,
    explanation: "A Linguística Computacional é associada à PLN e estuda os fenômenos linguísticos para apoiar o computador na interpretação e geração da linguagem natural."
  },
  {
    id: 2,
    topicoId: 1,
    provaId: 1,
    question: "Na preparação e organização de dados para PLN, qual é a diferença fundamental entre Corpus e Corpora?",
    options: [
      "Corpus é um conjunto de textos normalizados e rotulados; Corpora é o plural (conjunto de múltiplos corpora/corpus).",
      "Corpus refere-se a arquivos de áudio, enquanto Corpora refere-se a documentos de texto.",
      "Corpora é o texto em sua forma bruta original, enquanto Corpus é o texto após ser vetorizado.",
      "Não há diferença, pois na literatura de PLN ambos são sinônimos perfeitos.",
      "Corpus é utilizado apenas para treinamento do Word2Vec, e Corpora para o modelo TF-IDF."
    ],
    correct: 0,
    explanation: "Segundo as definições da área, um Corpus é um conjunto de textos (geralmente normalizados), e Corpora é simplesmente o termo no plural, indicando um conjunto de múltiplos Corpus."
  },
  {
    id: 3,
    topicoId: 1,
    provaId: 1,
    question: "Em processamento de textos, o que caracteriza a tarefa de Tokenização?",
    options: [
      "A conversão completa de um documento de texto bruto para um arquivo de áudio sintetizado.",
      "A redução obrigatória de todos os verbos ao seu infinitivo.",
      "O processo de separar o texto em unidades com significado semântico (tokens), como separar um texto em frases ou uma frase em palavras.",
      "A remoção definitiva de todas as stopwords do documento antes da vetorização.",
      "A transformação de um texto bruto em sua forma canônica sem alterar a pontuação."
    ],
    correct: 2,
    explanation: "Tokenização é o ato de separar o texto em tokens. Essa separação pode ocorrer em diferentes níveis, como dividir um texto inteiro em frases, ou uma frase em tokens menores (palavras/caracteres)."
  },
  {
    id: 4,
    topicoId: 1,
    provaId: 1,
    question: "Durante a normalização textual, qual é a principal diferença entre os processos de Stemming e Lematização?",
    options: [
      "Stemming foca em extrair a semântica profunda, enquanto a Lematização foca exclusivamente na sintaxe da frase.",
      "A Lematização retira sufixos baseada em regras heurísticas rígidas, e o Stemming leva a palavra ao seu infinitivo real.",
      "O Stemming retira sufixos baseado em regras (ex: Martin Porter), enquanto a Lematização leva a palavra ao seu infinitivo ou forma singular/masculina.",
      "Ambos são exatamente a mesma técnica computacional, alterando-se apenas o nome dependendo do idioma analisado.",
      "O Stemming é aplicado apenas a substantivos e adjetivos, enquanto a Lematização é exclusiva para conjunções e verbos."
    ],
    correct: 2,
    explanation: "O Stemming geralmente 'corta' o final da palavra usando regras predefinidas. Já a Lematização faz uma análise morfológica para reduzir a palavra ao seu 'lema' correto (infinitivo para verbos, masculino singular para substantivos)."
  },
  {
    id: 5,
    topicoId: 1,
    provaId: 1,
    question: "Na etapa de extração de informação, o que são Entidades Nomeadas?",
    options: [
      "Expressões regulares utilizadas para validar endereços de e-mail e CPFs.",
      "Vetores de números reais que representam as palavras em um espaço n-dimensional.",
      "Expressões que nomeiam especificamente pessoas, organizações, locais, tempos e quantidades (ex: 'São Paulo', 'ONU').",
      "O conjunto completo e estruturado de todas as palavras oficiais de um dado idioma.",
      "Palavras de ligação que não possuem significado semântico isolado e devem ser removidas."
    ],
    correct: 2,
    explanation: "Entidades nomeadas são termos que identificam unicamente entidades do mundo real, como nomes próprios de pessoas, organizações, cidades e países."
  },

  // ----------------------------------------------------
  // TÓPICO: Semântica, Léxico e Vetorização de Textos
  // ----------------------------------------------------
  {
    id: 6,
    topicoId: 1,
    provaId: 1,
    question: "No estudo das relações semânticas do léxico, como se define a Polissemia?",
    options: [
      "Relação entre palavras que se pronunciam de modo idêntico, mas possuem significados e grafias completamente diferentes.",
      "Relação direta entre duas ou mais palavras que possuem significados diametralmente opostos.",
      "O fenômeno em que palavras com grafias diferentes possuem exatamente o mesmo significado no texto.",
      "A multiplicidade de significados de uma única palavra, na maior parte das vezes atuando na mesma classe gramatical.",
      "A redução de uma palavra composta à sua raiz léxica original."
    ],
    correct: 3,
    explanation: "Polissemia descreve o fenômeno onde uma mesma palavra possui vários significados dependendo do contexto, geralmente mantendo-se na mesma classe gramatical (ex: a palavra 'ponto')."
  },
  {
    id: 7,
    topicoId: 1,
    provaId: 1,
    question: "O que o algoritmo TF-IDF (Term Frequency–Inverse Document Frequency) busca medir em uma coleção de documentos textuais?",
    options: [
      "O número total de caracteres, espaços e parágrafos de um texto longo.",
      "A similaridade fonética entre as palavras mais raras de um idioma.",
      "A importância de um termo em um documento, ponderando o aumento de sua frequência local pela raridade da palavra em todo o corpus.",
      "A quantidade exata de stopwords presentes no início e no final de cada documento analisado.",
      "A arquitetura da rede neural profunda necessária para traduzir o documento para outro idioma."
    ],
    correct: 2,
    explanation: "O TF-IDF calcula a relevância de uma palavra: o valor aumenta com a frequência da palavra no documento (TF), mas é relativizado (penalizado) pela frequência da mesma palavra em toda a coleção de documentos (IDF)."
  },
  {
    id: 8,
    topicoId: 1,
    provaId: 1,
    question: "Sobre os algoritmos de Word Embeddings (como Word2Vec e GloVe), como funciona o modelo Continuous Bag of Words (CBOW)?",
    options: [
      "Ele converte imagens brutas em dados relacionais através de processamento matricial.",
      "É um modelo de rede neural que tenta prever uma palavra-alvo considerando as palavras de contexto ao redor dela em uma frase.",
      "Ele agrupa documentos por similaridade utilizando exclusivamente a contagem absoluta de palavras comuns (BoW).",
      "Ele traduz textos palavra por palavra utilizando as regras de stemming de Martin Porter.",
      "Ele calcula matematicamente a antonímia entre pares de palavras de idiomas estruturalmente distintos."
    ],
    correct: 1,
    explanation: "O CBOW é uma arquitetura de rede neural para aprendizado de embeddings onde o objetivo é prever a palavra central (alvo) fornecendo ao modelo as palavras vizinhas (contexto)."
  },
  {
    id: 9,
    topicoId: 1,
    provaId: 1,
    question: "A WordNet é uma ferramenta amplamente utilizada em PLN. Qual é a sua definição correta?",
    options: [
      "Um algoritmo de stemming moderno que remove sufixos de palavras em inglês e português simultaneamente.",
      "Uma biblioteca Python focada exclusivamente na identificação e remoção de stopwords de textos acadêmicos.",
      "Um grande banco de dados léxico (ontologia léxica) onde as palavras são agrupadas em conjuntos de sinônimos cognitivos (synsets) interligados por relações semânticas.",
      "Um modelo de aprendizado profundo (Deep Learning) projetado para substituir as técnicas de Word Embeddings tradicionais.",
      "Um conjunto de expressões regulares padronizadas para validação de dados em formulários web."
    ],
    correct: 2,
    explanation: "A WordNet funciona como uma ontologia léxica do idioma inglês, estruturando o vocabulário em redes de sinônimos (synsets) que representam conceitos e suas interligações semânticas."
  },
  {
    id: 10,
    topicoId: 1,
    provaId: 1,
    question: "Durante o pré-processamento de um documento de texto, qual é a principal justificativa técnica para a remoção de 'Stopwords'?",
    options: [
      "Elas ocupam um volume muito grande de espaço em disco nos bancos de dados relacionais.",
      "Elas alteram radicalmente o tempo verbal das orações e prejudicam a análise sintática profunda.",
      "São palavras que normalmente são retiradas pois contribuem muito pouco para o processo computacional de identificação ou classificação temática do texto.",
      "A presença dessas palavras causa invariavelmente erros de compilação ao rodar scripts de expressões regulares.",
      "Elas atuam como bloqueadores que impedem a lematização correta das entidades nomeadas."
    ],
    correct: 2,
    explanation: "Stopwords (como artigos, preposições e conjunções) aparecem com altíssima frequência, mas carregam pouca ou nenhuma informação semântica diferencial que ajude a classificar ou identificar o tema central do texto."
  },
  {
    id: 11,
    topicoId: 1,
    provaId: 1,
    question: "Qual a principal diferença entre a sumarização abstrativa e a sumarização extrativa?",
    options: [
      "A sumarização abstrativa seleciona as sentenças mais longas do texto, enquanto a extrativa seleciona as mais curtas.",
      "A sumarização extrativa ranqueia e seleciona as sentenças originais do texto, enquanto a abstrativa compreende o contexto e cria um novo texto parafraseado.",
      "A sumarização abstrativa funciona apenas de forma supervisionada, enquanto a extrativa não utiliza corpora anotado.",
      "A sumarização extrativa depende da criação de novos templates de texto, enquanto a abstrativa recorta palavras isoladas.",
      "Ambas realizam paráfrase, mas a abstrativa foca apenas nos bigramas e trigramas."
    ],
    correct: 1,
    explanation: "A sumarização extrativa seleciona sentenças do próprio texto original baseando-se em ranqueamento, enquanto a sumarização abstrativa tenta compreender a semântica e gerar um novo texto através de paráfrases."
  },
  {
    id: 12,
    topicoId: 1,
    provaId: 1,
    question: "Na avaliação de sumários automáticos, o que a métrica ROUGE-2 analisa especificamente?",
    options: [
      "A velocidade de processamento do algoritmo de sumarização.",
      "A quantidade de palavras presentes no sumário gerado em comparação ao texto original.",
      "A taxa de compressão exata alcançada pelo modelo extrativo.",
      "A similaridade através da comparação de bigramas entre o sumário gerado automaticamente e um sumário de referência (humano).",
      "O número de tópicos latentes identificados em cada sentença do sumário."
    ],
    correct: 3,
    explanation: "A métrica ROUGE-2 utiliza bigramas (pares de palavras consecutivas) para comparar o texto do resumo gerado automaticamente com o resumo de referência gerado por um humano."
  },
  {
    id: 13,
    topicoId: 1,
    provaId: 1,
    question: "No contexto do algoritmo LDA (Latent Dirichlet Allocation), qual é o papel do parâmetro 'Número de tópicos (K)'?",
    options: [
      "Definir a quantidade máxima de palavras que cada tópico pode conter.",
      "Controlar a distribuição de tópicos por documento (Alpha).",
      "Definir a priori quantos assuntos (tópicos) o modelo deve tentar encontrar no corpus.",
      "Avaliar a interpretabilidade humana do modelo gerado.",
      "Reduzir a dimensionalidade removendo os tópicos menos frequentes."
    ],
    correct: 2,
    explanation: "O número de tópicos (K) deve ser definido a priori como um parâmetro na geração do modelo e indica quantos assuntos distintos o modelo deve procurar agrupar."
  },
  {
    id: 14,
    topicoId: 1,
    provaId: 1,
    question: "Para que serve a métrica de 'Coerência' na avaliação de modelos de Tópicos Latentes?",
    options: [
      "Para garantir que todas as palavras do vocabulário sejam incluídas em ao menos um tópico.",
      "Para calcular o tempo de execução e uso de memória do algoritmo LDA.",
      "Para substituir a métrica ROUGE na avaliação de sumários abstrativos.",
      "Para definir automaticamente o parâmetro Beta, controlando a distribuição de palavras.",
      "Para calcular a similaridade semântica entre os termos de um dado tópico, indicando quão interpretável ele é para humanos."
    ],
    correct: 4,
    explanation: "A coerência avalia a similaridade semântica entre os termos de um tópico (ex: médico, hospital, cirurgia). Uma alta coerência indica que as palavras aparecem juntas com frequência e o tópico faz sentido para um humano."
  },
  {
    id: 15,
    topicoId: 1,
    provaId: 1,
    question: "Na etapa de 'Representação Intermediária' da sumarização, qual estratégia transforma as sentenças convertendo-as em uma lista de features como tamanho, posição e flags?",
    options: [
      "Representação em Tópicos.",
      "Representação em Indicadores.",
      "Topic-word.",
      "Modelos de tópicos Bayesianos.",
      "Reformulação Baseada em Templates."
    ],
    correct: 1,
    explanation: "A representação em indicadores converte cada sentença em uma lista de indicadores de importância (features), diferentemente da representação em tópicos que se baseia em frequência, TF-IDF ou LSA."
  },
  {
    id: 16,
    topicoId: 46, 
    provaId: 2,
    question: "Sobre as diferenças no processamento de informações entre as arquiteturas tradicionais e os Transformers, assinale a opção correta:",
    options: [
      "As RNNs realizam leitura integral e paralela dos dados, evitando o esquecimento de contextos muito extensos nos textos.",
      "As LSTMs foram criadas para substituir os Transformers no processamento ágil de bilhões de parâmetros em computadores.",
      "Os Transformers utilizam o mecanismo de Self-Attention para cruzar informações de forma paralela e reter contexto longo.",
      "As arquiteturas recorrentes superam os Transformers em velocidade bruta devido ao processamento passo a passo da frase.",
      "O gargalo de processamento paralelo nas LSTMs é superado através da inserção nativa dos novos portões de auto-atenção."
    ],
    correct: 2,
    explanation: "Os Transformers leem a sequência inteira paralelamente e cruzam as informações simultaneamente utilizando mecanismos de Atenção (Self-Attention), o que elimina o gargalo de velocidade e o 'esquecimento' crônico das RNNs."
  },
  {
    id: 17,
    topicoId: 47, 
    provaId: 2,
    question: "Acerca dos componentes internos da Arquitetura Transformer (Encoder e Decoder), assinale a alternativa INCORRETA:",
    options: [
      "A máscara causal no decoder do Transformer barra que o modelo visualize o futuro enquanto tenta prever um próximo token.",
      "O bloco Encoder analisa embeddings utilizando atenção própria para convertê-los em representações contextuais detalhadas.",
      "A codificação de posição (Positional Encoding) é vital pois a arquitetura Transformer não exige processamento ordenado.",
      "A Cross-Attention autoriza que a estrutura do decoder verifique diretamente as representações produzidas via o encoder.",
      "O processo de Self-Attention do Transformer avalia os tokens de forma apenas sequencial, bloqueando relações numéricas."
    ],
    correct: 4,
    explanation: "INCORRETA (Opção 4). O Self-Attention não opera sequencialmente; ele calcula de forma matemática e totalmente paralela o grau de relevância que todos os tokens têm uns com os outros ao mesmo tempo."
  },
  {
    id: 18,
    topicoId: 53, 
    provaId: 2,
    question: "Qual a função do mecanismo Feed-Forward (FNN) nas subcamadas de um bloco Transformer?",
    options: [
      "A rede Feed-Forward altera de maneira não linear o vetor contextual de cada token após concluir a etapa de autoatenção.",
      "O mecanismo de tokenização converte valores numéricos diretos em complexas estruturas gramaticais prévias à codificação.",
      "A camada Softmax de saída altera as palavras processadas em métricas fixas sem aplicar nenhuma distribuição de chances.",
      "A metodologia WordPiece filtra tokens usando análises sintáticas estritas para garantir subpalavras perfeitamente reais.",
      "A métrica da função de perda avalia perfeitamente a criatividade do modelo, sendo que altos valores são os ideais hoje."
    ],
    correct: 0,
    explanation: "Enquanto a camada de Self-Attention coleta e cruza informações de contexto provenientes de outras palavras, a rede Feed-Forward (FNN) pega esse pacote e o refina de maneira matemática e individual para aprimorar a capacidade de decisão."
  },
  {
    id: 19,
    topicoId: 50, 
    provaId: 2,
    question: "No contexto da representação matemática de palavras, como operam os Embeddings Contextuais em modelos avançados?",
    options: [
      "Vetores estáticos aplicam múltiplos identificadores numéricos distintos para a mesma palavra baseados na sua sintaxe final.",
      "A codificação por pares de bytes (BPE) expande radicalmente as palavras isoladas para elevar a máxima precisão matemática.",
      "O identificador ID define hierarquicamente a importância absoluta do token; números altos recebem vantagens no processamento.",
      "Incorporações contextuais garantem que vocábulos polissêmicos adquiram representações vetoriais adaptadas à frase completa.",
      "A compilação focada no vocabulário de subpalavras serve restritamente para suprimir termos difíceis, trocando por simples."
    ],
    correct: 3,
    explanation: "Diferente dos embeddings estáticos (onde a palavra 'banco' tem um único vetor imutável), os contextuais baseados em Transformer usam a frase inteira para alterar dinamicamente o valor vetorial antes da inferência final."
  },
  {
    id: 20,
    topicoId: 49, 
    provaId: 2,
    question: "Existem diferentes algoritmos e estratégias na conversão de textos em unidades processáveis. Identifique a afirmação INCORRETA:",
    options: [
      "Estratégias como BPE mesclam iterativamente os caracteres mais presentes para constituir um léxico final compacto e ágil.",
      "O formato de tokenização Unigram divide os termos seguindo invariavelmente regras morfológicas consagradas pela gramática.",
      "O registro (ID) vinculado a um determinado token age puramente como localizador numérico para buscar seu respectivo vetor.",
      "Expressões imprevistas podem receber substituição pelo elemento de segurança [UNK] quando o sistema não consegue quebrá-las.",
      "Embeddings funcionam como matrizes complexas de números encarregadas de armazenar conexões lógicas e significados práticos."
    ],
    correct: 1,
    explanation: "INCORRETA (Opção 1). O tokenizador (seja Unigram, WordPiece ou BPE) busca padrões puramente estatísticos baseados na frequência e utilidade, e frequentemente divide palavras cortando-as onde não faz nenhum sentido linguístico ou morfológico."
  },
  {
    id: 21,
    topicoId: 63, 
    provaId: 2,
    question: "Quais comportamentos governam a manipulação de parâmetros durante o processo de geração autorregressiva de um LLM?",
    options: [
      "A arquitetura Decoder-only do BERT garante resultados fenomenais na classificação rápida e eficiente de textos jornalísticos.",
      "O GPT adota um modelo Encoder-Decoder completo para permitir a análise bidirecional absoluta durante a criação dos vocábulos.",
      "A limitação Top-k restringe a diversidade textual apoiada rigorosamente na verificação probabilística do teto numérico (p).",
      "O aumento desenfreado do termômetro de Temperatura obriga o gerador a adotar saídas mecanicistas, monótonas e conservadoras.",
      "O delimitador max_new_tokens fixa o teto admissível de unidades geradas, embora a inteligência possa finalizar a resposta antes."
    ],
    correct: 4,
    explanation: "O max_new_tokens impõe um limite máximo, mas não obriga o modelo a bater no teto; se a rede gerar um token de conclusão (end-of-sequence) no meio do caminho, ela para de gerar antes de esgotar o limite."
  },
  {
    id: 22,
    topicoId: 64, 
    provaId: 2,
    question: "Examine as declarações abaixo e assinale a alternativa INCORRETA sobre o funcionamento e customização das inteligências artificiais:",
    options: [
      "A arquitetura Encoder-Decoder fundamenta o sistema T5, caracterizando-se como ideal para a tradução e sumarização aprimorada.",
      "A modalidade Greedy Decoding seleciona infalivelmente a alternativa mais provável, gerando resultados notoriamente previsíveis.",
      "A ampliação do contexto utilizado por um LLM praticamente não eleva o esforço computacional graças ao Transformer.",
      "O processo de Masked Language Modeling no BERT mascara fragmentos textuais para forçar o treinamento contextual bidirecional.",
      "As predições produzidas sequencialmente por abordagens autoregressivas são acopladas ao histórico para balizar a próxima ação."
    ],
    correct: 2,
    explanation: "INCORRETA (Opção 2). Nos Transformers clássicos, o custo computacional da Atenção (Self-Attention) cresce de maneira quadrática. Portanto, dobrar o contexto (sequência) pode quadruplicar o peso da matemática sendo executada."
  },
  {
    id: 23,
    topicoId: 68, 
    provaId: 2,
    question: "Considerando as metodologias de aprimoramento contínuo após o treinamento base, identifique a opção que descreve um processo fidedigno:",
    options: [
      "O RLHF dispensa totalmente treinamentos anteriores, partindo direto de recompensas arbitrárias sem consultar nenhuma base inicial.",
      "O Instruction Tuning treina eficientemente o sistema a acatar determinações escritas em linguagem natural e prover o esperado.",
      "Uma Epoch significa a execução minuciosa de um único dado isolado do dataset, forçando a repetição da mesma palavra no teste.",
      "A divisão correta do dataset direciona 10% para o treino, garantindo maior flexibilidade, e dedica o restante para o overfitting.",
      "O procedimento de Batch Size eleva o erro total da operação caso aplique processos maiores que a taxa fixa designada pelo Token."
    ],
    correct: 1,
    explanation: "O Instruction Tuning é uma categoria do Supervised Fine-Tuning (SFT) que ensina modelos a identificarem padrões linguísticos do tipo 'Comando -> Execução', forçando-os a obedecer orientações claras."
  },
  {
    id: 24,
    topicoId: 78,
    provaId: 2,
    question: "A respeito dos gargalos de treinamento e a técnica PEFT (Parameter-Efficient Fine-Tuning), assinale a alternativa INCORRETA:",
    options: [
      "A atualização total (Full Fine-Tuning) destaca-se pelo consumo mínimo de memória RAM, ultrapassando os ganhos técnicos do LoRA.",
      "O método de quantização diminui a complexidade numérica dos valores originais, comprimindo registros de 32 bits para apenas 8.",
      "O padrão QLoRA promove a adaptação de pesos mediante matrizes reduzidas, sem destrancar as gigantescas redes de base do modelo.",
      "O uso adequado da base de validação ao longo do aprimoramento contínuo é imperativo para certificar o alto poder de abstração.",
      "O arranjo LoRA preserva estáticas as matrizes massivas principais, reajustando apenas apêndices estruturais bastante diminutos."
    ],
    correct: 0,
    explanation: "INCORRETA (Opção 0). O Fine-Tuning completo (Full) apresenta enormes gargalos de memória e custo de máquina porque atualiza todos os bilhões de parâmetros originais. Por esse motivo, alternativas mais baratas como o LoRA foram inventadas."
  },
  {
    id: 25,
    topicoId: 64, 
    provaId: 2,
    isAberto: true,
    question: "CONTEXTO: A Empresa Alpha implementou um LLM (generativo de arquitetura Decoder-only) para resumir e analisar longos históricos de atendimento ao cliente, colando milhares de páginas num mesmo prompt. No entanto, embora o código não desse erro, o modelo começou a omitir trechos essenciais da conversa ou a alucinar resoluções falsas. \n\nPROBLEMA: Com base nos recursos sobre 'Janela de Contexto', qual é o motivo dessa anomalia e como essa estrutura poderia ser consertada apresentando as devidas justificativas técnicas?",
    options: [],
    correct: null,
    suggestedSolution: "SOLUÇÃO E JUSTIFICATIVA: O sistema falhou pois ocorreu a 'diluição' das informações (ou o limite rígido da janela de contexto foi extrapolado, descartando dados críticos da atenção). Apenas ter uma janela de contexto gigante não faz com que a inteligência consiga prestar 'Atenção' com mesma precisão em tudo. \nA solução para isso é não fornecer o documento imenso de uma vez, mas implementar RAG (Retrieval-Augmented Generation) ou 'chuncking' (fatiamento). Dessa forma, a aplicação varre o documento, isola apenas o trecho onde se encontra o problema real e fornece esse pequeno pacote restrito na janela do LLM, melhorando drasticamente o rigor da resposta."
  },
  {
    id: 26,
    topicoId: 72, 
    provaId: 2,
    isAberto: true,
    question: "CONTEXTO: Uma startup realizou o processo supervisionado completo de Fine-Tuning (Full Fine-Tuning) do BERT-base para criar um filtro de admissão em RH. Durante as epochs de treino, a 'Loss' despencou quase para zero, mas na vida real, o modelo passou a rejeitar ótimos candidatos cegamente e sem coerência com novos dados.\n\nPROBLEMA: O que ocorreu metodologicamente de errado para produzir esse modelo ineficaz, e qual deve ser a estratégia técnica e divisória na correção dos dados (dataset) na próxima rodada?",
    options: [],
    correct: null,
    suggestedSolution: "SOLUÇÃO E JUSTIFICATIVA: Ocorreu o fenômeno de 'Overfitting' (Sobreajuste). O modelo decorou as métricas do banco exato em que foi treinado e perdeu totalmente a sua capacidade de abstração e generalização do mundo real, provavelmente gerado por um número excessivo de épocas (epochs) e falta de validação adequada. \nPara resolver e justificar, a startup deve dividir o dataset obrigatoriamente em 3 blocos (ex: 80% Treino, 10% Validação, 10% Teste). O modelo não deve conhecer o set de validação de antemão. O desenvolvedor deve monitorar o momento exato em que a loss de treino continuar caindo mas a loss de validação começar a subir, encerrando o aprendizado no ponto ideal, antes da inteligência 'viciar'."
  },
  {
    id: 27,
    topicoId: 65, 
    provaId: 2,
    isAberto: true,
    question: "CONTEXTO: Uma corporação do setor médico deseja executar um grande LLM generativo localmente por motivos de segurança, dispensando o uso de Cloud. O modelo em FP32 ocupa 28GB de RAM. Todavia, a infraestrutura da empresa conta com computadores que possuem VRAM e memória muito limitadas (máximo 8GB a 10GB disponíveis), inviabilizando que o peso matemático do sistema suba para as máquinas.\n\nPROBLEMA: Recorrendo às engenharias de compressão expostas no material, como viabilizar a implantação desse mesmo modelo e quais são os sacrifícios teóricos gerados pela solução?",
    options: [],
    correct: null,
    suggestedSolution: "SOLUÇÃO E JUSTIFICATIVA: A corporação precisa implementar a 'Quantização' no LLM nativo. O processo de Quantização diminui a resolução e precisão numérica original que salva as informações dos pesos matemáticos, por exemplo, substituindo formatações de FP32 (32-bits) para INT8 (8-bits) ou até mesmo blocos exíguos de 4-bits. \nJustificativa: Com essa conversão, o volume ocupado na memória cai violentamente (de cerca de 28GB originais para aproximadamente 7GB em INT8, cabendo perfeitamente nos equipamentos). O sacrifício natural de espremer o cérebro matemático de IA é uma perda colateral no rigor absoluto da sintaxe, raciocínio detalhado ou nuances que o modelo costumava dominar em precisão completa."
  }
];

export default questoes;