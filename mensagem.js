const botaoSim = document.getElementById('sim');
const imagem = document.getElementById('img');
const musica = document.getElementById('musica');

// Lista de imagens que vão aparecer
const imagens = [
    "https://i.pinimg.com/236x/12/92/75/129275e5e904e57d2dab0e58c427196f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS722Lc8TUfQRy4pxpQ5D4OeBv4J0-lkpzYww",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcOJ856Cqav9rwrtT2cEzozAoUQzoLn9heE1K9GKxW7pG1GoTEot2tLt2JB_ENCuvFnM&usqp=CAU"
];

let index = 0;
let intervaloTroca; // Para guardar o intervalo

botaoSim.addEventListener('click', () => {
    musica.volume = 0.5;
    musica.currentTime = 0;
    musica.play().catch(e => {
        console.log('Erro ao tocar música: ', e);
    });

    if (intervaloTroca) return; // Evitar clicar várias vezes e duplicar

    intervaloTroca = setInterval(() => {
        imagem.style.opacity = 0; // Faz a imagem sumir

        setTimeout(() => {
            imagem.src = imagens[index]; // Troca para a próxima imagem
            imagem.style.opacity = 1;    // Faz aparecer de novo

            index++;
            if (index >= imagens.length) {
                index = 0; // Volta para a primeira imagem
            }
        }, 1000); // 1 segundo de fade-out antes de trocar
    }, 4000); // Troca a cada 4 segundos
});
