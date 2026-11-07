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
import pln_38 from "../images/pln_38.png"
import pln_39 from "../images/pln_39.png"
import pln_40 from "../images/pln_40.png"
import pln_41 from "../images/pln_41.png"
import pln_42 from "../images/pln_42.png"
import pln_43 from "../images/pln_43.png"
import pln_44 from "../images/pln_44.png"
import pln_45 from "../images/pln_45.png"
import pln_46 from "../images/pln_46.png"
import pln_47 from "../images/pln_47.png"
import pln_48 from "../images/pln_48.png"
import pln_49 from "../images/pln_49.png"
import pln_50 from "../images/pln_50.png"
import pln_51 from "../images/pln_51.png"
import pln_52 from "../images/pln_52.png"
import pln_53 from "../images/pln_53.png"
import pln_54 from "../images/pln_54.png"
import pln_55 from "../images/pln_55.png"
import pln_56 from '../images/pln_56.png'
import pln_57 from '../images/pln_57.png'
import pln_58 from '../images/pln_58.png'
import pln_59 from '../images/pln_59.png'
import pln_60 from '../images/pln_60.png'
import pln_61 from '../images/pln_61.png'
import pln_62 from '../images/pln_62.png'
import pln_63 from '../images/pln_63.png'
import pln_64 from '../images/pln_64.png'
import pln_65 from '../images/pln_65.png'
import pln_66 from '../images/pln_66.png'
import pln_67 from '../images/pln_67.png'
import pln_68 from '../images/pln_68.png'
import pln_69 from '../images/pln_69.png'
import pln_70 from '../images/pln_70.png'
import pln_71 from '../images/pln_71.png'
import pln_72 from '../images/pln_72.png'
import pln_73 from '../images/pln_73.png'
import pln_74 from '../images/pln_74.png'
import pln_75 from '../images/pln_75.png'
import pln_76 from '../images/pln_76.png'
import pln_77 from '../images/pln_77.png'
import pln_78 from '../images/pln_78.png'

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
    “[0-9]{4}” faz o matching de uma série de quatro dígitos consecutivos (como o ano de nascimento de alguém).

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
<a href="REGEX (https://docs.google.com/spreadsheets/d/1k9Bag4APM8_R5kXoc_aF9K2no3CeoYX5zW_y_H4KTEI/edit?usp=sharing)" target="_blank" rel="noopener noreferrer">Planlha Resumo Regex</a>

<strong>Exemplos de ERs</strong>
• Verificar a presença do http:// ou https://
 <img src="${pln_40}"/>

<strong>Exemplo em Python</strong>
<img src="${pln_12}"/>

<strong>Exercícios</strong>
1) Escreva uma RegEx para identificar as ocorrências de letras minúsculas em início de linha.

R: ^[a-z]

2) Dado o texto a seguir, identifique todas as ocorrências derivadas de “gol”:
    Olha o gol!
    Goooooool, do Brasil!
    E que belo gol.

R: [gG]o*l

3) Dado o trecho de código html a seguir, crie uma expressão regular para identificar a presença dos marcadores da linguagem, <></>
<img src="${pln_41}"/>
R: <[^>]+>

4) Escreva uma RegEx para validar um horário no formato hh:mm, onde a hora pode variar de 0 a 23. Veja alguns exemplos para você avaliar:
    10:10
    02:35
    25:20
    20:60
    2:10
    24:00
    23:59

R: ^([01]?[0-9]|2[0-3]):[0-5][0-9]$

5) Crie uma RegEx para validar uma data no formato DD/MM/AAAA.
Você pode utilizar o seguinte texto de teste:
    Data de Nascimento: 10/03/1980

R: ^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/[0-9]{4}$

6) Essa é uma Regex do que?
<img src="${pln_38}"/>

R: Número telefone celular com código de área.

A análise detalhada de cada parte do código revela sua lógica estrutural:

• (0?[1-9]{2})* (O DDD): Valida o código de área. O 0? aceita um zero opcional na frente (como o prefixo de operadora 041), seguido por dois dígitos estritamente de 1 a 9 ([1-9]{2}). O asterisco * no final do grupo torna todo o bloco do DDD opcional ou repetível.

• \\D* (Separadores flexíveis): O metacaractere \\D significa "qualquer caractere que não seja um dígito numérico" (espaços, parênteses, hífens). O asterisco * permite que haja zero ou vários desses caracteres decorativos entre o DDD e o número.

• (9?) (O Nono Dígito): Captura o característico 9 inicial dos telefones celulares do Brasil. O sinal de interrogação ? torna esse 9 opcional, permitindo validar tanto números modernos quanto formatos mais antigos que não o utilizavam.

• \\D? (Separador): Permite opcionalmente um caractere não numérico (como um espaço ou hífen) logo após o dígito 9.

• (\\d{4})+ (Primeira parte do número): Exige um bloco de exatamente 4 dígitos numéricos (\\d{4}). O sinal de mais + permite que esse bloco ocorra uma ou mais vezes.

• \\D? (Separador final): Permite opcionalmente um caractere separador (geralmente o hífen -) entre os blocos do número.

• (\\d{4}) (Segunda parte do número): O bloco final obrigatório de 4 dígitos numéricos que completa o número de telefone.

• \\b (Fronteira de palavra): Uma âncora invisível que garante que a string numérica termine exatamente ali, impedindo que o motor capture números grudados a sequências maiores de dígitos.

OBS: Como o metacaractere \\D significa literalmente "qualquer coisa que não seja um número", ele acaba aceitando letras, símbolos aleatórios, emojis ou qualquer caractere alfabético se eles aparecerem no lugar dos separadores.

O problema prático: Se alguém digitar um número de telefone com um erro de digitação contendo letras (por exemplo: 41-a-98888-7777), essa ER vai dar match, aceitando a letra a como se fosse um separador válido.

Por que os professores usam \\D então? Em exercícios acadêmicos introdutórios, o \\D é usado como um atalho "preguiçoso" para não precisar digitar manualmente todos os separadores possíveis (espaço, hífen e parênteses).

Como seria a forma correta e rigorosa? Para evitar que letras entrem como "separadores", o ideal seria substituir o \\D por uma classe de caracteres explícita que aceite apenas os símbolos permitidos, como um espaço, hífen ou parênteses: <img src="${pln_42}"/>

7) Essa Regex é do que?
<img src="${pln_39}"/>

R: Data

8) Escreva uma Regex para CEP.

R: ^[0-9]{5}-?[0-9]{3}$

9) Escreva uma Regex para email

R: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$

