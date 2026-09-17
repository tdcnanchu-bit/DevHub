const COURSES = [
  {
    id: "logica",
    icon: "🧠",
    title: "Lógica de Programação",
    level: "Iniciante",
    description: "Aprenda a pensar como programador e resolver problemas.",
    lessons: [
      [
        "O que é programação",
        "Programar é transformar um problema em uma sequência de instruções que o computador consegue executar.",
        `// Entrada → processamento → saída
let nome = "Marcos";

console.log("Olá, " + nome);`,
        "Crie um programa que receba um nome e mostre uma mensagem de boas-vindas."
      ],
      [
        "Variáveis",
        "Variáveis armazenam valores que podem ser usados e modificados durante o programa.",
        `let idade = 16;
let nome = "Ana";
let aprovado = true;`,
        "Crie três variáveis: seu nome, sua idade e se você gosta de programação."
      ],
      [
        "Operadores",
        "Operadores permitem realizar cálculos e comparações.",
        `let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a > b);`,
        "Crie duas variáveis numéricas e mostre a soma, subtração e multiplicação."
      ],
      [
        "Condicionais",
        "Condicionais permitem que o programa escolha caminhos diferentes.",
        `let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
        "Faça um programa que verifique se uma pessoa pode entrar em uma área para maiores de 18 anos."
      ]
    ]
  },

  {
    id: "html",
    icon: "🌐",
    title: "HTML",
    level: "Iniciante",
    description: "Aprenda a criar a estrutura de páginas web.",
    lessons: [
      [
        "O que é HTML",
        "HTML é uma linguagem de marcação usada para estruturar páginas da web. Elementos como títulos, parágrafos, imagens e links são escritos com tags.",
        `<!DOCTYPE html>
<html>
<body>
  <h1>Olá, mundo!</h1>
  <p>Minha primeira página.</p>
</body>
</html>`,
        "Crie uma página com um título e um parágrafo sobre você."
      ],
      [
        "Títulos e parágrafos",
        "Use h1 até h6 para títulos e p para parágrafos. O h1 normalmente representa o título principal da página.",
        `<h1>Meu site</h1>
<h2>Sobre mim</h2>

<p>Eu estou aprendendo programação.</p>`,
        "Crie um título principal, um subtítulo e dois parágrafos."
      ],
      [
        "Links e imagens",
        "A tag a cria links e img exibe imagens. O atributo href indica o destino do link e src indica a imagem.",
        `<a href="https://example.com">
  Visitar site
</a>

<img
  src="imagem.jpg"
  alt="Descrição"
>`,
        "Crie um link e uma imagem com um texto alternativo."
      ],
      [
        "Listas",
        "Listas podem ser ordenadas com ol ou não ordenadas com ul. Cada item usa li.",
        `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
        "Faça uma lista com cinco tecnologias que você quer aprender."
      ]
    ]
  },

  {
    id: "css",
    icon: "🎨",
    title: "CSS",
    level: "Iniciante",
    description: "Aprenda a estilizar páginas e criar interfaces bonitas.",
    lessons: [
      [
        "O que é CSS",
        "CSS controla a aparência dos elementos HTML: cores, tamanhos, espaçamentos, bordas e muito mais.",
        `body {
  font-family: Arial;
  background: #f2f2f2;
}

h1 {
  color: purple;
}`,
        "Altere a cor de fundo e a cor de um título usando CSS."
      ],
      [
        "Seletores",
        "Seletores indicam quais elementos receberão estilos. Podemos selecionar tags, classes e IDs.",
        `p {
  color: blue;
}

.card {
  padding: 20px;
}

#titulo {
  font-size: 30px;
}`,
        "Crie uma classe chamada .botao e estilize um elemento com ela."
      ],
      [
        "Box Model",
        "Todo elemento possui conteúdo, padding, border e margin. Entender esse modelo ajuda a organizar layouts.",
        `.card {
  width: 250px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}`,
        "Crie um card com largura, padding, borda e margem."
      ],
      [
        "Flexbox",
        "Flexbox facilita o alinhamento e distribuição de elementos em uma linha ou coluna.",
        `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}`,
        "Crie três caixas e alinhe-as lado a lado usando Flexbox."
      ]
    ]
  },

  {
    id: "javascript",
    icon: "⚡",
    title: "JavaScript",
    level: "Intermediário",
    description: "Dê vida às páginas com lógica e interatividade.",
    lessons: [
      [
        "Introdução ao JavaScript",
        "JavaScript permite adicionar comportamento às páginas, como botões, formulários, cálculos e animações.",
        `const nome = "DevHub";

console.log(
  "Bem-vindo ao " + nome
);`,
        "Crie uma variável com seu nome e mostre uma mensagem no console."
      ],
      [
        "Tipos e variáveis",
        "Os principais tipos incluem string, number, boolean, null e undefined. Use const quando o valor não muda e let quando pode mudar.",
        `const nome = "Ana";
let idade = 16;
const estudante = true;`,
        "Crie variáveis para nome, idade e cidade."
      ],
      [
        "Funções",
        "Funções agrupam instruções que podem ser reutilizadas.",
        `function somar(a, b) {
  return a + b;
}

console.log(
  somar(5, 3)
);`,
        "Crie uma função que receba dois números e retorne a multiplicação deles."
      ],
      [
        "DOM e eventos",
        "O DOM permite acessar elementos HTML pelo JavaScript. Eventos respondem a ações do usuário.",
        `const botao =
  document.querySelector("button");

botao.addEventListener(
  "click",
  () => {
    alert("Clicou!");
  }
);`,
        "Crie um botão que altere o texto de um parágrafo quando for clicado."
      ]
    ]
  },

  {
    id: "python",
    icon: "🐍",
    title: "Python",
    level: "Iniciante",
    description: "Comece a programar com uma linguagem simples e poderosa.",
    lessons: [
      [
        "Primeiro programa",
        "Python possui uma sintaxe simples. A função print mostra informações na tela.",
        `nome = "DevHub"

print("Olá", nome)`,
        "Mostre seu nome usando print."
      ],
      [
        "Variáveis",
        "Variáveis podem guardar textos, números e valores booleanos.",
        `nome = "Marcos"
idade = 16
estudante = True`,
        "Crie três variáveis para representar uma pessoa."
      ],
      [
        "Condicionais",
        "Use if, elif e else para executar blocos dependendo de condições.",
        `idade = 18

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`,
        "Faça uma verificação de aprovação usando uma nota."
      ],
      [
        "Listas e repetição",
        "Listas armazenam vários valores. O for pode percorrer cada item.",
        `linguagens = [
    "HTML",
    "CSS",
    "Python"
]

for linguagem in linguagens:
    print(linguagem)`,
        "Crie uma lista com cinco linguagens e percorra-a com for."
      ]
    ]
  },

  {
    id: "git",
    icon: "🔧",
    title: "Git e GitHub",
    level: "Iniciante",
    description: "Aprenda a versionar projetos e trabalhar com repositórios.",
    lessons: [
      [
        "O que é Git",
        "Git é um sistema de controle de versão. Ele registra alterações no projeto e permite voltar a versões anteriores.",
        `git init
git status
git add .
git commit -m "Primeiro commit"`,
        "Explique com suas palavras por que o controle de versão é útil."
      ],
      [
        "Criando um repositório",
        "Um repositório guarda os arquivos e o histórico do projeto. No GitHub, ele pode ficar online.",
        `git init
git add .
git commit -m "Projeto inicial"`,
        "Crie um repositório de teste e faça o primeiro commit."
      ],
      [
        "Push e Pull",
        "Push envia alterações para o repositório remoto. Pull traz alterações do remoto para sua máquina.",
        `git add .
git commit -m "Atualização"
git push`,
        "Descreva a diferença entre push e pull."
      ],
      [
        "Branches",
        "Branches permitem trabalhar em mudanças sem alterar diretamente a linha principal.",
        `git branch nova-funcao
git switch nova-funcao

git add .
git commit -m "Nova função"`,
        "Crie uma branch para uma nova funcionalidade do seu projeto."
      ]
    ]
  },

  {
    id: "sql",
    icon: "🗄️",
    title: "SQL",
    level: "Intermediário",
    description: "Aprenda a consultar e organizar dados em bancos relacionais.",
    lessons: [
      [
        "O que é SQL",
        "SQL é usada para consultar e manipular dados em bancos relacionais.",
        `SELECT *
FROM usuarios;`,
        "Escreva uma consulta que mostre todos os produtos."
      ],
      [
        "SELECT e WHERE",
        "SELECT escolhe as colunas e WHERE filtra os registros.",
        `SELECT nome, idade
FROM usuarios
WHERE idade >= 18;`,
        "Faça uma consulta que mostre produtos com preço maior que 50."
      ],
      [
        "INSERT e UPDATE",
        "INSERT adiciona registros e UPDATE altera dados existentes.",
        `INSERT INTO usuarios
(nome, idade)
VALUES
('Ana', 18);

UPDATE usuarios
SET idade = 19
WHERE nome = 'Ana';`,
        "Escreva um INSERT para cadastrar um produto."
      ],
      [
        "ORDER BY e LIMIT",
        "ORDER BY organiza resultados e LIMIT restringe a quantidade retornada.",
        `SELECT *
FROM produtos
ORDER BY preco DESC
LIMIT 5;`,
        "Mostre os cinco produtos mais caros."
      ]
    ]
  },

  {
    id: "java",
    icon: "☕",
    title: "Java",
    level: "Intermediário",
    description: "Conheça os fundamentos da programação em Java.",
    lessons: [
      [
        "Primeiro programa",
        "Java é uma linguagem fortemente tipada. O programa começa pelo método main.",
        `public class Main {

  public static void main(
    String[] args
  ) {

    System.out.println(
      "Olá, mundo!"
    );
  }
}`,
        "Identifique qual linha exibe a mensagem na tela."
      ],
      [
        "Variáveis e tipos",
        "Java exige que o tipo da variável seja declarado.",
        `int idade = 16;

String nome = "Ana";

double altura = 1.70;`,
        "Crie uma variável inteira, uma String e uma variável decimal."
      ],
      [
        "If e else",
        "Condicionais permitem escolher entre caminhos diferentes.",
        `int nota = 8;

if (nota >= 7) {

  System.out.println(
    "Aprovado"
  );

} else {

  System.out.println(
    "Reprovado"
  );
}`,
        "Faça uma condição para verificar se uma nota é maior ou igual a 6."
      ],
      [
        "Laços de repetição",
        "for e while permitem repetir instruções.",
        `for (
  int i = 1;
  i <= 5;
  i++
) {

  System.out.println(i);

}`,
        "Faça um for que mostre os números de 1 a 10."
      ]
    ]
  },

  {
    id: "php",
    icon: "🐘",
    title: "PHP",
    level: "Intermediário",
    description: "Aprenda os fundamentos do PHP para aplicações web.",
    lessons: [
      [
        "Introdução ao PHP",
        "PHP é uma linguagem muito usada no desenvolvimento de aplicações web no servidor.",
        `<?php

echo "Olá, mundo!";

?>`,
        "Crie um código PHP que mostre seu nome."
      ],
      [
        "Variáveis",
        "Variáveis PHP começam com o símbolo $.",
        `$nome = "Ana";
$idade = 18;

echo $nome;`,
        "Crie variáveis para nome e idade."
      ],
      [
        "Condicionais",
        "PHP utiliza estruturas como if e else para tomar decisões.",
        `$idade = 18;

if ($idade >= 18) {

    echo "Maior";

} else {

    echo "Menor";

}`,
        "Crie uma condição que verifique se uma pessoa foi aprovada."
      ],
      [
        "Arrays",
        "Arrays armazenam vários valores em uma única variável.",
        `$linguagens = [
    "HTML",
    "CSS",
    "PHP"
];

echo $linguagens[0];`,
        "Crie um array com três linguagens."
      ]
    ]
  },

  {
    id: "react",
    icon: "⚛️",
    title: "React",
    level: "Avançado",
    description: "Conheça componentes e conceitos fundamentais do React.",
    lessons: [
      [
        "O que é React",
        "React é uma biblioteca JavaScript para construir interfaces usando componentes reutilizáveis.",
        `function App() {

  return (
    <h1>
      Olá React!
    </h1>
  );

}`,
        "Explique o que é um componente com suas palavras."
      ],
      [
        "Componentes",
        "Componentes são partes independentes da interface que podem ser reutilizadas.",
        `function Botao() {

  return (
    <button>
      Clique
    </button>
  );

}`,
        "Imagine três componentes que poderiam existir em uma loja online."
      ],
      [
        "Props",
        "Props permitem passar informações de um componente para outro.",
        `function Saudacao({ nome }) {

  return (
    <h2>
      Olá, {nome}!
    </h2>
  );

}`,
        "Crie um exemplo de componente que receba uma prop."
      ],
      [
        "Estado",
        "State guarda informações que podem mudar durante o uso da interface.",
        `const [
  contador,
  setContador
] = useState(0);

setContador(
  contador + 1
);`,
        "Dê um exemplo de informação que poderia ser armazenada no estado."
      ]
    ]
  },

  {
    id: "node",
    icon: "🟢",
    title: "Node.js",
    level: "Avançado",
    description: "Aprenda conceitos iniciais de JavaScript no servidor.",
    lessons: [
      [
        "O que é Node.js",
        "Node.js permite executar JavaScript fora do navegador e criar servidores e ferramentas.",
        `console.log(
  "Node funcionando!"
);`,
        "Explique a diferença entre JavaScript no navegador e Node.js."
      ],
      [
        "NPM",
        "NPM é o gerenciador de pacotes mais comum no ecossistema Node.js.",
        `npm init -y

npm install express`,
        "Para que serve instalar um pacote?"
      ],
      [
        "Servidor básico",
        "Com bibliotecas como Express é possível criar rotas e servidores HTTP.",
        `const express =
  require("express");

const app = express();

app.get(
  "/",
  (req, res) => {
    res.send("Olá!");
  }
);`,
        "O que é uma rota HTTP?"
      ],
      [
        "APIs",
        "APIs permitem que sistemas troquem dados. Uma API web normalmente usa HTTP e formatos como JSON.",
        `GET /api/produtos

POST /api/produtos`,
        "Dê um exemplo de informação que uma API de loja poderia fornecer."
      ]
    ]
  }
];


