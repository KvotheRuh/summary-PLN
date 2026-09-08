import pln_1 from "../images/pln_1.png";
import pln_2 from "../images/pln_2.png";
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


import ShouldersPlato from "../images/Shoulders e Plato.png"
import BackwardSelection from "../images/backward.png"
import definicoesAG from "../images/definicoesAG.png"
import crossover1 from "../images/crossover1.png"
import crossover2 from "../images/crossover2.png"
import crossover3 from "../images/crossover3.png"
import mutacao from "../images/mutacao.png"
import fitness from "../images/fitness.png"
import ForwardSelection from "../images/forward.png"


const topicos = [
  {
    id: 1,
    provaId: 1,
    titulo: "[Aula 1] O que é uma máquina inteligente?",
    conteudo: `Um computador pode ser considerado inteligente se conseguir enganar um humano, levando-o a acreditar que ele era humano`
  },
  {
    id: 2,
    provaId: 1,
    titulo: "Processamento de Linguagem Natural",
    conteudo: `Textos em linguagem natural podem ser ambíguos, subjetivos, conter erros.
Na PLN, a primeira tarefa a chamar atenção foi a tradução automática (Russo <—> Inglês)
Há muita informação textual (dado não estruturado) acumulada na Web, nas empresas, nos computadores das pessoas.

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
    id: 3,
    provaId: 1,
    titulo: "Identificando o Dado Textual",
    conteudo: `- Dado textual = não estruturado
- Características do dado textual;
  - Não tem tipo
  - Disponível em texto-puro (ASCII ou UNICODE

  Extração do Dado Textual
  - Origem distintas
  - Web(Html), Redes Sociais(Posts), Sistemas de Informação(nome de pessoas, endereço eletrônico, …)

- Exemplo para arquivo .html:
  - Texto espalhado ao longo do arquivo .html e suas tags
  - Conjunto de funções para extração(parser)`,
  },
  {
    id: 4,
    provaId: 1,
    titulo: "Léxico",
    conteudo: `Definição: onjunto de palavras de um dado idioma
    - O léxico de uma lingua nao e fechado ou fixo
Podem influenciar no léxico:
    - Nomes proprios
    - Abreviações e siglas
    - Girias, etc.`,
  },
    {
    id: 5,
    provaId: 1,
    titulo: "Similaridade Sintática",
    conteudo: `Para medir a similaridade entre strings podemos utilizar uma função de distância. As mais comuns são: a de Hamming e a de Levenshtein(Edit Distance)
A distância de edição é definida pelo número de inserções, exclusões e substituições realizadas na comparação entre as strings envolvidas

Exemplos:
    - color → colour: ED = 1
    - survey → surgery: ED = 2`,
  },
  {
    id: 6,
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
      - S = 2 * 5 (5 + 9) = 0,71

    <hr>
    - P1 = carro, P2 = avião
      - P1:
        - Digramas: {ca, ar, rr, ro}
        - Únicos: {ca, ar, rr, ro}
      - P2:
        - Digramas: {av, vi, ia, ao}
        - Únicos: {av, vi, ia, ao}
      - Compartilhados: {}
      - S = 2 * 0 (4 + 4) = 0

       Leia mais sobre outras aplicações do n-gram no PLN:
       <a href="http://text-analytics101.rxnlp.com/2014/11/what-are-n-grams.html?m=1" target="_blank" rel="noopener noreferrer">What Are N-Grams? - Text Analytics 101</a>`,
  },
  {
    id: 7,
    provaId: 1,
    titulo: "Conceitos Básicos",
    conteudo: `   • <strong>Linguagem natural:</strong> linguagens que são utilizadas para comunicação do dia a dia por humanos (português brasileiro, português europeu,
    inglês, …).
    • <strong>Processamento de Linguagem Natural (PLN):</strong> qualquer manipulação computacional de linguagens naturais. De contagem de palavras à
    compreensão semântica.
    • <strong>Linguística Computacional:</strong> associada à PLN, estuda os fenômenos
    linguísticos para apoiar o computador na interpretação e geração da
    linguagem natural.
    • <strong>Corpus:</strong> conjunto de textos, normalmente normalizados e
    rotulados.
    • <strong>Corpora:</strong> conjunto de Corpus.
    • <strong>Entidade Nomeada:</strong> são expressões que nomeiam pessoas,
    organizações, locais, tempos e quantidades.
        • Exemplo: “São Paulo”, “Brasil”, “Pedro Alvares Cabral”, “ONU”, etc.
        • Dificuldades: “SP”, “S.P.”, “S. Paulo”, “São Paulo”, ...
    • <strong>Léxico:</strong> conjunto de palavras de um dado idioma.
        • O léxico de uma língua não é “fechado” ou fixo.
        • Podem influenciar no léxico:
            • Nomes próprios;
            • Abreviações e siglas;
            • Gírias, etc`,
  },
  {
    id: 8,
    provaId: 1,
    titulo: "Exercício 1",
    conteudo: `Implemente um algoritmo em Python para resolver o
    seguinte problema:
    • Dado o seguinte léxico:
    • [abacate, abacaxi, abobora, abobrinha, ananás, maça, mamão,
    manga, melancia, melão, mexerica, morango]
    • Indicar a palavra mais “próxima”:
    <img src="${pln_2}" alt="Exemplo DFS" class="resumo__gif" />

    Avaliar diferentes thresolds de distância.`,
  },
  {
    id: 9,
    provaId: 1,
    titulo: "[Aula 2] Operações Básicas de PLN",
    conteudo: `Existem algumas operações básicas de processamento de um
texto que são bastante comuns.
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
    Tipos: 9 (duas ocorrências de ‘a’)
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
  • abóbora: abób
  • Maça: maç
  • Curitiba: curitib

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

• Assim como a operação de stemming, pode ser útil na redução de
dimensionalidade.
• Voltaremos a esta questão no futuro.`,
  },
  {
    id: 15,
    provaId: 1,
    titulo: "Lista de Palavras Frequentes (stopwords)",
    conteudo: ` As stopwords são palavras que normalmente são retiradas
do texto em processamento pois pouco contribuem para o
processo de identificação/classificação.
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
Um sistema registra, em uma lista, os acessos diários (login) de usuários em
um sistema: cada linha representa um acesso (horário e o login do usuário)
(“Expressões Regulares: Uma Abordagem Divertida”, Aurelio Marinho Jargas) :
    05:15 ernesto
    08:39 ricardo
    10:32 patricia
    14:59 gabriel
    16:27 carla
    22:23 marcelo
Como fazer para localizar automaticamente aqueles usuários que acessaram o
sistema no período da tarde (meio-dia às dezoito)?
R (retirado do livro): ^1[2-8]

<strong>Conceitos Básicos</strong>
Normalmente utilizamos três operações básicas na
construção de uma ER:
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
    “[0-9]{4}” faz o matching de uma série de quatro dígitos consecutivos (como o
    ano de nascimento de alguém).

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
    • Incremento da acurácia/precisão (precision): diminuir falsos
    positivos
    • Incremento da cobertura (recall): diminuir falsos negativos

<strong>Usos Gerais</strong>
• Verificação de entradas do usuário (ex.: URL, email, ...).
• Útil no pré-processamento de textos antes da aplicação de
classificadores.
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
3) Dado o trecho de código html a seguir, crie uma expressão regular para identificar a presença dos
marcadores da linguagem, <></>
    Bom dia! <a href="/sol">Sol</a>
    <a>Vamos estudar as RegEx?</a>
4) Escreva uma RegEx para validar um horário no formato hh:mm, onde
a hora pode variar de 0 a 23. Veja alguns exemplos para você avaliar:
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
    Dica: para que o caractere ‘/’ utilizado para separar dia de mês e mês de ano
    seja identificado, acrescente o metacaractere ‘\’ imediatamente antes. Assim, a
    RegEx final terá como parte de sua forma a sequência “\/” (aparecerá duas
    vezes).

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
    titulo: "[Aula 3] Representação Vetorial de Textos:",
    conteudo: ` As stopwords são palavras que normalmente são retiradas
do texto em processamento pois pouco contribuem para o
processo de identificação/classificação.
• O objetivo é reduzir a dimensionalidade.
• Normalmente incluem artigos, preposições, dentre outros.
• Existem diferentes listas disponíveis: <a href="Stopwords português (https://www.linguateca.pt/chave/stopwords)" target="_blank" rel="noopener noreferrer">Stopwords português</a>`,
  },
  {
    id: 19,
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
  <img src="${pln_12}"/>`,
  },
  {
    id: 19,
    provaId: 1,
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

  // ── PROVA 2 ────────────────────────────────────────────────
  {
    id: 21,
    provaId: 2,
    titulo: "Busca Local",
    conteudo: `A busca local é uma técnica utilizada para encontrar soluções em espaços de estados muito grandes ou até infinitos utilizando pouca memória. Diferente de outros métodos de busca, ela não armazena todos os estados nem utiliza uma árvore de busca, trabalhando apenas com o estado atual e buscando melhorá-lo de forma iterativa. Nesse tipo de abordagem, o espaço de estados corresponde ao conjunto completo das soluções possíveis, chamadas de configurações.
Na busca local, o algoritmo utiliza apenas decisões locais para tentar melhorar o estado atual. A partir de um estado específico, ele busca estados vizinhos que maximizem ou minimizem a função objetivo, dependendo do problema. Entretanto, pode acontecer de o algoritmo encontrar um máximo local e considerá-lo uma solução adequada, mesmo que ele não seja o máximo global. Além disso, a busca local não é recomendada para todos os problemas, principalmente quando é necessário garantir a solução ótima.
No problema das 8 rainhas, por exemplo, cada configuração representa todas as rainhas posicionadas no tabuleiro, mesmo que existam conflitos entre elas. Apesar de ser eficiente em termos de memória, a busca local possui a desvantagem de poder nunca explorar o estado em que a solução correta realmente se encontra. Além disso, os estados já visitados normalmente não são armazenados. A busca local é utilizada preferencialmente em problemas em que há limitação de memória ou espaços de busca muito grandes.

<strong>Espaço de estado paisagem(topologia)</strong>
O espaço de estados em busca local pode ser representado como uma paisagem(topologia), em que cada estado possui um valor definido pela função objetivo. Essa função mede a qualidade de uma possível solução, permitindo que o algoritmo explore os vizinhos do estado atual em busca de estados melhores.
Na maioria dos casos, o objetivo é encontrar o melhor valor possível para a função objetivo. Contudo, durante a busca, o algoritmo pode encontrar soluções locais e não alcançar a solução ideal.

<strong>Conceitos:</strong>
— Máximo global: maior valor encontrado para a função objetivo, representando o pico mais alto da paisagem.
— Mínimo global: menor valor encontrado para a função objetivo, representando o ponto mais baixo da paisagem.
— Máximo local: estado que possui valor maior que os estados vizinhos, mas que não é necessariamente o maior valor de toda a paisagem.
— Mínimo local: estado que possui valor menor que os estados vizinhos, mas que não é necessariamente o menor valor de toda a paisagem.
— Subida de encosta (Hill Climbing): método utilizado para encontrar o máximo global. O algoritmo vai “subindo” para estados cada vez melhores, porém pode parar em um máximo local sem alcançar o melhor valor possível.
— Descida de gradiente (Gradient Descent): método utilizado para encontrar o mínimo global. O algoritmo segue na direção de maior diminuição da função objetivo, mas pode ficar preso em um mínimo local sem atingir o mínimo global.`,
  },


  {
    id: 22,
    provaId: 2,
    titulo: "Hill Climbing",
    conteudo: `O Hill Climbing é um algoritmo de busca local utilizado para encontrar soluções melhores de forma iterativa. Em cada etapa, o algoritmo analisa apenas os vizinhos do estado atual e escolhe aquele que possui o valor mais alto da função objetivo, ou seja, o vizinho que representa a encosta mais alta.
O processo continua enquanto existirem vizinhos com valores superiores ao estado atual. Quando nenhum vizinho apresenta um valor mais alto, o algoritmo encerra a execução. Por considerar apenas a melhor escolha imediata, sem analisar os possíveis caminhos futuros, o Hill Climbing também é conhecido como busca local gulosa.
Apesar de ser simples e eficiente, o algoritmo pode ficar preso em máximos ou mínimos locais. Isso ocorre porque o algoritmo interrompe a execução no momento em que não encontra mais vizinhos com valores melhores que o estado atual, mesmo que ainda exista uma solução superior em outra região do espaço de estados. Entretanto, em alguns problemas, esses máximos e mínimos locais podem ser considerados soluções aceitáveis.

<strong>Conceitos:</strong>
— Cordilheiras: são extensas sequências de máximos locais. A existência de cordilheiras pode fazer com que o algoritmo pare precocemente em um máximo local, encontrando apenas uma solução ótima local em vez do máximo global.

<p class="resumo__gif-label">Exemplo de uma cordilheira em um espaço de busca</p>

— Platôs: são regiões em que os estados vizinhos possuem o mesmo valor da função objetivo. Isso pode fazer com que o algoritmo gaste muito tempo explorando lateralmente ou até pare prematuramente, sem conseguir avançar para estados melhores.
— Shoulders: são regiões semelhantes aos platôs, porém existe uma saída para estados melhores. O problema é que o algoritmo pode ter dificuldade em encontrar a direção correta para continuar a busca.

<img src="${ShouldersPlato}" alt="Exemplo de um espaço de busca que contém um Shoulder e um Platô" class="resumo__gif"  style="max-width: 100%; max-height: 400px;"/>
<p class="resumo__gif-label">Exemplo de um espaço de busca que contém um Shoulder e um Platô</p>

<strong>Propriedades:</strong>
— Completo: Não. O algoritmo pode ficar preso em máximos locais, parar em platôs ou entrar em loops, não garantindo que encontrará uma solução mesmo que ela exista.
— Ótimo: O algoritmo do Hill Climbing não consegue garantir que uma solução ótima seja encontrada. Contudo, alguns pontos devem ser considerados:
    — Em problemas convexos (onde existe apenas um pico principal e não há máximos locais), o algoritmo pode encontrar a solução ótima.
    — Mesmo variantes como o Random-Restart Hill Climbing não conseguem garantir uma solução ótima em problemas normais (não convexos).
    — Em alguns casos, uma solução subótima já é suficiente.
    — Encontrar a solução ótima pode possuir um alto custo computacional.

<strong>Random-restart Hill Climbing:</strong>
O Random-Restart Hill Climbing consiste em executar o algoritmo Hill Climbing múltiplas vezes a partir de estados iniciais aleatórios, escolhendo ao final a melhor solução encontrada.
Essa abordagem ajuda a evitar que o algoritmo fique preso em máximos locais. Contudo, não há garantia de que o máximo global será encontrado, embora as chances de alcançá-lo sejam aumentadas.
Além disso, o Random-Restart Hill Climbing consegue escapar de regiões conhecidas como shoulders. Porém, em regiões de platô, o algoritmo ainda pode apresentar pouco ou nenhum progresso significativo.`,
  },

  {
    id: 23,
    provaId: 2,
    titulo: "Simulated Annealing (Têmpera Simulada)",
    conteudo:`O Simulated Annealing combina a subida de encosta com um processo aleatório.
O algoritmo utiliza uma variável chamada temperatura, que é decrementada ao longo da execução. Essa temperatura é utilizada para medir a probabilidade de o algoritmo aceitar um estado pior que o atual.
À medida que a temperatura diminui, a probabilidade de aceitar estados piores também diminui. Por outro lado, quanto maior a temperatura, maior será a possibilidade de o algoritmo selecionar um estado considerado “ruim”.
Esse mecanismo é utilizado para “chacoalhar” a busca, permitindo que o algoritmo explore outras regiões do espaço de estados e evitando que ele fique preso em máximos locais.

— Temperatura alta: mais movimentos ruins são permitidos, aumentando a flexibilidade de escolha do algoritmo.
— Temperatura baixa: menos movimentos ruins são permitidos, reduzindo a flexibilidade de escolha.

O algoritmo de têmpera simulada pode ser utilizado tanto para encontrar o mínimo global quanto o máximo global. Em muitos casos, os problemas são tratados como maximização; porém, problemas de minimização podem ser resolvidos invertendo o sinal da função objetivo.

<strong>Propriedades:</strong>
— Completo: Não. Pode demorar muito para encontrar uma solução ou até mesmo parar a execução antes de encontrar a solução.
— Ótimo: Teoricamente, o algoritmo de Têmpera Simulada pode ser considerado ótimo. Isso ocorre porque, em situações onde a temperatura diminui de forma extremamente lenta e o algoritmo pode executar sem limite de tempo, ele consegue convergir para a solução ótima global. Contudo, na prática, o algoritmo normalmente é considerado não ótimo, pois alcançar essa solução exigiria um custo computacional muito elevado e um tempo de execução excessivamente grande.`,
  },

  {
    id: 24,
    provaId: 2,
    titulo: "Local Beam Search (Busca em feixe local)",
    conteudo: ` Diferente do Hill Climbing e do Simulated Annealing, que armazenam apenas o estado atual, o Local Beam Search mantém simultaneamente um conjunto de (k) estados.
O algoritmo inicia com estados aleatórios, cuja quantidade é definida pelo valor de (k). Por exemplo, se (k = 4), a busca começará com 4 estados aleatórios.
Em seguida, são gerados todos os vizinhos desses estados. Após a geração, os (k) melhores vizinhos são selecionados, e o processo se repete continuamente.
O algoritmo encerra sua execução quando encontra o estado objetivo entre os estados gerados.

<strong>Propriedades:</strong>
Ótimo: Não. O Local Beam Search não garante encontrar a solução ótima global, pois pode convergir para máximos locais e descartar estados que poderiam levar à melhor solução.
Completo: Não. O algoritmo não garante encontrar uma solução mesmo que ela exista, pois mantém apenas (k) estados simultaneamente e pode eliminar caminhos importantes durante a busca.

<strong>Busca em feixe local estocástica</strong>
A busca em feixe local pode sofrer com a falta de diversidade, ou seja, os estados podem acabar concentrados em uma pequena região do espaço de estados.
Uma solução para esse problema é combinar a função objetivo com probabilidade para selecionar os sucessores.
Nessa abordagem, os estados mais promissores possuem maior chance de serem escolhidos, mas estados menos promissores ainda podem ser selecionados em menores proporções.
Isso aumenta a diversidade da busca e reduz as chances de o algoritmo ficar preso em uma única região do espaço de estados.`,
  },

  {
    id: 25,
    provaId: 2,
    titulo: "Algoritmos Genéticos",
    conteudo: `Os Algoritmos Genéticos são métodos de resolução de problemas de otimização inspirados no processo de seleção natural. Nesse método, existe uma população de indivíduos, também chamados de estados ou cromossomos, em que cada indivíduo representa uma possível solução para o problema.
Durante a execução, os indivíduos mais aptos, ou seja, aqueles que possuem melhores valores para a função objetivo, possuem maior chance de gerar descendentes. Esses novos indivíduos formam a próxima geração, permitindo que o algoritmo evolua gradualmente em busca da melhor solução possível.
O funcionamento do algoritmo simula mecanismos da evolução biológica para encontrar o cromossomo mais adaptável, correspondente à solução mais adequada do problema.

<strong>Propriedades:</strong>
— Completo: Não são completos porque não garantem encontrar uma solução, mesmo que ela exista. O algoritmo pode convergir prematuramente para mínimos ou máximos locais ou encerrar a execução antes de explorar regiões importantes do espaço de busca.
— Ótimo: Não são ótimos porque não garantem encontrar o máximo ou mínimo global. Apesar de frequentemente produzirem boas soluções, o resultado encontrado pode ser apenas uma solução ótima local.

<strong>Geração:</strong>
Uma geração corresponde ao conjunto de indivíduos(população) existente em um determinado momento da execução do algoritmo.
A cada geração, os indivíduos passam pelas etapas de seleção, crossover e mutação, gerando novos descendentes que formarão a próxima geração. Com isso, o algoritmo busca produzir populações cada vez mais adaptadas ao problema.

<strong>Algoritmo da formiga:</strong>
É um método de otimização inspirado no comportamento das formigas na busca por alimento. As formigas deixam rastros de feromônio no caminho percorrido, e caminhos com maior quantidade de feromônio possuem maior probabilidade de serem escolhidos pelas outras formigas.
Com o tempo, os caminhos mais curtos e eficientes acumulam mais feromônios, permitindo que o algoritmo encontre boas soluções para problemas de otimização e busca de caminhos.
O algoritmo da formiga é utilizado em sistemas de GPS para encontrar rotas mais eficientes entre diferentes pontos.`,
  },

  {
    id: 26,
    provaId: 2,
    titulo: "Representação de um problema com Algoritmos Genéticos",
    conteudo: `Nos Algoritmos Genéticos, o problema é representado por um espaço de busca formado por uma população de indivíduos. Cada indivíduo corresponde a uma possível solução para o problema e é representado por um cromossomo.
O cromossomo é composto por um vetor de tamanho finito, cujos componentes podem assumir diferentes valores. Cada posição desse vetor é chamada de gene, e cada gene representa uma característica específica da solução individual.
A forma mais comum de representar cromossomos é utilizando representação binária, com valores 0 e 1. Isso ocorre porque a representação binária é simples de implementar e facilita operações importantes do algoritmo, como crossover e mutação. Além disso, os valores binários permitem indicar facilmente a presença ou ausência de determinadas características em uma solução.
Outra forma de representação é utilizar valores decimais, principalmente em problemas que envolvem valores contínuos.

<img src="${definicoesAG}" alt="Representação das principais definições de um algoritmo genético" class="resumo__gif" style="max-width: 100%; max-height: 100px;"/>
<p class="resumo__gif-label">Representação das principais definições de um algoritmo genético</p>


<strong>Fitness Score</strong>
A aptidão(Fitness) representa a capacidade de um indivíduo “competir” dentro da população dos Algoritmos Genéticos. Para isso, é calculado um fitness score para cada indivíduo, indicando a qualidade da solução que ele representa.
Os indivíduos que possuem melhores valores de fitness possuem maior probabilidade de serem selecionados para a reprodução e, consequentemente, gerar melhores descendentes durante a fase de crossover.
A função de fitness corresponde à função objetivo do problema, sendo responsável por avaliar o quão boa é cada solução encontrada pelo algoritmo.

<img src="${fitness}" alt="Exemplo de como funciona o algoritmo." class="resumo__gif"  style="max-width: 100%; max-height: 400px;"/>
<p class="resumo__gif-label">Exemplo de como funciona o algoritmo realiza a busca</p>

<strong>Roulette Wheel Selection</strong>
É um método de seleção utilizado nos Algoritmos Genéticos em que a probabilidade de um indivíduo ser escolhido é proporcional ao seu fitness. Dessa forma, quanto maior for o fitness de um cromossomo, maior será sua chance de ser selecionado para reprodução.
O funcionamento pode ser comparado a uma roleta com várias posições. Considerando uma roleta com 100 posições, cada cromossomo ocupa uma quantidade de espaços proporcional ao seu valor de fitness. Durante a seleção, são gerados números aleatórios entre 1 e 100, e o indivíduo correspondente à posição sorteada é escolhido.
Em implementações simples, um mesmo cromossomo pode ser selecionado várias vezes. Quando isso acontece e o indivíduo reproduz com ele mesmo, os descendentes tendem a ser idênticos ao pai, reduzindo a diversidade genética da população.
Para evitar esse problema, utiliza-se a seleção sem reposição. Nesse método, após um cromossomo ser selecionado como pai, ele não pode ser escolhido novamente na mesma etapa de seleção, aumentando a diversidade genética dos descendentes.

<strong>Crossover</strong>
O Crossover é a principal etapa dos Algoritmos Genéticos. Nessa fase, dois indivíduos selecionados anteriormente são utilizados para gerar um novo descendente. O filho é criado combinando características dos dois pais, formando uma nova possível solução para o problema.
A escolha das características herdadas de cada pai ocorre de forma aleatória, permitindo que diferentes combinações sejam geradas ao longo das gerações.
Existem diferentes operadores de crossover utilizados nos Algoritmos Genéticos para combinar características dos pais e gerar novos descendentes.
Principais tipos:
— One-point crossover: utiliza um único ponto de corte no cromossomo. Após esse ponto, as partes finais dos pais são trocadas para gerar os filhos.
— Two-point crossover: utiliza dois pontos de corte. A região entre esses pontos é trocada entre os pais, permitindo combinações mais variadas.
— Uniform crossover: cada gene do descendente é escolhido aleatoriamente entre os genes dos dois pais, aumentando a diversidade genética.

<img src="${crossover2}" alt="Representação de um One-point crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um One-point crossover</p>
<img src="${crossover3}" alt="Representação de um Two-point crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um Two-point crossover</p>
<img src="${crossover1}" alt="Representação de um Uniform crossover" class="resumo__gif"/>
<p class="resumo__gif-label">Representação de um Uniform crossover</p>

<strong>Mutação</strong>
A mutação é uma etapa utilizada nos Algoritmos Genéticos para aumentar a diversidade genética da população. Quando os pais possuem cromossomos muito parecidos, ou até mesmo iguais, os descendentes gerados também tendem a ser semelhantes. Isso reduz a diversidade da população e pode fazer o algoritmo ficar preso em mínimos ou máximos locais.
Para evitar esse problema, são realizadas alterações aleatórias nos genes dos cromossomos, permitindo o surgimento de novas características e aumentando a variedade de soluções possíveis.
A frequência com que essas alterações ocorrem é definida pela taxa de mutação.
A taxa de mutação é o valor que define a frequência com que alterações aleatórias irão ocorrer nos genes dos cromossomos durante a etapa de mutação dos Algoritmos Genéticos.
Ela funciona como uma probabilidade. Por exemplo, uma taxa de mutação de 5% indica que cada gene possui 5% de chance de sofrer uma alteração aleatória.
O objetivo da taxa de mutação é aumentar a diversidade genética da população, evitando que todos os indivíduos fiquem muito parecidos e que o algoritmo fique preso em mínimos ou máximos locais.


<img src="${mutacao}" alt="Representação da realização de uma possível mutação no filho" class="resumo__gif"/>
<p class="resumo__gif-label">Representação da realização de uma possível mutação no filho</p>

<strong>Critério de parada</strong>
Os critérios de parada definem quando a execução de um Algoritmo Genético deve ser encerrada.
O cenário ideal é encontrar o máximo global, ou seja, a melhor solução possível para o problema. Contudo, nem sempre isso é possível, principalmente em espaços de busca muito grandes.
Por isso, outros critérios de parada podem ser utilizados durante a execução do algoritmo.
Principais critérios de parada:
— Encontrar o máximo global: situação ideal em que o algoritmo encontra a melhor solução possível
— Limite de tempo de execução: o algoritmo é encerrado após determinado tempo
— Limite do número de iterações(gerações): a execução para após atingir uma quantidade máxima de gerações
— Sucessivas populações com baixa diversidade: indica que os indivíduos estão muito parecidos e que o algoritmo pode ter convergido para uma solução local.

<strong>Elitismo</strong>
O elitismo é uma estratégia utilizada nos Algoritmos Genéticos para preservar os melhores indivíduos da população ao longo das gerações.
Após a geração de novos descendentes, é necessário decidir se os pais permanecerão ou serão removidos da população. Remover os pais pode causar a perda de características importantes de indivíduos bem adaptados. Por outro lado, manter muitos indivíduos antigos pode reduzir a diversidade genética da população.
O elitismo busca equilibrar esse processo, garantindo que os indivíduos mais aptos sejam preservados para a próxima geração.`,
  },

  {
    id: 27,
    provaId: 2,
    titulo: "Aplicações do Algoritmo Genético",
    conteudo:`Os Algoritmos Genéticos possuem aplicações em diversas áreas, principalmente em problemas de otimização e busca por melhores soluções.
Principais aplicações:
—  Processamento de Imagens: utilizados em tarefas como segmentação de imagens, auxiliando na identificação e separação de regiões importantes.
— Ciência Médica: ajudam na determinação da estrutura do DNA utilizando informações espectrométricas.
— Mercado Financeiro: utilizados para encontrar a melhor alocação de ativos em uma carteira de investimentos, buscando equilibrar risco e retorno.
— Machine Learning:
    • Ajuste de hiperparâmetros(tuning)
    • Definição da melhor arquitetura para redes neurais, como quantidade de neurônios, camadas ocultas, filtros e pooling
    • Seleção de atributos(feature selection)`,
  },

  {
    id: 28,
    provaId: 2,
    titulo: "Seleção de atributos(feature selection)",
    conteudo:` A seleção de atributos é utilizada para escolher as características mais relevantes de um conjunto de dados, reduzindo informações desnecessárias e melhorando o desempenho dos modelos de aprendizado de máquina.
Principais métodos:
— Filter: avalia estatisticamente cada atributo de forma independente do modelo de aprendizado. Utiliza métricas como correlação de Pearson e informação mútua para identificar os atributos mais relevantes.
— Embedded: a seleção de atributos ocorre durante o treinamento do próprio algoritmo de aprendizado. Alguns modelos, como Árvores de Decisão, conseguem identificar automaticamente quais atributos são mais importantes.
— Wrapper: realiza o treinamento do modelo várias vezes utilizando diferentes combinações de atributos e compara o desempenho obtido em cada caso para encontrar a melhor seleção.

<strong>Métodos de wrapper populares</strong>
O Forward Selection inicia com um modelo sem atributos. A cada etapa, o algoritmo adiciona a característica que proporciona a maior melhoria no desempenho do modelo. O processo continua até que não existam melhorias significativas ou até atingir um critério de parada.

<img src="${ForwardSelection}" alt="Exemplo da execução do  Forward Selection" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo da execução do  Forward Selection</p>

Já o Backward Selection funciona de forma oposta. Nesse método, o modelo começa utilizando todos os atributos disponíveis e, em cada etapa, remove a característica menos relevante. Após cada remoção, o modelo é treinado novamente para verificar se o desempenho continua adequado.
Em ambos os métodos, é necessário definir critérios de parada para evitar excesso de processamento e complexidade desnecessária.

<img src="${BackwardSelection}" alt="Exemplo da execução do algoritmo Backward Selection" class="resumo__gif"/>
<p class="resumo__gif-label">Exemplo da execução do algoritmo Backward Selection</p>`,
  }
];

export const provas = [
  {
    id: 1,
    titulo: "Prova 1",
    descricao: "lalala",
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