Análise detalhada de cada bloco:
^[a-zA-Z0-9._%+-]+ (Parte Local / Usuário): O + garante que haja uma ou mais ocorrências de letras maiúsculas/minúsculas, números ou símbolos comuns em e-mails (., _, %, +, -).
• @ (O Separador): O caractere literal obrigatório que divide o usuário do servidor.
• [a-zA-Z0-9.-]+ (O Domínio): O nome do servidor (ex: gmail, hotmail, pucpr), permitindo letras, números, pontos e hífens.
• \\. (O Ponto do Domínio): O ponto literal escapado com a barra invertida para separar o servidor da extensão.
• [a-zA-Z]{2,}$ (A Extensão / TLD): A terminação do e-mail (como .com, .br, .edu), exigindo no mínimo 2 letras e travando o fim da linha com o $ para evitar lixo no final.
`,
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
    titulo: "[Aula 6] Sumarização Automática de Textos",
    conteudo: `• A sumarização de um texto pode ser definida como a tarefa de produzir um novo texto, mais conciso, preservando as principais informações e significado do texto original.

    • Condensar informações relevantes de um (ou múltiplos) textos, ocupando “menos espaço” que o(s) documento(s) original(is).

    <strong>Aplicações</strong>
    • Síntese de texto para TTS
    • Sistemas de Perguntas e Respostas
    • Leitura de notícias
    • Thread de e-mails ou posts
    • Atas de reuniões
    • etc.

    <strong>Conceitos Iniciais</strong>
    • Corpora de Entrada
    • Tipo de Sumarização
    • Propósito da Sumarização
    • Conteúdo Guia
    • Disponibilidade de Corpora

    <strong>Corpus de Entrada</strong>
    <img src="${pln_43}"/>`
  },
  {
    id: 38,
    provaId: 1,
    titulo: "Tipos de Sumarização",
    conteudo: `• Abstrativa
    • Extrativa
    • Observação: O tamanho final do sumário depende da taxa de compressão ou threshold pré-estabelecido.

    <strong>Abstrativa</strong>
    • Documento de entrada → entendimento do contexto → semânƟca → criação do sumário.
    <img src="${pln_44}"/>

    <strong>Extrativa</strong>
    • Documento de entrada → similaridade entre sentenças → ranqueamento das sentenças → seleção das sentenças com maior ranqueamento.
    <img src="${pln_45}"/>`
  },
  {
    id: 39,
    provaId: 1,
    titulo: "Propósito da Sumarização",
    conteudo: `<img src="${pln_46}"/>

    <strong>Conteúdo Guia</strong>
    <img src="${pln_47}"/>

    <strong>Disponibilidade de Corpora</strong>
    • Corpora anotado é raro. Geralmente anotação binária de sentenças.
    • Há abordagens não supervisionadas: baseadas em frequência ou centralidade.`
  },
  {
    id: 40,
    provaId: 1,
    titulo: "Etapas do Processo",
    conteudo: `1. Representação intermediária.
    2. Pontuação de sentenças.
    3. Seleção de sentenças.
    4. Reformulação de sentenças (abstrativa).

    • Cria-se uma representação intermediária da entrada que captura apenas os aspectos principais do texto, pontuando sentenças com base nessa representação e selecionando um sumário que consiste em várias sentenças.
    • A fase de paráfrase do conteúdo é executada em caso de sumarização abstrativa.

  <strong>Representação Intermediária</strong>
  • Definição de uma representação contendo apenas os aspectos principais do texto de entrada.
  • Representação em tópicos: transforma o texto em uma relação de tópicos.
      • Frequência
      • TF-IDF
      • Topic-word
      • Lexical-chain (e.g., WordNet)
      • LSA
      • Bayesian topic models
  • Representação em indicadores: cada sentença é convertida em uma lista de indicadores de importância (i.e., features - e.g., tamanho, posição, flags)
      • LexRank
      • TextRank

    <strong>Pontuação das Sentenças</strong>
    • Atribuição de uma pontuação de importância para cada sentença.
        • Para representação em tópicos
            • Quão bem a sentença representa os tópicos mais importantes?
            • Quão bem a sentença combina informações de diferentes tópicos?
        • Para representação em indicadores
            • A pontuação de cada sentença é calculada ao combinar diferentes indicadores (geralmente usando Aprendizagem de Máquina).

    <strong>Seleção de Sentenças</strong>
    • Top N sentenças mais importantes selecionadas – até atingir o tamanho desejado.
    • Sentenças similares às sentenças previamente selecionadas são preteridas.

    <strong>Reformulação de Sentenças</strong>
    • Para a sumarização abstrativa é necessário parafrasear a saída de dados:
        • Baseado em regras
        • Baseado em templates
        • Algoritmos de paráfrase (operações morfossintáticas, redes neurais)
        • Algoritmo de fusão de sentenças`
  },
  {
    id: 41,
    provaId: 1,
    titulo: "Avaliação do Sumário",
    conteudo: `• Existem diferentes técnicas para avaliar o sumário gerado.
    • Uma das mais utilizadas e mais simples é a técnica ROUGE:
        • Recall-Oriented Understudy for Gisting Evaluation.
    • Há diferentes implementações, mas uma delas é conhecida como ROUGE-2, pois utiliza bigramas para comparar o texto gerado com o texto original.
    • A métrica compara o resumo gerado automaticamente com o resumo gerado por um humano.
    <img src="${pln_48}"/>
    • sumário automático: “O coronavírus é perigoso e devemos nos proteger.”
    • sumário referência: “O coronavírus é perigoso e mata.”
    • Bigramas do sumário automático:
    [“o coronavírus”, “coronavírus é”, “é perigoso”, “perigoso e”, “ e devemos”, “devemos nos”, “nos
    proteger”]
    • Bigramas do sumário referência:
    [“o coronavírus”, “coronavírus é”, “é perigoso”, “perigoso e”, “e mata”]
    <img src="${pln_49}"/>`
    },
    {
      id: 42,
      provaId: 1,
      titulo: "Exemplo e exercícios",
      conteudo: `<strong>Exemplo</strong>
    • Sumarização baseada em frequência: sumarizacao_freq.ipynb

    <strong>Exercício para Entrega</strong>
    • O notebook sumarização_freq.ipynb apresenta um conjunto de atividades e desafios. Responda-os e implemente-os, modificando o notebook fornecido.
    • Ao final entregar o código implementado e as respostas em atividade criada no Canvas: Sumarização.
    • Data limite: 22/09/2026.
    • O exercício pode ser feito em equipes de até 4 pessoas (todos devem entregar).

    <strong>Exercício (não entrega)</strong>
    • Assuma o seguinte contexto:
        • “Com as eleições se aproximando, um partido político lhe contratou para que desenvolva um algoritmo que automaticamente leia as notícias de um grande portal de notícias e apresente as temáticas principais associadas a cada notícia.
        • A ideia é que o usuário possa informar uma palavra-chave. O seu algoritmo deve trazer todas notícias que contenham essa palavra no título, e então apresente um sumário da notícia e as principais palavras associadas a mesma.”
    • Você pode partir do notebook sumarização_freq.ipynb.
    • Usa a biblioteca BeautifulSoup.`
    },
    {
      id: 43,
      provaId: 1,
      titulo: "Modelagem de Tópicos",
      conteudo: `• Definição:
        • A modelagem de tópicos (topic modelling), de forma não supervisionada, identifica palavras e padrões em um corpus, agrupando-os em grupos contendo palavras “similares” no contexto do corpus.
        • Tem o objetivo de extrair tópicos latentes de um corpus. Entende-se como um tópico latente (ou escondido), um conjunto de termos ou palavras que permita caracterizar um conjunto de documentos como semelhantes, assim como possibilite distingui-los dos demais documentos de um corpus.

    <strong>Aplicações</strong>
    • Agrupar documentos;
    • Rotular documentos para facilitar buscas;
    • Sumarizar o conteúdo do texto;

    <strong>Funcionamento</strong>
    • A intuição por trás deste conceito é: existe um conjunto de palavras-chave (coocorrência) que possui a característica de descrever um determinado assunto.
    • Cada documento é composto por uma mistura de diferentes tópicos. Desta forma, o objetivo desta família de algoritmos, é encontrar os conjuntos de palavras que os descrevem, bem como representar os documentos através dos tópicos.
    • Em outras palavras, podemos dizer que um documento é composto de um ou mais tópicos diferentes.

    <strong>Exemplo</strong>
     <img src="${pln_50}"/>

     <img src="${pln_51}"/>

    <strong>Exemplo</strong>
    <img src="${pln_52}"/>

    • Acesse o link: https://cs.stanford.edu/people/karpathy/nips2013/

    <strong>Algoritmos para a Tarefa</strong>
    • Diferentes algoritmos foram propostos para a tarefa:
        • Latent Dirichlet Allocation;
        • Latent Semantic Analysis;
        • Latent Semantic Indexing;
        • Correlated Topic Modeling;
        • Probabilistic Latent Semantic Analysis;
        • BERT;
        • dentre outros.

  • Algoritmo proposto por Blei, Ng e Jordan em 2003 (https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf).
  • Os documentos são processados como coleções de palavras e BoW.
  • Em termos práticos, o objetivo do LDA é mapear documentos em tópicos, de modo que tokens (palavras) em cada documento sejam agrupadas nestes tópicos.
  • O número de tópicos deve ser definido a priori como parâmetro na geração do modelo (k). Portanto, este é um parâmetro que pode ser avaliado (testado) de forma empírica e exaustiva.
  • A execução deste algoritmo costuma demandar muitos recursos (memória e processamento).
  • O dataset usado no treinamento não pode conter textos muito pequenos. Não funciona bem para posts, por exemplo.
  • Redução de dimensionalidade:
      • Representando um documento T no espaço de características:
      {palavrai: count(palavrai, T) for palavrai in Vocabulario}
      • Ou, representando um documento T no espaço de tópicos:
      {topicoi: Weight(topicoi, T) for topicoi in Topicos}

  <strong>Funcionamento Básico</strong>
  <img src="${pln_53}"/>
  • O LDA funciona assumindo que cada documento é uma mistura de tópicos e cada tópico é uma mistura de palavras.
  • Os principais parâmetros são:
      • Número de tópicos (K): define quantos assuntos o modelo deve encontrar.
      • Alpha (α): controla a distribuição de tópicos por documento (mais alto → documentos com mais tópicos).
      • Beta (β): controla a distribuição de palavras por tópico (mais alto → tópicos com mais palavras diferentes).
      • Número de iterações: influencia a qualidade do resultado final.

  <strong>Avaliação de Tópicos Latentes</strong>
  • A Coerência calcula a similaridade semântica entre os termos presentes em um dado tópico e a similaridade entre os tópicos.
  • Varia entre 0 e 1, quanto mais próximo de 1 melhor a generalização do modelo.
  • O ajuste do valor de k pode ser feito com ajuda do cálculo da coerência.
  • Modelos com alta coerência tendem a ser facilmente interpretáveis aos humanos.
  • Se um tópico tem as palavras: médico, hospital, paciente, cirurgia, a coerência será alta se essas palavras aparecerem juntas com frequência nos mesmos documentos.
  <img src="${pln_54}"/>`
    },
    {
      id: 44,
      provaId: 1,
      titulo: "Exemplos",
      conteudo: `• Notebook geral:
      • exemploLDA.ipynb
  • Notebook Twitter:
      • tweetsLDA.ipynb
  • Dado o notebook, “tweetsLDA.ipynb”, acrescentar tweets ao arquivo “tweetsExtraidos.csv” a partir de diferentes buscas, de preferência, com temas distintos.
  • Gerar o modelo LDA, avaliar diferentes números de tópicos e avaliar a coerência.
  • Avalie também trabalhar com bigramas e trigramas.`,
  },
  {
    id: 45,
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
  // ── PROVA 2 ───────────────────────────────────────────────

  {
  id: 46,
  provaId: 2,
  titulo: "Transformer",
  conteudo: `A arquitetura Transformer lida muito melhor com dependências em sequências longas e permite um processamento de dados altamente paralelo porque analisa as informações todas de uma vez, superando a lentidão das arquiteturas recorrentes. Dentro do mundo das arquiteturas recorrentes — que processam as informações passo a passo, como uma esteira — temos as RNNs (Redes Neurais Recorrentes), que servem para entender dados em sequência (como texto ou áudio), mas sofrem de "amnésia" e esquecem o início de frases muito longas. Para consertar esse problema, foram criadas as LSTMs (Long Short-Term Memory), que são uma evolução das RNNs com um mecanismo interno de "memória de longo prazo", servindo perfeitamente para reter contextos importantes por muito mais tempo durante o processamento. 
  • <strong>RNNs (Redes Neurais Recorrentes – Recurrent Neural Networks):</strong> São redes neurais desenvolvidas para trabalhar com dados sequenciais, como textos, áudios e séries temporais. Seu funcionamento consiste em processar um elemento da sequência por vez, mantendo uma memória interna chamada de estado oculto (hidden state), que armazena informações dos elementos anteriores e as utiliza no processamento do próximo elemento. Dessa forma, a rede consegue considerar o contexto da sequência para produzir uma resposta. Entretanto, as RNNs tradicionais apresentam dificuldades para aprender dependências de longo prazo, pois podem perder informações importantes ao longo do processamento, devido a problemas como o desaparecimento do gradiente (vanishing gradient). 
  • <strong>LSTMs (Long Short-Term Memory – Memória de Longo e Curto Prazo):</strong> São uma evolução das RNNs, desenvolvidas para solucionar principalmente o problema de dificuldade em aprender dependências de longo prazo. Diferentemente das RNNs tradicionais, as LSTMs possuem mecanismos chamados de portões (gates), que controlam quais informações devem ser armazenadas, descartadas ou utilizadas durante o processamento. Esses mecanismos permitem que a rede mantenha informações relevantes por períodos maiores, reduzindo o problema do desaparecimento do gradiente. São utilizadas principalmente em tarefas que envolvem sequências, como previsão de séries temporais, reconhecimento de fala e processamento de linguagem natural. 