const CHALLENGES = [

  {
    id: "c1",
    icon: "🌐",
    title: "Página de apresentação",
    desc: "Crie uma página HTML com título, parágrafo, imagem e link.",
    xp: 30
  },

  {
    id: "c2",
    icon: "🎨",
    title: "Card com CSS",
    desc: "Crie um card centralizado usando Flexbox e estilize sua aparência.",
    xp: 40
  },

  {
    id: "c3",
    icon: "⚡",
    title: "Contador JavaScript",
    desc: "Crie botões para aumentar e diminuir um número na tela.",
    xp: 50
  },

  {
    id: "c4",
    icon: "🐍",
    title: "Lista em Python",
    desc: "Crie uma lista de linguagens e mostre cada item usando um laço.",
    xp: 40
  },

  {
    id: "c5",
    icon: "🗄️",
    title: "Consulta SQL",
    desc: "Escreva uma consulta que filtre e organize produtos por preço.",
    xp: 50
  },

  {
    id: "c6",
    icon: "🔧",
    title: "Primeiro commit",
    desc: "Pratique o fluxo de criar alterações, adicionar arquivos e fazer commit.",
    xp: 30
  }

];


const ACHIEVEMENTS = [

  [
    "🌱",
    "Primeiro passo",
    "Conclua sua primeira aula.",
    s => s.completedLessons >= 1
  ],

  [
    "📚",
    "Estudante",
    "Conclua 5 aulas.",
    s => s.completedLessons >= 5
  ],

  [
    "🔥",
    "Constante",
    "Mantenha uma sequência de 3 dias.",
    s => s.streak >= 3
  ],

  [
    "🏆",
    "Curso completo",
    "Finalize um curso.",
    s => s.completedCourses >= 1
  ],

  [
    "⭐",
    "100 XP",
    "Alcance 100 XP.",
    s => s.xp >= 100
  ],

  [
    "🚀",
    "500 XP",
    "Alcance 500 XP.",
    s => s.xp >= 500
  ]

];


