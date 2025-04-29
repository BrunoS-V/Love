const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', () => {
    botaoNao.style.position = 'absolute';

    let fugas = 5; // Quantas fugas você quer

    function fugir() {
        if (fugas > 0) {
            const margem = 50;
            const larguraTela = window.innerWidth - botaoNao.offsetWidth - margem;
            const alturaTela = window.innerHeight - botaoNao.offsetHeight - margem;

            let novoX = Math.random() * larguraTela;
            let novoY = Math.random() * alturaTela;

            // Limitar dentro da tela
            if (novoX < margem) novoX = margem;
            if (novoY < margem) novoY = margem;

            botaoNao.style.left = novoX + 'px';
            botaoNao.style.top = novoY + 'px';

            fugas--;
            setTimeout(fugir, 100); // Tempo entre cada fuga (100ms)
        }
    }

    fugir(); // Começa a sequência de fugas
});