Exemplos:

• <strong>Transformer:</strong> Pense na tradução de um artigo inteiro no Google Tradutor. Em vez de ler palavra por palavra como a RNN e a LSTM, o Transformer carrega o artigo inteiro de uma vez na GPU. Ele usa um mecanismo de "Atenção" (Self-Attention) para calcular matematicamente a relação entre todas as palavras simultaneamente, descobrindo que o pronome "ele" no final do texto se refere ao "diretor" mencionado no título. Isso o torna infinitamente mais rápido para treinar e muito mais preciso em contextos gigantescos (como o ChatGPT). 

• <strong>RNNs:</strong> Imagine um sistema básico de análise de sensores em uma máquina industrial. Ele recebe dados de temperatura a cada segundo para prever uma falha no próximo    minuto. Como a RNN processa passo a passo de forma dependente, ela funciona bem para prever o impacto dos últimos 5 segundos. Porém, se a falha for resultado de um superaquecimento que começou 2 horas atrás, a RNN já terá "diluído" essa informação inicial e não conseguirá fazer a correlação. 

• <strong>LSTMs:</strong> Ao analisar a frase "João nasceu no Brasil e, depois de muitos anos, mudou-se para Portugal. Ele fala português", uma LSTM consegue preservar informações relevantes sobre João e o contexto apresentado anteriormente, mesmo que exista uma distância considerável entre as palavras relacionadas

