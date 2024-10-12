# Player Music 🎵

Este é um projeto de **Player de Música** simples utilizando **HTML, CSS e JavaScript**. O player permite reproduzir, pausar e alternar entre músicas, exibindo informações como o nome da banda, título da música e capa do álbum.

---

## 📋 Funcionalidades

- **Iniciar e Pausar Música:** Botões de play e pause para controle da reprodução.
- **Alternar Faixas:** Avance ou volte entre as músicas usando os botões.
- **Barra de Progresso:** Acompanhe a reprodução em tempo real.
- **Exibição de Informações:** Nome da banda, título da música e imagem da capa atualizados dinamicamente.

---


---

## 🚀 Como Usar

1. **Clone o repositório** ou faça o download do projeto.
2. Certifique-se de que a estrutura dos diretórios e arquivos está correta.
3. Abra o arquivo `index.html` no navegador.
4. Use os botões de controle para navegar entre as músicas.

---

## 🔧 Como Funciona

### **Lista de Músicas (script.js)**

```javascript
let Musicas = [
  {
    band: "Kansas",
    music: "Carry On Wayward Son",
    src: "Musics/Kansas - Carry On Wayward Son.mp3",
    imgscr: "image/Supernatural(1).jpg",
  },
  {
    band: "Long",
    music: "Long Way from Home",
    src: "Musics/Long-Long Way from Home.mp3",
    imgscr: "image/Supernatural(2).jpg",
  },
  {
    band: "Scorpions",
    music: "No One Like You",
    src: "Musics/Scorpions - No One Like You.mp3",
    imgscr: "image/Supernatural(3).jpg",
  },
];
````

## - Controle de Reprodução:
- O botão de play inicia a música.
- O botão de pause interrompe a reprodução.
- Botões next e back alternam entre as faixas.
## Funções Principais
- IniciarMusica(): Inicia a reprodução e altera o ícone do botão para pause.
- PausarMusica(): Pausa a música e exibe o ícone de play.
- RenderizarMusica(index): Carrega a nova música e atualiza a interface.
- MoverBarra(): Atualiza a barra de progresso e os tempos na tela.
- SegundosParaMinutos(): Converte segundos para o formato min:seg.
## 🎯 Melhorias Futuras
- Adicionar uma lista de reprodução visível.
- Implementar reprodução aleatória (shuffle).
- Adicionar controle de volume e velocidade de reprodução.
## 🖥 Pré-requisitos
- Navegador moderno com suporte a HTML5.
- Estrutura correta das pastas para imagens e músicas.

