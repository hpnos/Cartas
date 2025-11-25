// ------------------------------------------------------------------
// CONFIGURAÇÃO DE VOLUME
// ------------------------------------------------------------------
const volumeSlider = document.getElementById("volume-slider");
let volumeGlobal = parseFloat(volumeSlider.value); 

volumeSlider.addEventListener("input", (e) => {
  volumeGlobal = parseFloat(e.target.value);
  if (audioAtual) {
    audioAtual.volume = volumeGlobal;
  }
});

// Variável para controlar o som
let audioAtual = null;

function tocarSomGerenciado(novoAudio) {
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }
  audioAtual = novoAudio;
  audioAtual.volume = volumeGlobal;
  audioAtual.play().catch(error => console.log("Erro ao reproduzir áudio:", error));
}

// LISTA DE IMAGENS
const imagens = [
  "images/mahito.png", "images/junkrat.png", "images/joel.png", "images/sunfire.png",
  "images/razzle.png", "images/apolo.png", "images/berry.png", "images/gus.png",
  "images/jh.png", "images/NewBofe.png", "images/futurista.png", "images/espadachim.png",
  "images/juno.png", "images/nahida.png", "images/dazzle.png", "images/furina.png",
  "images/tempestade.png", "images/vampira.png", "images/xilonen.png", "images/rhaenyra.png",
  "images/treta.png", "images/emma.png", "images/wicked.png", "images/fernanda.png",
  "images/alan.png", "images/hela.png", "images/marllus.png", "images/starboy.png",
  "images/gui.png", "images/rolf.png",
  "images/GarraY.png", "images/verso.png", "images/Verso 2.png", "images/Verso3.png",
  "images/telefone.png", "images/secreta1.png", "images/secreta2.png", "images/secreta4.png", 
  "images/razzledazzle.png", "images/ovo.png"
];

// Pré-carregamento
imagens.forEach(src => {
  const img = new Image();
  img.src = src;
});

// MAPA DE SONS
const sounds = {
  "images/mahito.png": new Audio("sounds/51.mp3"),
  "images/junkrat.png": new Audio("sounds/52.mp3"),
  "images/joel.png": new Audio("sounds/53.mp3"),
  "images/sunfire.png": new Audio("sounds/54.mp3"), 
  "images/razzle.png": new Audio("sounds/55.mp3"),
  "images/apolo.png": new Audio("sounds/56.mp3"),
  "images/berry.png": new Audio("sounds/57.mp3"),
  "images/gus.png": new Audio("sounds/58.mp3"),
  "images/jh.png": new Audio("sounds/59.mp3"),
  "images/NewBofe.png": new Audio("sounds/60.mp3"),
  "images/futurista.png": new Audio("sounds/61.mp3"),
  "images/espadachim.png": new Audio("sounds/62.mp3"),
  "images/juno.png": new Audio("sounds/63.mp3"),
  "images/nahida.png": new Audio("sounds/64.mp3"),
  "images/dazzle.png": new Audio("sounds/55.mp3"), 
  "images/furina.png": new Audio("sounds/66.mp3"),
  "images/tempestade.png": new Audio("sounds/67.mp3"),
  "images/vampira.png": new Audio("sounds/68.mp3"),
  "images/xilonen.png": new Audio("sounds/69.mp3"),
  "images/rhaenyra.png": new Audio("sounds/70.mp3"),
  "images/treta.png": new Audio("sounds/71.mp3"),
  "images/emma.png": new Audio("sounds/72.mp3"),
  "images/wicked.png": new Audio("sounds/73.mp3"),
  "images/fernanda.png": new Audio("sounds/74.mp3"),
  "images/alan.png": new Audio("sounds/75.mp3"),
  "images/hela.png": new Audio("sounds/76.mp3"),
  "images/starboy.png": new Audio("sounds/78.mp3"),
  "images/gui.png": new Audio("sounds/79.mp3"),
  "images/rolf.png": new Audio("sounds/80.mp3"),
  "images/marllus.png": new Audio("sounds/77.mp3"),
  
  // Extras e Secretas
  "images/razzledazzle.png": new Audio("sounds/55-botao.mp3"),
  "images/GarraY.png": new Audio("sounds/GarraY.mp3"),
  "images/secreta2.png": new Audio("sounds/secreta2.mp3"),
};