let state = loadState();

let currentCourseId = null;

let currentLessonIndex = 0;

let currentTab = "html";

let toastTimer;


/* ESTADO */

function defaultState() {

  return {

    logged: false,

    name: "",

    xp: 0,

    streak: 0,

    lastStudyDate: "",

    completed: {},

    challenges: {},

    notes: [],

    theme: "light",

    code: {

      html:
        `<h1>Olá, DevHub!</h1>
<p>Comece a programar.</p>`,

      css:
        `body {
  font-family: Arial;
  text-align: center;
  padding: 40px;
}`,

      js:
        `console.log("DevHub funcionando!");`

    }

  };

}


function loadState() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem("devhub_state") || "{}"
      );

    return {
      ...defaultState(),
      ...saved
    };

  } catch {

    return defaultState();

  }

}


function saveState() {

  localStorage.setItem(
    "devhub_state",
    JSON.stringify(state)
  );

}


function courseById(id) {

  return COURSES.find(
    course => course.id === id
  );

}


function completedLessons(course) {

  return state.completed[course.id] || [];

}


function coursePercent(course) {

  return Math.round(
    completedLessons(course).length /
    course.lessons.length *
    100
  );

}


function totalLessons() {

  return Object.values(
    state.completed
  ).reduce(
    (total, array) => total + array.length,
    0
  );

}


