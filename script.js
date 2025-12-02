// ------------------------------------------------------------------
// CONFIGURAÇÃO DE VOLUME
// ------------------------------------------------------------------
const volumeSlider = document.getElementById("volume-slider");
let volumeGlobal = parseFloat(volumeSlider.value); 
let audioAtual = null; // Variável para controlar o som

if(volumeSlider) {
  volumeSlider.addEventListener("input", (e) => {
    volumeGlobal = parseFloat(e.target.value);
    if (audioAtual) {
      audioAtual.volume = volumeGlobal;
    }
  });
}

function tocarSomGerenciado(novoAudio) {
  if (!novoAudio) return; 

  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }
  audioAtual = novoAudio;
  audioAtual.volume = volumeGlobal;
  
  audioAtual.play().catch(error => console.warn("Aviso de Áudio:", error));
}

// ==========================================================
// LISTA DE IMAGENS (Usada para pré-carregamento)
// MANTIDA IDÊNTICA AO ORIGINAL PARA FINS DE PRÉ-CARREGAMENTO
// ==========================================================
const imagens = [
  "images/mahito.png", "images/junkrat.png", "images/joel.png", "images/sunfire.png",
  "images/razzle.png", "images/apolo.png", "images/berry.png", "images/gus.png",
  "images/malenia.png", "images/marllus.png", "images/newbofe.png", "images/rivalidad.png",
  "images/rhaenyra.png", "images/secreta1.png", "images/secreta2.png", "images/secreta4.png",
  "images/split.png", "images/treta.png", "images/vampira.png", "images/wicked.png",
  "images/xilonen.png", "images/hela.png", "images/ovo.png", 
  // Skins
  "images/mahitoskin.png", "images/gusskin.png", "images/jhskin.png", "images/vampiraskin.png",
  // Cartões Especiais
  "images/razzledazzle.png"
];

// MAPA DE SONS
const sounds = {
  "images/mahito.png": new Audio("sounds/53.mp3"),
  "images/junkrat.png": new Audio("sounds/52.mp3"),
  "images/joel.png": new Audio("sounds/54.mp3"),
  "images/sunfire.png": new Audio("sounds/56.mp3"),
  "images/razzle.png": new Audio("sounds/55.mp3"),
  "images/apolo.png": new Audio("sounds/57.mp3"),
  "images/berry.png": new Audio("sounds/60.mp3"),
  "images/gus.png": new Audio("sounds/61.mp3"),
  "images/malenia.png": new Audio("sounds/62.mp3"),
  "images/newbofe.png": new Audio("sounds/63.mp3"),
  "images/rivalidad.png": new Audio("sounds/64.mp3"),
  "images/rhaenyra.png": new Audio("sounds/65.mp3"),
  "images/split.png": new Audio("sounds/66.mp3"),
  "images/treta.png": new Audio("sounds/67.mp3"),
  "images/vampira.png": new Audio("sounds/69.mp3"),
  "images/wicked.png": new Audio("sounds/70.mp3"),
  "images/xilonen.png": new Audio("sounds/71.mp3"),
  "images/hela.png": new Audio("sounds/72.mp3"),
  "images/ovo.png": new Audio("sounds/73.mp3"),
  "images/marllus.png": new Audio("sounds/77.mp3"),
  
  //Skins
  "images/mahitoskin.png": new Audio("sounds/51.mp3"),
  "images/gusskin.png": new Audio("sounds/58.mp3"),
  "images/jhskin.png": new Audio("sounds/59.mp3"),
  "images/vampiraskin.png": new Audio("sounds/68.mp3"),

  // Extras e Secretas
  "images/razzledazzle.png": new Audio("sounds/55-botao.mp3"),
  "images/secreta4.png": new Audio("sounds/secreta4.mp3"),
  "images/secreta2.png": new Audio("sounds/secreta2.mp3"),
  // ✅ CORREÇÃO: Adicionando o som para a carta secreta 1
  "images/secreta1.png": new Audio("sounds/secreta1.mp3"), 
};

function playSound(image) {
  const audio = sounds[image];
  if (audio) {
    tocarSomGerenciado(audio.cloneNode()); // Clona para poder tocar rápido sem esperar o anterior
  } else {
    console.warn(`Nenhum som encontrado para a imagem: ${image}`);
  }
}