function playSound(image) {
  if (sounds[image]) {
    tocarSomGerenciado(sounds[image]);
  }
}

// ==========================================================
// POOL PRINCIPAL (JOGO NORMAL)
// ==========================================================
const rewardPool = [
  // === COMUNS ===
  { image: "images/mahito.png", chance: 4.58, rarity: 'Comum', fofoca: "Você fica com as duas cartas. Conto pra ninguém." },
  { image: "images/junkrat.png", chance: 4.58, rarity: 'Comum', type: 'rivalidad', fofoca: "Menina! Não é que foi usada duas bombas?!, escolha 2 números para explodir!" }, // RIVALIDADE (Adicionado)
  { image: "images/sunfire.png", chance: 4.58, rarity: 'Comum', fofoca: "Fiquei sabendo que a pessoa que foi anulada levou um time out junto!" },
  { image: "images/razzle.png", chance: 2.29, rarity: 'Comum', fofoca: "Você não sabe? O Dazzle morreu, o combo foi cortado!" },
  { image: "images/dazzle.png", chance: 2.29, rarity: 'Comum', fofoca: "Você não sabe? O Dazzle morreu, o combo foi cortado!" },
  { image: "images/berry.png", chance: 4.58, rarity: 'Comum', fofoca: "Fiquei sabendo que o Streamer teve q comer um docinho para relaxar e suportar tanto troll nesse jogo" },
  { image: "images/jh.png", chance: 4.58, rarity: 'Comum', fofoca: "É mas fiquei sabendo que esse amigo nao ligou pra sua mensagem, eu nao jogaria mais com ele, no lugar da declaração, escolha uma pessoa pra n jogar hoje." },
  { image: "images/nahida.png", chance: 4.58, rarity: 'Comum', fofoca: "Essa é capaz de tudo para sentir a energia da natureza, um jogador foi silenciado por falar das plantinhas! Dê um bom Timeout em um Jogador!" },
  { image: "images/furina.png", chance: 4.58, rarity: 'Comum', fofoca: "Os fãs adoram essa ai, começaram até usar estáticos dela nas redes sociais! 1 emote pros Subs da Furina disponível." },
  { image: "images/emma.png", chance: 4.58, rarity: 'Comum', type: 'rivalidad', fofoca: "Se a loja for por sorteio, pegue um papel e jogue fora, aos comandos da rainha." }, // RIVALIDADE (Adicionado)
  { image: "images/fernanda.png", chance: 4.58, rarity: 'Comum', fofoca: "Ela ainda escolheu uma música que ia tocar na live! Que absurdo!" },
  { image: "images/alan.png", chance: 4.58, rarity: 'Comum', fofoca: "Em outros tempos ele te ensinaria fazer uma poção para rir, aproveitar os stories e vamos de TBT, faça uma piada se for boa tire mais uma carta." },
  { image: "images/marllus.png", chance: 4.62, rarity: 'Comum', isFofoqueiro: true, fofoca: "Psiu! Uma carta secreta foi adicionada ao jogo!" },

  // === INCOMUNS ===
  { image: "images/joel.png", chance: 3.0, rarity: 'Incomum', type: 'rivalidad', fofoca: "Eu vi ele lutando pra sobreviver, mas tinha algo mais valioso lá. Você pode roubar cartas INCOMUM também." }, // RIVALIDADE (Adicionado)
  { image: "images/gus.png", chance: 3.0, rarity: 'Incomum', fofoca: "Eu vi ele lá com vários fantasmas, tinha para ele e mais alguém, escolha 1 jogador para ser protegido também." },
  { image: "images/secreta4.png", chance: 3.0, rarity: 'Secreta', fofoca: "Fiquei sabendo que é possível ver um pedaço do futuro daqui! + 10 minutos de live!" },
  { image: "images/espadachim.png", chance: 3.0, rarity: 'Incomum', type: 'rivalidad', fofoca: "Isso é balela, o jogador tem direito nenhum, ele fica sem comprar por 1 dia!" }, // RIVALIDADE (Adicionado)
  { image: "images/juno.png", chance: 3.0, rarity: 'Incomum', fofoca: "Essa ai é encrenca! deu um boost de velocidade no aliado e agora além disso, seu aliado possui altas chances de comprar na próxima loja, mesmo q ja tenha comprado, acredita?" },
  { image: "images/mavuika.png", chance: 3.0, fofoca: "Fiquei sabendo que mais recrutas são bem vindos, ririri." },  
  { image: "images/tempestade.png", chance: 3.0, rarity: 'Incomum', fofoca: "Levou e levou bonito! Além disso, 3 pessoas não podem comprar cartas com pontos de bot hoje." },
  { image: "images/starboy.png", chance: 3.0, rarity: 'Incomum', type: 'rivalidad', fofoca: "Essa ja foi vilã em uma temporada passada, boatos que mais uma pessoa foi escolhida, só que para não comprar por 1 loja." }, // RIVALIDADE
  { image: "images/gui.png", chance: 3.0, rarity: 'Incomum', fofoca: "Tio Gui está de bom humor hoje, esta carta vale como 2x pro COMBO." },

  // === RARAS ===
  { image: "images/apolo.png", chance: 2.75, rarity: 'Rara', fofoca: "Ela foi la, falou com o Streamer e ainda ganhou 1 carta de graça!" },
  { image: "images/vampira.png", chance: 2.75, rarity: 'Rara', type: 'rivalidad', fofoca: "O Roubo prejudicou muito o usuario que ele morreu, a carta q vc roubou o texto sai da coleção do jogador mas não vai para a sua." }, // RIVALIDADE
  { image: "images/xilonen.png", chance: 2.75, rarity: 'Rara', fofoca: "Fiquei sabendo que independente da música que estiver tocando, alguem ai não curtiu o som e fica sem comprar cartas por 1 dia." },
  { image: "images/treta.png", chance: 2.75, rarity: 'Rara', type: 'rivalidad', fofoca: "Você ganha 3 pontos de vantagem na categoria que escolher!" }, // RIVALIDADE
  { image: "images/wicked.png", chance: 2.75, rarity: 'Rara', fofoca: "Elas estão em alta menina, Versos das cartas temáticos até o final da live." },
  { image: "images/hela.png", chance: 2.75, rarity: 'Rara', fofoca: "Uma dica oculta revelada foi adicionada aos feitiços." },

  // === LENDÁRIAS ===
  { image: "images/NewBofe.png", chance: 0.5, rarity: 'Lendaria', fofoca: "Tava linda as anotações, eu vi até um adesivo no meio! Ta certo?! Vc ganha um adesivo junto." },
    // { image: "images/Rolf.png", chance: 0.5, fofoca: "Ou você pode pedir pro Streamer fazer 1 skin de uma carta de temporadas passadas do tema SI-FI ou Medieval, você ganha a carta." } // IMAGEM NÃO ENCONTRADA
  { image: "images/rhaenyra.png", chance: 0.5, rarity: 'Lendaria', fofoca: "Syrax veio acompanhado da rainha! \n\tSyrax - RIVALIDADE: Dracarys! é o fim, queimou até a morte, escolha alguém para não participar mais do evento.(mas ela ganha as cartas físicas que restou na carteira independente de número)." },
];

