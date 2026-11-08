// Each flashcard belongs to a topic (topicoId)
const flashcards = [
  { id: 1, topicoId: 3, provaId: 1, frente: "O dado textual também é conhecido como:", verso: "Dado não estruturado." },
  { id: 2, topicoId: 3, provaId: 1, frente: "O código-fonte escrito em Python é um dado textual?", verso: "Verdadeiro." },
  { id: 3, topicoId: 3, provaId: 1, frente: "O nome completo de uma pessoa, gravado em um banco de dados relacional, não é um dado textual?", verso: "Falso." },
  { id: 4, topicoId: 3, provaId: 1, frente: "O campo “endereço” de um formulário de cadastro de um candidato ao vestibular, é um campo textual?", verso: "Verdadeiro." },
  { id: 5, topicoId: 3, provaId: 1, frente: "A foto a seguir (foto de uma placa, que contém texto), pode ser considerada um dado textual?", verso: "Falso." },
  { id: 6, topicoId: 3, provaId: 1, frente: "O que é Processamento de Linguagem Natural (PLN)?", verso: "Qualquer manipulação computacional de linguagens naturais, desde a contagem de palavras até a compreensão semântica." },
  { id: 7, topicoId: 3, provaId: 1, frente: "Qual é a diferença entre Corpus e Corpora?", verso: "Corpus é um conjunto de textos normalizados e rotulados. Corpora é o plural, ou seja, um conjunto de corpora (múltiplos corpora)." },
  { id: 8, topicoId: 3, provaId: 1, frente: "O que são Entidades Nomeadas?", verso: "São expressões que nomeiam pessoas, organizações, locais, tempos e quantidades (ex.: 'São Paulo', 'Brasil', 'ONU')." },
  { id: 9, topicoId: 3, provaId: 1, frente: "Qual é a definição de N-grama no contexto de PLN?", verso: "Um conjunto de 'gramas' consecutivos, onde cada letra ou palavra é considerada uma 'grama'." },
  { id: 10, topicoId: 9, provaId: 1, frente: "Qual é a diferença principal entre Stemming e Lematização?", verso: "O Stemming retira sufixos com base em regras (criado por Martin Porter). A Lematização leva a palavra ao seu infinitivo (para verbos) ou à forma masculino singular (para substantivos/adjetivos)." },
  { id: 11, topicoId: 9, provaId: 1, frente: "O que são Stopwords?", verso: "Palavras que normalmente são retiradas do texto em processamento pois pouco contribuem para a identificação e classificação." },
  { id: 12, topicoId: 18, provaId: 1, frente: "O que mede o TF-IDF (Term Frequency–Inverse Document Frequency)?", verso: "A importância de um termo em um documento presente em uma coleção, ponderando a frequência da palavra no documento em relação à sua frequência no corpus." },
  { id: 13, topicoId: 23, provaId: 1, frente: "O que é Polissemia?", verso: "A multiplicidade de significados de uma palavra, na maior parte das vezes dentro da mesma classe gramatical." },
  { id: 14, topicoId: 18, provaId: 1, frente: "Quais são os principais algoritmos utilizados para gerar Word Embeddings?", verso: "Word2Vec e GloVe." },
  { id: 15, topicoId: 3, provaId: 1, frente: "O que é Linguagem natural?", verso: "Linguagens utilizadas para comunicação do dia a dia por humanos (ex: português brasileiro, inglês)." },
  { id: 16, topicoId: 3, provaId: 1, frente: "O que estuda a Linguística Computacional?", verso: "Associada à PLN, estuda os fenômenos linguísticos para apoiar o computador na interpretação e geração da linguagem natural." },
  { id: 17, topicoId: 3, provaId: 1, frente: "O que é o Léxico e quais fatores podem influenciá-lo?", verso: "É o conjunto de palavras de um idioma (que não é fixo/fechado). Pode ser influenciado por nomes próprios, abreviações, siglas e gírias." },
  { id: 18, topicoId: 9, provaId: 1, frente: "O que é Tokenização?", verso: "É o processo de separar o texto em tokens, podendo ter o objetivo de separar um texto em frases ou uma frase em tokens menores." },
  { id: 19, topicoId: 23, provaId: 1, frente: "O que significa Normalização no contexto textual?", verso: "Transformar um texto bruto em uma forma canônica." },
  { id: 20, topicoId: 9, provaId: 1, frente: "O que é um Token?", verso: "Uma unidade com algum significado semântico. Os tokens podem ter 'tipos', que são classes de tokens com os mesmos caracteres." },
  { id: 21, topicoId: 10, provaId: 1, frente: "O que são Expressões regulares em PLN?", verso: "Uma linguagem formal para especificar cadeias de caracteres (strings), sendo uma das formas mais básicas de processar um texto." },
  { id: 22, topicoId: 18, provaId: 1, frente: "O que é Representação Vetorial de Textos?", verso: "Trata-se da conversão da representação textual (strings) de um corpus para uma representação numérica." },
  { id: 23, topicoId: 18, provaId: 1, frente: "O que o modelo Bag-of-Words (BoW) propõe?", verso: "Propõe uma maneira de representar as características textuais de documentos através de vetores numéricos." },
  { id: 24, topicoId: 23, provaId: 1, frente: "O que é uma Ontologia Léxica?", verso: "Representação formal do conhecimento de um domínio onde as entradas (conceitos) são interligadas através de ligações semânticas para processar textos (ex: WordNet)." },
  { id: 25, topicoId: 23, provaId: 1, frente: "O que é um Lema?", verso: "O resultado da lematização (palavra no infinitivo ou no masculino singular). Um lema pode ter vários significados (ex: o lema 'casar' engloba casado, casando, etc)." },
  { id: 26, topicoId: 23, provaId: 1, frente: "O que é Homonímia?", verso: "Relação entre dois ou mais lemas que têm a mesma forma gráfica e fônica (ou apenas fônica), mas significados diferentes." },
  { id: 27, topicoId: 23, provaId: 1, frente: "O que é Homofonia?", verso: "Relação entre palavras que se pronunciam de modo idêntico, mas possuem significados e grafias diferentes." },
  { id: 28, topicoId: 23, provaId: 1, frente: "O que é Sinonímia e Antonímia?", verso: "Sinonímia: palavras diferentes com o mesmo significado. Antonímia: relação entre palavras de significado oposto." },
  { id: 29, topicoId: 23, provaId: 1, frente: "O que é a WordNet?", verso: "Um grande banco de dados léxico do inglês onde palavras são agrupadas em conjuntos de sinônimos cognitivos (synsets) interligados por relações semânticas." },
  { id: 30, topicoId: 23, provaId: 1, frente: "Para que serve a tarefa de Similaridade Semântica?", verso: "Mede o grau de equivalência semântica entre dois textos, capturando a noção de que alguns textos são mais similares que outros. Usado em sumarização, por exemplo." },
  { id: 31, topicoId: 33, provaId: 1, frente: "O que são Word Embeddings (Vetores Numéricos)?", verso: "São vetores de números reais que representam palavras em um espaço n-dimensional, aprendidos e construídos a partir de corpora não rotulado." },
  { id: 32, topicoId: 33, provaId: 1, frente: "Como funciona o Continuous Bag of Words (CBOW)?", verso: "É um modelo de rede neural para aprendizado de embeddings que tenta prever uma palavra-alvo considerando as palavras de contexto ao redor dela em uma frase." },
  {
    id: 33,
    topicoId: 37,
    provaId: 1,
    frente: "O que é Sumarização Abstrativa?",
    verso: "É o tipo de sumarização que compreende o contexto e a semântica do documento original para criar um novo sumário, muitas vezes utilizando paráfrases e reescrita de sentenças."
  },
  {
    id: 34,
    topicoId: 37,
    provaId: 1,
    frente: "O que é Sumarização Extrativa?",
    verso: "É o tipo de sumarização que calcula a similaridade entre as sentenças do texto de entrada, realiza o ranqueamento e seleciona as sentenças originais com maior pontuação."
  },
  {
    id: 35,
    topicoId: 37,
    provaId: 1,
    frente: "Na avaliação de sumários, o que é a métrica ROUGE-2?",
    verso: "É uma métrica que compara o resumo gerado automaticamente com um resumo de referência (humano) utilizando bigramas (pares de palavras) para medir a sobreposição."
  },
  {
    id: 36,
    topicoId: 37,
    provaId: 1,
    frente: "Na sumarização, qual a diferença entre Representação em Tópicos e Representação em Indicadores?",
    verso: "A representação em tópicos usa frequências e algoritmos como TF-IDF ou LSA, enquanto a representação em indicadores converte sentenças em features como tamanho e posição (ex: LexRank)."
  },
  {
    id: 37,
    topicoId: 37,
    provaId: 1,
    frente: "O que é Modelagem de Tópicos (Topic Modeling)?",
    verso: "É uma técnica de aprendizado não supervisionado que identifica padrões e agrupa palavras similares em um corpus com o objetivo de extrair tópicos latentes (assuntos)."
  },
  {
    id: 38,
    topicoId: 37,
    provaId: 1,
    frente: "Qual a premissa de funcionamento do algoritmo LDA (Latent Dirichlet Allocation)?",
    verso: "Ele mapeia documentos em tópicos assumindo que cada documento é uma mistura de diferentes tópicos e que cada tópico é uma mistura de diferentes palavras."
  },
  {
    id: 39,
    topicoId: 37,
    provaId: 1,
    frente: "No algoritmo LDA, o que o parâmetro 'Número de tópicos (K)' define?",
    verso: "É um parâmetro definido a priori (empiricamente) que indica exatamente quantos assuntos distintos o modelo deve tentar encontrar e extrair do corpus."
  },
  {
    id: 40,
    topicoId: 37,
    provaId: 1,
    frente: "Para que serve o cálculo de 'Coerência' na Avaliação de Tópicos Latentes?",
    verso: "Ele calcula a similaridade semântica entre os termos de um tópico (variando de 0 a 1). Uma alta coerência indica que as palavras agrupadas fazem sentido juntas e são interpretáveis por humanos."
  },
  {
    id: 41,
    topicoId: 37,
    provaId: 1,
    frente: "No algoritmo LDA, qual a função dos parâmetros Alpha (α) e Beta (β)?",
    verso: "Alpha controla a distribuição de tópicos por documento (valores altos = mais tópicos por documento). Beta controla a distribuição de palavras por tópico (valores altos = mais palavras diferentes por tópico)."
  },
  {
    id: 42,
    topicoId: 37,
    provaId: 1,
    frente: "Quais são as quatro principais etapas do processo de sumarização de textos?",
    verso: "1. Representação intermediária; 2. Pontuação das sentenças; 3. Seleção das sentenças; 4. Reformulação de sentenças (esta última apenas para sumarização abstrativa)."
  },
  { 
    id: 43, 
    topicoId: 46, 
    provaId: 2, 
    frente: "Qual é o principal problema das Redes Neurais Recorrentes (RNNs) no processamento de textos?", 
    verso: "As RNNs processam as informações de forma sequencial (passo a passo) e sofrem de 'amnésia', tendo grande dificuldade em reter contextos ou dependências de longo prazo na frase." 
  },
  { 
    id: 44, 
    topicoId: 46, 
    provaId: 2, 
    frente: "Como a arquitetura Transformer superou a lentidão das redes recorrentes tradicionais?", 
    verso: "O Transformer analisa e carrega as informações (como um artigo inteiro) todas de uma vez de forma amplamente paralela, utilizando o mecanismo de Self-Attention." 
  },
  { 
    id: 45, 
    topicoId: 51, 
    provaId: 2, 
    frente: "No bloco Encoder do Transformer, quais mecanismos trabalham em conjunto para criar representações contextuais?", 
    verso: "O Self-Attention (Atenção Própria), que identifica relações entre diferentes palavras, e as redes Feed-Forward (FNN), que transformam e refinam matematicamente a representação de cada token." 
  },
  { 
    id: 46, 
    topicoId: 56, 
    provaId: 2, 
    frente: "Na geração autoregressiva, qual é a principal diferença entre os modelos Encoder-Only e Decoder-Only?", 
    verso: "Modelos Encoder-only (como o BERT) são voltados para a compreensão e classificação de texto, enquanto modelos Decoder-only (como o GPT) são generativos e preveem o próximo token para gerar respostas textuais." 
  },
  { 
    id: 47, 
    topicoId: 48, 
    provaId: 2, 
    frente: "Qual a diferença entre a representação por ID e um Embedding?", 
    verso: "O ID é apenas um número inteiro único que serve de índice no vocabulário; já o Embedding é um vetor numérico complexo que capta o significado semântico e a relação matemática daquela palavra." 
  },
  { 
    id: 48, 
    topicoId: 50, 
    provaId: 2, 
    frente: "Por que os Embeddings Contextuais são mais poderosos que os Estáticos (como o Word2Vec)?", 
    verso: "Porque os Embeddings Contextuais permitem que uma mesma palavra (ex: 'banco') receba vetores matemáticos diferentes dependendo da frase inteira, compreendendo se é um assento ou uma instituição." 
  },
  { 
    id: 49, 
    topicoId: 49, 
    provaId: 2, 
    frente: "O que o algoritmo de tokenização BPE (Byte Pair Encoding) prioriza na construção do seu vocabulário?", 
    verso: "Ele constrói um vocabulário compacto combinando iterativamente os pares de símbolos que aparecem com maior frequência no conjunto de treinamento." 
  },
  { 
    id: 50, 
    topicoId: 47, 
    provaId: 2, 
    frente: "Para que serve a informação de Positional Encoding (Codificação de Posição) nos Transformers?", 
    verso: "Como o Transformer processa todos os tokens de uma vez e não ordenadamente, o Positional Encoding é injetado para indicar a posição de cada token, garantindo que o modelo entenda a ordem gramatical correta." 
  },
  { 
    id: 51, 
    topicoId: 63, 
    provaId: 2, 
    frente: "No processo de geração (Next Token Prediction), o que acontece se aumentarmos o valor do parâmetro 'Temperatura'?", 
    verso: "Aumentar a temperatura torna a distribuição das probabilidades menos rígida, dando mais chance para a IA selecionar palavras menos prováveis e tornando a resposta mais diversa, imprevisível e 'criativa'." 
  },
  { 
    id: 52, 
    topicoId: 78, 
    provaId: 2, 
    frente: "O que a técnica Parameter-Efficient Fine-Tuning (PEFT), como o método LoRA, faz para economizar recursos computacionais?", 
    verso: "O LoRA congela a maior parte das gigantescas matrizes de pesos originais da IA e treina apenas matrizes de adaptação minúsculas anexadas a elas, cortando o uso de memória." 
  },
  { 
    id: 53, 
    topicoId: 63, 
    provaId: 2, 
    frente: "Qual a diferença entre a estratégia de restrição Top-k e a Top-p na geração de um LLM?", 
    verso: "O Top-k limita as opções para uma quantidade fixa 'K' dos tokens mais prováveis; já o Top-p (Nucleus Sampling) cria um corte dinâmico somando as probabilidades até alcançar o percentual 'P' estipulado." 
  },
  { 
    id: 54, 
    topicoId: 72, 
    provaId: 2, 
    frente: "O que é 'Epoch' no processo de Fine-Tuning e o que ocorre se forem utilizadas em excesso?", 
    verso: "Epoch é uma passagem completa do algoritmo por todo o dataset de treino. Se usada em excesso, causa 'Overfitting', onde o modelo memoriza o treino, mas perde a inteligência de lidar com dados novos e reais." 
  },
  {
    id: 55,
    topicoId: 63, 
    provaId: 2,
    frente: "Como funciona a estratégia de geração Top-p (Nucleus Sampling)?",
    verso: "Ela seleciona o menor conjunto de tokens cuja soma acumulada das probabilidades atinge ou ultrapassa um limite 'p', variando a quantidade de candidatos a cada etapa."
  },
  {
    id: 56,
    topicoId: 63, 
    provaId: 2,
    frente: "Qual a diferença prática entre Top-k e Top-p na restrição de tokens?",
    verso: "O Top-k restringe a seleção a uma quantidade exata e fixa de palavras (ex: os 5 mais prováveis). O Top-p usa um limite de probabilidade, fazendo com que o número de opções varie dinamicamente a cada palavra gerada."
  },
  {
    id: 57,
    topicoId: 66,
    provaId: 2,
    frente: "O que caracteriza o processo de Fine-Tuning em um modelo de linguagem?",
    verso: "É o treinamento adicional de um modelo pré-treinado usando dados específicos. Ele modifica fisicamente os pesos e parâmetros treináveis da rede neural para adaptá-la a um novo domínio ou tarefa."
  },
  {
    id: 58,
    topicoId: 70, 
    provaId: 2,
    frente: "Qual é a diferença fundamental entre adaptar um modelo via Fine-Tuning e via RAG?",
    verso: "O Fine-Tuning altera os parâmetros (pesos) do modelo de forma definitiva e offline. O RAG recupera textos externos na hora da pergunta e apenas os cola no contexto, sem alterar o cérebro matemático da IA."
  },
  {
    id: 59,
    topicoId: 67,
    provaId: 2,
    frente: "O que é Supervised Fine-Tuning (SFT)?",
    verso: "É o ajuste fino onde o modelo aprende a partir de pares estruturados contendo uma entrada e a saída exata esperada (gabarito), ajustando seus parâmetros para imitar as respostas de referência."
  },
  {
    id: 60,
    topicoId: 76,
    provaId: 2,
    frente: "Durante as epochs de Fine-Tuning, o que significa quando a função de perda (Loss) se estabiliza?",
    verso: "Significa que as alterações nos pesos do modelo passaram a produzir melhorias muito pequenas, indicando que o treinamento alcançou convergência e o modelo aprendeu o padrão dos dados."
  }
];

export default flashcards;