// ==========================================================
// POOL PRINCIPAL 
// ==========================================================
const rewardPool = [
  // ... (Pool Principal mantido idêntico) ...
  { image: "images/mahito.png", chance: 15, rarity: 'Comum' },
  { image: "images/junkrat.png", chance: 12.5, rarity: 'Comum' },
  { image: "images/joel.png", chance: 12.5, rarity: 'Comum' },
  { image: "images/sunfire.png", chance: 12.5, rarity: 'Comum' },
  { image: "images/razzle.png", chance: 12.5, rarity: 'Comum' },
  { image: "images/apolo.png", chance: 6.25, rarity: 'Rara' },
  { image: "images/berry.png", chance: 6.25, rarity: 'Rara' },
  { image: "images/gus.png", chance: 6.25, rarity: 'Rara' },
  { image: "images/malenia.png", chance: 6.25, rarity: 'Rara' },
  { image: "images/marllus.png", chance: 6.25, rarity: 'Rara' },
  { image: "images/newbofe.png", chance: 1, rarity: 'Lendaria' },
  { image: "images/rhaenyra.png", chance: 1, rarity: 'Lendaria' },
  { image: "images/rivalidad.png", chance: 1, rarity: 'Lendaria', type: 'rivalidad' },
  { image: "images/split.png", chance: 1, rarity: 'Lendaria' },
  { image: "images/treta.png", chance: 1, rarity: 'Lendaria' },
  { image: "images/vampira.png", chance: 1, rarity: 'Lendaria', isFofoqueiro: true },
  { image: "images/wicked.png", chance: 1, rarity: 'Lendaria' },
  { image: "images/xilonen.png", chance: 1, rarity: 'Lendaria' },
];

// ==========================================================
// POOL DA MINI LOJA 
// ==========================================================
const miniShopRewardPool = [
  { image: "images/ovo.png", chance: 10, rarity: 'Secreta', fofoca: "Um ovo misterioso..." },
  { image: "images/secreta4.png", chance: 10, rarity: 'Secreta', fofoca: "Fiquei sabendo que é possível ver um pedaço do futuro daqui!" },
  { image: "images/treta.png", chance: 11.67, rarity: 'Rara', fofoca: "Você ganha 3 pontos de vantagem na categoria que escolher!" },
  { image: "images/apolo.png", chance: 11.67, rarity: 'Rara', fofoca: "Ela foi la, falou com o Streamer e ainda ganhou 1 carta de graça!" },
  { image: "images/xilonen.png", chance: 11.67, rarity: 'Rara', fofoca: "Fiquei sabendo que independente da música que estiver tocando, alguem ai não curtiu o som..." },
  { image: "images/hela.png", chance: 11.67, rarity: 'Rara', fofoca: "Uma dica oculta revelada foi adicionada aos feitiços." },
  { image: "images/wicked.png", chance: 11.67, rarity: 'Rara', fofoca: "Elas estão em alta menina, Versos das cartas temáticos até o final da live." },
  { image: "images/vampira.png", chance: 11.67, rarity: 'Rara', fofoca: "O Roubo prejudicou muito o usuario..." },
  { image: "images/NewBofe.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Tava linda as anotações, eu vi até um adesivo no meio!" },
  { image: "images/rhaenyra.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Syrax veio acompanhado da rainha!" },
  // ✅ CORREÇÃO: Usando split.png, presumindo que rolf.png não existe
  { image: "images/split.png", chance: 3.33, rarity: 'Lendaria', fofoca: "Ou você pode pedir pro Streamer fazer 1 skin..." }, 
  { image: "images/secreta1.png", chance: 5, rarity: 'Secreta', fofoca: "Carta dos ratos secreta!" },
  { image: "images/secreta2.png", chance: 5, rarity: 'Secreta', fofoca: "Carta Xilonen Rave!" },
];

// ==========================================================
// POOL DE SKINS — MINI LOJA SPLIT
// ==========================================================
const splitShopRewardPool = [
  { image: "images/mahitoskin.png", chance: 25, rarity: 'Skin' },
  { image: "images/gusskin.png", chance: 25, rarity: 'Skin' },
  { image: "images/jhskin.png", chance: 25, rarity: 'Skin' },
  { image: "images/vampiraskin.png", chance: 25, rarity: 'Skin' },
];


