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
  }
];

export default questoes;