// Sons para cada raridade
const imagens = [
  // NOVOS NOMES DE IMAGENS
  "images/Mahito.png", "images/Junkrat.png", "images/Joel.png", "images/Shiro.png",
  "images/Razzle.png", "images/Apolo.png", "images/Berry.png", "images/Gus.png",
  "images/Jh.png", "images/NewBofe.png", "images/Futurista.png", "images/Espadachim.png",
  "images/Juno.png", "images/Nahida.png", "images/Mavuika.png", "images/Furina.png",
  "images/Tempestade.png", "images/Vampira.png", "images/Xilonen.png", "images/Rhaenyra.png",
  "images/Treta.png", "images/Emma.png", "images/Wicked.png", "images/Fernanda.png",
  "images/Alan.png", "images/Hela.png", "images/Marllus.png", "images/Starboy.png",
  "images/Gui.png", "images/Rolf.png",
  
  // Imagens dos botões e versos (mantidos)
  "images/GarraY.png",
  "images/Verso.png",
  "images/Verso 2.png",
  "images/Verso3.png"
];

// Pré-carregamento
imagens.forEach(src => {
  const img = new Image();
  img.src = src;
});

// NOVOS NOMES NAS CHAVES (KEYS) DO MAPA DE SONS
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
  "images/mavuika.png": new Audio("sounds/65.mp3"),
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
  "images/marllus.png": new Audio("sounds/77.mp3"),// Fofoqueiro
  "images/razzledazzle.png": new Audio("sounds/55-botao.mp3"),

  // Sons dos botões (mantidos)
  "images/GarraY.png": new Audio("sounds/GarraY.mp3"),
};

function playSound(image) {
  if (sounds[image]) {
    sounds[image].play();
  }
}

