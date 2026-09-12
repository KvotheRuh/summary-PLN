import pln_1 from "../images/pln_1.png"
import pln_2 from "../images/pln_2.png"
import pln_3 from "../images/pln_3.png"
import pln_4 from "../images/pln_4.png"
import pln_5 from "../images/pln_5.png"
import pln_6 from "../images/pln_6.png"
import pln_7 from "../images/pln_7.png"
import pln_8 from "../images/pln_8.png"
import pln_9 from "../images/pln_9.png"
import pln_10 from "../images/pln_10.png"
import pln_11 from "../images/pln_11.png"
import pln_12 from "../images/pln_12.png"
import pln_13 from "../images/pln_13.png"
import pln_14 from "../images/pln_14.png"
import pln_15 from "../images/pln_15.png"
import pln_16 from "../images/pln_16.png"
import pln_17 from "../images/pln_17.png"
import pln_18 from "../images/pln_18.png"
import pln_19 from "../images/pln_19.png"
import pln_20 from "../images/pln_20.png"
import pln_21 from "../images/pln_21.png"
import pln_22 from "../images/pln_22.png"
import pln_23 from "../images/pln_23.png"
import pln_24 from "../images/pln_24.png"
import pln_25 from "../images/pln_25.png"
import pln_26 from "../images/pln_26.png"
import pln_27 from "../images/pln_27.png"
import pln_28 from "../images/pln_28.png"
import pln_29 from "../images/pln_29.png"
import pln_30 from "../images/pln_30.png"
import pln_31 from "../images/pln_31.png"
import pln_32 from "../images/pln_32.png"
import pln_33 from "../images/pln_33.png"
import pln_34 from "../images/pln_34.png"
import pln_35 from "../images/pln_35.png"
import pln_36 from "../images/pln_36.png"
import pln_37 from "../images/pln_37.png"
import passo1 from "../images/1.png"
import passo2 from "../images/2.png"
import passo3 from "../images/3.png"
import passo4 from "../images/4.png"
import passo5 from "../images/5.png"
import passo6 from "../images/6.png"
import passo7 from "../images/7.png"
import passo8 from "../images/8.png"
import passo9 from "../images/9.png"
import passo10 from "../images/10.png"
import passo11 from "../images/11.png"