// ==========================================================
// POOL DA MINI LOJA (ELPHABA)
// ==========================================================
const miniShopRewardPool = [
  // > CARTA DO OVO - 10%
  { image: "images/ovo.png", chance: 10, rarity: 'Secreta', fofoca: "Um ovo misterioso..." },
  
  // > SECRETA 4 - 10%
  { image: "images/secreta4.png", chance: 10, rarity: 'Secreta', fofoca: "Fiquei sabendo que é possível ver um pedaço do futuro daqui!" },

  // > CARTAS RARAS - 70% (Dividido por 6 cartas = ~11.67% cada)
  { image: "images/treta.png", chance: 11.67, rarity: 'Rara', fofoca: "Você ganha 3 pontos de vantagem na categoria que escolher!" },
  { image: "images/apolo.png", chance: 11.67, rarity: 'Rara', fofoca: "Ela foi la, falou com o Streamer e ainda ganhou 1 carta de graça!" },
  { image: "images/xilonen.png", chance: 11.67, rarity: 'Rara', fofoca: "Fiquei sabendo que independente da música que estiver tocando, alguem ai não curtiu o som..." },
  { image: "images/hela.png", chance: 11.67, rarity: 'Rara', fofoca: "Uma dica oculta revelada foi adicionada aos feitiços." },
  { image: "images/wicked.png", chance: 11.67, rarity: 'Rara', fofoca: "Elas estão em alta menina, Versos das cartas temáticos até o final da live." },
  { image: "images/vampira.png", chance: 11.67, rarity: 'Rara', fofoca: "O Roubo prejudicou muito o usuario..." },

  // > CARTAS LENDÁRIAS 10% (Dividido por 3 cartas = ~3.33% cada)
  { image: "images/NewBofe.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Tava linda as anotações, eu vi até um adesivo no meio!" },
  { image: "images/rhaenyra.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Syrax veio acompanhado da rainha!" },
  { image: "images/rolf.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Ou você pode pedir pro Streamer fazer 1 skin..." },

  // > CARTAS SECRETAS 10% (Dividido por 2 cartas = 5% cada)
  { image: "images/secreta1.png", chance: 5, rarity: 'Secreta', fofoca: "Carta dos ratos secreta!" },
  { image: "images/secreta2.png", chance: 5, rarity: 'Secreta', fofoca: "Carta Xilonen Rave!" },
];


