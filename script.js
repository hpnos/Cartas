// Sons para cada raridade
const sounds = {
  "images/reward1.png": new Audio("sounds/Targaryen.mp3"),  
  "images/reward2.png": new Audio("sounds/Cluber.mp3"),
  "images/reward3.png": new Audio("sounds/Drestranho.mp3"),
  "images/reward4.png": new Audio("sounds/Rolf.mp3"), 
  "images/reward5.png": new Audio("sounds/Maribella.mp3"),     
  "images/reward6.png": new Audio("sounds/Cassiel.mp3"),
  "images/reward7.png": new Audio("sounds/ironmanecap.mp3"),
  "images/reward8.png": new Audio("sounds/Mistico.mp3"),
  "images/reward9.png": new Audio("sounds/RakaneXayah.mp3"),
  "images/reward10.png": new Audio("sounds/PorinhodoMar.mp3"),
  "images/reward11.png": new Audio("sounds/Kairos.mp3"),
  "images/reward12.png": new Audio("sounds/Nicky.mp3"),
  "images/reward13.png": new Audio("sounds/Felicarujo.mp3"),
  "images/reward14.png": new Audio("sounds/MaribellaOrixa.mp3"),
  "images/reward15.png": new Audio("sounds/Dollynho.mp3"),
  "images/reward16.png": new Audio("sounds/Sylveon.mp3"),
  "images/reward17.png": new Audio("sounds/Moira.mp3"),
  "images/reward18.png": new Audio("sounds/Ravel.mp3"),
  "images/reward19.png": new Audio("sounds/Feraligatr.mp3"),
  "images/reward20.png": new Audio("sounds/Takinho.mp3"),
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
  { image: "images/23 transformers.png", chance: 7 },
  { image: "images/24 Gabriel.png", chance: 8 }, 
  { image: "images/25 Kratos.png", chance: 8 }, 
  { image: "images/26 Karma.png", chance: 7 }, 
  { image: "images/28 Mutano.png", chance: 7 }, 
  { image: "images/34 crazy.png", chance: 7 }, 
  { image: "images/35 speak.png", chance: 7 },
  { image: "images/39 datena.png", chance: 7 }, 
  { image: "images/40 galaxia.png", chance: 7 }, 
  // cartas que serao enviadas dps{ image: "images/44 morgan.png", chance: 7 }, // 44
  //cartas que serao enviadas dps { image: "images/42 sylvie.png", chance: 7 }, // 42

  // Incomuns (26% no total → 6 recompensas, cada uma com 4.33%)
  { image: "images/22 Cartomante.png", chance: 4.33 },
  { image: "images/27 Steven.png", chance: 4.33 },
  { image: "images/29 widow.png", chance: 4.33 },
  { image: "images/30 badice.png", chance: 4.33 }, 
  { image: "images/32 Engana.png", chance: 4.33 }, 
  { image: "images/32 37 clove.png", chance: 4.33 }, 
  { image: "images/32 33 deolane.png", chance: 4.33 }, 
  //{ image: "images/32 Engana.png", chance: 4.33 }, 
  //{ image: "images/32 Engana.png", chance: 4.33 }, 

  // Raras (15% no total → 4 recompensas, cada uma com 3.75%)
  { image: "images/31 venenoso.png", chance: 3.69 }, 
  //{ image: "images/reward11.png", chance: 3.75 }, 
  //{ image: "images/reward16.png", chance: 3.75 },
  //{ image: "images/reward19.png", chance: 3.75 }, 
  //{ image: "images/reward19.png", chance: 3.75 }, 
  //{ image: "images/reward19.png", chance: 3.75 }, 

  // Lendárias (1% no total → 2 recompensas, cada uma com 0.5%)
  { image: "images/21 Dogou.png", chance: 0.5 }, 
  { image: "images/38 ravel.png", chance: 0.5 }, 
  //{ image: "images/38 ravel.png", chance: 0.5 }, 
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

// Fechar o modal e reiniciar o jogo
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
  gameBoard.style.display = "grid";
});