const topicos = [
  {
    id: 1,
    provaId: 1,
    titulo: "Conceitos Básicos",
    conteudo:
    `• <strong>Linguagem natural:</strong> linguagens que são utilizadas para comunicação do dia a dia por humanos (português brasileiro, português europeu, inglês, …).
    • <strong>Processamento de Linguagem Natural (PLN):</strong> qualquer manipulação computacional de linguagens naturais. De contagem de palavras à compreensão semântica.
    • <strong>Linguística Computacional:</strong> associada à PLN, estuda os fenômenos linguísticos para apoiar o computador na interpretação e geração da linguagem natural.
    • <strong>Corpus:</strong> conjunto de textos, normalmente normalizados e rotulados.
    • <strong>Corpora:</strong> conjunto de Corpus.
    • <strong>Entidade Nomeada:</strong> são expressões que nomeiam pessoas, organizações, locais, tempos e quantidades.
        • Exemplo: “São Paulo”, “Brasil”, “Pedro Alvares Cabral”, “ONU”, etc.
        • Dificuldades: “SP”, “S.P.”, “S. Paulo”, “São Paulo”, ...
    • <strong>Léxico:</strong> conjunto de palavras de um dado idioma.
        • O léxico de uma língua não é “fechado” ou fixo.
        • Podem influenciar no léxico:
            • Nomes próprios;
            • Abreviações e siglas;
            • Gírias, etc
    • <strong>Similaridade sintática: </strong>similaridade entre strings. Pode-se utilizar uma função de distância. As mais comuns são: a de Hamming e a de Levenshtein(Edit Distance).
    • <strong>N-grama: </strong>Um n-gram pode ser definido como um conjunto de “gramas” consecutivos, cada letra ou palavra é uma “grama”.
    • <strong>Tokenização: </strong>separar o texto em tokens. A tokenização pode ter o objetivo de separar um texto em frases ou uma frase em tokens.
    • <strong>Normalização: </strong>transformar um texto bruto em uma forma canônica.
    • <strong>Stemming: </strong>retirar o sufixo que “flexiona” palavras. Foi criado por Martin Porter em 1980. Baseado em regras.
    • <strong>Lematização: </strong>levar uma palavra ao seu infinitivo, para verbos, ou na sua forma masculina singular ser for substantivo ou adjetivo.
    • <strong>Token: </strong>sequência de caracteres com algum significado semântico. Os tokens podem ter tipos, que são classes de tokens que tem os mesmos caracteres
    • <strong>Stopwords: </strong>são palavras que normalmente são retiradas do texto em processamento pois pouco contribuem para o processo de identificação/classificação.
    • <strong>Expressões regulares: </strong>Linguagem formal para especificar cadeias de caracteres (strings). É uma das formas mais básicas de processar um texto.
    • <strong>Representação Vetorial de Textos: </strong>trata-se de conversão da representação textual (strings) de um corpus para uma representação numérica
    • <strong>Bag-of-Words (BoW): </strong>Propõe uma maneira de representar as características textuais de documentos em vetores numéricos.
    • <strong>TF-IDF: </strong>A evolução do BoW pode ser obtida utilizado o TF-IDF. O TF-IDF (term frequency–inverse document frequency) é usado para medir a importância de um termo em um documento presente em uma coleção de documentos. O valor TF-IDF de uma palavra aumenta proporcionalmente à medida que aumenta o número de ocorrências dela em um documento. Porém, este valor é relativizado pela frequência da palavra no corpus.
    • <strong>Ontologia Léxica: </strong>Uma ontologia é, em geral, uma representação formal do conhecimento consensual de um determinado domínio, útil para permitir o compartilhamento deste conhecimento entre diferentes sistemas. Em uma ontologia léxica (as vezes chamada de ontologia linguística), as entradas (ou conceitos) são interligadas através de ligações semânticas, úteis para processar textos em linguagem natural. A WordNet deve ser a mais conhecida e utilizada ontologia léxica.
    • <strong>Lema: </strong>é o resultado do processo de lematização, que consiste em levar uma palavra ao seu infinitivo, para verbos, ou na sua forma masculino singular ser for substantivo ou adjetivo. Lemas podem ter vários significados. Exemplo: casado, casando, casados, ...: casar
    • <strong>Homonímia: </strong>Relação entre dois ou mais lemas que, com significados diferentes, têm a mesma forma gráfica e fônica ou apenas fônica.
    • <strong>Homofonia: </strong>Relação entre duas ou mais palavras que, sendo diversas no significado e na grafia, se pronunciam de modo idêntico.
    • <strong>Polissemia: </strong>Multiplicidade de significados de uma palavra (na maior parte das vezes na mesma classe gramatical).
    • <strong>Sinonímia: </strong>Palavras diferentes tem o mesmo significado.
    • <strong>Antonímia: </strong>Relação entre palavras de significado oposto. Estão em lados opostos de uma escala.
    • <strong>Wordnet: </strong>“WordNet® is a large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept. Synsets are interlinked by means of conceptual-semantic and lexical relations.”
    • <strong>Similaridade Semântica: </strong>a tarefa de Similaridade Semântica Textual visa medir o grau de equivalência semântica entre dois textos, capturando a noção de que alguns textos são mais similares que outros. Esta tarefa tem diferentes aplicações como por exemplo a sumarização.
    • <strong>Vetores Numéricos (Word Embedding): </strong>Word Embeddings são vetores de números do tipo real que representam palavras em um espaço de n-dimensões. Estes vetores são aprendidos (construídos) a partir de corpora não rotulado.
    • <strong>Algoritmos de Word Embeddings: </strong>Word2Vec e Glove
    • <strong>Continuous Bag of Words (CBOW): </strong>O Continuous Bag of Words (CBOW) é um modelo de rede neural para o aprendizado de embeddings de palavras. O CBOW prevê uma palavra-alvo considerando as palavras do contexto em uma frase.
    `,
  },
  {
    id: 2,
    provaId: 1,
    titulo: "[Aula 1] O que é uma máquina inteligente?",
    conteudo: `Um computador pode ser considerado inteligente se conseguir enganar um humano, levando-o a acreditar que ele era humano`
  },
  {
    id: 3,
    provaId: 1,
    titulo: "Processamento de Linguagem Natural",
    conteudo: `Textos em linguagem natural podem ser ambíguos, subjetivos, conter erros. Na PLN, a primeira tarefa a chamar atenção foi a tradução automática (Russo <—> Inglês). Há muita informação textual (dado não estruturado) acumulada na Web, nas empresas, nos computadores das pessoas.

<strong>Aplicações</strong>
- Simples:
    - Busca por palavra-chave
    - Identificação de sinônimos
    - Verificação da escrita (ortografia)
    - Extração da Informação

- As mais sofisticadas:
    - Tradução automática
    - Reconhecimento e geração da fala
    - Sistema de diálogo e Chatbots

  Recurso mais limitados para o português:
- Parser, part-of-speech, …
- Ontologias, dicionários:
    - Português Brasileiro
    - Português Europeu
- Reconhecimento de fala
- Corpora
- Modelos Pré-treinados`,
  },
  {
    id: 4,
    provaId: 1,
    titulo: "Identificando o Dado Textual",
    conteudo: `- Dado textual = não estruturado
- Características do dado textual;
  - Não tem tipo
  - Disponível em texto-puro (ASCII ou UNICODE)

  Extração do Dado Textual
  - Origem distintas
  - Web(Html), Redes Sociais(Posts), Sistemas de Informação(nome de pessoas, endereço eletrônico, …)

- Exemplo para arquivo .html:
  - Texto espalhado ao longo do arquivo .html e suas tags
  - Conjunto de funções para extração(parser)`,
  },
  {
    id: 5,
    provaId: 1,
    titulo: "Léxico",
    conteudo: `Definição: conjunto de palavras de um dado idioma
    - O léxico de uma lingua nao e fechado ou fixo
Podem influenciar no léxico:
    - Nomes proprios
    - Abreviações e siglas
    - Girias, etc.`,
  },
    {
    id: 6,
    provaId: 1,
    titulo: "Similaridade Sintática",
    conteudo: `Para medir a similaridade entre strings podemos utilizar uma função de distância. As mais comuns são: a de Hamming e a de Levenshtein(Edit Distance). A distância de edição é definida pelo número de inserções, exclusões e substituições realizadas na comparação entre as strings envolvidas

Exemplos:
    - color → colour: ED = 1
    - survey → surgery: ED = 2`,
  },
  {
    id: 7,
    provaId: 1,
    titulo: "Cálculo do N-Gram ",
    conteudo: `Um n-gram pode ser definido como um conjunto de “gramas” consecutivos, cada letra ou palavra é uma “grama”.
    <strong>Exemplo: </strong> Calcular o grau de similaridade sintática entre as seguintes palavras usando n-gram: parar e parado.
      1. Definir o valor de N: N = 2 (digrama)
        - Parar = {pa, ar, ra, ar} → 4 digramas, 2 únicos (pa, ra)
        - Parado = {pa, ar, ra, ad, do} → 5 digramas, 5 únicos (pa, ar, ra, ad, do)

  Para efetuar o cálculo da similaridade utilizando o n-gram, podemos usar a fórmula do <strong>Coeficiende de Dice</strong>
    <img src="${pln_1}" alt="Exemplo DFS" class="resumo__gif" />
    <p class="resumo__gif-label">Coeficiente de Dice</p>

    <strong>Exemplos:</strong>
    - P1 = parana, P2 = paranaense
      - P1:
        - Digramas = {pa, ar, ra, an, na}
        - Únicos = {pa, ar, ra, an, na}
      - P2:
        - Digramas = {pa, ar, ra, an, na, ae, en, ns, se}
        - Únicos = {pa, ar, ra, an, na, ae, en, ns, se}
      - Compartilhados: {pa, ar, ra, an, na}
      - S = 2 * 5 / (5 + 9) = 0,71

    <hr>
    - P1 = carro, P2 = avião
      - P1:
        - Digramas: {ca, ar, rr, ro}
        - Únicos: {ca, ar, rr, ro}
      - P2:
        - Digramas: {av, vi, ia, ao}
        - Únicos: {av, vi, ia, ao}
      - Compartilhados: {}
      - S = 2 * 0 / (4 + 4) = 0

       Leia mais sobre outras aplicações do n-gram no PLN:
       <a href="http://text-analytics101.rxnlp.com/2014/11/what-are-n-grams.html?m=1" target="_blank" rel="noopener noreferrer">What Are N-Grams? - Text Analytics 101</a>`,
  },
  {
    id: 8,
    provaId: 1,
    titulo: "Exercício 1",
    conteudo: `Implemente um algoritmo em Python para resolver o seguinte problema:
    • Dado o seguinte léxico:
    • [abacate, abacaxi, abobora, abobrinha, ananás, maça, mamão, manga, melancia, melão, mexerica, morango]
    • Indicar a palavra mais “próxima”:
    <img src="${pln_2}"/>

    Avaliar diferentes thresolds de distância.`,
  },
  {
    id: 9,
    provaId: 1,
    titulo: "[Aula 2] Operações Básicas de PLN",
    conteudo: `Existem algumas operações básicas de processamento de um texto que são bastante comuns.
São elas:
  • Tokenização
  • Normalização
  • Stemming
  • Lematização`,
  },
  {
    id: 10,
    provaId: 1,
    titulo: "Token",
    conteudo: ` Token: sequência de caracteres com algum significado semântico.

    Os tokens podem ter tipos, que são classes de tokens que tem os mesmos caracteres.

<strong>Exemplo:</strong>
  • “Entre a direita para pegar a rua XV de Novembro”
    Tokens: 10
    Tipos (quantas palavras diferentes tem): 9 (duas ocorrências de ‘a’)
  • O número de tokens é maior que o número de tipos:
  • Exemplo: Google n-gram: 1 Tri de tokens (mas apenas 13 milhões de tipos)
  <a href=" https://books.google.com/ngrams" target="_blank" rel="noopener noreferrer">Google Ngram Viewer</a>`,
  },
  {
    id: 11,
    provaId: 1,
    titulo: "Tokezinação",
    conteudo: `Objetivo: separar o texto em tokens.

• Normalmente esta operação é realizada sobre textos no qual temos o interesse de manipular apenas palavras (deixamos caracteres de pontuação fora, por exemplo).

• A tokenização pode ter o objetivo de separar um texto em frases ou uma frase em tokens.

• Dificuldades:
  • “São Paulo”: uma ou duas palavras?
  • São Paulo é uma entidade nomeada (EN): são expressões que nomeiam pessoas, organizações, locais, tempos e quantidades.
  • “Estou indo para os E.U.A. passear.”: ponto não pode indicar final de frase.

  Problemas comuns:
  • O que fazer com:
    • Copo d’água: copo de água
    • São João da Boa Vista: quantos tokens?
    • Humano-computador: humano computador?
    • Em chinês pode não existir espaços entre palavras (Dan Jurafski):
    <img src="${pln_5}"/>`,
  },
  {
    id: 12,
    provaId: 1,
    titulo: "Normalização",
    conteudo: `Objetivo: transformar um texto bruto em uma forma canônica.
• É muito utilizado com datas, números, abreviações, …
• Necessário no processo de:
    • Recuperação da Informação:
        • Texto indexado: “São Paulo”
        • Texto bruto: “SP”
        • Texto bruto: “12/jul”
        • Texto normalizado: “12/07”
        • Texto bruto: “hoje”
        • Texto normalizado: “12/07/2018”
    • Tradução automática
    • Correção da escrita
    • Geração da fala
        • Texto bruto: R$ 100,00
        • Texto gerado: “cem reais”`,
  },
  {
    id: 13,
    provaId: 1,
    titulo: "Stemming",
    conteudo: `Objetivo: retirar o sufixo que “flexiona” palavras. Foi criado por Martin Porter em 1980. Baseado em regras.
• Esta operação é dependente da língua.
• O processo de stemming leva uma palavra para seu stem (ou tronco).

<strong>Exemplos:</strong>
  • copiar, copiando, copiado: copi
  • "Correndo", "Correu", "Correram": corr.
  • "Cachorros", "Cachorrinho", "Cachorra": cachorr.
  • "Engenharia", "Engenheiro": engenh.

• Alguns pacotes disponíveis
    <a href="Snowball (https://textprocessing.org/open-source-text-processing-project-snowball)" target="_blank" rel="noopener noreferrer">Snowball</a>
    <a href="PyStemmer (https://textprocessing.org/open-source-text-processing-project-pystemmer)" target="_blank" rel="noopener noreferrer">PyStemmer</a>`,
  },
  {
    id: 14,
    provaId: 1,
    titulo: "Lematização (lemmatizing)",
    conteudo: `Objetivo: levar uma palavra ao seu infinitivo, para verbos, ou na sua forma masculino singular ser for substantivo ou adjetivo.

<strong>Exemplos:</strong>
• pato, pata, patos, patas,...: pato
• livro, livros, livrinho, ...: livro

• Assim como a operação de stemming, pode ser útil na redução de dimensionalidade.
• Voltaremos a esta questão no futuro.`,
  },
  {
    id: 15,
    provaId: 1,
    titulo: "Lista de Palavras Frequentes (stopwords)",
    conteudo: `As stopwords são palavras que normalmente são retiradas do texto em processamento pois pouco contribuem para o processo de identificação/classificação.
• O objetivo é reduzir a dimensionalidade.
• Normalmente incluem artigos, preposições, dentre outros.
• Existem diferentes listas disponíveis: <a href="Stopwords português (https://www.linguateca.pt/chave/stopwords)" target="_blank" rel="noopener noreferrer">Stopwords português</a>`,
  },
  {
    id: 16,
    provaId: 1,
    titulo: "Exercício 2",
    conteudo: `Avaliar o algoritmo de Tokenização para os seguintes textos:
• "São Paulo, SP, S.P., S. Paulo“
• nome@pucpr.br
• "CPF: 001.002.003-04“`,
  },
  {
    id: 17,
    provaId: 1,
    titulo: "Expressões Regulares (REGEX) (ER)",
    conteudo: `Linguagem formal para especificar cadeias de caracteres (strings).
• É uma das formas mais básicas de processar um texto.
• Permite a especificação de padrões utilizados na busca de strings (ou substrings) em textos.
• Após a construção do padrão, um motor faz a análise léxica e sintática do texto-alvo e indica as ocorrências das strings encontradas a partir do padrão indicado.
• Trata-se de ferramenta muito utilizada na recuperação da informação.
• Aplicações comuns: validação email, URL, CPF, ...

<strong>Exemplo:</strong>
Um sistema registra, em uma lista, os acessos diários (login) de usuários em um sistema: cada linha representa um acesso (horário e o login do usuário)(“Expressões Regulares: Uma Abordagem Divertida”, Aurelio Marinho Jargas):
    05:15 ernesto
    08:39 ricardo
    10:32 patricia
    14:59 gabriel
    16:27 carla
    22:23 marcelo
Como fazer para localizar automaticamente aqueles usuários que acessaram o sistema no período da tarde (meio-dia às dezoito)?
R (retirado do livro): ^1[2-8]

<strong>Conceitos Básicos</strong>
Normalmente utilizamos três operações básicas na construção de uma ER:
  • Listas (metacaractere [ ])
  • Agrupamento (grouping)
  • Quantificação

• Site para avaliar uma ER: <a href="Regex101 (https://regex101.com/)" target="_blank" rel="noopener noreferrer">Regex101</a>

• Dado o seguinte texto:
    PUCPR/PPGIA
    Bloco 8 – Parque Tecnológico – 2º andar
    Rua Imaculada Conceição, 1155 - Prado Velho
    CEP 80215-901 - Curitiba - PR
• Testar (após o /):
    .
    a
    [0-9]
    [a-z]
    [pP]arque

<strong>Listas</strong>
• Barra vertical (ou, pipe, ...): |
• Conjunto de colchetes: []
  • Os elementos dentro dos colchetes formam uma expressão disjuntiva.
  <img src="${pln_7}"/>

<strong>Agrupamento e Negação</strong>
• Precedência dos operadores: ()
• Grupo:
    {min,max}
• Negação de um conjunto:
    [^…] (apenas quando o ^ vem imediatamente após o [
    <img src="${pln_8}"/>
• Avalie este exemplo: a{1,2}.
• Uso dos metacaracteres de conjunto ‘{’ e ‘}’: {min, max}.
• Em conjunto, os {} representam também repetição.
• Por exemplo:
    “[0-9]{4}” faz o matching de uma série de quatro dígitos consecutivos (como o     ano de nascimento de alguém).

<strong>Quantificação</strong>
• Quantificadores
    ?: caractere precedente é opcional
    *: 0 ou mais ocorrências do caractere precedente
    +: 1 ou mais ocorrências do caractere precedente
    .: qualquer caractere
    <img src="${pln_9}"/>

<strong>Operadores Âncoras</strong>
    ^: começo da cadeia de caracteres (fora dos colchetes)
    $: final da cadeia de caracteres
    <img src="${pln_10}"/>

<strong>Erros no Processo</strong>
Avaliemos a seguinte situação:
<img src="${pln_11}"/>
Avaliar [^a-zA-Z][pP]ara[^a-zA-Z]

• No exemplo, dois tipos de erros surgiram:
    1) retornar strings indesejadas (“parado”): falso positivo
    2) não retornar strings desejadas (“Para”): falso negativo
• Redução da taxa de erro gera um conflito:
    • Incremento da acurácia/precisão (precision): diminuir falsos positivos
    • Incremento da cobertura (recall): diminuir falsos negativos

<strong>Usos Gerais</strong>
• Verificação de entradas do usuário (ex.: URL, email, ...).
• Útil no pré-processamento de textos antes da aplicação de classificadores.
• Extração da informação em diferentes contextos.

Links interessantes:
<a href="Aurelio Regex (http://aurelio.net/regex/)" target="_blank" rel="noopener noreferrer">Aurelio Regex</a>
<a href="Stanford (http://web.stanford.edu/~jurafsky/slp3/2.pdf)" target="_blank" rel="noopener noreferrer">Stanford</a>

<strong>Exemplos de ERs</strong>
• Verificar a presença do http:// ou https://
^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$
<strong>Exemplo em Python</strong>
<img src="${pln_12}"/>

<strong>Exercícios</strong>
1) Escreva uma RegEx para identificar as ocorrências de letras minúsculas em início de linha.
2) Dado o texto a seguir, identifique todas as ocorrências derivadas de “gol”:
    Olha o gol!
    Goooooool, do Brasil!
    E que belo gol.
3) Dado o trecho de código html a seguir, crie uma expressão regular para identificar a presença dos marcadores da linguagem, <></>
    Bom dia! <a href="/sol">Sol</a>
    <a>Vamos estudar as RegEx?</a>
4) Escreva uma RegEx para validar um horário no formato hh:mm, onde a hora pode variar de 0 a 23. Veja alguns exemplos para você avaliar:
    10:10
    02:35
    25:20
    20:60
    2:10
    24:00
    23:59
5) Crie uma RegEx para validar uma data no formato DD/MM/AAAA.
Você pode utilizar o seguinte texto de teste:
    Data de Nascimento: 10/03/1980
    Dica: para que o caractere ‘/’ utilizado para separar dia de mês e mês de ano seja identificado, acrescente o metacaractere ‘\’ imediatamente antes. Assim, a
    RegEx final terá como parte de sua forma a sequência “\/” (aparecerá duas vezes).

• Número telefone celular com código de área:
(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b
• Data:
((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\/((0[1-9])|(1[0-2]))\/[0-9]{4}
• CEP:
• Email:`,
  },
  {
    id: 18,
    provaId: 1,
    titulo: "[Aula 3] Representação Vetorial de Textos",
    conteudo: `Definição: trata-se de conversão da representação textual (strings) de um corpus para uma representação numérica
(vetor).
• Esta operação é necessária como etapa inicial ao processo de classificação ou recuperação da informação, por exemplo.
• Em outras palavras, trata-se de um processo equivalente a “obtenção de características” do texto/corpus.
• Um dos primeiros métodos conhecidos para realizar esta tarefa é o bag-of-words.`,
  },
  {
    id: 19,
    provaId: 1,
    titulo: "Bag-of-Words (BoW)",
    conteudo: `• Propõe uma maneira de representar as características textuais de documentos em vetores numéricos.
• Baseado na frequência de palavras nos textos(histograma de palavras).
• A ideia da “sacola” de palavras vem do fato de que a ordem das palavras ou a estrutura do texto não é levado em consideração no processo.
• Todo o corpus pode ser chamado de “lista de BoW”.
• Primeira etapa: encontrar todas as ocorrências de uma palavra (ou termo), o que
chamaremos de definição do vocabulário.
• Dado o seguinte corpus extraído de <a href="gentle-introduction-bag-words-model (https://machinelearningmastery.com/gentle-introduction-bag-words-model/)" target="_blank" rel="noopener noreferrer">gentle-introduction-bag-words-model</a>:
    “It was the best of times,”
    “it was the worst of times,”
    “it was the age of wisdom,”
    “it was the age of foolishness.”
• Cada linha é tratada como um documento. O vocabulário seria então formado por 10 palavras:
    “it”, “was”, “the”, “best”, “of”, “times”, “worst”, “age”, “wisdom”, “foolishness”
• Perceba que nenhuma operação básica de modificação no texto foi realizada (por exemplo, extração de stopwords).
• Segunda etapa: criação dos vetores de documentos. Os vetores terão comprimento de 10 posições, visto que o vocabulário tem comprimento C = 10. Para cada texto, indicar a ocorrência (e a quantidade) para cada termo.
• Dado o vocabulário, cada palavra representa uma posição no vetor:
    {“it”, “was”, “the”, “best”, “of”, “times”, “worst”, “age”, “wisdom”, “foolishness”}
• Vetores:
    v1 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    v2 = [1, 1, 1, 0, 1, 1, 1, 0, 0, 0]
    v3 = [1, 1, 1, 0, 1, 0, 0, 1, 1, 0]
    v4 = [1, 1, 1, 0, 1, 0, 0, 1, 0, 1]

Outro exemplo:
• Corpus:
    d1 = “John likes to watch movies. Mary likes movies too.”
    d2 = “John also likes to watch football games.”
• Vocabulário após a extração de stopwords {“also”, “to”, “too”}: {“John”, “likes”, “watch”, “movies”, “Mary”, “football”, “games”}
• Vetores:
    v1 = [1, 2, 1, 2, 1, 0, 0]
    v2 = [1, 1, 1, 0, 0, 1, 1]
<strong>O comprimento do vetor tem relação direta à extensão do vocabulário. Se reduzirmos o tamanho do vocabulário, consequentemente teremos vetores menores.</strong>

<strong>Matriz Termo-Documento</strong>
• O conjunto de todos os vetores forma a matriz Termo-Documento.
• Para a coleção de documentos a seguir:
    d1 = “O carro branco é bonito. O carro é novo.”
    d2 = “Comprei um carro branco bonito.”
    d3 = “Comprei um novo carro.”
    d4 = “Todos precisamos de um carro.”
• A matriz equivalente é construída (sem stopwords):
    <img src="${pln_13}"/>

<strong>Detalhes da Utilização do BoW</strong>
• A matriz gerada pelos N documentos (textos) é geralmente esparsa (vários 0s ao longo das colunas - Lei de Zipf) e de alta dimensionalidade.
• Formas de reduzir a dimensão:
    • Retirada de stopwords;
    • Lematização;
    • Uso do n-gram (múltiplas palavras por token).
• O fato de uma palavra ter alta frequência não necessariamente significa que trata-se de um termo importante. Por exemplo: artigos (‘o’, ‘a’, ...) tem a tendência de ocorrer com frequência em textos.

<strong>Distribuição dos Termos</strong>
• A distribuição dos termos em uma coleção de documentos segue a lei de Zipf e a distribuição de cauda longa (long-tail):
    • A maior parte do vocabulário tem baixa frequência.
    <img src="${pln_14}"/>
`,
  },
  {
    id: 20,
    provaId: 1,
    titulo: "TF-IDF",
    conteudo: `• A evolução do BoW pode ser obtida utilizado o TF-IDF. O TF-IDF (term frequency–inverse document frequency) é usado para medir a importância de um termo em um documento presente em uma coleção de documentos. (JONES, 1972) (SALTON; BUCKLEY, 1988)
• O valor TF-IDF de uma palavra aumenta proporcionalmente à medida que aumenta o número de ocorrências dela em um documento. Porém, este valor é relativizado pela frequência da palavra no corpus. Resumindo:
    • 1) quanto mais frequentemente um termo ocorre em um documento, mais representativo ele é para o conteúdo, e;
    • 2) quanto mais documentos o termo ocorre, menos discriminativo ele é.
    • “TF-IDF é comumente usado em Recuperação de Informação para comparar um vetor de consulta com um vetor de um documento de texto, usando uma função de similaridade ou distância, como a função cosseno (SOUCY; MINEAU, 2005).”
    • Para computar o TF-IDF vamos trabalhar com o seguinte corpus:
        d1 = “O carro branco está na rodovia.”
        d2 = “O caminhão branco parou na garagem.”
        <img src="${pln_15}"/>
    • Matematicamente, TF-IDF (term frequency–inverse document frequency) pode ser computado como:
        • termo-frequência (tf): nos fornece a frequência de cada termo em um documento do corpus.
        <img src="${pln_16}"/>
    • Para o corpus:
          tf(“carro”, d1) = 1/6 = 0.167
          tf(“carro”, d2) = 0/6 = 0
          tf(“branco”, d1) = 1/6 = 0.167
          tf(“branco”, d2) = 1/6 = 0.167
    • Cálculo do IDF (inverse data frequency): permite computar o peso de cada palavra na coleção de documentos. Palavras que ocorrem mais raramente tem maior IDF.
        <img src="${pln_17}"/>
    • Para o corpus:
        idf (“carro”) = log(2/1) = 0.3
        idf (“branco”) = log(2/2) = 0
     • O cálculo do TD-IDF seria então o produto de ambas equações:
        <img src="${pln_18}"/>

    <strong>Exemplo:</strong>
    • Para o corpus:
        tf-idf (“carro”, d1) = 0.167 x 0.3 = 0.0501
        tf-idf (“carro”, d2) = 0 x 0.3 = 0
        tf-idf (“branco”, d1) = 0.167 x 0 = 0
        tf-idf (“branco”, d2) = 0.167 x 0 = 0
    • Conclusões:
        • tf-idf de palavras em comum nos documentos é zero, ou seja, não são palavras significantes na discriminação dos textos;
        • tf-idf de “carro” é diferente de zero, o que significa que esta palavra tem mais importância na coleção de documentos.

    <strong>Exercício</strong>
      • Dado o corpus 2000_textos.txt disponível no Canvas, plote o histograma dos tokens presentes no arquivo.
      • Avalie o resultado comparando-o com a Lei de Zipf.`,
  },
  {
    id: 21,
    provaId: 1,
    titulo: "Similaridade entre Documentos",
    conteudo: `• Dada a introdução ao trabalho com o modelo de espaço vetorial (vector space model), onde documentos são representados como coleções (vetores) de valores (índices, frequência, etc.), podemos utilizá-los em diferentes aplicações.
• Vamos utilizar o espaço vetorial para identificar qual documento D está mais “próximo” de um vetor de consulta Q (a query Q será então considerada como um documento).
• Neste caso uma medida de similaridade pode ser usada para calcular a distância entre os vetores (documentos).
• Uma forma tradicional de medir a distância entre dois vetores é por meio da medida do ângulo entre ambos.
• O ângulo é computado pelo produto interno entre os vetores.

<strong>Exemplo</strong>
• Vamos analisar um exemplo, onde cada documento é composto por apenas dois termos: “Inteligência” e “Artificial”.
• Dados os seguintes documentos:
    d1 = “Inteligência Artificial”
    d2 = “Artificial”
    d3 = “Inteligência”
• e a query:
    q = “Inteligência Artificial”
    <img src="${pln_19}"/>

• Vetor de documentos:
    d1 = [1, 1]
    d2 = [0, 1]
    d3 = [1, 0]
    q = [1, 1]`,
  },
  {
    id: 22,
    provaId: 1,
    titulo: "Coeficiente de Similaridade (SC)",
    conteudo: `• Para o cálculo da similaridade entre os documentos temos diferentes abordagens. Uma das mais simples é calcular o produto dos vetores.
Assume-se que o comprimento do vetor que representa a query Q é igual ao comprimento dos vetores dos documentos da coleção.
<img src="${pln_20}"/>

<strong>Exemplo</strong>
• Assumindo o seguinte corpus de documentos (Grossman and Frieder, 2004):
    d1 = “Shipment of gold damaged in a fire.”
    d2 = “Delivery of silver arrived in a silver truck.”
    d3 = “Shipment of gold arrived in a truck.”
• e a query:
    q = “gold silver truck.”

    TF-IDF da Query
    tf(“gold”, q) = 1/3 = 0.333
    tf(“silver”, q) = 1/3 = 0.333
    tf(“truck”, q) = 1/3 = 0.333

    N agora tem 4 documentos:
    idf (“gold”) = log(4/3) = 0.1249
    idf (“silver”) = log(4/2) = 0.3010
    idf (“truck”) = log(4/3) = 0.1249

    tf-idf (“gold”) = 0.333 * 0.1249 = 0.0416
    tf-idf (“silver”) = 0.333 * 0.3010 = 0.1000
    tf-idf (“truck”) = 0.333 * 0.1249 = 0.0416

    Matriz de Documentos
    • Corpus:
        d1 = “Shipment of gold damaged in a fire.”
        d2 = “Delivery of silver arrived in a silver truck.”
        d3 = “Shipment of gold arrived in a truck.”
    • Query:
        • q = “gold silver truck.”
        • Temos então 3 documentos e 11 termos na coleção.
        <img src="${pln_21}"/>

<strong>Exemplo</strong>
• Após o cálculo dos pesos para cada documento, computamos a similaridade SC da query Q em relação à cada documento Di.
    SC(q, d1) = (0*0) + (0*0) + (0*0.068) + … (0.042*0.025) + ...+ (0. 1* 0) +
    (0.042*0) = 0.0010
    SC(q, d2) = (0.1*0.119) + (0.042*0.022) = 0.0128
    SC(q, d3) = (0.042*0.025 ) + (0.042*0.025) = 0.0020
• Assim, o documento mais próximo à query q seria d2, depois d3 e d1.

<strong>Exercício para Entrega</strong>
• Dado o corpus:
    d1 = “O rato roeu a roupa do rei de Roma.”
    d2 = “Nenhum rato rói a roupa do rei de Roma sem punição.”
    d3 = “A rota de fuga do rato foi rápida.”
• Implementar um programa em Python para computar o TF-IDF de cada termo.`,
  },
  {
    id: 23,
    provaId: 1,
    titulo: "[Aula 4] Próximo Passo",
    conteudo: `•Após as etapas iniciais de manipulação do dado textual, nos interessamos agora pela semântica.
•Identificar o significado de um texto é a tarefa mais complexa de todo processo.
•As abordagens conhecidas partem do uso de Ontologias Léxicas ou de Embeddings.`,
  },
  {
    id: 24,
    provaId: 1,
    titulo: "Ontologia Léxica",
    conteudo: `Definição:
• Uma ontologia é, em geral, uma representação formal do conhecimento consensual de um determinado domínio, útil para permitir o compartilhamento deste conhecimento entre diferentes sistemas.
• Em uma ontologia léxica (as vezes chamada de ontologia linguística), as entradas (ou conceitos) são interligadas através de ligações semânticas, úteis para processar textos em linguagem natural.
• A WordNet deve ser a mais conhecida e utilizada ontologia léxica.`,
  },
  {
    id: 25,
    provaId: 1,
    titulo: "Significado das Palavras",
    conteudo: `• Uma das operações básicas de processamento de textos refere-se a obtenção dos lemas das palavras encontradas em um texto.
• O lema é o resultado do processo de lematização, que consiste em levar uma palavra ao seu infinitivo, para verbos, ou na sua forma masculino singular ser for substantivo ou adjetivo.
• Lemas podem ter vários significados.

<strong>Exemplo:</strong>
    • casado, casando, casados, ...: casar
• No exemplo, o verbo “casar” pode ter múltiplos sentidos (significados) (dicionário online Google):
    • unir(-se) por matrimônio.
        • "foi o padre que casou Maria (com João)“
    • juntar, agrupar por determinadas afinidades, ger. aos pares.
        • "c. pés de meia"`,
  },
  {
    id: 26,
    provaId: 1,
    titulo: "Homonímia",
    conteudo: `Definição:
• Relação entre dois ou mais lemas que, com significados diferentes, têm a mesma forma gráfica e fônica ou apenas fônica.

<strong>Exemplo:</strong>
    • casar:
        • S1: Casar-se com alguém
        • S2: Encontrar pares

    • cesta:
        • Utensílio de vime;
    • sexta;
        • Ordinal referente a seis (posição).`,
  },
  {
    id: 27,
    provaId: 1,
    titulo: "Homofonia",
    conteudo: `Definição:
• Relação entre duas ou mais palavras que, sendo diversas no significado e na grafia, se pronunciam de modo idêntico.

<strong>Exemplo:</strong>
    • “passo”: deslocamento/andar.
    • “paço”: palácio.`,
  },
  {
    id: 28,
    provaId: 1,
    titulo: "Polissemia",
    conteudo: `Definição:
• Multiplicidade de significados de uma palavra (na maior parte das vezes na mesma classe gramatical).
<strong>Exemplo:</strong>
    • “prato”: “vasilha”, “comida”, “receptáculo de balança”, “instrumento musical”;
    • “pé de moleque”: “doce”, “pé de uma pessoa”.`,
  },
  {
    id: 29,
    provaId: 1,
    titulo: "Sinonímia",
    conteudo: `Definição:
    • Palavras diferentes tem o mesmo significado.
    • Dois lemas são sinônimos se:
        • Podem ser substituídos mutuamente em qualquer situação.
<strong>Exemplo:</strong>
    • “carro” e “automóvel”
    • “preto” e “negro`,
  },
  {
    id: 30,
    provaId: 1,
    titulo: "Antonímia",
    conteudo: `Definição:
• Relação entre palavras de significado oposto. Estão em lados opostos de uma escala.
<strong>Exemplo:</strong>
    • “frio” e “quente”
    • “bem” e “mal”
    • “bonito” e “feio”`,
  },
  {
    id: 31,
    provaId: 1,
    titulo: "Wordnet",
    conteudo: `“WordNet® is a large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept. Synsets are interlinked
by means of conceptual-semantic and lexical relations.” https://wordnet.princeton.edu/
    • A Wordnet tem uma versão online para consulta:
• http://wordnetweb.princeton.edu/perl/webwn
• Alguns números:
    +155k palavras
    +117k synsets
    +207k pares palavra-sentido
• Além dos conceitos e suas relações, a ontologia léxica pode
ter instâncias.
• Por exemplo:
    • “Compositor” (conceito): “Bach” (instância)
• Python: WordNet do NLTK
    • http://www.nltk.org/howto/wordnet.html

    <img src="${pln_22}"/>
    <img src="${pln_23}"/>

<strong>Versões para o Português</strong>
• OpenWordnet-PT:
    • Pode ser acessada em: https://github.com/own-pt/openWordnet-PT
    • Versão online:
    • https://www.openwordnet-pt.org/
• Onto.PT:
    • Pode ser acessada em: http://ontopt.dei.uc.pt/`,
  },
  {
    id: 32,
    provaId: 1,
    titulo: "Similaridade Semântica",
    conteudo: `Definição: a tarefa de Similaridade Semântica Textual visa medir o grau de equivalência semântica entre dois textos, capturando a noção de que alguns textos são mais similares que outros. Esta tarefa tem
diferentes aplicações como por exemplo a sumarização. (Agirre et al., 2013) (Freire et al., 2016)

<strong>Exemplo:</strong>
• “A organização criminosa é formada por diversos empresários e por um deputado estadual” e “Segundo a investigação, diversos empresários e um deputado estadual integram o grupo.” (alto grau de similaridade)
• “Mas esta é a primeira vez que um chefe da Igreja Católica usa a palavra em público.” e “A Alemanha reconheceu ontem pela primeira vez o genocídio armênio”. (baixo grau de similaridade)
• Avaliar em: https://dandelion.eu/semantic-text/text-similarity-demo/

<strong>Similaridade Baseada em Grafos</strong>
<img src="${pln_24}"/>

<strong>Similaridade Semântica Usando a Wordnet</strong>
    • Podemos usar a ideia da distância hierárquica.
    • Vamos usar a fórmula de similaridade de Wu-Palmer:
    <img src="${pln_25}"/>
        • onde:
            • 𝑐1 e 𝑐2 são os dois conceitos (palavras/sentidos) que estamos comparando;
            • LCS (Least Common Subsumer): é o ancestral comum mais específico dos dois conceitos, dentro da hierarquia do WordNet;
            • profundidade: é a distância da raiz até o conceito (em número de níveis).
    • A similaridade será maior quando os dois conceitos:
        • Estão mais próximos do mesmo ancestral.
        • Estão mais abaixo na árvore (mais específicos).

    <strong>Exemplos:</strong>
        • “cat” e “feline”
            • Compartilham um ancestral próximo (como "carnivore")
            • profundidade alta do LCS
            • resultado: perto de 1
        • “cat” e “car”
            • LCS é muito genérico ("entity")
            • profundidade baixa
            • resultado: perto de 0
    <img src="${pln_26}"/>

<strong>Exercício de Similaridade Semântica</strong>
• Peça ao usuário para digitar duas frases em inglês.
• Extraia as palavras principais (retirar stopwords, como "the", "is", etc).
• Calcule a similaridade semântica média entre as palavras das duas
frases usando wup_similarity.
• Mostre a similaridade final e destaque os pares de palavras mais
semelhantes.
O que já vimos que pode ajudar:
• Use nltk.word_tokenize para separar as palavras.
• Filtre palavras usando a lista stopwords do NLTK.
• Use o código já visto para calcular similaridades com WordNet.
• Mostre também os pares de palavras com a maior similaridade.

• Avalie o notebook similaridade_semantica_wordnet_PT.ipynb`,
  },
  {
    id: 33,
    provaId: 1,
    titulo: "[Aula 5] Vetores Numéricos (Word Embedding)",
    conteudo: `Word Embeddings são vetores de números do tipo real que representam palavras em um espaço de n-dimensões. Estes vetores são aprendidos (construídos) a partir de corpora não rotulado.
• Para entender o contexto do uso destes vetores precisamos de dois conceitos de base:
    • Representação vetorial de um texto;
    • Significado de palavras.

<strong>Princípios Básicos</strong>
• Textos são coleções de tokens (por exemplo, palavras).
• Os tokens precisam ser “digitalizados” para serem processados por diferentes algoritmos.
• Uma das tarefas iniciais então é transformar um texto em um vetor numérico.
• Os métodos mais simples e tradicionais são baseados em frequência de palavras. Eles propõem contagem de tokens (one-hot representation) ou a contagem relativa de tokens em função de sua importância (TF-IDF).

<strong>Criação de um Embedding</strong>
•Como aprimorar a representação vetorial, aproximando-se dos aspectos semânticos dos textos?

<strong>Hipótese Distribucional</strong>
• Definição: o significado de uma palavra pode ser dado pelas palavras que frequentemente aparecem próximas em frases. Artigo de Z. Harris
(https://www.tandfonline.com/doi/pdf/10.1080/00437956.1954.11659520)
• “You shall know a word by the company it keeps” (J. R. Firth 1957: 11 - https://annabellelukin.edublogs.org/files/2013/08/Firth-JR-1962-A-Synopsis-of- Linguistic-Theory-wfihi5.pdf)

<strong>Representando Palavras</strong>
• Textos são compostos por tipos discretos, como as palavras.
• Representar estes elementos discretos (palavras ou words) por meio de vetores (word embedding) é um passo importante na resolução de muitas aplicações de PLN.
• Word Embeddings são vetores de números do tipo real que representam palavras em um espaço de n-dimensões. Estes vetores são aprendidos (construídos) a partir de corpora não rotulado. Capturam conhecimento sintático, semântico e morfológico (https://arxiv.org/pdf/1708.06025.pdf).
• Os Word Embeddings são aprendidos ao apresentar para um modelo um grande volume de dados textuais. O modelo ajusta os vetores com base no contexto em que as palavras aparecem, garantindo que palavras usadas em situações semelhantes tenham representações vetoriais semelhantes.
• Resumindo: vetores de palavras com significado similar, terão representação similar.
• Vantagem: em termos computacionais, os vetores gerados são menores (n <= 100) e não esparsos.`,
  },
  {
    id: 34,
    provaId: 1,
    titulo: "Algoritmos de Word Embeddings",
    conteudo: `Os algoritmos constroem vetores com valores numéricos a partir de um corpus com um vocabulário de tamanho fixo.
    • Algoritmos mais conhecidos:
        • Word2Vec - Proposto por Tomas Mikolov et al.: https://arxiv.org/abs/1301.3781
        • Glove - Proposto por Pennington et al.: https://nlp.stanford.edu/pubs/glove.pdf
    • Problema: normalmente o treinamento, para ser eficiente, exige um grande volume de dados (da ordem de bilhões de tokens).

    <strong>Prncípio básico</strong>
    <img src="${pln_27}"/>
    <img src="${pln_28}"/>
    <img src="${pln_29}"/>
    <img src="${pln_30}"/>
    <img src="${pln_31}"/>`,
  },
    {
    id: 35,
    provaId: 1,
    titulo: "Continuous Bag of Words (CBOW)",
    conteudo: `• O Continuous Bag of Words (CBOW) é um modelo de rede neural para o aprendizado de embeddings de palavras. O CBOW prevê uma palavra-alvo considerando as palavras do
contexto em uma frase.
• A rede neural do CBOW contém três camadas:
    • camada de entrada: representa as palavras contextuais em uma frase;
    • camada oculta: aprende os embeddings das palavras;
    • camada de saída: prevê a palavra-alvo.
    <img src="${pln_32}"/>

<strong>Treinamento do CBOW</strong>
• O treinamento consiste em apresentar ao modelo pares de entrada-saída e ajustar os parâmetros do modelo para minimizar o erro de predição.
• Algoritmos de otimização como Stochastic Gradient Descent (SGD) ou Adam, atualizam os pesos do modelo (camada escondida).
• O processo de otimização visa encontrar os embeddings de palavras que melhor capturam as relações semânticas entre as palavras no corpus.
• A camada de saída normalmente emprega a função de ativação softmax, ou seja, converte a saída em uma distribuição de probabilidade, permitindo que o modelo preveja a palavra mais provável para um determinado contexto.

<strong>CBOW em termos simples</strong>
• Cada palavra do vocabulário é associada a um vetor numérico com valores aleatórios.
• Por exemplo:
    • “O gato bebe leite todos os dias”
• O modelo pode usar “gato”, “bebe”, “todos”, “os” para prever “leite”.
• Os vetores dessas palavras são combinados, normalmente pela média, formando uma representação do contexto.
• No exemplo, o modelo calcula o erro da previsão e aplica backpropagation. Esse erro é propagado de volta aos pesos associados às palavras de entrada.
• Em cada exemplo de treinamento, vários vetores podem ser ajustados simultaneamente.
O NILC da USP-São Carlos mantém um repositório de vetores pré-treinados: http://nilc.icmc.usp.br
• A biblioteca Python Gensim é pode ser utilizada para o treinamento e utilização de word embeddings: https://radimrehurek.com/gensim/
• Trata-se de uma biblioteca para a modelagem de tópicos, com uma série de funções úteis.

<strong>Exemplo Utilizando um Modelo Pré-Treinado</strong>
• Vamos começar usando um modelo pré-treinado:
• CBOW 50 dimensões: https://huggingface.co/collections/nilc-nlp/nilc-embeddings
• Notebook:
    • exemploW2Vec.ipynb
<img src="${pln_33}"/>
`,
  },
  {
    id: 36,
    provaId: 1,
    titulo: "Sentence Embedding",
    conteudo: `• A biblioteca Python SentenceTransformers (SBERT - https://www.sbert.net/) permite a criação de embeddings de sentenças, textos e imagens. A biblioteca é uma adaptação do BERT (Bidirectional Encoder Representations from Transformers) pré-treinado que gera embeddings de sentenças que podem ser comparadas usando a similaridade
de cosseno.
• Detalhes sobre o funcionamento podem ser obtidos neste artigo: https://arxiv.org/abs/1908.10084.

<strong>Exemplos Sentence Transformer (SBERT)</strong>
• Avaliar notebook: exemplosSBERT.ipynb

<strong>Matriz de Documentos</strong>
• Corpus:
    d1 = “Shipment of gold damaged in a fire.”
    d2 = “Delivery of silver arrived in a silver truck.”
    d3 = “Shipment of gold arrived in a truck.”
• Query:
    q = “gold silver truck.”
• Temos então 3 documentos e 11 termos na coleção
<img src="${pln_34}"/>

<strong>Exemplo</strong>
• Após o cálculo dos pesos para cada documento, computamos a similaridade SC da query Q em relação à cada documento Di.
    SC(q, d1) = (0*0) + (0*0) + (0*0.068) + … (0.042*0.025) + ...+ (0. 1* 0) + (0.042*0) = 0.0010
    SC(q, d2) = (0.1*0.119) + (0.042*0.022) = 0.0128
    SC(q, d3) = (0.042*0.025 ) + (0.042*0.025) = 0.0020
• Assim, o documento mais próximo à query q seria d2, depois d3 e d1.

<strong>Modelos Pré-Treinados</strong>
<img src="${pln_35}"/>

<strong>Usando Sentence Embedding</strong>
<img src="${pln_36}"/>
    Query: ‘gold silver truck’
    - D1: “Shipment of gold damaged in a fire”
        - Score: 0.4145
    - D2: “Delivery of silver arrived in a silver truck”
        - Score: 0.7187
    - D3: “Shipment of gold arrived in a truck”
        - Score: 0.6851
<img src="${pln_37}"/>

<strong>Exercício</strong>
• Modificar o notebook “criandoModelo.ipynb” para treinar o modelo usando o corpus “g1_ml.csv”.
• Realizar experimentos para avaliar a qualidade do modelo:
    • Cálculo de similaridade entre tokens.
• Varie os parâmetros do algoritmo conforme avaliar conveniente. Lista de parâmetros:
    • https://radimrehurek.com/gensim/models/word2vec.html`,
  },
  {
    id: 37,
    provaId: 1,
    titulo: "Python para PLN",
    conteudo: `• Principais pacotes:
  • NLTK: nltk.org
  • spaCy: spacy.io

  <strong>Exemplos:</strong>
  • Contar palavras
    <img src="${pln_3}"/>
  <hr>
  • Contar Tokens
  <img src="${pln_4}"/>
  <hr>
  Stemming:
      <a href="Snowball (https://textprocessing.org/open-source-text-processing-project-snowball)" target="_blank" rel="noopener noreferrer">Snowball</a>
      <a href="PyStemmer (https://textprocessing.org/open-source-text-processing-project-pystemmer)" target="_blank" rel="noopener noreferrer">PyStemmer</a>

  • Stemmer: O NLTK inclui o stemmer RSLP Portuguese
  <img src="${pln_6}"/>
  <hr>
  • Separação em sentenças:
  <a href="punkt (https://www.nltk.org/_modules/nltk/tokenize/punkt.html)" target="_blank" rel="noopener noreferrer">Punkt</a>
  <hr>
  • Stopwords português :
  <a href="Stopwords português (https://www.linguateca.pt/chave/stopwords)" target="_blank" rel="noopener noreferrer">Stopwords português</a>
  <hr>
  • Regex
  <img src="${pln_12}"/>
  <hr>
  • Python: WordNet do NLTK
    • http://www.nltk.org/howto/wordnet.html
  <hr>
  • Similaridade semântica
   <img src="${pln_26}"/>
   <hr>
   Repositório de Word Embeddings em PT-BR
   • O NILC da USP-São Carlos mantém um repositório de vetores pré-treinados: http://nilc.icmc.usp.br/
• A biblioteca Python Gensim é pode ser utilizada para o treinamento e utilização de word embeddings: https://radimrehurek.com/gensim/
• Trata-se de uma biblioteca para a modelagem de tópicos, com uma série de funções úteis.
<img src="${pln_33}"/>
<hr>
Sentence Embedding
• A biblioteca Python SentenceTransformers (SBERT - https://www.sbert.net/) permite a criação de embeddings de sentenças, textos e imagens. A biblioteca é uma adaptação do BERT (Bidirectional Encoder Representations from Transformers) pré-treinado que gera embeddings de sentenças que podem ser comparadas usando a similaridade
de cosseno.
<strong>Modelos Pré-Treinados</strong>
<img src="${pln_35}"/>

<strong>Usando Sentence Embedding</strong>
<img src="${pln_36}"/>

<img src="${pln_37}"/>`,
  },
  // ── PROVA 2 ────────────────────────────────────────────────
  {
    id: 40,
    provaId: 2,
    titulo: "Passo-a-Passo Poda Alfa-beta",
    slides: [
      {legenda:"Inicializar a raiz com valores de [-INF, +INF], alfa e beta, respectivamente",
        img: passo1},

      {legenda:"Ir para os nós folhas. Coloque Alfa e Beta do nó que está sendo visitadas.",
        img: passo2},

      {legenda:"Como o nivel é MAX só será atualizado o Alfa com o maior valor que ele encontrou até agora. Nesse caso é o 8",
        img: passo3},

      {legenda:"Devido a recursão, volte um nível. Ele será atualizado com o valor conhecido até agora. Mas lembre-se de sempre verificar se o nível é MIN ou MAX. Nesse caso, é MIN então é o Beta que será atualizado. OBS: Ainda NÃO volta o valor conhecido até a RAIZ.",
        img: passo4},

      {legenda:"Agora vá novamente para as folhas. Como voltamos ao nível MAX o Alfa que será atualizado. Contudo, como o beta já possui um valor ele continuará armazenado",
        img: passo5},

      {legenda:"O lgoritmo irá verificar o 10 e atualizar o Alfa com esse valor. Antes de expandir o 5, será verificado a seguinte condição: Alfa ⩾ Beta, nesse caso é verdadeiro, logo os nós 5, 110 e 300 serão podados. A poda será caracterizada como Poda Beta, por estar em um nível Max e cumprir com os requisitos da Poda Beta.",
        img: passo6},

      {legenda:"Voltando um nível o Beta e nem o Alfa serão atualizados, pois o valor do nó não é o menor conhecido e o nível é MIN. Em seguida, o algoritmo irá para a raiz e atualizará o Alfa na propria raiz, com o maior valor que ele conhece, nesse caso o 8.",
        img: passo7},

      {legenda:"Como agora o algoritmo já conhece o Alfa ele levará ele para o próximo nível, mas não até as folhas.",
        img: passo8},

      {legenda:"Repete-se a comparação, agora como estamos no MAX o alfa que será atualizado com o maior valor, nesse caso é o 3.",
        img: passo9},

      {legenda:"Voltando um nível o valor de Beta será atualizado, pois estamos no MIN. Antes de seguir até as folhas, o algoritmo irá verificar os valores do alfa e do beta. Nesse caso, ele concluirá que beta =< alfa e haverá uma poda. Essa poda ocorre pois cumpre com o requisito da Poda Alfa. Dessa forma, os outros nós e suas folhas não serão expandidos, mesmo que tenha um valor maior nas folhas.",
        img: passo10}
        ,
      {legenda:"Por fim, o algoritmo irá fazer uma ultima verificação para ver qual é o maior valor que ele conhece, nesse caso é o 8. Vale ressaltar que se não houvesse nenhuma poda o resultado ainda seria o 8.",
        img: passo11}
        ,
    ],
  },
];

export const provas = [
  {
    id: 1,
    titulo: "Prova 1",
    descricao: "Processamento de linguagem natural",
    emoji: "📘",
  },
  {
    id: 2,
    titulo: "Prova 2",
    descricao: "lelele",
    emoji: "📗",
  },
];

export default topicos;