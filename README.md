# 🃏 Cartas da Live

Este é um projeto de uma aplicação web interativa, no estilo "Escolha uma Carta", desenhada especificamente para ser usada em transmissões ao vivo (lives). A aplicação funciona como um jogo "gacha" ou "loot box", onde o espectador escolhe uma carta de um grid e recebe uma recompensa aleatória com base em um sistema de raridades.

## 🚀 Demo ao Vivo

Você pode ver o projeto em ação aqui:
**[https://hpnos.github.io/Cartas/](https://hpnos.github.io/Cartas/)**

## ✨ Funcionalidades Principais

* **Sistema de Gacha (Sorteio):** O jogo apresenta um grid de 20 cartas (5x4). Ao clicar em uma, ela é "virada", desaparece e revela uma recompensa.
* **Recompensas com Raridade:** As recompensas são sorteadas de um "pool" com pesos e raridades definidas (Comum, Incomum, Rara, Lendária), tudo controlado no `script.js`.
* **Feedback de Áudio e Visual:** Cada carta de recompensa está associada a um efeito sonoro único, que é reproduzido quando ela é revelada em um modal.
* **Mecânica de "Fofoca":** Existe uma mecânica especial onde, ao tirar uma carta específica (definida como `isFofoqueiro: true`), a *próxima* carta que for revelada exibirá uma mensagem de "fofoca" junto com a recompensa.
* **Controles do Streamer:** A interface possui botões de controle "escondidos" (aparecem ao passar o mouse no canto superior esquerdo), permitindo ao streamer:
    * **Mudar o Fundo:** Alternar entre diferentes imagens de fundo para a tela.
    * **Mudar o Verso:** Alternar o design do verso das cartas no grid.
    * **Cartas Específicas:** Botões (`C`, `Y`, `R`) para exibir cartas específicas manualmente, fora do sorteio aleatório.

## 📁 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

* **`index.html`**
    * Contém a estrutura básica da página, incluindo o grid (`#game-board`), o modal de recompensa (`#reward-modal`), o contêiner da fofoca (`#fofoca-container`) e os botões de controle.

* **`style.css`**
    * Responsável por toda a estilização, incluindo:
        * O layout do grid 5x4.
        * As animações de virar a carta (`.flipped`).
        * A aparência do modal e sua animação de surgimento (`@keyframes abrirModal`).
        * Ocultar e exibir os botões de controle do streamer no hover.

* **`script.js`**
    * É o cérebro da aplicação e contém toda a lógica do jogo:
    * **`imagens`**: Array para pré-carregamento das imagens.
    * **`sounds`**: Um mapa (objeto) que associa cada imagem de recompensa a um arquivo de áudio (`.mp3`).
    * **`rewardPool`**: O array mais importante. Define todas as cartas possíveis, suas chances (`chance`), a mensagem de `fofoca` e se ela ativa a mecânica (`isFofoqueiro`).
    * **`getRandomReward()`**: Função que calcula e retorna uma recompensa aleatória com base nas chances definidas no `rewardPool`.
    * **Listeners de Eventos**: Configura o clique para cada carta, a lógica da fofoca e a funcionalidade de todos os botões de controle.

* **Pastas `/images/` e `/sounds/`**
    * Contêm todos os recursos de mídia (imagens das cartas, fundos, versos e os arquivos de áudio) necessários para o funcionamento do jogo.

## 🔧 Como Usar ou Modificar

Para adicionar ou alterar as cartas, sons ou visuais do jogo, siga estes passos:

1.  **Adicionar Novas Cartas de Recompensa:**
    * Adicione a nova imagem da carta na pasta `/images/`.
    * Adicione o som correspondente na pasta `/sounds/`.
    * Abra o `script.js` e adicione um novo objeto ao array `rewardPool` com a `image`, `chance`, e `fofoca`.
    * Adicione a nova carta ao mapa `sounds` para linkar a imagem ao seu áudio.

2.  **Ajustar Chances:**
    * No `script.js`, modifique os valores de `chance` no array `rewardPool`. A soma total das chances é usada pela função `getRandomReward()` para calcular o sorteio.

3.  **Adicionar/Mudar Versos ou Fundos:**
    * Adicione as novas imagens na pasta `/images/`.
    * No `script.js`, adicione o caminho da imagem aos arrays `versos` ou `fundos`, respectivamente.

---
