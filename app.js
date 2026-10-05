/* =====================================================
   DEVHUB 4.0
   Sem IA / Sem servidor
   Cursos + Aulas + Desafios + XP + Projetos
===================================================== */


/* =====================================================
   CURSOS
===================================================== */

const COURSES = [

    {
        id: "logica",
        title: "Lógica de Programação",
        icon: "🧠",
        description: "Aprenda os fundamentos para criar algoritmos.",
        lessons: [
            {
                title: "O que é programação?",
                text: "Programar é transformar um problema em uma sequência de instruções que o computador pode executar.",
                code:
`// Algoritmo simples

1. Abrir o navegador
2. Digitar um endereço
3. Pressionar Enter
4. Acessar o site`,
                exercise: "Crie um algoritmo com 4 passos para preparar um sanduíche."
            },
            {
                title: "Variáveis",
                text: "Variáveis armazenam informações que podem ser utilizadas durante a execução de um programa.",
                code:
`let nome = "Dev";
let idade = 18;

console.log(nome);
console.log(idade);`,
                exercise: "Crie variáveis para nome, idade e cidade."
            },
            {
                title: "Tipos de dados",
                text: "Programas trabalham com diferentes tipos de dados, como texto, números e valores booleanos.",
                code:
`let nome = "Dev";
let idade = 18;
let estudando = true;`,
                exercise: "Crie três variáveis usando texto, número e booleano."
            },
            {
                title: "Condicionais",
                text: "Condicionais permitem executar ações diferentes dependendo de uma condição.",
                code:
`let idade = 18;

if (idade >= 18) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}`,
                exercise: "Crie uma condição que verifique se uma nota é maior ou igual a 7."
            },
            {
                title: "Repetições",
                text: "Loops permitem executar o mesmo bloco de código várias vezes.",
                code:
`for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
                exercise: "Faça um loop que mostre os números de 1 até 10."
            },
            {
                title: "Funções",
                text: "Funções agrupam instruções que podem ser reutilizadas.",
                code:
`function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));`,
                exercise: "Crie uma função que multiplique dois números."
            },
            {
                title: "Arrays",
                text: "Arrays armazenam vários valores em uma única estrutura.",
                code:
`const frutas = [
    "Maçã",
    "Banana",
    "Laranja"
];

console.log(frutas[0]);`,
                exercise: "Crie um array com cinco linguagens de programação."
            },
            {
                title: "Objetos",
                text: "Objetos agrupam informações relacionadas.",
                code:
`const usuario = {
    nome: "Ana",
    idade: 20,
    ativo: true
};

console.log(usuario.nome);`,
                exercise: "Crie um objeto representando um produto."
            },
            {
                title: "Algoritmos",
                text: "Algoritmos organizam passos para resolver problemas de forma lógica.",
                code:
`const notas = [8, 7, 9];

const media =
    (notas[0] + notas[1] + notas[2]) / 3;

console.log(media);`,
                exercise: "Crie um algoritmo que calcule a média de três notas."
            },
            {
                title: "Mini projeto de lógica",
                text: "Agora combine variáveis, condições e funções em uma pequena aplicação.",
                code:
`function verificarNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    }

    return "Estude mais";
}

console.log(verificarNota(8));`,
                exercise: "Crie um pequeno sistema que receba uma nota e mostre o resultado."
            }
        ]
    },


    {
        id: "html",
        title: "HTML",
        icon: "🌐",
        description: "Aprenda a estruturar páginas web.",
        lessons: [
            {
                title: "Primeira página",
                text: "HTML define a estrutura e o conteúdo de uma página.",
                code:
`<!DOCTYPE html>
<html>
<body>

<h1>Olá DevHub!</h1>
<p>Minha primeira página.</p>

</body>
</html>`,
                exercise: "Crie uma página com seu nome e uma descrição."
            },
            {
                title: "Títulos e textos",
                text: "Use headings e parágrafos para organizar o conteúdo.",
                code:
`<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p>Um parágrafo.</p>`,
                exercise: "Crie uma página com um título e três parágrafos."
            },
            {
                title: "Links",
                text: "A tag a cria links para outras páginas.",
                code:
`<a href="https://example.com">
    Acessar site
</a>`,
                exercise: "Crie três links."
            },
            {
                title: "Imagens",
                text: "A tag img permite inserir imagens.",
                code:
`<img
    src="imagem.jpg"
    alt="Descrição da imagem"
>`,
                exercise: "Adicione uma imagem com texto alternativo."
            },
            {
                title: "Listas",
                text: "Listas podem ser ordenadas ou não ordenadas.",
                code:
`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`,
                exercise: "Crie uma lista com cinco tecnologias."
            },
            {
                title: "Formulários",
                text: "Formulários permitem coletar informações.",
                code:
`<form>
    <input type="text">
    <input type="email">
    <button>Enviar</button>
</form>`,
                exercise: "Crie um formulário de cadastro."
            },
            {
                title: "Tabelas",
                text: "Tabelas organizam dados em linhas e colunas.",
                code:
`<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>

    <tr>
        <td>Ana</td>
        <td>20</td>
    </tr>
</table>`,
                exercise: "Crie uma tabela com três usuários."
            },
            {
                title: "HTML semântico",
                text: "Elementos semânticos deixam a estrutura mais clara.",
                code:
`<header>Topo</header>
<nav>Menu</nav>
<main>Conteúdo</main>
<footer>Rodapé</footer>`,
                exercise: "Monte uma estrutura semântica de site."
            },
            {
                title: "Áudio e vídeo",
                text: "HTML possui elementos próprios para conteúdo multimídia.",
                code:
`<video controls>
    <source src="video.mp4">
</video>`,
                exercise: "Adicione um elemento de vídeo."
            },
            {
                title: "Projeto HTML",
                text: "Construa uma página completa usando os conceitos aprendidos.",
                code:
`<header>
    <h1>Meu Projeto</h1>
</header>

<main>
    <p>Bem-vindo!</p>
</main>

<footer>
    DevHub
</footer>`,
                exercise: "Crie sua própria página pessoal."
            }
        ]
    },


    {
        id: "css",
        title: "CSS",
        icon: "🎨",
        description: "Aprenda a estilizar páginas modernas.",
        lessons: [
            {
                title: "Primeiro CSS",
                text: "CSS controla a aparência dos elementos HTML.",
                code:
`body {
    font-family: Arial;
}

