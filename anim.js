// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Não mudei de cidade, nem de telefone", time: 13 },
  { text: "Só escolhi ser feliz", time: 15 },
  { text: "É o mesmo endereço, o mesmo apartamento", time: 16 },
  { text: "Em frente à igreja matriz", time: 17 },
  { text: "Por isso todo mundo passa", time: 21 },
  { text: "E quem nunca passou, vai passar", time: 25 },
  { text: "Já tô dizendo aos meus amigos", time: 30 },
  { text: "Calma que eu não vou pirar", time: 34 },
  { text: "Já pirei!", time: 37 },
  { text: "Me apaixonei, perdidamente", time: 40 },
  { text: "E o que eu sei, é que daqui pra frente", time: 44 },
  { text: "Vai ser nossa cidade, nosso telefone", time: 49 },
  { text: "Nosso endereço, nosso apartamento", time: 53 },
  { text: "Sabe aquela igreja?", time: 57 },
  { text: "Tô aqui na frente, imaginando chuva de arroz na gente!", time: 60 },
  { text: "Não mudei de cidade, nem de telefone", time: 65 },
  { text: "Só escolhi ser feliz", time: 69 },
  { text: "É o mesmo endereço, o mesmo apartamento", time: 73 },
  { text: "Em frente a igreja matriz", time: 77 },
  { text: "Por isso todo mundo passa", time: 81 },
  { text: "E quem nunca passou, vai passar", time: 85 },
  { text: "Já tô dizendo aos meus amigos", time: 90 },
  { text: "Calma que eu não vou pirar", time: 94 },
  { text: "Já pirei!", time: 97 },
  { text: "Me apaixonei, perdidamente", time: 100 },
  { text: "E o que eu sei, é que daqui pra frente", time: 104 },
  { text: "Vai ser nossa cidade, nosso telefone", time: 109 },
  { text: "Nosso endereço, nosso apartamento", time: 113 },
  { text: "Sabe aquela igreja?", time: 117 },
  { text: "Tô aqui na frente, imaginando chuvas", time: 120 },
  { text: "Vai ser nossa cidade, nosso telefone", time: 125 },
  { text: "Nosso endereço, nosso apartamento", time: 129 },
  { text: "Sabe aquela igreja?", time: 133 },
  { text: "Tô aqui na frente, imaginando chuva de arroz na gente!", time: 136 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);