// Seleciona os elementos HTML necessários para manipulação
const Musica = document.getElementById("musica");
const BotaoIniciarMusica = document.getElementById("player-music");
const BotaoPausarMusica = document.getElementById("pause-music");
const BotaoPassarMusica = document.getElementById("next-container");
const CaminhoMusica = document.getElementById("music-path");
const NomeDaBanda = document.getElementById("band");
const TempoFinal = document.getElementById("end-time");
const FotoMusica = document.getElementById("img-info");
const NomeDaMusica = document.getElementById("music");
const BotaoVoltarMusica = document.getElementById("back-container");

// Lista de músicas disponíveis com suas informações (banda, título, caminho do áudio e imagem)
let Musicas = [
  {
    band: "Kansas",
    music: "Carry On Wayward Son",
    src: "Musics/Kansas - Carry On Wayward Son (Official Audio).mp3",
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
    src: "Musics/Scorpions - No One Like You (Official Video).mp3",
    imgscr: "image/Supernatural(3).jpg",
  },
];

// Índice da música atual na lista
let indexMusica = 0;

// Avança para a próxima música ao clicar no botão "Next"
BotaoPassarMusica.addEventListener("click", () => {
  indexMusica++; // Incrementa o índice
  if (indexMusica > Musicas.length - 1) {
    indexMusica = 0; // Volta ao início se passar da última música
  }
  RenderizarMusica(indexMusica); // Atualiza a interface com a nova música
  // Exibe o botão de pause e oculta o botão de play
  if ((BotaoIniciarMusica.style.display = "flex")) {
    BotaoIniciarMusica.style.display = "none";
    BotaoPausarMusica.classList.add("active");
  }
});

// Volta para a música anterior ao clicar no botão "Back"
BotaoVoltarMusica.addEventListener("click", () => {
  if (indexMusica <= 0) {
    indexMusica = Musicas.length; // Vai para a última música se estiver na primeira
  }
  indexMusica--; // Decrementa o índice
  RenderizarMusica(indexMusica); // Atualiza a interface com a nova música
  // Exibe o botão de pause e oculta o botão de play
  if ((BotaoIniciarMusica.style.display = "flex")) {
    BotaoIniciarMusica.style.display = "none";
    BotaoPausarMusica.classList.add("active");
  }
});

// Inicia a reprodução da música atual
function IniciarMusica() {
  Musica.play(); // Começa a tocar a música
  BotaoPausarMusica.classList.add("active"); // Mostra o botão de pause
  BotaoIniciarMusica.style.display = "none"; // Oculta o botão de play
}

// Pausa a reprodução da música atual
function PausarMusica() {
  Musica.pause(); // Pausa a música
  BotaoPausarMusica.classList.remove("active"); // Esconde o botão de pause
  BotaoIniciarMusica.style.display = "flex"; // Exibe o botão de play
}

// Atualiza a barra de progresso e os tempos de reprodução
function MoverBarra() {
  let Barra = document.getElementById("progress"); // Seleciona a barra de progresso
  let PosiçãoBarra = Math.floor((Musica.currentTime / Musica.duration) * 100) + "%"; // Calcula a posição atual
  Barra.style.width = PosiçãoBarra; // Atualiza a largura da barra
  const TempoInicial = document.getElementById("start-time"); // Seleciona o tempo inicial
  let TempoDecorridoEmSegundos = SegundosParaMinutos(Math.floor(Musica.currentTime)); // Converte o tempo atual para minutos e segundos
  TempoInicial.innerHTML = TempoDecorridoEmSegundos; // Atualiza o tempo inicial na interface
  TempoFinal.innerHTML = SegundosParaMinutos(Math.floor(Musica.duration)); // Atualiza o tempo final na interface
}

// Converte segundos em formato "minutos:segundos"
function SegundosParaMinutos(segundos) {
  let CampoMinutos = Math.floor(segundos / 60); // Calcula os minutos
  let CampoSegundos = segundos % 60; // Calcula os segundos restantes
  if (CampoSegundos < 10) {
    CampoSegundos = `0${CampoSegundos}`; // Adiciona um zero à esquerda se necessário
  }
  return `${CampoMinutos}:${CampoSegundos}`; // Retorna o tempo formatado
}

// Renderiza a música atual na interface
function RenderizarMusica(index) {
  Musica.setAttribute("src", Musicas[index].src); // Define a nova fonte de áudio
  Musica.addEventListener("loadeddata", () => {
    NomeDaBanda.innerHTML = Musicas[index].band; // Atualiza o nome da banda
    NomeDaMusica.innerHTML = Musicas[index].music; // Atualiza o nome da música
    FotoMusica.src = Musicas[index].imgscr; // Atualiza a imagem da música
  });
  Musica.load(); // Carrega a nova música
  Musica.play(); // Inicia a reprodução automaticamente
}

// Adiciona eventos para iniciar e pausar a música quando os botões correspondentes forem clicados
BotaoIniciarMusica.addEventListener("click", IniciarMusica);
BotaoPausarMusica.addEventListener("click", PausarMusica);

// Atualiza a barra de progresso conforme a música toca
Musica.addEventListener("timeupdate", MoverBarra);