// Funções de Sorteio (Mantidas idênticas e corretas)
function getRandomReward(pool = rewardPool) {
  let totalChance = pool.reduce((sum, item) => sum + item.chance, 0);
  let rand = Math.random() * totalChance;
  
  for (const item of pool) {
    if (rand < item.chance) {
      return item;
    }
    rand -= item.chance;
  }
  
  // Retorna o último item por segurança se o rand for 0 ou se houver erro de float
  return pool[pool.length - 1]; 
}

function getMiniShopReward() {
    return getRandomReward(miniShopRewardPool);
}

function getSplitShopReward() {
    return getRandomReward(splitShopRewardPool);
}


// Variáveis de Estado
let ultimaCartaFoiRivalidade = false;
let proximaCartaTemFofoca = false;

// Elementos DOM
const gameBoard = document.getElementById("game-board");
const modalContent = document.querySelector("#reward-modal .modal-content");
const fofocaContainer = document.getElementById("fofoca-container");
const fofocaText = document.getElementById("fofoca-text");
const btnElphaba = document.getElementById("btn-elphaba-passiva");
const miniLojaContainer = document.getElementById("mini-loja-container");
const miniLojaGrid = document.getElementById("mini-loja-grid");


// ==========================================================
// FUNÇÃO UNIFICADA PARA MOSTRAR O MODAL (Refinamento)
// ==========================================================
function resetAndShowModal(reward) {
    // 1. Resetar displays no modal
    if (fofocaContainer) fofocaContainer.style.display = "none";
    if (btnElphaba) btnElphaba.style.display = "none";
    if (miniLojaContainer) miniLojaContainer.style.display = "none";
    document.getElementById("btn-split-shop").style.display = "none"; 
    document.getElementById("reward-image").style.display = "block";

    // 2. Lógica Fofoca
    if (proximaCartaTemFofoca && (reward.fofoca || reward.fofoca === "")) {
        fofocaText.innerHTML = reward.fofoca.replace(/\n/g, '<br>');
        fofocaContainer.style.display = "block";
        proximaCartaTemFofoca = false;
    }

    if (reward.isFofoqueiro) {
        proximaCartaTemFofoca = true;
    }

    // 3. Lógica Elphaba
    if (reward.image.includes("wicked") && ultimaCartaFoiRivalidade) {
        btnElphaba.style.display = "block";
    }

    // 4. Lógica Split
    if (reward.image.includes("split")) {
        document.getElementById("btn-split-shop").style.display = "block";
    }

    // 5. Atualiza Rivalidade
    if (reward.type === 'rivalidad') {
        ultimaCartaFoiRivalidade = true;
    } else {
        ultimaCartaFoiRivalidade = false;
    }

    // 6. Atualiza imagem e som
    document.getElementById("reward-image").innerHTML = `<img src="${reward.image}" alt="Recompensa">`;
    document.getElementById("reward-modal").style.display = "flex";

    // 7. Animação
    modalContent.classList.remove("animar");
    void modalContent.offsetWidth; // Força reflow para reiniciar animação
    modalContent.classList.add("animar");

    playSound(reward.image);
}


// ==========================================================
// INICIALIZAÇÃO DO TABULEIRO
// ==========================================================
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
      try {
        const reward = getRandomReward();
        
        card.style.visibility = "hidden";
        cardInner.innerHTML = '';

        // Chamada para a função unificada
        resetAndShowModal(reward);

      } catch (error) {
        console.error("Erro crítico ao abrir carta:", error);
      }
    }, 400);
  });

  gameBoard.appendChild(card);
}


// --- LÓGICA DA SPLIT SHOP (Mantida) ---
const btnSplitShop = document.getElementById("btn-split-shop");

if (btnSplitShop) {
  btnSplitShop.addEventListener("click", () => {
    document.getElementById("reward-image").style.display = "none";
    if (fofocaContainer) fofocaContainer.style.display = "none"; 
    btnSplitShop.style.display = "none";

    miniLojaContainer.style.display = "block";
    miniLojaGrid.innerHTML = "";

    for (let j = 0; j < 4; j++) {
      const miniCard = document.createElement("div");
      miniCard.classList.add("mini-card");

      miniCard.addEventListener("click", () => {
        const reward = getSplitShopReward();

        if (fofocaContainer) fofocaContainer.style.display = "none"; 

        miniLojaContainer.style.display = "none";
        document.getElementById("reward-image").style.display = "block";
        document.getElementById("reward-image").innerHTML =
          `<img src="${reward.image}" alt="Carta">`;

        modalContent.classList.remove("animar");
        void modalContent.offsetWidth;
        modalContent.classList.add("animar");

        playSound(reward.image);
      });
      miniLojaGrid.appendChild(miniCard);
    }
  });
}