// Variável para rastrear se a ÚLTIMA carta foi rivalidade
let ultimaCartaFoiRivalidade = false;

// Função de Sorteio Padrão
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

// Função de Sorteio da Mini Loja
function getMiniShopReward() {
  const totalChance = miniShopRewardPool.reduce((sum, reward) => sum + reward.chance, 0);
  let random = Math.random() * totalChance;

  for (const reward of miniShopRewardPool) {
    if (random < reward.chance) {
      return reward;
    }
    random -= reward.chance;
  }
}

const gameBoard = document.getElementById("game-board");
const modalContent = document.querySelector("#reward-modal .modal-content");

let proximaCartaTemFofoca = false;

const fofocaContainer = document.getElementById("fofoca-container");
const fofocaText = document.getElementById("fofoca-text");
const btnElphaba = document.getElementById("btn-elphaba-passiva");
const miniLojaContainer = document.getElementById("mini-loja-container");
const miniLojaGrid = document.getElementById("mini-loja-grid");


for (let i = 0; i < 24; i++) {
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
      
      card.style.visibility = "hidden";
      cardInner.innerHTML = '';

      // Resetar displays do modal
      fofocaContainer.style.display = "none";
      btnElphaba.style.display = "none";
      miniLojaContainer.style.display = "none";
      document.getElementById("reward-image").style.display = "block";

      // --- LÓGICA DA FOFOCA ---
      if (proximaCartaTemFofoca && (reward.fofoca || reward.fofoca === "")) { 
        fofocaText.innerHTML = reward.fofoca.replace(/\n/g, '<br>'); 
        fofocaContainer.style.display = "block"; 
        proximaCartaTemFofoca = false; 
      }

      if (reward.isFofoqueiro) {
        proximaCartaTemFofoca = true; 
      }

      // --- LÓGICA DA ELPHABA (WICKED) ---
      // Se a carta é Wicked (imagem contém wicked) E a anterior foi Rivalidade
      if (reward.image.includes("wicked") && ultimaCartaFoiRivalidade) {
        btnElphaba.style.display = "block"; // Mostra o botão
      }

      // Atualiza o status para a próxima jogada
      if (reward.type === 'rivalidad') {
        ultimaCartaFoiRivalidade = true;
      } else {
        ultimaCartaFoiRivalidade = false;
      }

      document.getElementById("reward-image").innerHTML = `<img src="${reward.image}" alt="Recompensa">`;
      document.getElementById("reward-modal").style.display = "flex";
      
      modalContent.classList.remove("animar");
      void modalContent.offsetWidth;
      modalContent.classList.add("animar");

      playSound(reward.image);
    }, 400);
  });

  gameBoard.appendChild(card);
}