Comparação:

A principal diferença entre as três arquiteturas está na forma como processam e armazenam informações. As RNNs processam os dados sequencialmente, um elemento por vez, mas apresentam dificuldades para preservar informações em sequências longas. As LSTMs também realizam o processamento sequencial, porém possuem mecanismos que permitem armazenar e descartar informações de maneira controlada, melhorando a capacidade de aprender dependências de longo prazo. Já os Transformers utilizam o mecanismo de atenção (Self-Attention), permitindo identificar relações entre diferentes elementos de uma sequência e realizar o processamento de forma paralela, tornando-os mais eficientes para trabalhar com grandes volumes de dados. 

<img src="${pln_68}"/>

<strong><span style="color: red;">É possível juntar as três: </span></strong> Sim, é possível. Nessa abordagem, usamos a RNN ou a LSTM na linha de frente para processar os dados sequencialmente, garantindo a captura da ordem exata e contínua dos eventos mais recentes (como a acústica de uma fala ou sensores minuto a minuto), e então entregamos esses blocos de informações "resumidas" para o Transformer cruzar o panorama histórico de uma só vez, economizando muita memória ao evitar que ele leia os dados crus do zero. Em contrapartida, a perda inevitável dessa união é a velocidade bruta e a simplicidade; ao colocar as redes recorrentes no início do fluxo, nós reintroduzimos propositalmente o gargalo do processamento passo a passo, sacrificando a grande vantagem de paralelismo total do Transformer e criando um sistema absurdamente complexo, pesado de treinar e muito mais difícil de dar manutenção no mundo real. `,
},
{
id: 47,
  provaId: 2,
  titulo: "Arquitetura de um transformer",
  conteudo: `<img src="${pln_62}"/>

• <strong>Entrada:</strong> Primeiro, o texto passa pelo processo de tokenização, que consiste em dividir a frase em unidades menores chamadas tokens (palavras, partes de palavras ou caracteres). Em seguida, cada token é transformado em um embedding, ou seja, uma representação numérica que permite ao modelo trabalhar com o texto. Como o Transformer não processa os tokens necessariamente em ordem, é adicionada uma informação de posição (Positional Encoding), que indica a posição de cada token na sequência. Essa informação é importante para que o modelo consiga compreender a ordem das palavras e interpretar corretamente o contexto da frase. 

Exemplo: Na frase: "O cachorro mordeu o homem". O modelo divide essa frase em tokens e associa uma posição a cada um: "O" (1), "cachorro" (2), "mordeu" (3), "o" (4) e "homem" (5). Essa informação permite que o modelo entenda que foi o cachorro quem realizou a ação de morder, e não o contrário. 

• <strong>Enconder:</strong> É responsável por processar os embeddings de entrada e transformá-los em representações contextuais, ou seja, representações numéricas que carregam informações sobre o significado de cada token considerando sua relação com os demais elementos da sequência. Isso acontece por meio de mecanismos de atenção (Self-Attention) e redes neurais, que permitem identificar quais palavras são mais relevantes para interpretar cada parte do texto. Essas representações são utilizadas para que o modelo compreenda melhor o contexto da entrada antes de produzir uma resposta. 

<span style="color: red;">Representação contextual:</span> A representação contextual é o processo onde o Transformer deixa de enxergar palavras isoladas e passa a compreender o cenário completo, transformando o texto inicial em pacotes matemáticos inteligentes que captam a relação entre todos os elementos da sua frase. Usando o mecanismo de "Autoatenção" (Self-Attention) em conjunto com as redes neurais, ele cria uma espécie de teia invisível que calcula matematicamente o peso e a influência que cada palavra exerce sobre as outras vizinhas, permitindo que a inteligência artificial capte perfeitamente a intenção real, a ambiguidade e a profundidade do seu texto antes de tentar produzir qualquer resposta. 

Exemplo: Na frase "O banco estava cheio de pessoas esperando para sacar dinheiro". Ao analisar a palavra "banco", o encoder considera as demais palavras da frase, como "sacar dinheiro" e "pessoas", para identificar que ela se refere a uma instituição financeira, e não a um assento. Assim, a representação contextual de "banco" incorpora informações que ajudam a determinar seu significado naquela frase. 

•<strong> Decoder:</strong> É responsável por utilizar as informações disponíveis para gerar a resposta, produzindo um token por vez. A cada etapa, considera os tokens já gerados e, dependendo da arquitetura, as representações produzidas pelo encoder. Dessa forma, cada novo token é gerado levando em consideração o contexto da resposta construída até aquele momento. 

Exemplo: Imagine que você perguntou ao modelo "Qual é a capital do Brasil?". O decoder começa a construir a resposta gerando o primeiro token: "A". Em seguida, utiliza esse token como contexto para gerar "capital". Depois, gera "do", "Brasil" e assim por diante. Dessa forma, a resposta é construída progressivamente, um token por vez. 

•<strong>Saida:</strong> transforma a representação produzida pelo decoder em uma distribuição de probabilidades sobre os possíveis tokens do vocabulário, indicando a probabilidade de cada token ser o próximo elemento da sequência. Com base nessa distribuição, o modelo seleciona um token, que é adicionado à resposta. Esse processo se repete até que a resposta seja concluída. 

Exemplo: É como o teclado preditivo do seu celular, mas com matemática avançada. Se a frase até agora é "O rato roeu a...", a saída varre as milhares de palavras do idioma e gera um placar: "roupa" (98%), "maçã" (1.5%), "carro" (0.5%). Ele escolhe a palavra com a maior probabilidade ("roupa") e a cospe na tela como o próximo token. `,
},
{
id: 48,
provaId: 2,
titulo: "Entrada - Do texto ao Token",
conteudo: `<strong>Sequencia geral:</strong>
Texto de Entrada → Tokens → Embeddings → Contexto → Atenção → Transformer → Representação

Ao receber um texto como entrada, o modelo realiza a tokenização, dividindo o texto em unidades menores chamadas tokens. Em seguida, cada token recebe um ID numérico que permite identificá-lo dentro do vocabulário do tokenizador. Esse ID é definido durante a construção do tokenizador, que possui uma tabela relacionando cada token ao seu identificador numérico. Portanto, quando o modelo recebe um texto, ele consulta essa tabela para identificar os tokens e seus respectivos IDs. Depois, esses IDs são utilizados para buscar seus respectivos embeddings, que são vetores numéricos que representam cada token. Junto aos embeddings, é adicionada a informação de posição (Positional Encoding), que indica a ordem em que os tokens aparecem na sequência. Com essas informações, o encoder processa a entrada e cria representações contextuais, considerando as relações entre os tokens. Por fim, o decoder utiliza essas representações para gerar a saída token a token, repetindo o processo até concluir a resposta.