function completedCourses() {

  return COURSES.filter(
    course => coursePercent(course) === 100
  ).length;

}


function level() {

  return Math.floor(
    state.xp / 100
  ) + 1;

}


function levelXP() {

  return state.xp % 100;

}


function initials(name) {

  return (
    name ||
    "D"
  )
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();

}


function escapeHTML(text) {

  return String(text).replace(
    /[&<>"']/g,
    character => {

      const map = {

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      };

      return map[character];

    }
  );

}


/* TOAST */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(
      () => toast.classList.remove("show"),
      2500
    );

}


/* LOGIN */

function login(name) {

  state.logged = true;

  state.name = name.trim();

  saveState();

  document
    .getElementById("loginScreen")
    .classList.add("hidden");

  document
    .getElementById("app")
    .classList.remove("hidden");

  applyTheme();

  updateUI();

  renderCourses();

  renderContinue();

  renderChallenges();

  renderNotes();

  renderAchievements();

  initLab();

}


function logout() {

  state.logged = false;

  saveState();

  location.reload();

}


/* XP */

function updateStreak() {

  const today =
    new Date()
      .toISOString()
      .slice(0, 10);

  if (
    state.lastStudyDate !== today
  ) {

    const oldDate =
      state.lastStudyDate
        ? new Date(state.lastStudyDate)
        : null;

    const now =
      new Date(today);

    if (oldDate) {

      const diff =
        Math.round(
          (now - oldDate) /
          86400000
        );

      state.streak =
        diff === 1
          ? state.streak + 1
          : 1;

    } else {

      state.streak = 1;

    }

    state.lastStudyDate = today;

    saveState();

  }

}