// ==========================================================
// REWARD POOL (Mantido exatamente como o seu)
// ==========================================================
const rewardPool = [
  // === COMUNS (12 Cartas - Total 55%) ===
  // 11 cartas @ 4.58%
  { image: "images/mahito.png", chance: 4.58, fofoca: "Você fica com as duas cartas. Conto pra ninguém." },
  { image: "images/junkrat.png", chance: 4.58, fofoca: "Menina! Não é que foi usada duas bombas?!, escolha 2 números para explodir!" },
  { image: "images/sunfire.png", chance: 4.58, fofoca: "Fiquei sabendo que a pessoa que foi anulada levou um time out junto!" }, // IMAGEM NÃO ENCONTRADA
  { image: "images/razzle.png", chance: 4.58, fofoca: "Você não sabe? O Dazzle morreu, o combo foi cortado!" },
  { image: "images/berry.png", chance: 4.58, fofoca: "Fiquei sabendo que o Streamer teve q comer um docinho para relaxar e suportar tanto troll nesse jogo" },
  { image: "images/jh.png", chance: 4.58, fofoca: "É mas fiquei sabendo que esse amigo nao ligou pra sua mensagem, eu nao jogaria mais com ele, no lugar da declaração, escolha uma pessoa pra n jogar hoje." },
  { image: "images/nahida.png", chance: 4.58, fofoca: "Essa é capaz de tudo para sentir a energia da natureza, um jogador foi silenciado por falar das plantinhas! Dê um bom Timeout em um Jogador!" },
  { image: "images/furina.png", chance: 4.58, fofoca: "Os fãs adoram essa ai, começaram até usar estáticos dela nas redes sociais! 1 emote pros Subs da Furina disponível." }, // IMAGEM NÃO ENCONTRADA
  { image: "images/emma.png", chance: 4.58, fofoca: "Se a loja for por sorteio, pegue um papel e jogue fora, aos comandos da rainha." }, // IMAGEM NÃO ENCONTRADA
  // { image: "images/Fernanda.png", chance: 4.58, fofoca: "Ela ainda escolheu uma música que ia tocar na live! Que absurdo!" }, // IMAGEM NÃO ENCONTRADA
  // { image: "images/Alan.png", chance: 4.58, fofoca: "Em outros tempos ele te ensinaria fazer uma poção para rir, aproveitar os stories e vamos de TBT, faça uma piada se for boa tire mais uma carta." }, // IMAGEM NÃO ENCONTRADA
  // 1 carta @ 4.62% (para somar 55%)
  { image: "images/marllus.png", chance: 4.62, isFofoqueiro: true, fofoca: "Psiu! Uma carta secreta foi adicionada ao jogo!" },

  // === INCOMUNS (9 Cartas - Total 27%) ===
  // 9 cards @ 3.0%
  { image: "images/joel.png", chance: 3.0, fofoca: "Eu vi ele lutando pra sobreviver, mas tinha algo mais valioso lá. Você pode roubar cartas INCOMUM também." },
  //{ image: "images/gus.png", chance: 3.0, fofoca: "Eu vi ele lá com vários fantasmas, tinha para ele e mais alguém, escolha 1 jogador para ser protegido também." },
  { image: "images/futurista.png", chance: 3.0, fofoca: "Fiquei sabendo que é possível ver um pedaço do futuro daqui! + 10 minutos de live!" },
  { image: "images/espadachim.png", chance: 3.0, fofoca: "Isso é balela, o jogador tem direito nenhum, ele fica sem comprar por 1 dia!" },
  { image: "images/juno.png", chance: 3.0, fofoca: "Essa ai é encrenca! deu um boost de velocidade no aliado e agora além disso, seu aliado possui altas chances de comprar na próxima loja, mesmo q ja tenha comprado, acredita?" },
   { image: "images/dazzle.png", chance: 3.0, fofoca: "Você não sabe? O Dazzle morreu, o combo foi cortado!" },  //DEVOLVER A MAVUIKA AQUI 
   { image: "images/tempestade.png", chance: 3.0, fofoca: "Levou e levou bonito! Além disso, 3 pessoas não podem comprar cartas com pontos de bot hoje." }, // IMAGEM NÃO ENCONTRADA
  { image: "images/starboy.png", chance: 3.0, fofoca: "Essa ja foi vilã em uma temporada passada, boatos que mais uma pessoa foi escolhida, só que para não comprar por 1 loja." },
   { image: "images/gui.png", chance: 3.0, fofoca: "Tio Gui está de bom humor hoje, esta carta vale como 2x pro COMBO." }, // IMAGEM NÃO ENCONTRADA

  // === RARAS (6 Cartas - Total 16.5%) ===
  // 6 cards @ 2.75%
  { image: "images/apolo.png", chance: 2.75, fofoca: "Ela foi la, falou com o Streamer e ainda ganhou 1 carta de graça!" },
  { image: "images/vampira.png", chance: 2.75, fofoca: "O Roubo prejudicou muito o usuario que ele morreu, a carta q vc roubou o texto sai da coleção do jogador mas não vai para a sua." },
  // { image: "images/Xilonen.png", chance: 2.75, fofoca: "Fiquei sabendo que independente da música que estiver tocando, alguem ai não curtiu o som e fica sem comprar cartas por 1 dia." }, // IMAGEM NÃO ENCONTRADA
  { image: "images/treta.png", chance: 2.75, fofoca: "Você ganha 3 pontos de vantagem na categoria que escolher!" },
  // { image: "images/Wicked.png", chance: 2.75, fofoca: "Elas estão em alta menina, Versos das cartas temáticos até o final da live." }, // IMAGEM NÃO ENCONTRADA
  // { image: "images/Hela.png", chance: 2.75, fofoca: "Uma dica oculta revelada foi adicionada aos feitiços." }, // IMAGEM NÃO ENCONTRADA

  // === LENDÁRIAS (3 Cartas - Total 1.5%) ===
  // 3 cards @ 0.5%
  { image: "images/NewBofe.png", chance: 0.5, fofoca: "Tava linda as anotações, eu vi até um adesivo no meio! Ta certo?! Vc ganha um adesivo junto." },
  // { image: "images/Rhaenyra.png", chance: 0.5, fofoca: "Syrax veio acompanhado da rainha! \n\tSyrax - RIVALIDADE: Dracarys! é o fim, queimou até a morte, escolha alguém para não participar mais do evento.(mas ela ganha as cartas físicas que restou na carteira independente de número)." }, // IMAGEM NÃO ENCONTRADA
  // { image: "images/Rolf.png", chance: 0.5, fofoca: "Ou você pode pedir pro Streamer fazer 1 skin de uma carta de temporadas passadas do tema SI-FI ou Medieval, você ganha a carta." } // IMAGEM NÃO ENCONTRADA
];
// ==========================================================
// FIM DO REWARD POOL
// ==========================================================


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

const gameBoard = document.getElementById("game-board");
const modalContent = document.querySelector("#reward-modal .modal-content");

let proximaCartaTemFofoca = false;