<strong>Como são gerados os IDs dos tokens?</strong>
Os IDs são atribuídos durante a construção do vocabulário do tokenizador. Cada token recebe um número inteiro único, que funciona como um identificador. Essa associação não é feita aleatoriamente a cada frase: ela já está definida e armazenada no tokenizador antes de o modelo receber o texto. Existem diferentes algoritmos de tokenização, como BPE (Byte Pair Encoding), WordPiece e Unigram, que determinam como o texto será dividido e quais unidades farão parte do vocabulário.

<span style="color: red;">Uma diferença importante:</span> o ID não representa o significado da palavra. Por exemplo, o ID 15 não significa que determinado token é mais importante que o ID 42. Ele funciona apenas como um identificador para localizar o vetor correspondente na matriz de embeddings. 

• Token: Unidade básica de texto utilizada pelo modelo para representar e processar uma sequência linguística.
• Tokenização: é a conversão de um texto em uma sequência de unidade menores - os token - que podem ser representados numericamente e processadas pelo modelo
• Vocabulário: é o conjunto de todos os tokens que o tokenizador é capaz de reconhecer e representar diretamente. É um conjunto finito de tokens, onde cada token possui um ID numérico.
• ID (Identificador): Número inteiro associado a um token no vocabulário. Serve para identificar o token e permitir que o modelo encontre seu respectivo embedding. 
• Embedding: Vetor numérico associado a cada ID, utilizado para representar o token matematicamente. Diferentemente do ID, que apenas identifica o token, o embedding carrega informações que permitem ao modelo aprender relações entre palavras e seus significados. 

<img src="${pln_58}"/>`
},

{
id: 49,
provaId: 2,
titulo: "Tokenização por subpalavras",
conteudo: `Essa abordagem consiste em dividir algumas palavras em unidades menores, chamadas de subpalavras, permitindo que o modelo represente um vocabulário muito grande utilizando um conjunto menor de tokens. Isso é importante porque evita a necessidade de armazenar todas as palavras possíveis no vocabulário, inclusive palavras raras, termos técnicos e palavras que o modelo nunca encontrou anteriormente. Em vez disso, o tokenizador consegue combinar unidades menores para representar essas palavras.
Os algoritmos mais utilizados são:

• BPE (Byte Pair Encoding): Constrói o vocabulário de subpalavras combinando iterativamente os pares de símbolos que aparecem com maior frequência no conjunto de treinamento. Inicialmente, as palavras são divididas em unidades menores e, a cada etapa, os pares mais frequentes são unidos para formar novos tokens. Esse processo continua até atingir o tamanho de vocabulário desejado.

Exemplo: Imagine que o conjunto de treinamento contenha frequentemente as palavras "casa", "casamento" e "casar". O algoritmo pode identificar que a sequência "cas" aparece frequentemente e combiná-la em um único token. Posteriormente, outras combinações podem ser realizadas para formar unidades maiores.

<img src="${pln_57}"/>

• WordPiece: É um algoritmo de tokenização por subpalavras que constrói seu vocabulário identificando combinações de caracteres que são mais úteis para representar as palavras do conjunto de treinamento. Diferentemente do BPE, que prioriza a frequência dos pares, o WordPiece seleciona combinações considerando o quanto elas aumentam a probabilidade dos dados de treinamento. Durante a tokenização, o algoritmo procura dividir uma palavra em subpalavras que existam no vocabulário, geralmente escolhendo a maior unidade possível a cada etapa. 
	
Exemplo: Imagine que o vocabulário do modelo contenha as subpalavras "jogar" (ID 120) e "##ndo" (ID 35). Ao receber a palavra "jogando", o WordPiece pode dividi-la nessas duas unidades, utilizando o ID 120 para "jogar" e o ID 35 para "##ndo". O símbolo ## indica que aquela subpalavra é uma continuação da unidade anterior. Dessa forma, o modelo consegue representar a palavra "jogando" sem precisar armazená-la inteira como um token independente. 

• Unigram Language Model: O Unigram Language Model é um algoritmo de tokenização por subpalavras que utiliza probabilidades estatísticas para construir seu vocabulário. Diferentemente do BPE e do WordPiece, ele começa com um conjunto maior de possíveis tokens e, durante o treinamento, remove aqueles que causam menor impacto na capacidade de representar os textos. Dessa forma, procura manter as unidades que representam os dados de maneira mais eficiente, considerando a probabilidade de ocorrência de cada sequência de tokens. É importante entender que o tokenizador não busca necessariamente dividir as palavras de acordo com regras gramaticais ou morfológicas, mas sim encontrar divisões estatisticamente úteis. Por isso, algumas palavras podem ser divididas em partes que não fazem sentido do ponto de vista linguístico.

Exemplo: Imagine a palavra "computador". Um tokenizador Unigram pode dividi-la em "compu" + "tador", em vez de utilizar uma divisão linguisticamente mais intuitiva. Isso acontece porque o algoritmo prioriza a eficiência estatística da representação, e não a formação de partes que tenham significado isoladamente.

<span style="color: red;">Atenção: O tokenizador procura unidades estatisticamente úteis e eficientes para representar os textos utilizados no treinamento. Isso pode ocasionar em tokens “estranhos” no sentido morfológico. Isso quer dizer que o tokenizador não irá tentar dividir a palavra em partes linguisticamente corretas.</span>`
},
{
id: 50,
provaId: 2,
titulo: "Vetores Numéricos (Word Embedding)",
conteudo: `Os Word Embeddings são representações numéricas de palavras ou tokens por meio de vetores de números reais, organizados em um espaço de várias dimensões. Esses vetores são aprendidos durante o treinamento de modelos utilizando grandes conjuntos de textos (corpora), geralmente sem a necessidade de dados previamente rotulados. O objetivo é fazer com que palavras que aparecem em contextos semelhantes desenvolvam representações vetoriais com características próximas. Dessa forma, o modelo consegue trabalhar matematicamente com relações entre palavras, identificando semelhanças e diferenças entre seus contextos de utilização. 
É necessário entender dois conceitos:

• Representação vetorial de um texto: Consiste em transformar palavras ou tokens em vetores numéricos para que o modelo consiga realizar operações matemáticas com eles. Cada palavra possui uma representação formada por vários números, que indicam características aprendidas durante o treinamento. Quando temos uma frase, seus tokens são representados por seus respectivos vetores, formando uma sequência de representações numéricas que será utilizada pelas camadas do Transformer. 

• Significado das palavras: Os embeddings permitem representar relações semânticas entre palavras, ou seja, relações relacionadas aos seus significados e contextos de utilização. Durante o treinamento, o modelo aprende a aproximar vetores de palavras que aparecem em contextos semelhantes e a diferenciar aqueles que possuem utilizações distintas. Assim, palavras com significados relacionados tendem a apresentar representações vetoriais próximas, permitindo que o modelo identifique relações entre elas.



<strong>Criação de um Embedding</strong>

• Embedding estático: O Embedding estático é uma técnica de representação numérica em que cada palavra possui um único vetor, independentemente do contexto em que aparece na frase. Durante o treinamento, os vetores são ajustados com base nos contextos em que as palavras aparecem nos textos, fazendo com que palavras utilizadas em situações semelhantes desenvolvam representações vetoriais próximas. Dessa forma, palavras com significados ou aplicações semelhantes tendem a apresentar vetores similares. Entretanto, essa abordagem possui uma limitação: não consegue diferenciar palavras que possuem mais de um significado, pois utiliza a mesma representação para todos os contextos.