// --- LÓGICA DA MINI LOJA (ELPHABA) ---
if(btnElphaba) {
  btnElphaba.addEventListener("click", () => {
    // ✅ CORREÇÃO: Escondendo fofoca explicitamente antes de abrir a loja
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
        document.getElementById("reward-image").innerHTML =
          `<img src="${rareReward.image}" alt="Recompensa Rara">`;

        fofocaContainer.style.display = "none";

        modalContent.classList.remove("animar");
        void modalContent.offsetWidth;
        modalContent.classList.add("animar");

        playSound(rareReward.image);
      });

      miniLojaGrid.appendChild(miniCard);
    }
  });
}


// --- BOTÕES ESPECIAIS (Corrigido para usar sons de forma consistente) ---

function showSpecialCard(imagePath, audioPath) {
  resetModal();
  const rewardImage = document.getElementById("reward-image");
  rewardImage.innerHTML = `<img src="${imagePath}" alt="Carta Especial">`;
  showModal();
  
  // Usando tocarSomGerenciado para garantir que o som anterior pare
  tocarSomGerenciado(new Audio(audioPath));
}

document.getElementById("btn-show-razzle-card").addEventListener("click", () => {
  showSpecialCard("images/razzledazzle.png", "sounds/55-botao.mp3");
});

document.getElementById("btn-show-secreta2").addEventListener("click", () => {
  showSpecialCard("images/secreta2.png", "sounds/secreta2.mp3");
});

document.getElementById("btn-show-secreta1").addEventListener("click", () => {
  // ✅ CORREÇÃO: Adicionado o caminho do som da secreta 1
  showSpecialCard("images/secreta1.png", "sounds/secreta1.mp3"); 
});


// Funções auxiliares (Refinadas para resetar todos os botões)
function resetModal() {
  const modal = document.getElementById("reward-modal");
  if(fofocaContainer) fofocaContainer.style.display = "none"; 
  if(btnElphaba) btnElphaba.style.display = "none";
  if(miniLojaContainer) miniLojaContainer.style.display = "none";
  document.getElementById("btn-split-shop").style.display = "none";
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

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("reward-modal").style.display = "none";
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
    audioAtual = null;
  }
});


// Botão Mudar Verso (Mantido)
const versos = [
  'images/verso.png',
  'images/Verso2.png',
];
let indiceAtual = 0;
const btnMudarVerso = document.getElementById("btn-mudar-verso");
const versosCartas = document.querySelectorAll(".card-face.front");

if(btnMudarVerso) {
  btnMudarVerso.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % versos.length;
    const novoVerso = versos[indiceAtual];
    
    versosCartas.forEach(cardFront => {
      cardFront.style.backgroundImage = `url('${novoVerso}')`;
    });
    
    // Altera o texto do botão
    btnMudarVerso.textContent = `Mudar Verso (${indiceAtual + 1})`; 
  });
}

// ==========================================================
// 🚀 SOLUÇÃO DE PERFORMANCE: PRÉ-CARREGAMENTO DE IMAGENS
// ==========================================================
function preloadImages(imageArray) {
    let loadedCount = 0;
    const totalImages = imageArray.length;
    console.log(`Iniciando pré-carregamento de ${totalImages} imagens...`);

    imageArray.forEach((imagePath) => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                console.log("Todas as imagens principais foram pré-carregadas!");
                // Opcional: Adicionar um indicador visual de "Pronto" aqui
            }
        };
        img.onerror = () => {
            console.error(`Erro ao carregar imagem: ${imagePath}`);
            loadedCount++; 
        };
        // Inicia o download da imagem para cache
        img.src = imagePath;
    });
}

// 💡 CHAMADA FINAL: Inicia o pré-carregamento quando a página carrega
preloadImages(imagens);
