// Each flashcard belongs to a topic (topicoId)
const flashcards = [
  // Tópico 1 – Prova 1
  { id: 1, topicoId: 1, provaId: 1, frente: "O dado textual também é conhecido como:", verso: "Dado não estruturado." },
  { id: 2, topicoId: 2, provaId: 1, frente: "O código-fonte escrito em Python é um dado textual?", verso: "Verdadeiro." },
  { id: 3, topicoId: 2, provaId: 1, frente: "O nome completo de uma pessoa, gravado em um banco de dados relacional, não é um dado textual?", verso: "Falso." },
  { id: 4, topicoId: 2, provaId: 1, frente: "O campo “endereço” de um formulário de cadastro de um candidato ao vestibular, é um campo textual?", verso: "Verdadeiro." },
  { id: 5, topicoId: 2, provaId: 1, frente: "A foto a seguir (foto de uma placa, que contém texto), pode ser considerada um dado textual?", verso: "Falso." },
  { id: 6, topicoId: 2, provaId: 1, frente: "O que é Processamento de Linguagem Natural (PLN)?", verso: "Qualquer manipulação computacional de linguagens naturais, desde a contagem de palavras até a compreensão semântica." },
  { id: 7, topicoId: 2, provaId: 1, frente: "Qual é a diferença entre Corpus e Corpora?", verso: "Corpus é um conjunto de textos normalizados e rotulados. Corpora é o plural, ou seja, um conjunto de corpora (múltiplos corpora)." },
  { id: 8, topicoId: 2, provaId: 1, frente: "O que são Entidades Nomeadas?", verso: "São expressões que nomeiam pessoas, organizações, locais, tempos e quantidades (ex.: 'São Paulo', 'Brasil', 'ONU')." },
  { id: 9, topicoId: 2, provaId: 1, frente: "Qual é a definição de N-grama no contexto de PLN?", verso: "Um conjunto de 'gramas' consecutivos, onde cada letra ou palavra é considerada uma 'grama'." },
  { id: 10, topicoId: 2, provaId: 1, frente: "Qual é a diferença principal entre Stemming e Lematização?", verso: "O Stemming retira sufixos com base em regras (criado por Martin Porter). A Lematização leva a palavra ao seu infinitivo (para verbos) ou à forma masculino singular (para substantivos/adjetivos)." },
  { id: 11, topicoId: 2, provaId: 1, frente: "O que são Stopwords?", verso: "Palavras que normalmente são retiradas do texto em processamento pois pouco contribuem para a identificação e classificação." },
  { id: 12, topicoId: 2, provaId: 1, frente: "O que mede o TF-IDF (Term Frequency–Inverse Document Frequency)?", verso: "A importância de um termo em um documento presente em uma coleção, ponderando a frequência da palavra no documento em relação à sua frequência no corpus." },
  { id: 13, topicoId: 2, provaId: 1, frente: "O que é Polissemia?", verso: "A multiplicidade de significados de uma palavra, na maior parte das vezes dentro da mesma classe gramatical." },
  { id: 14, topicoId: 2, provaId: 1, frente: "Quais são os principais algoritmos utilizados para gerar Word Embeddings?", verso: "Word2Vec e GloVe." },
  { id: 15, topicoId: 2, provaId: 1, frente: "O que é Linguagem natural?", verso: "Linguagens utilizadas para comunicação do dia a dia por humanos (ex: português brasileiro, inglês)." },
  { id: 16, topicoId: 2, provaId: 1, frente: "O que estuda a Linguística Computacional?", verso: "Associada à PLN, estuda os fenômenos linguísticos para apoiar o computador na interpretação e geração da linguagem natural." },
  { id: 17, topicoId: 2, provaId: 1, frente: "O que é o Léxico e quais fatores podem influenciá-lo?", verso: "É o conjunto de palavras de um idioma (que não é fixo/fechado). Pode ser influenciado por nomes próprios, abreviações, siglas e gírias." },
  { id: 18, topicoId: 2, provaId: 1, frente: "O que é Tokenização?", verso: "É o processo de separar o texto em tokens, podendo ter o objetivo de separar um texto em frases ou uma frase em tokens menores." },
  { id: 19, topicoId: 2, provaId: 1, frente: "O que significa Normalização no contexto textual?", verso: "Transformar um texto bruto em uma forma canônica." },
  { id: 20, topicoId: 2, provaId: 1, frente: "O que é um Token?", verso: "Uma unidade com algum significado semântico. Os tokens podem ter 'tipos', que são classes de tokens com os mesmos caracteres." },
  { id: 21, topicoId: 2, provaId: 1, frente: "O que são Expressões regulares em PLN?", verso: "Uma linguagem formal para especificar cadeias de caracteres (strings), sendo uma das formas mais básicas de processar um texto." },
  { id: 22, topicoId: 2, provaId: 1, frente: "O que é Representação Vetorial de Textos?", verso: "Trata-se da conversão da representação textual (strings) de um corpus para uma representação numérica." },
  { id: 23, topicoId: 2, provaId: 1, frente: "O que o modelo Bag-of-Words (BoW) propõe?", verso: "Propõe uma maneira de representar as características textuais de documentos através de vetores numéricos." },
  { id: 24, topicoId: 2, provaId: 1, frente: "O que é uma Ontologia Léxica?", verso: "Representação formal do conhecimento de um domínio onde as entradas (conceitos) são interligadas através de ligações semânticas para processar textos (ex: WordNet)." },
  { id: 25, topicoId: 2, provaId: 1, frente: "O que é um Lema?", verso: "O resultado da lematização (palavra no infinitivo ou no masculino singular). Um lema pode ter vários significados (ex: o lema 'casar' engloba casado, casando, etc)." },
  { id: 26, topicoId: 2, provaId: 1, frente: "O que é Homonímia?", verso: "Relação entre dois ou mais lemas que têm a mesma forma gráfica e fônica (ou apenas fônica), mas significados diferentes." },
  { id: 27, topicoId: 2, provaId: 1, frente: "O que é Homofonia?", verso: "Relação entre palavras que se pronunciam de modo idêntico, mas possuem significados e grafias diferentes." },
  { id: 28, topicoId: 2, provaId: 1, frente: "O que é Sinonímia e Antonímia?", verso: "Sinonímia: palavras diferentes com o mesmo significado. Antonímia: relação entre palavras de significado oposto." },
  { id: 29, topicoId: 2, provaId: 1, frente: "O que é a WordNet?", verso: "Um grande banco de dados léxico do inglês onde palavras são agrupadas em conjuntos de sinônimos cognitivos (synsets) interligados por relações semânticas." },
  { id: 30, topicoId: 2, provaId: 1, frente: "Para que serve a tarefa de Similaridade Semântica?", verso: "Mede o grau de equivalência semântica entre dois textos, capturando a noção de que alguns textos são mais similares que outros. Usado em sumarização, por exemplo." },
  { id: 31, topicoId: 2, provaId: 1, frente: "O que são Word Embeddings (Vetores Numéricos)?", verso: "São vetores de números reais que representam palavras em um espaço n-dimensional, aprendidos e construídos a partir de corpora não rotulado." },
  { id: 32, topicoId: 2, provaId: 1, frente: "Como funciona o Continuous Bag of Words (CBOW)?", verso: "É um modelo de rede neural para aprendizado de embeddings que tenta prever uma palavra-alvo considerando as palavras de contexto ao redor dela em uma frase." }
];

export default flashcards;