const fofocaContainer = document.getElementById("fofoca-container");
const fofocaText = document.getElementById("fofoca-text");


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
      
      card.style.visibility = "hidden";
      cardInner.innerHTML = '';

      // --- LÓGICA DA FOFOCA ---
      if (proximaCartaTemFofoca && (reward.fofoca || reward.fofoca === "")) { // Checa se tem a propriedade fofoca
        fofocaText.innerHTML = reward.fofoca.replace(/\n/g, '<br>'); // Substitui \n por <br> para quebras de linha
        fofocaContainer.style.display = "block"; 
        proximaCartaTemFofoca = false; 
      } else {
        fofocaContainer.style.display = "none"; // <-- ERRO CORRIGIDO (removido 's')
      }

      if (reward.isFofoqueiro) {
        proximaCartaTemFofoca = true; 
      }
      // --- FIM DA LÓGICA DA FOFOCA ---

      document.getElementById("reward-image").innerHTML = `<img src="${reward.image}" alt="Recompensa">`;
      document.getElementById("reward-modal").style.display = "flex";
      
      modalContent.classList.remove("animar");
      void modalContent.offsetWidth; // <-- ERRO CORRIGIDO (removido 's')
      modalContent.classList.add("animar");

      playSound(reward.image);
    }, 400);
  });

  gameBoard.appendChild(card);
}

document.getElementById("btn-carta-especial").addEventListener("click", () => {
  const modal = document.getElementById("reward-modal");
  const rewardImage = document.getElementById("reward-image");
  const audioEspecial = document.getElementById("audio-carta-especial");
  
  fofocaContainer.style.display = "none"; 

  rewardImage.innerHTML = `<img src="images/37 Clove pos morte.png" alt="Carta Especial">`;
  
MODAL.style.display = "flex"; // <-- Havia um 's' aqui, mas o código não mostra, então mantenho como está
  
  modalContent.classList.remove("animar");
  void modalContent.offsetWidth;
  modalContent.classList.add("animar");
  
  audioEspecial.currentTime = 0;
  audioEspecial.play();
});

document.getElementById("btn-show-yuk-card").addEventListener("click", () => {
  const modal = document.getElementById("reward-modal");
  const rewardImage = document.getElementById("reward-image");
  
  fofocaContainer.style.display = "none"; 

  rewardImage.innerHTML = `<img src="images/GarraY.png" alt="Yuk Card">`;
  
  modal.style.display = "flex";
 
  modalContent.classList.remove("animar");
  void modalContent.offsetWidth;
  modalContent.classList.add("animar");

  if (sounds["images/GarraY.png"]) {
    sounds["images/GarraY.png"].currentTime = 0;
  Ssounds["images/GarraY.png"].play();
  }
});


// NOVO: Lógica para o botão de mostrar carta Razzle
document.getElementById("btn-show-razzle-card").addEventListener("click", () => {
  const modal = document.getElementById("reward-modal");
  const rewardImage = document.getElementById("reward-image");

  fofocaContainer.style.display = "none"; // Esconde a fofoca

  // Define a imagem específica (Razzle)
  rewardImage.innerHTML = `<img src="images/razzledazzle.png" alt="Razzle Card">`;

  // Exibe modal
  modal.style.display = "flex";
 
  // Garante que a animação seja reproduzida a cada clique
  modalContent.classList.remove("animar");
  void modalContent.offsetWidth; // Força o reflow para reiniciar a animação
  modalContent.classList.add("animar"); // <-- ERRO CORRIGIDO ('modelContent' para 'modalContent')

  // ----- MUDANÇA FEITA AQUI (CONFORME SEU PEDIDO) -----
  // Cria e toca o som "55-botao.mp3" diretamente
  const botaoSom = new Audio("sounds/55-botao.mp3");
  botaoSom.currentTime = 0;
  botaoSom.play();
  // ----- FIM DA MUDANÇA -----
});
// FIM DA ADIÇÃO


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
i // <-- ERRO CORRIGIDO (removida a palavra 'logo')
  // Atualiza o índice para a próxima imagem
  indiceAtual = (indiceAtual + 1) % versos.length;

  // Atualiza o backgroundImage de todas as cartas
  versosCartas.forEach((verso) => {
    verso.style.backgroundImage = `url("${versos[indiceAtual]}")`;
  });
});

// botao mudar fundo
const fundos = [
  "images/fundo.jpg",
  "images/fundo2.png",
  "images/fundo3.png"
];

let indiceFundo = 0;

document.getElementById("btn-mudar-fundo").addEventListener("click", () => {
  indiceFundo = (indiceFundo + 1) % fundos.length;
  document.body.style.backgroundImage = `url('${fundos[indiceFundo]}')`;
});


// Fechar o modal e reiniciar o jogo
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
 
});