Exemplo: A palavra "banco" possui o mesmo vetor nas frases "Sentei no banco da praça" e "Fui ao banco sacar dinheiro". Mesmo que o significado seja diferente, o embedding estático utiliza a mesma representação numérica para as duas situações.

<img src="${pln_70}"/>

<img src="${pln_69}"/>

• Embeddings Contextual: Os Embeddings Contextuais são representações numéricas em que uma mesma palavra pode receber vetores diferentes dependendo do contexto em que aparece na frase. Diferentemente dos embeddings estáticos, que atribuem um único vetor para cada palavra, essa abordagem permite que o modelo considere as palavras ao redor para compreender o significado de cada token. Essa técnica é utilizada em modelos baseados em Transformer, como o BERT e os LLMs modernos. Inicialmente, cada token recebe um embedding que representa suas características básicas, mas esse vetor ainda não possui o significado específico que a palavra terá naquela frase. Em seguida, o modelo adiciona a informação de posição (Positional Encoding), permitindo identificar a ordem dos tokens na sequência. Depois, a sequência passa pelas camadas do Transformer, nas quais o mecanismo de atenção própria (Self-Attention) permite que cada token analise sua relação com os demais tokens da frase, identificando quais são mais relevantes para compreender seu significado. A cada camada, as representações são atualizadas com essas informações contextuais, fazendo com que o vetor inicial seja transformado em uma representação contextualizada.

Exemplo: Considere a frase "O banco aprovou o empréstimo". Após a tokenização, cada palavra recebe seu respectivo ID e, em seguida, um embedding inicial. Nesse primeiro momento, o vetor de "banco" ainda não diferencia se a palavra se refere a uma instituição financeira ou a um assento. Em seguida, é adicionada a informação de posição, permitindo que o modelo identifique a ordem dos tokens. A sequência então entra nas camadas do Transformer, onde o mecanismo de Self-Attention permite que o token "banco" considere os demais elementos da frase, como "aprovou" e "empréstimo". Como essas palavras estão relacionadas ao contexto financeiro, o modelo consegue construir uma representação de "banco" associada a uma instituição financeira.



<strong>O que é Self-A<strong>ttention (Atenção Própria)?</strong>

O Self-Attention é um mecanismo que permite ao modelo identificar o quanto cada token de uma sequência deve considerar os demais tokens para compreender o contexto. Para isso, cada token é comparado com os outros por meio de cálculos matemáticos que geram pesos de atenção (Attention Weights). Esses pesos indicam o grau de relevância de cada token em relação aos outros. Com base neles, o modelo combina as informações dos tokens, atualizando suas representações contextuais. Dessa forma, uma palavra consegue utilizar informações de outras partes da frase para ajudar a determinar seu significado.

Exemplo: Na frase "O banco aprovou o empréstimo", quando o modelo analisa o token "banco", o mecanismo de Self-Attention pode atribuir maior peso de atenção às palavras "aprovou" e "empréstimo", pois elas fornecem informações importantes para identificar o significado de "banco". Já na frase "Sentei no banco da praça", a atenção pode destacar as palavras "sentei" e "praça", indicando que "banco" se refere a um assento. Assim, o modelo consegue diferenciar os significados de uma mesma palavra de acordo com o contexto.`
},
{
id: 51,
provaId: 2,
titulo: "Bloco Encoder",
conteudo: `O Encoder é responsável por processar a sequência de entrada e gerar representações contextuais dos tokens. Ele não gera textos diretamente, pois seu objetivo é transformar os embeddings iniciais em representações mais completas, que incorporem informações sobre o significado dos tokens e suas relações com os demais elementos da sequência. Para realizar esse processamento, o Encoder utiliza principalmente dois mecanismos: o Self-Attention, que permite identificar quais tokens são mais relevantes para compreender cada elemento da sequência, e as redes Feed-Forward, que realizam transformações matemáticas nas representações de cada token, permitindo extrair e combinar características mais complexas. Esses mecanismos trabalham em conjunto e são repetidos em diferentes camadas, refinando progressivamente as representações contextuais produzidas pelo Encoder.

Exemplo: Imagine a frase "O banco aprovou o empréstimo". O Encoder recebe os embeddings dos tokens e utiliza o Self-Attention para identificar relações entre palavras, como "banco", "aprovou" e "empréstimo". Em seguida, as redes Feed-Forward processam essas informações e transformam as representações de cada token. Ao final, o token "banco" terá uma representação contextual que incorpora informações relacionadas a uma instituição financeira, em vez de simplesmente representar a palavra isoladamente.`,
},
{
id: 52,
provaId: 2,
titulo: "Atenção(Self-Attention)",
conteudo: `O Self-Attention é um mecanismo que permite que cada token de uma sequência avalie a relevância dos demais tokens para construir sua representação contextual. Para isso, o Transformer realiza cálculos matemáticos que comparam os tokens entre si e atribuem pesos de atenção (Attention Weights), indicando o grau de importância de cada token para a interpretação dos outros. Dessa forma, cada token consegue incorporar informações de diferentes partes da sequência, mesmo que estejam distantes umas das outras.

Exemplo: Na frase "O banco aprovou o empréstimo", quando o Transformer processa o token "banco", ele não analisa apenas essa palavra isoladamente. O mecanismo de Self-Attention compara "banco" com os demais tokens da frase, identificando quais possuem maior relevância para compreender seu significado. Nesse caso, palavras como "aprovou" e "empréstimo" podem receber pesos de atenção maiores, pois fornecem informações importantes para identificar que "banco" se refere a uma instituição financeira. Assim, o modelo consegue construir uma representação contextual considerando as relações entre as palavras da frase.

<img src="${pln_78}"/>`,
},
{
id: 53,
provaId: 2,
titulo: "Rede Feed-Forward (FNN)",
conteudo: `Após a etapa de atenção (Self-Attention), a rede Feed-Forward transforma e refina, de maneira não linear, a representação contextual de cada token. Enquanto o Self-Attention permite que os tokens incorporem informações uns dos outros, a FNN trabalha individualmente com a representação de cada token, aplicando operações matemáticas para identificar e combinar características mais complexas. Dessa forma, os dois mecanismos possuem funções complementares: a atenção identifica de quais outros tokens incorporar informações, enquanto a FNN determina como transformar e processar as informações recebidas.

Exemplo: Na frase "O banco aprovou o empréstimo", o Self-Attention permite que o token "banco" incorpore informações de palavras como "aprovou" e "empréstimo". Em seguida, a FNN transforma essa representação contextual, ajudando o modelo a desenvolver características que permitam identificar o significado de "banco" naquele contexto.

De forma simplificada:
• Self-Attention: mistura informações entre os tokens.
• FNN: transforma e refina a representação de cada token.`,
},
{
id: 54,
provaId: 2,
titulo: "Bloco Decoder",
conteudo: `O Decoder é responsável por gerar a sequência de saída, produzindo um token por vez. Enquanto o Encoder processa a entrada e constrói representações contextuais dos tokens, o Decoder utiliza os tokens já gerados e, nas arquiteturas que possuem Encoder e Decoder, também utiliza as representações produzidas pelo Encoder para prever qual será o próximo token. Esse processo acontece de maneira iterativa: após gerar um token, ele é adicionado à sequência e utilizado como contexto para prever o próximo, repetindo esse ciclo até que a resposta seja concluída.

