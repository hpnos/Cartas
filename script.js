// Sons para cada raridade
<script>
  const imagens = [
  "images/23 transformers.png",
   "images/24 Gabriel.png",
   "images/25 Kratos.png",
   "images/26 Karma.png",
   "images/28 Mutano.png",
   "images/34 crazy.png",
   "images/35 speak.png",
   "images/39 datena.png" ,
   "images/40 galaxia.png", 
   "images/44 morgan.png", 
   "images/42 syivie.png", 
   "images/22 Cartomante.png", 
   "images/27 Steven.png", 
   "images/29 widow.png", 
   "images/30 badice.png",  
   "images/32 Engana.png", 
   "images/37 clove.png", 
   "images/33 deolane.png", 
   "images/43 snape.png", 
   "images/46 sapatao.png",
   "images/31 venenoso.png",  
   "images/45 shogun.png",  
   "images/47 galacta.png", 
   "images/48 agatha.png",  
   "images/49 yuk.png", 
   "images/50 magik.png", 
   "images/21 Dogou.png", 
   "images/38 ravel.png", 
   "images/41 loki.png", 
  ];

  imagens.forEach(src => {
    const img = new Image();
    img.src = src;
  });
</script>



const sounds = {
  "images/23 transformers.png": new Audio("sounds/23.mp3"),  
  "images/24 Gabriel.png": new Audio("sounds/24.mp3"),
  "images/25 Kratos.png": new Audio("sounds/25.mp3"),
  "images/26 Karma.png": new Audio("sounds/26.mp3"), 
  "images/28 Mutano.png": new Audio("sounds/28.mp3"),     
  "images/34 crazy.png": new Audio("sounds/34.mp3"),
  "images/35 speak.png": new Audio("sounds/35.mp3"),
  "images/39 datena.png": new Audio("sounds/39.mp3"),
  "images/40 galaxia.png": new Audio("sounds/40.mp3"),
  "images/22 Cartomante.png": new Audio("sounds/22.mp3"),
  "images/27 Steven.png": new Audio("sounds/27.mp3"),
  "images/29 widow.png": new Audio("sounds/29.mp3"),
  "images/30 badice.png": new Audio("sounds/30.mp3"),
  "images/32 Engana.png": new Audio("sounds/32.mp3"),
  "images/37 clove.png": new Audio("sounds/durmo.mp3"),
  "images/33 deolane.png": new Audio("sounds/33.mp3"),
  "images/31 venenoso.png": new Audio("sounds/31.mp3"),
  "images/21 Dogou.png": new Audio("sounds/21.mp3"),
  "images/38 ravel.png": new Audio("sounds/38.mp3"),
  "images/43 snape.png": new Audio("sounds/43.mp3"),
  //"images/46 sapatao.png": new Audio("sounds/46.mp3"),
  "images/45 shogun.png": new Audio("sounds/45.mp3"),
  "images/42 syivie": new Audio("sounds/42.mp3"),
  "images/47 galacta.png": new Audio("47.mp3"),
  //"images/48 agatha.png": new Audio("48.mp3"),
  //"images/49 yuk.png": new Audio("sounds/49.mp3"),
  "images/50 magik.png": new Audio("sounds/50.mp3"),
  //"images/41 loki.png": new Audio("sounds/41.mp3"),
  
};

// Função para tocar o som da raridade correspondente
function playSound(image) {
  if (sounds[image]) {
    sounds[image].play();
  }
}

// Lista das recompensas com as novas chances
const rewardPool = [
  // Comuns (57% no total → 7 recompensas, cada uma com 7% e uma com 8%)
  { image: "images/23 transformers.png", chance: 5.7 },
  { image: "images/24 Gabriel.png", chance: 5.7 }, 
  { image: "images/25 Kratos.png", chance: 5.7 }, 
  { image: "images/26 Karma.png", chance: 5.7 }, 
  { image: "images/28 Mutano.png", chance: 5.7 }, 
  { image: "images/34 crazy.png", chance: 5.7 }, 
  { image: "images/35 speak.png", chance: 5.7 },
  { image: "images/39 datena.png", chance: 5.7 }, 
  { image: "images/40 galaxia.png", chance: 5.7 }, 
  // { image: "images/44 morgan.png", chance: 5.7 }, // 44
  { image: "images/42 syivie.png", chance: 5.7 }, // 42

  // Incomuns (26% no total → 6 recompensas, cada uma com 4.33%)
  { image: "images/22 Cartomante.png", chance: 3.89 },
  { image: "images/27 Steven.png", chance: 3.89 },
  { image: "images/29 widow.png", chance: 3.89 },
  { image: "images/30 badice.png", chance: 3.89 }, 
  { image: "images/32 Engana.png", chance: 3.89 }, 
  { image: "images/37 clove.png", chance: 3.89 }, 
  { image: "images/33 deolane.png", chance: 3.89 }, 
  { image: "images/43 snape.png", chance: 3.89 }, 
  //{ image: "images/46 sapatao.png", chance: 3.89 }, 

  // Raras (15% no total → 4 recompensas, cada uma com 3.75%)
  { image: "images/31 venenoso.png", chance: 1.5 }, 
  { image: "images/45 shogun.png", chance: 1.5 }, 
  { image: "images/47 galacta.png", chance: 1.5 },
  //{ image: "images/48 agatha.png", chance: 1.5 }, 
  //{ image: "images/49 yuk.png", chance: 1.5}, 
  { image: "images/50 magik.png", chance: 1.5}, 

  // Lendárias (1% no total → 2 recompensas, cada uma com 0.5%)
  { image: "images/21 Dogou.png", chance: 0.5 }, 
  { image: "images/38 ravel.png", chance: 0.5 }, 
  //{ image: "images/41 loki.png", chance: 0.5 }, 
];