function addXP(amount) {

  state.xp += amount;

  updateStreak();

  saveState();

  updateUI();

  showToast(
    `+${amount} XP! ⭐`
  );

}


/* AULAS */

function markLesson(
  courseId,
  index
) {

  const array =
    state.completed[courseId] || [];

  if (!array.includes(index)) {

    array.push(index);

    array.sort(
      (a, b) => a - b
    );

    state.completed[courseId] =
      array;

    saveState();

    addXP(10);

    const course =
      courseById(courseId);

    if (
      coursePercent(course) === 100
    ) {

      showToast(
        "Curso concluído! 🏆"
      );

    }

  } else {

    showToast(
      "Essa aula já foi concluída."
    );

  }

  renderLesson();

  renderCourses();

  renderContinue();

  renderAchievements();

}


function openCourse(
  id,
  index = 0
) {

  currentCourseId = id;

  currentLessonIndex = index;

  showPage("lesson");

  renderLesson();

}


function renderCourses(filter = "") {

  const grid =
    document.getElementById(
      "coursesGrid"
    );

  const list =
    COURSES.filter(course =>
      (
        course.title +
        " " +
        course.description
      )
        .toLowerCase()
        .includes(
          filter.toLowerCase()
        )
    );

  grid.innerHTML =
    list
      .map(courseCard)
      .join("") ||
    `
      <p class="muted">
        Nenhum curso encontrado.
      </p>
    `;

}


function courseCard(course) {

  const percent =
    coursePercent(course);

  const done =
    percent === 100;

  const completed =
    completedLessons(course);

  let nextLesson = 0;

  if (!done) {

    nextLesson =
      Math.max(
        0,
        (completed.at(-1) ?? -1) + 1
      );

  }

  return `

    <article class="course-card">

      <div class="course-icon">
        ${course.icon}
      </div>

      <div>
        <span class="level-tag">
          ${escapeHTML(course.level)}
        </span>
      </div>

      <h3>
        ${escapeHTML(course.title)}
      </h3>

      <p>
        ${escapeHTML(course.description)}
      </p>

      <div class="course-meta">

        <span>
          ${course.lessons.length} aulas
        </span>

        <strong>
          ${percent}%
        </strong>

      </div>

      <div class="progress">

        <span
          style="width:${percent}%"
        ></span>

      </div>

      <button
        class="primary"
        onclick="
          openCourse(
            '${course.id}',
            ${nextLesson}
          )
        "
      >
        ${
          done
            ? "Revisar curso"
            : "Estudar curso →"
        }
      </button>

    </article>

  `;

}


function renderContinue() {

  const grid =
    document.getElementById(
      "continueGrid"
    );

  const active =
    COURSES.filter(
      course =>
        coursePercent(course) > 0 &&
        coursePercent(course) < 100
    );

  const list =
    (
      active.length
        ? active
        : COURSES.slice(0, 3)
    ).slice(0, 3);

  grid.innerHTML =
    list
      .map(courseCard)
      .join("");

}


function renderLesson() {

  const course =
    courseById(
      currentCourseId
    );

  if (!course) return;

  const completed =
    completedLessons(course);

  const lesson =
    course.lessons[
      currentLessonIndex
    ];

  document.getElementById(
    "lessonCourseLabel"
  ).textContent =
    course.title.toUpperCase();

  document.getElementById(
    "lessonCourseTitle"
  ).textContent =
    course.title;

  document.getElementById(
    "lessonNumber"
  ).textContent =
    `Aula ${
      currentLessonIndex + 1
    } de ${
      course.lessons.length
    }`;

  document.getElementById(
    "lessonXP"
  ).textContent =
    "+10 XP";

  document.getElementById(
    "lessonTitle"
  ).textContent =
    lesson[0];

  document.getElementById(
    "courseProgressBar"
  ).style.width =
    coursePercent(course) + "%";

  document.getElementById(
    "courseProgressText"
  ).textContent =
    coursePercent(course) +
    "% concluído";


  document.getElementById(
    "lessonList"
  ).innerHTML =
    course.lessons
      .map(
        (lessonData, index) => {

          const done =
            completed.includes(index);

          return `

            <button
              class="
                lesson-item
                ${
                  index === currentLessonIndex
                    ? "active"
                    : ""
                }
                ${
                  done
                    ? "done"
                    : ""
                }
              "
              onclick="
                currentLessonIndex=${index};
                renderLesson();
              "
            >

              <small>
                ${
                  done
                    ? "✓ Concluída"
                    : `Aula ${index + 1}`
                }
              </small>

              <strong>
                ${escapeHTML(
                  lessonData[0]
                )}
              </strong>

            </button>

          `;

        }
      )
      .join("");


  document.getElementById(
    "lessonBody"
  ).innerHTML = `

    <p>
      ${escapeHTML(lesson[1])}
    </p>

    <h3>
      💻 Exemplo
    </h3>

    <pre class="code-block">${escapeHTML(
      lesson[2]
    )}</pre>

    <div class="lesson-exercise">

      <strong>
        🧠 Exercício
      </strong>

      <p>
        ${escapeHTML(lesson[3])}
      </p>

    </div>

  `;


  const done =
    completed.includes(
      currentLessonIndex
    );

  const completeButton =
    document.getElementById(
      "completeLessonBtn"
    );

  completeButton.textContent =
    done
      ? "✓ Aula concluída"
      : "Concluir aula +10 XP";

  completeButton.disabled =
    done;


  document.getElementById(
    "prevLessonBtn"
  ).disabled =
    currentLessonIndex === 0;


  document.getElementById(
    "nextLessonBtn"
  ).textContent =
    currentLessonIndex ===
    course.lessons.length - 1
      ? "Voltar ao curso"
      : "Próxima →";

}


