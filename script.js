// Sons para cada raridade
const sounds = {
  "images/reward1.png": new Audio("teste.mp3"),  // Som para comuns
  "images/reward2.png": new Audio("laught-muehehehe.mp3"),
  "images/reward3.png": new Audio("among-us-role-reveal-sound.mp3"),
  "images/reward4.png": new Audio("sound_uncommon.mp3"), // Som para incomuns
  "images/reward5.png": new Audio("sound_rare.mp3"),     // Som para raros
  "images/reward6.png": new Audio("sound_legendary.mp3") // Som para lendários
};

// Função para tocar o som da raridade correspondente
function playSound(image) {
  if (sounds[image]) {
    sounds[image].play();
  }
}

// Definição das recompensas com probabilidades ajustadas
const rewards = [];
const addRewards = (image, percentage) => {
  const count = Math.round((percentage / 100) * 100);
  for (let i = 0; i < count; i++) {
    rewards.push({ image });
  }
};

// Definição das porcentagens
addRewards("images/reward1.png", 47);
addRewards("images/reward2.png", 47);
addRewards("images/reward3.png", 47);
addRewards("images/reward4.png", 28);
addRewards("images/reward5.png", 18);
addRewards("images/reward6.png", 7);

// Embaralha as recompensas para garantir aleatoriedade
function shuffleRewards(rewardsArray) {
  for (let i = rewardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rewardsArray[i], rewardsArray[j]] = [rewardsArray[j], rewardsArray[i]];
  }
  return rewardsArray;
}

const shuffledRewards = shuffleRewards([...rewards]);
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
      gameBoard.style.display = "none";
      document.getElementById("reward-image").innerHTML = `<img src="${shuffledRewards[i].image}" alt="Recompensa">`;
      document.getElementById("reward-modal").style.display = "flex";
      playSound(shuffledRewards[i].image); // Toca o som correspondente
    }, 400);
  });

  gameBoard.appendChild(card);
}

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
  gameBoard.style.display = "grid";
});