h1 {
    color: purple;
}`,
                exercise: "Mude a fonte e o tamanho de um título."
            },
            {
                title: "Cores",
                text: "CSS permite definir cores para textos e fundos.",
                code:
`body {
    background: #f5f6fa;
    color: #222;
}`,
                exercise: "Crie uma combinação de cores para seu site."
            },
            {
                title: "Box model",
                text: "Margin, border, padding e conteúdo formam o box model.",
                code:
`.card {
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
}`,
                exercise: "Crie um card usando box model."
            },
            {
                title: "Flexbox",
                text: "Flexbox facilita o alinhamento de elementos.",
                code:
`.menu {
    display: flex;
    gap: 20px;
    justify-content: center;
}`,
                exercise: "Crie um menu horizontal."
            },
            {
                title: "Grid",
                text: "CSS Grid cria layouts baseados em linhas e colunas.",
                code:
`.grid {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);
    gap: 15px;
}`,
                exercise: "Crie uma grade com seis cards."
            },
            {
                title: "Responsividade",
                text: "Media queries adaptam o layout a diferentes telas.",
                code:
`@media (max-width: 700px) {
    .menu {
        display: block;
    }
}`,
                exercise: "Crie uma regra para telas pequenas."
            },
            {
                title: "Bordas e sombras",
                text: "Sombras e bordas ajudam a criar interfaces modernas.",
                code:
`.card {
    border-radius: 15px;
    box-shadow:
        0 10px 30px rgba(0,0,0,.1);
}`,
                exercise: "Crie um card moderno."
            },
            {
                title: "Transições",
                text: "Transições deixam mudanças visuais mais suaves.",
                code:
`button {
    transition: .2s;
}

button:hover {
    transform: translateY(-2px);
}`,
                exercise: "Adicione um efeito hover."
            },
            {
                title: "Animações",
                text: "Keyframes permitem criar animações.",
                code:
`@keyframes aparecer {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}`,
                exercise: "Crie uma animação de entrada."
            },
            {
                title: "Projeto CSS",
                text: "Combine os conceitos para criar uma interface.",
                code:
`.card {
    padding: 25px;
    border-radius: 20px;
    display: grid;
    gap: 10px;
}`,
                exercise: "Crie a interface de um cartão de perfil."
            }
        ]
    },


    {
        id: "javascript",
        title: "JavaScript",
        icon: "⚡",
        description: "Aprenda a criar interações para a web.",
        lessons: [
            {
                title: "Variáveis",
                text: "JavaScript permite armazenar dados em variáveis.",
                code:
`const nome = "Dev";
let idade = 18;

console.log(nome);`,
                exercise: "Crie três variáveis."
            },
            {
                title: "Funções",
                text: "Funções permitem reutilizar lógica.",
                code:
`function saudacao(nome) {
    return "Olá " + nome;
}`,
                exercise: "Crie uma função de multiplicação."
            },
            {
                title: "Arrays",
                text: "Arrays armazenam coleções de dados.",
                code:
`const tecnologias = [
    "HTML",
    "CSS",
    "JS"
];

console.log(tecnologias.length);`,
                exercise: "Crie um array com cinco tecnologias."
            },
            {
                title: "Objetos",
                text: "Objetos representam entidades com propriedades.",
                code:
`const usuario = {
    nome: "Ana",
    idade: 20
};`,
                exercise: "Crie um objeto produto."
            },
            {
                title: "DOM",
                text: "O DOM permite manipular elementos HTML usando JavaScript.",
                code:
`const titulo =
    document.querySelector("h1");

titulo.textContent =
    "Novo título";`,
                exercise: "Altere um texto usando JavaScript."
            },
            {
                title: "Eventos",
                text: "Eventos permitem responder a ações do usuário.",
                code:
`button.addEventListener(
    "click",
    () => {
        alert("Olá!");
    }
);`,
                exercise: "Crie um botão que altere um texto."
            },
            {
                title: "LocalStorage",
                text: "LocalStorage permite guardar dados no navegador.",
                code:
`localStorage.setItem(
    "nome",
    "Dev"
);

const nome =
    localStorage.getItem("nome");`,
                exercise: "Salve e leia uma informação."
            },
            {
                title: "JSON",
                text: "JSON é muito usado para representar dados.",
                code:
`const usuario = {
    nome: "Dev",
    idade: 18
};

const texto =
    JSON.stringify(usuario);`,
                exercise: "Converta um objeto para JSON."
            },
            {
                title: "Async",
                text: "Operações assíncronas permitem trabalhar com tarefas que levam tempo.",
                code:
`async function carregar() {
    const resposta =
        await fetch("dados.json");

    return resposta.json();
}`,
                exercise: "Explique o que significa async/await."
            },
            {
                title: "Projeto JavaScript",
                text: "Construa uma pequena aplicação interativa.",
                code:
`let contador = 0;

function aumentar() {
    contador++;
    console.log(contador);
}`,
                exercise: "Crie um contador com botões."
            }
        ]
    },


    {
        id: "python",
        title: "Python",
        icon: "🐍",
        description: "Comece a programar com Python.",
        lessons: [
            {
                title: "Olá Python",
                text: "Python possui uma sintaxe simples e legível.",
                code:
`print("Olá, DevHub!")`,
                exercise: "Mostre uma mensagem usando print."
            },
            {
                title: "Variáveis",
                text: "Variáveis armazenam valores.",
                code:
`nome = "Dev"
idade = 18`,
                exercise: "Crie três variáveis."
            },
            {
                title: "Condições",
                text: "Use if e else para tomar decisões.",
                code:
`idade = 18

if idade >= 18:
    print("Maior")
else:
    print("Menor")`,
                exercise: "Verifique se uma nota foi suficiente."
            },
            {
                title: "Loops",
                text: "Loops repetem operações.",
                code:
`for numero in range(1, 6):
    print(numero)`,
                exercise: "Mostre os números de 1 a 10."
            },
            {
                title: "Listas",
                text: "Listas armazenam vários valores.",
                code:
`frutas = [
    "Maçã",
    "Banana",
    "Laranja"
]`,
                exercise: "Crie uma lista de linguagens."
            },
            {
                title: "Dicionários",
                text: "Dicionários armazenam pares chave/valor.",
                code:
`usuario = {
    "nome": "Ana",
    "idade": 20
}`,
                exercise: "Crie um dicionário de produto."
            },
            {
                title: "Funções",
                text: "Funções organizam e reutilizam código.",
                code:
`def somar(a, b):
    return a + b`,
                exercise: "Crie uma função de multiplicação."
            },
            {
                title: "Módulos",
                text: "Módulos permitem reutilizar código de outros arquivos.",
                code:
`import math