// Função para escolher uma recompensa com base na probabilidade
function getRandomReward() {
  const totalChance = rewardPool.reduce((sum, reward) => sum + reward.chance, 0);
  let random = Math.random() * totalChance;

  for (const reward of rewardPool) {
    if (random < reward.chance) {
      return reward;
    }
    random -= reward.chance;
  }
}

// Criando o tabuleiro do jogo
const gameBoard = document.getElementById("game-board");

for (let i = 0; i < 20; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-face", "back");
  cardBack.textContent = "Escolha uma carta";
  cardInner.appendChild(cardBack);
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-face", "front");
  cardInner.appendChild(cardFront);
  card.appendChild(cardInner);

  card.addEventListener("click", function handleClick() {
    if (cardInner.classList.contains("disabled")) return;
    cardInner.classList.add("disabled");
    cardInner.classList.add("flipped");

    setTimeout(() => {
      const reward = getRandomReward();
      gameBoard.style.display = "none";
      document.getElementById("reward-image").innerHTML = `<img src="${reward.image}" alt="Recompensa">`;
      document.getElementById("reward-modal").style.display = "flex";
      playSound(reward.image); // Toca o som correspondente
    }, 400);
  });

  gameBoard.appendChild(card);

}

const modalContent = document.querySelector("#reward-modal .modal-content");

document.getElementById("btn-carta-especial").addEventListener("click", () => {
  const modal = document.getElementById("reward-modal");
  const rewardImage = document.getElementById("reward-image");
  const rewardMessage = document.getElementById("reward-message");
  const audioEspecial = document.getElementById("audio-carta-especial");

  rewardImage.innerHTML = `<img src="images/carta-especial.png" alt="Carta Especial">`;
  
  
  modal.style.display = "flex";
  gameBoard.style.display = "none";

  // Remove e adiciona a classe para reiniciar a animação
  modalContent.classList.remove("animar");
  void modalContent.offsetWidth; // força reflow para resetar animação
  modalContent.classList.add("animar");

  audioEspecial.currentTime = 0;
  audioEspecial.play();
});



// Função para mostrar carta especial
document.getElementById("btn-carta-especial").addEventListener("click", () => {
  const modal = document.getElementById("reward-modal");
  const rewardImage = document.getElementById("reward-image");
  const rewardMessage = document.getElementById("reward-message");
  const audioEspecial = document.getElementById("audio-carta-especial");

  // Define a imagem e o texto
  rewardImage.innerHTML = `<img src="images/37 Clove pos morte.png" alt="Carta Especial">`;
  
  
  // Exibe modal
  modal.style.display = "flex";
  gameBoard.style.display = "none";

  // Toca som especial
  audioEspecial.currentTime = 0;
  audioEspecial.play();
});

//Botao de mudar verso
const versos = [
  'images/Verso.png',
  'images/Verso 2.png',
  'images/Verso.png'
];

let indiceAtual = 0;


const btnMudarVerso = document.getElementById("btn-mudar-verso");
const versosCartas = document.querySelectorAll(".card-face.front");

btnMudarVerso.addEventListener("click", () => {
  // Atualiza o índice para a próxima imagem
  indiceAtual = (indiceAtual + 1) % versos.length;

  // Atualiza o backgroundImage de todas as cartas
  versosCartas.forEach((verso) => {
    verso.style.backgroundImage = `url("${versos[indiceAtual]}")`;
  });
});




// Fechar o modal e reiniciar o jogo
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
  gameBoard.style.display = "grid";
});