function nextLesson() {

  const course =
    courseById(
      currentCourseId
    );

  if (
    currentLessonIndex <
    course.lessons.length - 1
  ) {

    currentLessonIndex++;

    renderLesson();

  } else {

    showPage("courses");

    renderCourses();

  }

}


function prevLesson() {

  if (
    currentLessonIndex > 0
  ) {

    currentLessonIndex--;

    renderLesson();

  }

}


/* NAVEGAÇÃO */

function showPage(page) {

  document
    .querySelectorAll(".page")
    .forEach(
      element =>
        element.classList.remove(
          "active"
        )
    );

  const pageElement =
    document.getElementById(
      page + "Page"
    );

  if (pageElement) {

    pageElement.classList.add(
      "active"
    );

  }


  document
    .querySelectorAll(
      ".nav-btn[data-page]"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });


  const names = {

    dashboard: [
      "Início",
      "Continue seus estudos."
    ],

    courses: [
      "Cursos",
      "Aprenda com aulas passo a passo."
    ],

    lesson: [
      "Aulas",
      "Estude e acompanhe seu progresso."
    ],

    lab: [
      "Laboratório",
      "Pratique seu código."
    ],

    challenges: [
      "Desafios",
      "Coloque seus conhecimentos em prática."
    ],

    notes: [
      "Anotações",
      "Organize seus estudos."
    ],

    profile: [
      "Perfil",
      "Seu progresso no DevHub."
    ]

  };


  document.getElementById(
    "pageTitle"
  ).textContent =
    names[page]?.[0] ||
    "DevHub";


  document.getElementById(
    "pageSubtitle"
  ).textContent =
    names[page]?.[1] ||
    "";


  document
    .querySelector(".sidebar")
    .classList.remove(
      "open"
    );


  if (page === "courses") {

    renderCourses();

  }


  if (page === "dashboard") {

    renderContinue();

  }

}


/* INTERFACE */

function updateUI() {

  const ini =
    initials(state.name);

  const currentLevel =
    level();

  const xp =
    levelXP();

  const lessons =
    totalLessons();

  const courses =
    completedCourses();


  [
    "avatarMini",
    "avatarTop",
    "profileAvatar"
  ].forEach(id => {

    const element =
      document.getElementById(id);

    if (element) {

      element.textContent =
        ini;

    }

  });


  document.getElementById(
    "userNameSide"
  ).textContent =
    state.name ||
    "Dev";


  document.getElementById(
    "userLevelSide"
  ).textContent =
    `Nível ${currentLevel}`;


  document.getElementById(
    "userNameDash"
  ).textContent =
    state.name ||
    "Dev";


  document.getElementById(
    "xpTop"
  ).textContent =
    state.xp;


  document.getElementById(
    "xpStat"
  ).textContent =
    state.xp;


  document.getElementById(
    "lessonsStat"
  ).textContent =
    lessons;


  document.getElementById(
    "streakStat"
  ).textContent =
    `${state.streak} dias`;


  document.getElementById(
    "coursesStat"
  ).textContent =
    courses;


  document.getElementById(
    "levelLabel"
  ).textContent =
    `Nível ${currentLevel}`;


  document.getElementById(
    "levelProgressText"
  ).textContent =
    `${xp} / 100 XP`;


  document.getElementById(
    "levelProgress"
  ).style.width =
    xp + "%";


  document.getElementById(
    "profileName"
  ).textContent =
    state.name ||
    "Dev";


  document.getElementById(
    "profileLevel"
  ).textContent =
    currentLevel;


  document.getElementById(
    "profileXP"
  ).textContent =
    state.xp;


  document.getElementById(
    "profileNameInput"
  ).value =
    state.name ||
    "";

}


