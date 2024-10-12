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
BotaoIniciarMusica.addEventListener("click", IniciarMusica);

BotaoPausarMusica.addEventListener("click", PausarMusica);

Musica.addEventListener("timeupdate", MoverBarra);

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

let indexMusica = 0;



BotaoPassarMusica.addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > Musicas.length - 1) {
    indexMusica = 0;
  }
  RenderizarMusica(indexMusica);
  if ((BotaoIniciarMusica.style.display = "flex")) {
    BotaoIniciarMusica.style.display = "none";
    BotaoPausarMusica.classList.add("active");
  }
});

BotaoVoltarMusica.addEventListener("click", () => {
  if (indexMusica <= 0) {
    indexMusica = Musicas.length;
  }
  indexMusica--;
  RenderizarMusica(indexMusica);
  if ((BotaoIniciarMusica.style.display = "flex")) {
    BotaoIniciarMusica.style.display = "none";
    BotaoPausarMusica.classList.add("active");
  }
});

function IniciarMusica() {
  Musica.play();
  BotaoPausarMusica.classList.add("active");
  BotaoIniciarMusica.style.display = "none";
}

function PausarMusica() {
  Musica.pause();
  BotaoPausarMusica.classList.remove("active");
  BotaoIniciarMusica.style.display = "flex";
}

function MoverBarra() {
  let Barra = document.getElementById("progress");
  let PosiçãoBarra = Math.floor((Musica.currentTime / Musica.duration) * 100) + "%";
  Barra.style.width = PosiçãoBarra;
  const TempoInicial = document.getElementById("start-time");
  let TempoDecorridoEmSegundos = SegundosParaMinutos(
    Math.floor(Musica.currentTime)
  );
  TempoInicial.innerHTML = TempoDecorridoEmSegundos;
  TempoFinal.innerHTML = SegundosParaMinutos(Math.floor(Musica.duration));
  TempoFinal.innerHTML = SegundosParaMinutos(Math.floor(Musica.duration));
  
}

function SegundosParaMinutos(segundos) {
  let CampoMinutos = Math.floor(segundos / 60);
  let CampoSegundos = segundos % 60;
  if (CampoSegundos < 10) {
    CampoSegundos = `0${CampoSegundos}`;
  }
  return `${CampoMinutos}:${CampoSegundos}`;
}

function RenderizarMusica(index) {
  Musica.setAttribute("src", Musicas[index].src);
  Musica.addEventListener("loadeddata", () => {
    NomeDaBanda.innerHTML = Musicas[index].band;
    NomeDaMusica.innerHTML = Musicas[index].music;
    FotoMusica.src = Musicas[index].imgscr;
  });
  Musica.load();
  Musica.play();
}