// --- LÓGICA DO BOTÃO DA ELPHABA (MINI LOJA) ---
btnElphaba.addEventListener("click", () => {
  document.getElementById("reward-image").style.display = "none";
  fofocaContainer.style.display = "none";
  btnElphaba.style.display = "none";
  
  miniLojaContainer.style.display = "block";
  miniLojaGrid.innerHTML = "";

  for(let j=0; j<4; j++) {
    const miniCard = document.createElement("div");
    miniCard.classList.add("mini-card");
    
    miniCard.addEventListener("click", () => {
      const rareReward = getMiniShopReward(); 
      
      miniLojaContainer.style.display = "none";
      document.getElementById("reward-image").style.display = "block";
      document.getElementById("reward-image").innerHTML = `<img src="${rareReward.image}" alt="Recompensa Rara">`;
      
      if(rareReward.fofoca) {
        fofocaText.innerHTML = rareReward.fofoca.replace(/\n/g, '<br>');
        fofocaContainer.style.display = "block";
      }

      modalContent.classList.remove("animar");
      void modalContent.offsetWidth;
      modalContent.classList.add("animar");
      playSound(rareReward.image);
    });

    miniLojaGrid.appendChild(miniCard);
  }
});


// --- BOTÕES ESPECIAIS ---

// Botão RAZZLE (R)
document.getElementById("btn-show-razzle-card").addEventListener("click", () => {
  resetModal();
  const rewardImage = document.getElementById("reward-image");
  rewardImage.innerHTML = `<img src="images/razzledazzle.png" alt="Razzle Card">`;
  showModal();
  const botaoSom = new Audio("sounds/55-botao.mp3");
  tocarSomGerenciado(botaoSom);
});

// Botão SECRETA 2 (S2)
document.getElementById("btn-show-secreta2").addEventListener("click", () => {
  resetModal();
  const rewardImage = document.getElementById("reward-image");
  rewardImage.innerHTML = `<img src="images/secreta2.png" alt="Secreta 2">`;
  showModal();
  const somSecreta2 = new Audio("sounds/secreta2.mp3");
  tocarSomGerenciado(somSecreta2);
});

// Botão SECRETA 1 (S1)
document.getElementById("btn-show-secreta1").addEventListener("click", () => {
  resetModal();
  const rewardImage = document.getElementById("reward-image");
  rewardImage.innerHTML = `<img src="images/secreta1.png" alt="Secreta 1">`;
  showModal();
  const somSecreta = new Audio("sounds/secreta1.mp3");
  tocarSomGerenciado(somSecreta);
});

// Funções auxiliares para botões especiais
function resetModal() {
  const modal = document.getElementById("reward-modal");
  fofocaContainer.style.display = "none"; 
  btnElphaba.style.display = "none";
  miniLojaContainer.style.display = "none";
  document.getElementById("reward-image").style.display = "block";
  return modal;
}

function showModal() {
  const modal = document.getElementById("reward-modal");
  modal.style.display = "flex";
  modalContent.classList.remove("animar");
  void modalContent.offsetWidth; 
  modalContent.classList.add("animar");
}


//Botao de mudar verso
const versos = [
  'images/verso.png',
  'images/Verso 2.png',
  'images/Verso3.png',
  'images/Verso 4.png',
  'images/Verso 5.png',
  'images/Verso 6.png',
  'images/Verso 7.png',
];

let indiceAtual = 0;

const btnMudarVerso = document.getElementById("btn-mudar-verso");
const versosCartas = document.querySelectorAll(".card-face.front");

btnMudarVerso.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % versos.length;
  versosCartas.forEach((verso) => {
    verso.style.backgroundImage = `url("${versos[indiceAtual]}")`;
  });
});

// Fechar o modal e reiniciar o jogo
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
});