Exemplo: Imagine que o usuário pergunte "Qual é a capital do Brasil?". O Decoder começa a gerar a resposta utilizando as informações disponíveis e produz o primeiro token: "A". Em seguida, considera o token gerado e prevê o próximo, que pode ser "capital". Esse processo continua até formar a resposta "A capital do Brasil é Brasília".

<img src="${pln_64}"/>`,
},
{
id: 55,
provaId: 2,
titulo: "Bloco Saida",
conteudo: `A representação produzida pelo Decoder é convertida em uma previsão sobre qual deve ser o próximo token da sequência. Para isso, o modelo utiliza duas etapas principais: a camada Linear e a função Softmax. A camada Linear recebe o vetor produzido pelo Decoder e realiza uma transformação matemática, gerando um novo vetor com uma posição para cada token existente no vocabulário. Por exemplo, se o vocabulário possuir 50 mil tokens, a saída dessa camada terá 50 mil valores, chamados de logits. Esses valores representam as pontuações atribuídas pelo modelo a cada token, indicando o quanto cada um é considerado adequado para continuar a sequência. Entretanto, os logits ainda não são probabilidades. Por isso, é aplicada a função Softmax, que transforma essas pontuações em uma distribuição de probabilidades, na qual todos os valores ficam entre 0 e 1 e a soma deles é igual a 1. Com essa distribuição, o modelo seleciona o próximo token e o adiciona à sequência, repetindo o processo até concluir a resposta.
A partir dessa distribuição, o modelo escolhe o próximo token. A escolha pode ser o token de maior probabilidade ou pode envolver estratégias de amostragem, como Temperatura, top-k e top-p.

<img src="${pln_75}"/>`,
},
{
id: 56,
provaId: 2,
titulo: "Arquiteturas derivadas do Transformer",
conteudo: `<img src="${pln_59}"/>

<strong>Encoder-Only: </strong> No Encoder-Only, é utilizada apenas a parte do Encoder do Transformer. Sua principal função é processar o texto de entrada e gerar representações vetoriais contextuais para cada token, permitindo que o modelo compreenda o significado das palavras considerando o contexto em que aparecem. Esses modelos são particularmente adequados para tarefas em que o objetivo principal é compreender, classificar ou representar um texto, e não gerar uma continuação longa. São aplicados em tarefas de NLU (Natural Language Understanding), como reconhecimento de entidades nomeadas (NER), análise de sentimento e classificação de textos. Um exemplo clássico dessa arquitetura é o BERT.

Exemplo: Ao receber a frase "A empresa Apple lançou um novo celular", o modelo pode identificar que "Apple" representa uma organização, e não uma fruta. Isso acontece porque o Encoder considera o contexto das palavras para interpretar seu significado.

<strong>Decoder-Only:</strong> No Decoder-Only, é utilizada apenas a pilha de blocos Decoder do Transformer, sem a presença de um Encoder separado. Nessa arquitetura, o próprio Decoder processa os tokens de entrada, constrói suas representações contextuais e utiliza essas informações para prever o próximo token da sequência. Diferentemente do Encoder-Only, essa arquitetura é naturalmente adequada à geração autoregressiva, na qual o modelo produz uma sequência de saída token por token, utilizando os tokens anteriores como contexto. Por esse motivo, é predominante em LLMs generativos, que recebem prompts como entrada e geram respostas por meio de uma tarefa conhecida como Next Token Prediction (previsão do próximo token). São especialmente utilizados em tarefas de NLG (Natural Language Generation), como chatbots conversacionais, geração de textos e criação de código. Exemplos incluem os modelos da família GPT, como os utilizados pelo ChatGPT.

Exemplo: Ao receber o prompt "Explique o que é inteligência artificial", o modelo começa a prever os tokens que formarão a resposta. Cada novo token gerado é utilizado como contexto para prever o próximo, permitindo construir uma explicação completa.

<strong>Encoder-Decoder:</strong> O Encoder-Decoder utiliza as duas partes do Transformer, seguindo o fluxo: Entrada → Encoder → Representações contextuais → Decoder → Saída. O Encoder processa a sequência de entrada e produz representações contextuais dos seus tokens. O Decoder utiliza essas representações para gerar uma nova sequência, token por token, por meio de um mecanismo chamado Cross-Attention, que permite consultar as informações produzidas pelo Encoder durante a geração. Essa arquitetura é especialmente adequada para tarefas que recebem uma sequência de entrada e precisam produzir outra sequência como resposta, como tradução automática, sumarização e reformulação de textos. 
Exemplos de modelos que utilizam essa arquitetura são T5 e BART.

Exemplo: Imagine que o modelo receba a frase em inglês "The weather is beautiful today" e precise traduzi-la para português. O Encoder processa a frase original e gera representações contextuais. Em seguida, o Decoder utiliza essas representações para produzir a tradução "O tempo está bonito hoje", gerando um token por vez.

<img src="${pln_77}"/>

<img src="${pln_55}"/>>`,
},
{
id: 57,
provaId: 2,
titulo: "Bidirectional Encoder Representations for Transformers (BERT)",
conteudo: `O BERT é uma rede neural profunda, pré-treinada, baseada na arquitetura Encoder-Only do Transformer. Seu principal objetivo é compreender o contexto de um texto por meio da análise bidirecional, ou seja, considera tanto as palavras que aparecem antes quanto as que aparecem depois de um determinado token para construir suas representações contextuais. O BERT pode ser adaptado para diferentes tarefas por meio de um processo chamado Fine-Tuning, no qual o modelo recebe treinamento adicional para uma finalidade específica, geralmente com a adição de uma camada de saída responsável pela tarefa desejada. Dessa forma, pode ser utilizado em aplicações como análise de sentimentos, classificação de textos, reconhecimento de entidades nomeadas e sistemas de perguntas e respostas.
Exemplo: Ao receber a frase "O banco aprovou o empréstimo", o BERT considera tanto as palavras anteriores quanto as posteriores ao token "banco" para identificar que ele se refere a uma instituição financeira. Essa capacidade de analisar o contexto nas duas direções é uma de suas principais características.

<strong>Características do BERT</strong>
Artigo original de 2018: https://arxiv.org/abs/1810.04805 

• Arquitetura: Utiliza apenas o Encoder do Transformer, permitindo construir representações contextuais dos tokens.
• Variações: Existem diferentes versões e adaptações do BERT, como RoBERTa, DistilBERT e ALBERT, que apresentam modificações na arquitetura ou no processo de treinamento.
• Fine-Tuning: Permite adaptar o modelo para tarefas específicas, acrescentando ou ajustando camadas responsáveis por produzir a saída desejada.
• Tamanho da entrada: Suporta sequências de até 512 tokens em suas configurações originais.
Dados de treinamento: O BERT original foi treinado utilizando grandes conjuntos de textos, incluindo a Wikipedia em inglês e o BookCorpus.

• Treinado em duas variações:
        • BERT-Base: 12 pilhas (Transformers) (110M de parâmetros)
        • BERT-Large: 24 pilhas (Transformers) (340M de parâmetros)