print(math.sqrt(25))`,
                exercise: "Use um módulo da biblioteca padrão."
            },
            {
                title: "Arquivos",
                text: "Python permite ler e escrever arquivos.",
                code:
`with open("dados.txt", "w") as arquivo:
    arquivo.write("DevHub")`,
                exercise: "Explique o que o código faz."
            },
            {
                title: "Projeto Python",
                text: "Combine os conceitos aprendidos.",
                code:
`def verificar(nota):
    if nota >= 7:
        return "Aprovado"

    return "Reprovado"`,
                exercise: "Crie um pequeno sistema de notas."
            }
        ]
    }

];


/* =====================================================
   DESAFIOS
===================================================== */

const CHALLENGES = [

    {
        id: 1,
        title: "Variável",
        difficulty: "easy",
        xp: 20,
        question: "Qual palavra-chave cria uma constante em JavaScript?",
        answer: "const"
    },

    {
        id: 2,
        title: "HTML",
        difficulty: "easy",
        xp: 20,
        question: "Qual tag representa o maior título HTML?",
        answer: "h1"
    },

    {
        id: 3,
        title: "CSS",
        difficulty: "easy",
        xp: 20,
        question: "Qual propriedade CSS altera a cor do texto?",
        answer: "color"
    },

    {
        id: 4,
        title: "JavaScript",
        difficulty: "easy",
        xp: 20,
        question: "Qual comando mostra uma mensagem no console?",
        answer: "console.log"
    },

    {
        id: 5,
        title: "Python",
        difficulty: "easy",
        xp: 20,
        question: "Qual função Python mostra informações na tela?",
        answer: "print"
    },

    {
        id: 6,
        title: "Flexbox",
        difficulty: "medium",
        xp: 35,
        question: "Qual propriedade ativa o Flexbox?",
        answer: "display:flex"
    },

    {
        id: 7,
        title: "DOM",
        difficulty: "medium",
        xp: 35,
        question: "Qual método JavaScript seleciona um elemento usando um seletor CSS?",
        answer: "queryselector"
    },

    {
        id: 8,
        title: "Array",
        difficulty: "medium",
        xp: 35,
        question: "Qual propriedade JavaScript informa o tamanho de um array?",
        answer: "length"
    },

    {
        id: 9,
        title: "LocalStorage",
        difficulty: "medium",
        xp: 35,
        question: "Qual API do navegador permite armazenar dados localmente?",
        answer: "localstorage"
    },

    {
        id: 10,
        title: "Responsividade",
        difficulty: "medium",
        xp: 35,
        question: "Qual recurso CSS adapta estilos conforme o tamanho da tela?",
        answer: "media query"
    },

    {
        id: 11,
        title: "SQL",
        difficulty: "hard",
        xp: 60,
        question: "Qual cláusula SQL é utilizada para filtrar registros?",
        answer: "where"
    },

    {
        id: 12,
        title: "Git",
        difficulty: "hard",
        xp: 60,
        question: "Qual conceito Git permite trabalhar em uma linha de desenvolvimento separada?",
        answer: "branch"
    },

    {
        id: 13,
        title: "React",
        difficulty: "hard",
        xp: 60,
        question: "Qual biblioteca JavaScript é usada para construir interfaces baseadas em componentes?",
        answer: "react"
    },

    {
        id: 14,
        title: "Node",
        difficulty: "hard",
        xp: 60,
        question: "Qual ambiente permite executar JavaScript fora do navegador?",
        answer: "node.js"
    },

    {
        id: 15,
        title: "API",
        difficulty: "hard",
        xp: 60,
        question: "Qual conceito permite que aplicações diferentes troquem dados?",
        answer: "api"
    }

];


/* =====================================================
   PROJETOS
===================================================== */

const PROJECTS = [

    {
        icon: "🌐",
        title: "Página pessoal",
        level: "Iniciante",
        description: "Crie uma página pessoal usando HTML e CSS.",
        tasks: [
            "Criar cabeçalho",
            "Adicionar apresentação",
            "Adicionar projetos",
            "Criar rodapé"
        ]
    },

    {
        icon: "🎨",
        title: "Landing Page",
        level: "Iniciante",
        description: "Crie uma landing page moderna e responsiva.",
        tasks: [
            "Hero",
            "Cards",
            "Botões",
            "Responsividade"
        ]
    },

    {
        icon: "⚡",
        title: "Lista de tarefas",
        level: "Intermediário",
        description: "Crie uma aplicação de tarefas usando JavaScript.",
        tasks: [
            "Adicionar tarefa",
            "Concluir tarefa",
            "Excluir tarefa",
            "Salvar no navegador"
        ]
    },

    {
        icon: "🧮",
        title: "Calculadora",
        level: "Intermediário",
        description: "Crie uma calculadora funcional.",
        tasks: [
            "Interface",
            "Operações",
            "Botões",
            "Resultado"
        ]
    },

    {
        icon: "🚀",
        title: "Mini projeto DevHub",
        level: "Avançado",
        description: "Construa sua própria plataforma de estudos.",
        tasks: [
            "Cursos",
            "Aulas",
            "Desafios",
            "Sistema de progresso"
        ]
    },

    {
        icon: "🐍",
        title: "Sistema de notas",
        level: "Avançado",
        description: "Crie um pequeno sistema para calcular notas.",
        tasks: [
            "Cadastrar aluno",
            "Adicionar notas",
            "Calcular média",
            "Mostrar resultado"
        ]
    }

];


/* =====================================================
   ESTADO
===================================================== */

const STORAGE_KEY = "devhub_state_v4";

const defaultState = {

    logged: false,
    name: "",

    xp: 0,

    streak: 0,
    lastAccess: "",

    completed: {},

    challenges: [],

    notes: [],

    theme: "light",

    daily: {
        date: "",
        lessons: 0
    },

    code: {
        html:
`<h1>Olá, DevHub!</h1>
<p>Escreva seu código aqui.</p>`,

        css:
`body {
    font-family: Arial;
    padding: 30px;
}