/* DESAFIOS */

function renderChallenges() {

  document.getElementById(
    "challengeGrid"
  ).innerHTML =

    CHALLENGES
      .map(challenge => {

        const done =
          state.challenges[
            challenge.id
          ];

        return `

          <article
            class="
              challenge-card
              ${done ? "done" : ""}
            "
          >

            <div class="course-icon">
              ${challenge.icon}
            </div>

            <h3>
              ${escapeHTML(
                challenge.title
              )}
            </h3>

            <p>
              ${escapeHTML(
                challenge.desc
              )}
            </p>

            <div class="xp">
              ⭐ +${challenge.xp} XP
            </div>

            <button
              class="
                ${done
                  ? "secondary"
                  : "primary"}
              "
              ${
                done
                  ? "disabled"
                  : ""
              }
              onclick="
                completeChallenge(
                  '${challenge.id}'
                )
              "
            >
              ${
                done
                  ? "✓ Concluído"
                  : "Concluir desafio"
              }
            </button>

          </article>

        `;

      })
      .join("");

}


function completeChallenge(id) {

  const challenge =
    CHALLENGES.find(
      item => item.id === id
    );

  if (
    !challenge ||
    state.challenges[id]
  ) {

    return;

  }


  state.challenges[id] = true;

  saveState();

  addXP(
    challenge.xp
  );

  renderChallenges();

  renderAchievements();

}


/* ANOTAÇÕES */

function renderNotes() {

  const list =
    document.getElementById(
      "notesList"
    );


  if (!state.notes.length) {

    list.innerHTML = `
      <p class="muted">
        Nenhuma anotação ainda.
      </p>
    `;

    return;

  }


  list.innerHTML =
    state.notes
      .map(
        (note, index) => `

          <article class="note-card">

            <h3>
              ${escapeHTML(
                note.title ||
                "Sem título"
              )}
            </h3>

            <p>
              ${escapeHTML(
                note.text
              )}
            </p>

            <div class="note-actions">

              <button
                class="delete-btn"
                onclick="
                  deleteNote(${index})
                "
              >
                Excluir
              </button>

            </div>

          </article>

        `
      )
      .join("");

}


function saveNote() {

  const title =
    document.getElementById(
      "noteTitle"
    ).value.trim();

  const text =
    document.getElementById(
      "noteText"
    ).value.trim();


  if (!text) {

    showToast(
      "Escreva uma anotação primeiro."
    );

    return;

  }


  state.notes.unshift({

    title,

    text,

    date:
      new Date()
        .toLocaleDateString(
          "pt-BR"
        )

  });


  saveState();


  document.getElementById(
    "noteTitle"
  ).value = "";


  document.getElementById(
    "noteText"
  ).value = "";


  renderNotes();


  showToast(
    "Anotação salva! 📝"
  );

}


function deleteNote(index) {

  state.notes.splice(
    index,
    1
  );

  saveState();

  renderNotes();

  showToast(
    "Anotação excluída."
  );

}


/* CONQUISTAS */

function renderAchievements() {

  const fakeState = {

    completedLessons:
      totalLessons(),

    streak:
      state.streak,

    completedCourses:
      completedCourses(),

    xp:
      state.xp

  };


  document.getElementById(
    "achievementList"
  ).innerHTML =

    ACHIEVEMENTS
      .map(
        achievement => {

          const unlocked =
            achievement[2](
              fakeState
            );

          return `

            <div
              class="
                achievement
                ${
                  unlocked
                    ? ""
                    : "locked"
                }
              "
            >

              <div class="achievement-icon">
                ${achievement[0]}
              </div>

              <div>

                <strong>
                  ${achievement[1]}
                </strong>

                <small>
                  ${
                    unlocked
                      ? "Conquistada!"
                      : "Ainda bloqueada"
                  }
                </small>

              </div>

            </div>

          `;

        }
      )
      .join("");

}


/* TEMA */

function applyTheme() {

  document.body.classList.toggle(
    "dark",
    state.theme === "dark"
  );


  document.getElementById(
    "themeBtn"
  ).innerHTML =

    state.theme === "dark"

      ? "☀️ <span>Tema claro</span>"

      : "🌙 <span>Tema escuro</span>";

}


/* LABORATÓRIO */

function runCode() {

  const html =
    document.getElementById(
      "htmlCode"
    ).value;

  const css =
    document.getElementById(
      "cssCode"
    ).value;

  const js =
    document.getElementById(
      "jsCode"
    ).value;


  const documentCode = `

    <!doctype html>

    <html>

      <head>

        <style>
          ${css}
        </style>

      </head>

      <body>

        ${html}

        <script>

          try {

            ${js}

          } catch (error) {

            document.body.insertAdjacentHTML(
              "beforeend",
              "<pre style='color:red'>" +
              error.message +
              "</pre>"
            );

          }

        <\/script>

      </body>

    </html>

  `;


  document.getElementById(
    "preview"
  ).srcdoc =
    documentCode;

}


