const main = document.querySelector("main");

const humanExpressions = [
  { img: "./img/drink.png", text: "Estou com sede" },
  { img: "./img/angry.png", text: "Estou bravo" },
  { img: "./img/grandma.png", text: "Quero a vovó" },
  { img: "./img/outside.png", text: "Quero ir lá fora" },
  { img: "./img/sad.png", text: "Estou triste" },
  { img: "./img/scared.png", text: "Estou assustado" },
  { img: "./img/school.png", text: "Quero ir para a escola" },
  { img: "./img/tired.png", text: "Estou cansado" },
  { img: "./img/food.png", text: "Estou com fome" },
  { img: "./img/happy.png", text: "Estou feliz" },
  { img: "./img/home.png", text: "Quero ir para casa" },
  { img: "./img/hurt.png", text: "Estou machucado" },
];

const creatExpressionBox = ({ img, text }) => {
  const div = document.createElement("div");

  div.classList.add("expression-box");
  div.innerHTML = `
     <img src="${img}" alt="${text}">
     <p class="info">${text}</p>
    `;

  main.appendChild(div);
};

humanExpressions.forEach(creatExpressionBox);

const nav = document.createElement("nav");

nav.innerHTML = `
        <a href="#Sobre Nós">Sobre Nós</a>
    
        <a href="Missão">Missão</a>
    
        <a href="#Visão">Visão</a>

        <a href="#Valores">Valores</a>
    
        <a href="#Contato">Contato</a>
`;

const container = document.querySelector(".container");

container.before(nav);