h1 {
    color: #6c63ff;
}`,

        js:
`console.log("DevHub funcionando!");`
    }

};


let state = loadState();

let currentCourse = null;
let currentLesson = 0;


/* =====================================================
   STORAGE
===================================================== */

function loadState() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

        if (!saved) {
            return structuredClone(defaultState);
        }

        return {
            ...structuredClone(defaultState),
            ...saved,

            completed:
                saved.completed || {},

            challenges:
                Array.isArray(saved.challenges)
                    ? saved.challenges
                    : [],

            notes:
                Array.isArray(saved.notes)
                    ? saved.notes
                    : [],

            daily:
                saved.daily || {
                    date: "",
                    lessons: 0
                },

            code: {
                ...defaultState.code,
                ...(saved.code || {})
            }

        };

    } catch {

        return structuredClone(defaultState);

    }

}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =====================================================
   LOGIN
===================================================== */

const loginScreen =
    document.getElementById("loginScreen");

const app =
    document.getElementById("app");


function enterApp() {

    const input =
        document.getElementById("loginName");

    const name =
        input.value.trim();

    if (!name) {

        alert("Digite seu nome.");

        input.focus();

        return;
    }

    state.logged = true;
    state.name = name;

    updateStreak();

    saveState();

    loginScreen.classList.add("hidden");
    app.classList.remove("hidden");

    updateInterface();
    renderDashboard();

}


document
    .getElementById("loginButton")
    .addEventListener(
        "click",
        enterApp
    );


document
    .getElementById("loginName")
    .addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                enterApp();
            }

        }
    );


document
    .getElementById("logoutButton")
    .addEventListener(
        "click",
        () => {

            state.logged = false;

            saveState();

            app.classList.add("hidden");
            loginScreen.classList.remove("hidden");

        }
    );


/* =====================================================
   NAVEGAÇÃO
===================================================== */

document
    .querySelectorAll("[data-go]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.go
                );

            }
        );

    });


document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    });


function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove(
                "active-page"
            );

        });


    const target =
        document.getElementById(
            page + "Page"
        );


    if (target) {
        target.classList.add(
            "active-page"
        );
    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    const titles = {

        dashboard: "Início",
        courses: "Cursos",
        lab: "Laboratório",
        challenges: "Desafios",
        projects: "Projetos",
        notes: "Anotações",
        profile: "Perfil",
        lesson: "Aula"

    };


    document
        .getElementById("pageTitle")
        .textContent =
        titles[page] || "DevHub";


    if (page === "dashboard") {
        renderDashboard();
    }

    if (page === "courses") {
        renderCourses();
    }

    if (page === "challenges") {
        renderChallenges();
    }

    if (page === "projects") {
        renderProjects();
    }

    if (page === "notes") {
        renderNotes();
    }

    if (page === "profile") {
        renderProfile();
    }

}


/* =====================================================
   INTERFACE
===================================================== */

function updateInterface() {

    const name =
        state.name || "Dev";

    document
        .getElementById("topName")
        .textContent = name;

    document
        .getElementById("heroName")
        .textContent = name;

    document
        .getElementById("topAvatar")
        .textContent =
        name.charAt(0).toUpperCase();

    document
        .getElementById("profileAvatar")
        .textContent =
        name.charAt(0).toUpperCase();

    document
        .getElementById("profileName")
        .textContent = name;

    updateStats();

    applyTheme();

}


/* =====================================================
   XP
===================================================== */

function getLevel() {

    return Math.floor(
        state.xp / 100
    ) + 1;

}


function addXP(amount) {

    state.xp += amount;

    saveState();

    updateStats();

    renderProfile();

}


function updateStats() {

    const level =
        getLevel();

    document
        .getElementById("xpValue")
        .textContent =
        `${state.xp} XP`;

    document
        .getElementById("streakValue")
        .textContent =
        `${state.streak} dias`;

    document
        .getElementById("lessonsValue")
        .textContent =
        countCompletedLessons();

    document
        .getElementById("challengeValue")
        .textContent =
        state.challenges.length;

    document
        .getElementById("topLevel")
        .textContent =
        `Nível ${level}`;

}


/* =====================================================
   SEQUÊNCIA
===================================================== */

function updateStreak() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    if (!state.lastAccess) {

        state.streak = 1;

    } else if (
        state.lastAccess !== today
    ) {

        const previous =
            new Date(state.lastAccess);

        const current =
            new Date(today);

        const difference =
            Math.round(
                (current - previous) /
                86400000
            );

        if (difference === 1) {

            state.streak++;

        } else if (difference > 1) {

            state.streak = 1;

        }

    }


    state.lastAccess = today;

}


/* =====================================================
   DASHBOARD
===================================================== */

function renderDashboard() {

    updateStats();

    renderDailyMission();

    const container =
        document.getElementById(
            "dashboardCourses"
        );

    container.innerHTML = "";


    COURSES
        .slice(0, 4)
        .forEach(course => {

            const completed =
                getCourseProgress(course);

            container.innerHTML += `

                <div class="course-mini">

                    <strong>
                        ${course.icon}
                        ${escapeHTML(course.title)}
                    </strong>

                    <small>
                        ${completed}/${course.lessons.length}
                        aulas
                    </small>

                    <div class="progress">
                        <div
                            style="
                                width:${getProgressPercent(course)}%
                            "
                        ></div>
                    </div>

                </div>

            `;

        });

}


/* =====================================================
   MISSÃO DIÁRIA
===================================================== */

function setupDailyMission() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    if (state.daily.date !== today) {

        state.daily = {
            date: today,
            lessons: 0
        };

        saveState();

    }

}


function renderDailyMission() {

    setupDailyMission();

    const goal = 2;

    const progress =
        Math.min(
            state.daily.lessons,
            goal
        );

    document
        .getElementById("missionProgress")
        .textContent =
        `${progress}/${goal}`;

    document
        .getElementById("missionBar")
        .style.width =
        `${(progress / goal) * 100}%`;

    document
        .getElementById("dailyMissionText")
        .textContent =
        progress >= goal
            ? "Missão concluída! 🎉"
            : `Complete ${goal - progress} aula(s) para concluir a missão.`;

}


/* =====================================================
   CURSOS
===================================================== */

function renderCourses() {

    const grid =
        document.getElementById(
            "coursesGrid"
        );

    const search =
        document
            .getElementById("courseSearch")
            .value
            .toLowerCase()
            .trim();


    const courses =
        COURSES.filter(course =>
            (
                course.title +
                " " +
                course.description
            )
            .toLowerCase()
            .includes(search)
        );


    document
        .getElementById("courseCount")
        .textContent =
        `${courses.length} cursos`;


    grid.innerHTML = "";


    if (!courses.length) {

        grid.innerHTML = `
            <div class="panel">
                <h3>Nenhum curso encontrado.</h3>
                <p>
                    Tente pesquisar outro termo.
                </p>
            </div>
        `;

        return;
    }


    courses.forEach(course => {

        const completed =
            getCourseProgress(course);

        const percent =
            getProgressPercent(course);


        grid.innerHTML += `

            <article class="course-card">

                <div class="course-icon">
                    ${course.icon}
                </div>

                <h3>
                    ${escapeHTML(course.title)}
                </h3>

                <p>
                    ${escapeHTML(course.description)}
                </p>

                <div class="course-meta">

                    <span>
                        📚 ${course.lessons.length} aulas
                    </span>

                    <strong>
                        ${percent}%
                    </strong>

                </div>

                <div class="progress">
                    <div style="width:${percent}%"></div>
                </div>

                <p>
                    ${completed}/${course.lessons.length}
                    aulas concluídas
                </p>

                <button
                    class="primary-btn"
                    onclick="openCourse('${course.id}')"
                >
                    ${completed > 0
                        ? "Continuar curso"
                        : "Começar curso"}
                </button>

            </article>

        `;

    });

}


document
    .getElementById("courseSearch")
    .addEventListener(
        "input",
        renderCourses
    );


function openCourse(id) {

    currentCourse =
        COURSES.find(
            course => course.id === id
        );

    if (!currentCourse) {
        return;
    }


    const progress =
        getCourseProgress(
            currentCourse
        );


    currentLesson =
        Math.min(
            progress,
            currentCourse.lessons.length - 1
        );


    showPage("lesson");

    renderLesson();

}


/* =====================================================
   AULAS
===================================================== */

function renderLesson() {

    if (!currentCourse) {
        return;
    }


    const lesson =
        currentCourse.lessons[currentLesson];

    const completed =
        isLessonCompleted(
            currentCourse.id,
            currentLesson
        );


    const total =
        currentCourse.lessons.length;


    document
        .getElementById("lessonContent")
        .innerHTML = `

            <div class="lesson-header">

                <span class="lesson-number">
                    Aula ${currentLesson + 1}
                    de ${total}
                </span>

                <h1>
                    ${escapeHTML(lesson.title)}
                </h1>

                <p>
                    ${escapeHTML(currentCourse.description)}
                </p>

            </div>


            <div class="lesson-body">

                <div class="lesson-box">

                    <h3>📖 Conteúdo</h3>

                    <p>
                        ${escapeHTML(lesson.text)}
                    </p>

                    <h3>💻 Exemplo</h3>

                    <pre class="lesson-code"><code>${escapeHTML(lesson.code)}</code></pre>

                </div>


                <div class="lesson-box">

                    <h3>🧩 Exercício</h3>

                    <div class="exercise">
                        ${escapeHTML(lesson.exercise)}
                    </div>

                    <p>
                        Faça o exercício no Laboratório
                        ou em seu editor favorito.
                    </p>

                    <button
                        class="secondary-btn"
                        onclick="showPage('lab')"
                    >
                        💻 Abrir laboratório
                    </button>

                </div>

            </div>


            <div class="lesson-actions">

                <button
                    class="secondary-btn"
                    onclick="previousLesson()"
                    ${currentLesson === 0 ? "disabled" : ""}
                >
                    ← Anterior
                </button>


                <button
                    class="primary-btn"
                    onclick="completeLesson()"
                >
                    ${completed
                        ? "✓ Aula concluída"
                        : "Concluir aula +10 XP"}
                </button>


                <button
                    class="secondary-btn"
                    onclick="nextLesson()"
                    ${currentLesson >= total - 1 ? "disabled" : ""}
                >
                    Próxima →
                </button>

            </div>

        `;

}


function isLessonCompleted(courseId, lessonIndex) {

    return Array.isArray(
        state.completed[courseId]
    )
    &&
    state.completed[courseId]
        .includes(lessonIndex);

}


function completeLesson() {

    if (!currentCourse) {
        return;
    }


    if (
        isLessonCompleted(
            currentCourse.id,
            currentLesson
        )
    ) {

        alert("Você já concluiu esta aula.");

        return;
    }


    if (!state.completed[currentCourse.id]) {
        state.completed[currentCourse.id] = [];
    }


    state.completed[currentCourse.id]
        .push(currentLesson);


    state.daily.lessons++;


    addXP(10);

    saveState();

    alert("Aula concluída! +10 XP 🎉");

    renderLesson();

    renderDashboard();

}


function previousLesson() {

    if (currentLesson <= 0) {
        return;
    }

    currentLesson--;

    renderLesson();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function nextLesson() {

    if (!currentCourse) {
        return;
    }

    if (
        currentLesson >=
        currentCourse.lessons.length - 1
    ) {
        return;
    }

    currentLesson++;

    renderLesson();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


document
    .getElementById("backCourses")
    .addEventListener(
        "click",
        () => showPage("courses")
    );


/* =====================================================
   PROGRESSO
===================================================== */

function getCourseProgress(course) {

    const completed =
        state.completed[course.id];

    if (!Array.isArray(completed)) {
        return 0;
    }

    return completed.length;

}


function getProgressPercent(course) {

    if (!course.lessons.length) {
        return 0;
    }

    return Math.round(
        (
            getCourseProgress(course) /
            course.lessons.length
        ) * 100
    );

}


function countCompletedLessons() {

    return Object.values(
        state.completed
    )
    .reduce(
        (total, lessons) =>
            total +
            (
                Array.isArray(lessons)
                    ? lessons.length
                    : 0
            ),
        0
    );

}


/* =====================================================
   LABORATÓRIO
===================================================== */

const htmlCode =
    document.getElementById("htmlCode");

const cssCode =
    document.getElementById("cssCode");

const jsCode =
    document.getElementById("jsCode");


htmlCode.value = state.code.html;
cssCode.value = state.code.css;
jsCode.value = state.code.js;


document
    .querySelectorAll(".tab")
    .forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".tab")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                tab.classList.add("active");


                document
                    .querySelectorAll(".code-editor")
                    .forEach(editor =>
                        editor.classList.add(
                            "hidden"
                        )
                    );


                document
                    .getElementById(
                        tab.dataset.tab + "Code"
                    )
                    .classList.remove(
                        "hidden"
                    );

            }
        );

    });


document
    .getElementById("runCode")
    .addEventListener(
        "click",
        runCode
    );


function runCode() {

    const frame =
        document.getElementById(
            "previewFrame"
        );


    const html =
        htmlCode.value;


    const css =
        `<style>${cssCode.value}</style>`;


    const js =
        `<script>
            ${jsCode.value}
        <\/script>`;


    frame.srcdoc =
        html + css + js;

}


runCode();


function updateCodeState() {

    state.code.html =
        htmlCode.value;

    state.code.css =
        cssCode.value;

    state.code.js =
        jsCode.value;

}


document
    .getElementById("saveCode")
    .addEventListener(
        "click",
        () => {

            updateCodeState();

            saveState();

            alert(
                "Código salvo no navegador! 💾"
            );

        }
    );


document
    .getElementById("copyCode")
    .addEventListener(
        "click",
        async () => {

            const active =
                document.querySelector(
                    ".code-editor:not(.hidden)"
                );

            try {

                await navigator.clipboard
                    .writeText(
                        active.value
                    );

                alert("Código copiado!");

            } catch {

                alert(
                    "Não foi possível copiar automaticamente."
                );

            }

        }
    );


document
    .getElementById("clearCode")
    .addEventListener(
        "click",
        () => {

            if (
                !confirm(
                    "Deseja limpar o código atual?"
                )
            ) {
                return;
            }

            const active =
                document.querySelector(
                    ".code-editor:not(.hidden)"
                );

            active.value = "";

            updateCodeState();

            saveState();

            runCode();

        }
    );


/* =====================================================
   DESAFIOS
===================================================== */

function renderChallenges() {

    const grid =
        document.getElementById(
            "challengesGrid"
        );


    const completed =
        state.challenges;


    document
        .getElementById(
            "challengeProgress"
        )
        .textContent =
        `${completed.length}/${CHALLENGES.length}`;


    grid.innerHTML = "";


    CHALLENGES.forEach(challenge => {

        const done =
            completed.includes(
                challenge.id
            );


        const difficultyName = {

            easy: "Fácil",
            medium: "Médio",
            hard: "Difícil"

        }[challenge.difficulty];


        grid.innerHTML += `

            <article
                class="
                    challenge-card
                    ${done ? "completed" : ""}
                "
            >

                <div class="challenge-top">

                    <span
                        class="
                            difficulty
                            ${challenge.difficulty}
                        "
                    >
                        ${difficultyName}
                    </span>

                    <span class="challenge-xp">
                        +${challenge.xp} XP
                    </span>

                </div>

                <h3>
                    ${escapeHTML(challenge.title)}
                </h3>

                <p>
                    ${escapeHTML(challenge.question)}
                </p>

                ${
                    done

                    ? `
                        <strong>
                            ✓ Concluído
                        </strong>
                    `

                    : `
                        <div class="challenge-answer">

                            <input
                                id="answer-${challenge.id}"
                                placeholder="Sua resposta..."
                            >

                            <button
                                class="primary-btn"
                                onclick="
                                    answerChallenge(${challenge.id})
                                "
                            >
                                Verificar
                            </button>

                        </div>
                    `
                }

            </article>

        `;

    });

}


function answerChallenge(id) {

    const challenge =
        CHALLENGES.find(
            item => item.id === id
        );


    if (!challenge) {
        return;
    }


    const input =
        document.getElementById(
            `answer-${id}`
        );


    const answer =
        input.value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");


    const expected =
        challenge.answer
            .toLowerCase();


    if (answer !== expected) {

        alert(
            "Resposta incorreta. Tente novamente! 💪"
        );

        return;
    }


    state.challenges.push(id);

    addXP(challenge.xp);

    saveState();

    alert(
        `Resposta correta! +${challenge.xp} XP 🎉`
    );

    renderChallenges();

    updateStats();

}


/* =====================================================
   PROJETOS
===================================================== */

function renderProjects() {

    const grid =
        document.getElementById(
            "projectsGrid"
        );

    grid.innerHTML = "";


    PROJECTS.forEach(project => {

        grid.innerHTML += `

            <article class="project-card">

                <div class="project-icon">
                    ${project.icon}
                </div>

                <h3>
                    ${escapeHTML(project.title)}
                </h3>

                <span class="difficulty medium">
                    ${escapeHTML(project.level)}
                </span>

                <p>
                    ${escapeHTML(project.description)}
                </p>

                <h4>Checklist</h4>

                <ul>

                    ${project.tasks
                        .map(task =>
                            `<li>
                                ${escapeHTML(task)}
                            </li>`
                        )
                        .join("")}

                </ul>

                <button
                    class="primary-btn"
                    onclick="
                        showPage('lab')
                    "
                >
                    💻 Começar projeto
                </button>

            </article>

        `;

    });

}


/* =====================================================
   ANOTAÇÕES
===================================================== */

document
    .getElementById("newNote")
    .addEventListener(
        "click",
        openNoteModal
    );


document
    .getElementById("closeNote")
    .addEventListener(
        "click",
        closeNoteModal
    );


function openNoteModal() {

    document
        .getElementById("noteModal")
        .classList.remove("hidden");

}


function closeNoteModal() {

    document
        .getElementById("noteModal")
        .classList.add("hidden");

}


document
    .getElementById("saveNote")
    .addEventListener(
        "click",
        () => {

            const title =
                document
                    .getElementById("noteTitle")
                    .value
                    .trim();

            const text =
                document
                    .getElementById("noteText")
                    .value
                    .trim();


            if (!title || !text) {

                alert(
                    "Preencha título e conteúdo."
                );

                return;
            }


            state.notes.unshift({

                id: Date.now(),

                title,

                text

            });


            saveState();


            document
                .getElementById("noteTitle")
                .value = "";

            document
                .getElementById("noteText")
                .value = "";


            closeNoteModal();

            renderNotes();

        }
    );


function renderNotes() {

    const grid =
        document.getElementById(
            "notesGrid"
        );


    grid.innerHTML = "";


    if (!state.notes.length) {

        grid.innerHTML = `

            <div class="panel">

                <h3>
                    Nenhuma anotação ainda.
                </h3>

                <p>
                    Crie sua primeira anotação.
                </p>

            </div>

        `;

        return;
    }


    state.notes.forEach(note => {

        grid.innerHTML += `

            <article class="note-card">

                <h3>
                    ${escapeHTML(note.title)}
                </h3>

                <p>
                    ${escapeHTML(note.text)}
                </p>

                <button
                    class="note-delete"
                    onclick="
                        deleteNote(${note.id})
                    "
                >
                    Excluir
                </button>

            </article>

        `;

    });

}


function deleteNote(id) {

    if (
        !confirm(
            "Excluir esta anotação?"
        )
    ) {
        return;
    }


    state.notes =
        state.notes.filter(
            note =>
                note.id !== id
        );


    saveState();

    renderNotes();

}


/* =====================================================
   PERFIL
===================================================== */

function renderProfile() {

    const level =
        getLevel();

    const currentXP =
        state.xp % 100;


    document
        .getElementById("profileXpText")
        .textContent =
        `${state.xp} XP • ${currentXP}/100 para o próximo nível`;


    document
        .getElementById("profileXpBar")
        .style.width =
        `${currentXP}%`;


    document
        .getElementById("profileLevel")
        .textContent =
        `Nível ${level}`;


    renderAchievements();

}


function renderAchievements() {

    const container =
        document.getElementById(
            "achievements"
        );


    const lessons =
        countCompletedLessons();


    const challenges =
        state.challenges.length;


    const projectsCompleted =
        0;


    const achievements = [

        {
            icon: "🌱",
            title: "Primeiro passo",
            text: "Conclua 1 aula",
            unlocked: lessons >= 1
        },

        {
            icon: "📚",
            title: "Estudante",
            text: "Conclua 5 aulas",
            unlocked: lessons >= 5
        },

        {
            icon: "🔥",
            title: "Sequência",
            text: "Estude por 3 dias",
            unlocked: state.streak >= 3
        },

        {
            icon: "🏆",
            title: "Desafiante",
            text: "Complete 5 desafios",
            unlocked: challenges >= 5
        },

        {
            icon: "🚀",
            title: "Programador",
            text: "Conclua 20 aulas",
            unlocked: lessons >= 20
        },

        {
            icon: "💎",
            title: "Mestre dos desafios",
            text: "Complete 10 desafios",
            unlocked: challenges >= 10
        },

        {
            icon: "⚡",
            title: "Nível 5",
            text: "Alcance o nível 5",
            unlocked: getLevel() >= 5
        },

        {
            icon: "👑",
            title: "DevHub Master",
            text: "Alcance 1000 XP",
            unlocked: state.xp >= 1000
        },

        {
            icon: "🧠",
            title: "Aprendiz",
            text: "Conclua 30 aulas",
            unlocked: lessons >= 30
        },

        {
            icon: "💻",
            title: "Coder",
            text: "Conclua 50 aulas",
            unlocked: lessons >= 50
        },

        {
            icon: "🌟",
            title: "Especialista",
            text: "Alcance 2000 XP",
            unlocked: state.xp >= 2000
        },

        {
            icon: "🎯",
            title: "Foco total",
            text: "Complete uma missão diária",
            unlocked: state.daily.lessons >= 2
        }

    ];


    container.innerHTML = "";


    achievements.forEach(item => {

        container.innerHTML += `

            <div
                class="
                    achievement
                    ${item.unlocked ? "" : "locked"}
                "
            >

                <span>
                    ${item.icon}
                </span>

                <strong>
                    ${item.title}
                </strong>

                <small>
                    ${item.text}
                </small>

            </div>

        `;

    });

}


/* =====================================================
   TEMA
===================================================== */

document
    .getElementById("themeToggle")
    .addEventListener(
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


function applyTheme() {

    document.body.classList.toggle(
        "dark",
        state.theme === "dark"
    );


    document
        .getElementById("themeToggle")
        .textContent =
        state.theme === "dark"
            ? "☀️ Tema claro"
            : "🌙 Tema escuro";

}


/* =====================================================
   SEGURANÇA BÁSICA DE TEXTO
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

setupDailyMission();

if (state.logged) {

    loginScreen.classList.add("hidden");

    app.classList.remove("hidden");

    updateInterface();

    renderDashboard();

} else {

    loginScreen.classList.remove("hidden");

    app.classList.add("hidden");

}


if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("./sw.js")
                .catch(error =>
                    console.log(
                        "Service Worker:",
                        error
                    )
                );

        }
    );

}
/* =====================================================
   DEVHUB 4.1 - MELHORIAS GERAIS
===================================================== */

const DEVHUB_ENHANCEMENTS = "4.1";

// Estado extra: projetos, meta semanal e preferências.
state.projects = Array.isArray(state.projects) ? state.projects : {};
state.studyDays = Array.isArray(state.studyDays) ? state.studyDays : [];

function enhancementSave() {
    saveState();
}

function normalizeAnswer(value) {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\s*:\s*/g, ":")
        .replace(/\s*;\s*/g, ";");
}

function markStudyDay() {
    const today = new Date().toISOString().split("T")[0];
    if (!state.studyDays.includes(today)) {
        state.studyDays.push(today);
        if (state.studyDays.length > 90) state.studyDays.shift();
        enhancementSave();
    }
}

markStudyDay();

function getCompletedChallenges() {
    return Array.isArray(state.challenges) ? state.challenges.length : 0;
}

function getTotalCourseLessons() {
    return COURSES.reduce((sum, course) => sum + course.lessons.length, 0);
}

function getOverallProgress() {
    const total = getTotalCourseLessons();
    return total ? Math.round((countCompletedLessons() / total) * 100) : 0;
}

function showToast(message, type = "success") {
    let toast = document.getElementById("devhubToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "devhubToast";
        document.body.appendChild(toast);
    }
    toast.className = `devhub-toast ${type}`;
    toast.textContent = message;
    clearTimeout(window.__devhubToastTimer);
    requestAnimationFrame(() => toast.classList.add("show"));
    window.__devhubToastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function injectDashboardEnhancements() {
    const dashboard = document.getElementById("dashboardPage");
    if (!dashboard || document.getElementById("devhubOverview")) return;

    const panel = document.createElement("div");
    panel.id = "devhubOverview";
    panel.className = "panel devhub-overview";
    panel.innerHTML = `
        <div class="panel-title">
            <div>
                <h3>📊 Visão geral</h3>
                <p>Acompanhe sua evolução no DevHub.</p>
            </div>
            <strong id="overallProgressText">0%</strong>
        </div>
        <div class="progress"><div id="overallProgressBar"></div></div>
        <div class="overview-grid">
            <div><span>📚</span><strong id="overviewLessons">0</strong><small>Aulas</small></div>
            <div><span>🏆</span><strong id="overviewChallenges">0</strong><small>Desafios</small></div>
            <div><span>🚀</span><strong id="overviewProjects">0</strong><small>Projetos</small></div>
            <div><span>📅</span><strong id="overviewDays">0</strong><small>Dias de estudo</small></div>
        </div>
    `;
    const quickGrid = dashboard.querySelector(".quick-grid");
    dashboard.insertBefore(panel, quickGrid || dashboard.lastElementChild);
}

function updateDashboardEnhancements() {
    injectDashboardEnhancements();
    const percent = getOverallProgress();
    const text = document.getElementById("overallProgressText");
    const bar = document.getElementById("overallProgressBar");
    if (text) text.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
    const lessons = document.getElementById("overviewLessons");
    const challenges = document.getElementById("overviewChallenges");
    const projects = document.getElementById("overviewProjects");
    const days = document.getElementById("overviewDays");
    if (lessons) lessons.textContent = countCompletedLessons();
    if (challenges) challenges.textContent = getCompletedChallenges();
    if (projects) projects.textContent = Object.values(state.projects).filter(Boolean).length;
    if (days) days.textContent = state.studyDays.length;
}

// Filtros de cursos: pesquisa + nível.
function injectCourseFilter() {
    const searchBox = document.querySelector("#coursesPage .search-box");
    if (!searchBox || document.getElementById("courseLevelFilter")) return;
    const select = document.createElement("select");
    select.id = "courseLevelFilter";
    select.innerHTML = `
        <option value="all">Todos os níveis</option>
        <option value="beginner">Iniciante</option>
        <option value="intermediate">Intermediário</option>
        <option value="advanced">Avançado</option>
    `;
    searchBox.appendChild(select);
    select.addEventListener("change", renderCourses);
}

// Os cursos existentes não têm nível definido; o filtro usa uma progressão natural.
function courseLevel(course) {
    const index = COURSES.indexOf(course);
    if (index <= 1) return "beginner";
    if (index <= 3) return "intermediate";
    return "advanced";
}

const originalRenderCourses = renderCourses;
renderCourses = function enhancedRenderCourses() {
    injectCourseFilter();
    const select = document.getElementById("courseLevelFilter");
    const search = document.getElementById("courseSearch");
    if (!select || !search) return originalRenderCourses();

    const wanted = select.value;
    const originalCourses = COURSES.filter(course => {
        const text = `${course.title} ${course.description}`.toLowerCase();
        return text.includes(search.value.toLowerCase().trim()) &&
            (wanted === "all" || courseLevel(course) === wanted);
    });

    const grid = document.getElementById("coursesGrid");
    document.getElementById("courseCount").textContent = `${originalCourses.length} cursos`;
    grid.innerHTML = "";
    if (!originalCourses.length) {
        grid.innerHTML = `<div class="panel"><h3>Nenhum curso encontrado.</h3><p>Tente outro termo ou nível.</p></div>`;
        return;
    }

    originalCourses.forEach(course => {
        const completed = getCourseProgress(course);
        const percent = getProgressPercent(course);
        const levelText = { beginner: "Iniciante", intermediate: "Intermediário", advanced: "Avançado" }[courseLevel(course)];
        grid.innerHTML += `
            <article class="course-card">
                <div class="course-icon">${course.icon}</div>
                <span class="course-level-badge">${levelText}</span>
                <h3>${escapeHTML(course.title)}</h3>
                <p>${escapeHTML(course.description)}</p>
                <div class="course-meta"><span>📚 ${course.lessons.length} aulas</span><strong>${percent}%</strong></div>
                <div class="progress"><div style="width:${percent}%"></div></div>
                <p>${completed}/${course.lessons.length} aulas concluídas</p>
                <button class="primary-btn" onclick="openCourse('${course.id}')">
                    ${completed > 0 ? "Continuar curso" : "Começar curso"}
                </button>
            </article>`;
    });
};

// Conclusão de aula: evita duplicidade, registra dia e usa notificação visual.
const originalCompleteLesson = completeLesson;
completeLesson = function enhancedCompleteLesson() {
    if (!currentCourse) return;
    if (isLessonCompleted(currentCourse.id, currentLesson)) {
        showToast("Esta aula já foi concluída.", "info");
        return;
    }
    originalCompleteLesson();
    markStudyDay();
    updateDashboardEnhancements();
    showToast("Aula concluída! +10 XP 🎉");
};

// Projetos agora possuem checklist persistente e podem ser concluídos.
function projectKey(project) {
    return project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderProjectsEnhanced() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    PROJECTS.forEach((project, projectIndex) => {
        const key = projectKey(project);
        const saved = Array.isArray(state.projects[key]) ? state.projects[key] : [];
        const done = saved.length === project.tasks.length;
        const percent = project.tasks.length ? Math.round((saved.length / project.tasks.length) * 100) : 0;
        const tasks = project.tasks.map((task, i) => `
            <label class="project-task ${saved.includes(i) ? "done" : ""}">
                <input type="checkbox" ${saved.includes(i) ? "checked" : ""} onchange="toggleProjectTask('${key}', ${i}, this.checked)">
                <span>${escapeHTML(task)}</span>
            </label>`).join("");
        grid.innerHTML += `
            <article class="project-card ${done ? "project-complete" : ""}">
                <div class="project-icon">${project.icon}</div>
                <h3>${escapeHTML(project.title)}</h3>
                <span class="difficulty medium">${escapeHTML(project.level)}</span>
                <p>${escapeHTML(project.description)}</p>
                <div class="project-progress-row"><strong>${percent}%</strong><span>${saved.length}/${project.tasks.length}</span></div>
                <div class="progress"><div style="width:${percent}%"></div></div>
                <div class="project-checklist">${tasks}</div>
                <button class="primary-btn" onclick="showPage('lab')">💻 Abrir laboratório</button>
                ${done ? `<div class="project-complete-badge">✓ Projeto concluído</div>` : ""}
            </article>`;
    });
    updateDashboardEnhancements();
}

function toggleProjectTask(key, index, checked) {
    if (!Array.isArray(state.projects[key])) state.projects[key] = [];
    const list = state.projects[key];
    if (checked && !list.includes(index)) list.push(index);
    if (!checked) state.projects[key] = list.filter(i => i !== index);
    const project = PROJECTS.find(p => projectKey(p) === key);
    const wasComplete = project && state.projects[key].length === project.tasks.length;
    if (wasComplete && !state.projects[key + "_reward"]) {
        state.projects[key + "_reward"] = true;
        addXP(50);
        showToast("Projeto concluído! +50 XP 🚀");
    }
    enhancementSave();
    renderProjectsEnhanced();
}

renderProjects = renderProjectsEnhanced;

// Desafios: respostas mais tolerantes e prevenção de duplicidade.
const originalAnswerChallenge = answerChallenge;
answerChallenge = function enhancedAnswerChallenge(id) {
    const challenge = CHALLENGES.find(item => item.id === id);
    if (!challenge) return;
    if (state.challenges.includes(id)) {
        showToast("Você já concluiu este desafio.", "info");
        return;
    }
    const input = document.getElementById(`answer-${id}`);
    if (!input) return;
    const answer = normalizeAnswer(input.value);
    const expected = normalizeAnswer(challenge.answer);
    if (answer !== expected) {
        showToast("Resposta incorreta. Tente novamente! 💪", "error");
        input.focus();
        return;
    }
    state.challenges.push(id);
    addXP(challenge.xp);
    markStudyDay();
    enhancementSave();
    renderChallenges();
    updateDashboardEnhancements();
    showToast(`Resposta correta! +${challenge.xp} XP 🎉`);
};

// Laboratório: salvamento automático e restauração rápida.
let autoSaveTimer;
[htmlCode, cssCode, jsCode].forEach(editor => {
    if (!editor) return;
    editor.addEventListener("input", () => {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            updateCodeState();
            enhancementSave();
        }, 700);
    });
});

// Ferramentas extras no perfil.
function injectProfileTools() {
    const profile = document.getElementById("profilePage");
    if (!profile || document.getElementById("profileTools")) return;
    const box = document.createElement("div");
    box.id = "profileTools";
    box.className = "panel profile-tools";
    box.innerHTML = `
        <div class="section-header"><div><h2>⚙️ Ferramentas</h2><p>Controle e faça backup dos seus dados.</p></div></div>
        <div class="profile-tools-grid">
            <button class="secondary-btn" onclick="exportDevHubData()">⬇️ Exportar dados</button>
            <button class="secondary-btn" onclick="document.getElementById('importDevHubInput').click()">⬆️ Importar dados</button>
            <button class="logout-btn" onclick="resetDevHubProgress()">♻️ Resetar progresso</button>
        </div>
        <input id="importDevHubInput" type="file" accept="application/json" hidden>
    `;
    profile.appendChild(box);
    document.getElementById("importDevHubInput").addEventListener("change", importDevHubData);
}

function exportDevHubData() {
    updateCodeState();
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `devhub-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup exportado! 💾");
}