function saveCode() {

  state.code = {

    html:
      document.getElementById(
        "htmlCode"
      ).value,

    css:
      document.getElementById(
        "cssCode"
      ).value,

    js:
      document.getElementById(
        "jsCode"
      ).value

  };


  saveState();

  showToast(
    "Código salvo! 💾"
  );

}


function clearCode() {

  if (
    !confirm(
      "Limpar todo o código?"
    )
  ) {

    return;

  }


  document.getElementById(
    "htmlCode"
  ).value = "";


  document.getElementById(
    "cssCode"
  ).value = "";


  document.getElementById(
    "jsCode"
  ).value = "";


  runCode();

}


function initLab() {

  document.getElementById(
    "htmlCode"
  ).value =
    state.code.html;


  document.getElementById(
    "cssCode"
  ).value =
    state.code.css;


  document.getElementById(
    "jsCode"
  ).value =
    state.code.js;


  runCode();

}


/* INICIALIZAÇÃO */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.getElementById(
      "loginForm"
    ).addEventListener(
      "submit",
      event => {

        event.preventDefault();

        login(
          document.getElementById(
            "loginName"
          ).value
        );

      }
    );


    document
      .querySelectorAll(
        ".nav-btn[data-page]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () =>
            showPage(
              button.dataset.page
            )
        );

      });


    document
      .querySelectorAll(
        "[data-page-jump]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () =>
            showPage(
              button.dataset.pageJump
            )
        );

      });


    document.getElementById(
      "logoutBtn"
    ).addEventListener(
      "click",
      logout
    );


    document.getElementById(
      "themeBtn"
    ).addEventListener(
      "click",
      () => {

        state.theme =
          state.theme === "dark"
            ? "light"
            : "dark";

        saveState();

        applyTheme();

      }
    );


    document.getElementById(
      "mobileMenuBtn"
    ).addEventListener(
      "click",
      () => {

        document
          .querySelector(".sidebar")
          .classList.toggle(
            "open"
          );

      }
    );


    document.getElementById(
      "courseSearch"
    ).addEventListener(
      "input",
      event =>
        renderCourses(
          event.target.value
        )
    );


    document.getElementById(
      "backCoursesBtn"
    ).addEventListener(
      "click",
      () =>
        showPage("courses")
    );


    document.getElementById(
      "completeLessonBtn"
    ).addEventListener(
      "click",
      () =>
        markLesson(
          currentCourseId,
          currentLessonIndex
        )
    );


    document.getElementById(
      "nextLessonBtn"
    ).addEventListener(
      "click",
      nextLesson
    );


    document.getElementById(
      "prevLessonBtn"
    ).addEventListener(
      "click",
      prevLesson
    );


    document.getElementById(
      "saveNoteBtn"
    ).addEventListener(
      "click",
      saveNote
    );


    document.getElementById(
      "saveProfileBtn"
    ).addEventListener(
      "click",
      () => {

        const name =
          document.getElementById(
            "profileNameInput"
          ).value.trim();


        if (!name) {

          showToast(
            "Digite um nome."
          );

          return;

        }


        state.name = name;

        saveState();

        updateUI();

        showToast(
          "Perfil atualizado! 👤"
        );

      }
    );


    document.getElementById(
      "runCodeBtn"
    ).addEventListener(
      "click",
      runCode
    );


    document.getElementById(
      "saveCodeBtn"
    ).addEventListener(
      "click",
      saveCode
    );


    document.getElementById(
      "clearCodeBtn"
    ).addEventListener(
      "click",
      clearCode
    );


    document
      .querySelectorAll(".tab")
      .forEach(tab => {

        tab.addEventListener(
          "click",
          () => {

            currentTab =
              tab.dataset.tab;


            document
              .querySelectorAll(".tab")
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );


            tab.classList.add(
              "active"
            );


            [
              "html",
              "css",
              "js"
            ].forEach(type => {

              document
                .getElementById(
                  type + "Code"
                )
                .classList.toggle(
                  "hidden",
                  type !== currentTab
                );

            });

          }
        );

      });


    if (state.logged) {

      document
        .getElementById(
          "loginScreen"
        )
        .classList.add(
          "hidden"
        );


      document
        .getElementById(
          "app"
        )
        .classList.remove(
          "hidden"
        );


      applyTheme();

      updateUI();

      renderCourses();

      renderContinue();

      renderChallenges();

      renderNotes();

      renderAchievements();

      initLab();

    }

  }
);