• Manipula grandes entradas (512 tokens)
• Treinado com a Wikipedia, BookCorpus, etc.
• Há versões em português como o BERTimbau
        • (https://huggingface.co/neuralmind/bert-base-portuguese-cased)

• Treinado em duas tarefas distintas:
<div style="padding-left: 20px; text-indent: -20px;">
• Masked Language Modeling: Consiste em esconder aleatoriamente alguns tokens de uma frase, substituindo-os por um marcador especial [MASK]. O objetivo do modelo é analisar o contexto disponível, considerando as palavras anteriores e posteriores, para prever qual token foi escondido. Essa tarefa permite que o BERT aprenda relações entre as palavras e desenvolva representações contextuais.
    
Exemplo: Imagine que o modelo receba a frase "O banco aprovou o [MASK]". Utilizando o contexto, ele precisa prever qual palavra foi escondida. Nesse caso, uma resposta provável seria "empréstimo".

<img src="${pln_74}"/>
</div>

<div style="padding-left: 20px; text-indent: -20px;">
• Next Sentence: Consiste em apresentar ao modelo dois trechos de texto e treiná-lo para identificar se o segundo trecho realmente aparece depois do primeiro no texto original. O objetivo é ensinar o modelo a reconhecer relações entre sentenças e compreender a continuidade de um texto. 
Exemplo: O modelo recebe duas sentenças:
    • Sentença A: "Maria foi ao supermercado."
    • Sentença B: "Ela comprou frutas e verduras."
Nesse caso, as sentenças apresentam uma relação de continuidade, portanto, o modelo deve classificá-las como sentenças consecutivas. Se a segunda sentença fosse "O computador está sobre a mesa", por exemplo, o modelo deveria identificar que ela não corresponde à continuação original da primeira. 

<img src="${pln_65}"/>
</div>
`,


},
{
id: 58,
provaId: 2,
titulo: "Principais Tokens Especiais do BERT",
conteudo: `Os tokens especiais são identificadores utilizados pelo BERT para indicar funções específicas durante o processamento do texto. Diferentemente dos tokens comuns, que representam palavras ou partes de palavras, eles possuem finalidades específicas, como indicar o início de uma sequência, separar sentenças, sinalizar palavras que devem ser previstas ou completar sequências de tamanhos diferentes. Esses tokens ajudam o modelo a organizar e interpretar corretamente as informações recebidas.

• [CLS] (Classification): É colocado no início da sequência de entrada. Sua representação contextual final pode ser utilizada para tarefas que exigem a classificação do texto inteiro, como análise de sentimentos e classificação de notícias.

Exemplo: Na frase "O filme foi excelente", o BERT adiciona o token [CLS] no início. Após o processamento, sua representação final pode ser utilizada para classificar o sentimento da frase como positivo ou negativo.

• [SEP] (Separator): É utilizado para separar duas sentenças ou segmentos de texto. Também pode indicar o final de uma sequência ou segmento, dependendo da tarefa.

Exemplo: Em uma tarefa de comparação entre duas frases, o modelo pode receber: [CLS] O céu está azul [SEP] Hoje está ensolarado [SEP]. Dessa forma, consegue identificar onde termina a primeira sentença e começa a segunda.

• [MASK] (Mask): É utilizado durante o treinamento de Masked Language Modeling (MLM) para substituir tokens que o modelo deverá tentar prever. Assim, o BERT aprende a identificar palavras considerando o contexto apresentado na sequência.

Exemplo: Ao receber a frase "O cachorro gosta de [MASK]", o modelo deve analisar as palavras disponíveis para prever qual token foi ocultado, como "brincar".

• [PAD] (Padding): É utilizado para completar sequências menores até que todas tenham o mesmo comprimento dentro de um lote de processamento (batch). Isso permite que diferentes sequências sejam processadas em conjunto, mantendo uma estrutura uniforme.

Exemplo: Imagine que o modelo precise processar três frases com diferentes quantidades de tokens. Para que todas tenham o mesmo tamanho, são adicionados tokens [PAD] ao final das sequências menores.

• [UNK] (Unknown): É utilizado para representar um token desconhecido, ou seja, uma unidade de texto que não pode ser representada adequadamente pelo vocabulário do tokenizador. Sua utilização depende do tokenizador, pois alguns modelos conseguem dividir palavras desconhecidas em subpalavras, evitando a necessidade de utilizar [UNK].

Exemplo: Imagine que o tokenizador receba uma palavra que não consegue reconhecer nem dividir em unidades conhecidas. Nesse caso, poderá substituí-la pelo token [UNK], indicando que aquela unidade não foi identificada.

<img src="${pln_76}"/>

Aplicações:
• Topic Modeling with BERT
    • https://towardsdatascience.com/topic-modeling-with-bert-779f7db187e6

• BERT e Análise de Sentimentos
    • https://www.tensorflow.org/text/tutorials/classify_text_with_bert?hl=pt-br

Limitações:
• Dependência da qualidade dos dados: se o BERT for treinado com dados de baixa qualidade, em quantidade insuficiente ou enviesados, poderá aprender padrões inadequados e gerar representações e resultados pouco confiáveis, reproduzindo também os vieses presentes nos dados.
• Ausência de RLHF no treinamento original: o BERT original não utilizou Reinforcement Learning from Human Feedback (RLHF). Entretanto, é importante destacar que o RLHF não é uma etapa obrigatória para o treinamento de modelos BERT, pois sua arquitetura é voltada principalmente à compreensão e representação de textos, e não à geração de respostas conversacionais como os modelos GPT.`,
},
{
id: 59,
provaId: 2,
titulo: "BERTScore: Evaluating Text Generation with BERT",
conteudo: `O BERTScore é uma métrica moderna e muito inteligente usada para dar uma "nota" à qualidade de um texto gerado por Inteligência Artificial, avaliando o significado real da frase em vez de apenas procurar palavras idênticas. Na prática, ele pega o texto que o seu sistema gerou (a sentença candidata) e compara com o texto perfeito que você esperava (a sentença de referência), transformando cada palavra de ambos os textos em vetores matemáticos riquíssimos (as representações contextuais pré-treinadas); em seguida, ele cruza todos esses vetores usando uma geometria chamada "similaridade do cosseno", que mede o ângulo e a distância exata entre eles no espaço virtual, permitindo que o modelo pontue positivamente a sua IA quando ela usa palavras escritas de forma totalmente diferente, mas que possuem exatamente a mesma intenção. 

Exemplo:
• Referência: O aluno estudou para a prova.
• Hipótese: O estudante se preparou para o exame.
Embora as palavras sejam diferentes, o BERTScore pode identificar a semelhança de significado entre elas.

Principais componentes:

• Precision: verifica se os tokens da hipótese encontram correspondências na referência.
• Recall: verifica se os tokens da referência encontram correspondências na hipótese.
• F1-score: combina Precision e Recall em uma única pontuação.

Artigo disponível em: https://arxiv.org/abs/1904.09675

<img src="${pln_71}"/>

<img src="${pln_66}"/>

<img src="${pln_63}"/>

<img src="${pln_60}"/>

<img src="${pln_73}"/>

<img src="${pln_72}"/>`,
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