function importDevHubData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const imported = JSON.parse(reader.result);
            if (!imported || typeof imported !== "object") throw new Error();
            state = {
                ...state,
                ...imported,
                completed: imported.completed || {},
                challenges: Array.isArray(imported.challenges) ? imported.challenges : [],
                notes: Array.isArray(imported.notes) ? imported.notes : [],
                projects: imported.projects || {},
                studyDays: Array.isArray(imported.studyDays) ? imported.studyDays : []
            };
            enhancementSave();
            location.reload();
        } catch {
            showToast("Backup inválido.", "error");
        }
    };
    reader.readAsText(file);
}

function resetDevHubProgress() {
    if (!confirm("Resetar XP, aulas, desafios e projetos? Suas anotações também serão apagadas.")) return;
    const keepName = state.name;
    const keepTheme = state.theme;
    state = structuredClone(defaultState);
    state.name = keepName;
    state.theme = keepTheme;
    state.logged = true;
    state.projects = {};
    state.studyDays = [];
    enhancementSave();
    location.reload();
}

// Perfil mostra mais estatísticas.
const originalRenderProfile = renderProfile;
renderProfile = function enhancedRenderProfile() {
    originalRenderProfile();
    injectProfileTools();
    const profile = document.getElementById("profilePage");
    if (!profile || document.getElementById("profileExtraStats")) return;
    const stats = document.createElement("div");
    stats.id = "profileExtraStats";
    stats.className = "profile-extra-stats";
    stats.innerHTML = `
        <div><strong>${countCompletedLessons()}</strong><small>Aulas</small></div>
        <div><strong>${getCompletedChallenges()}</strong><small>Desafios</small></div>
        <div><strong>${Object.values(state.projects).filter(Boolean).length}</strong><small>Projetos</small></div>
        <div><strong>${state.studyDays.length}</strong><small>Dias estudados</small></div>
    `;
    profile.insertBefore(stats, profile.querySelector(".panel"));
};

// Dashboard atualizado sempre que uma página é aberta.
const originalShowPage = showPage;
showPage = function enhancedShowPage(page) {
    originalShowPage(page);
    if (page === "dashboard") updateDashboardEnhancements();
    if (page === "projects") renderProjectsEnhanced();
    if (page === "profile") renderProfile();
};

injectDashboardEnhancements();
updateDashboardEnhancements();
injectCourseFilter();