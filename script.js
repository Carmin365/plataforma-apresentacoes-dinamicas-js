let slideCount = 1;

function adicionarSlide() {
    slideCount++;
    const slideContainer = document.querySelector('.slide-container');
    const novoSlide = document.createElement('div');
    novoSlide.className = 'slide-card';
    novoSlide.id = 'slide-' + slideCount;
    novoSlide.innerHTML = `
        <h3>Slide ${slideCount}</h3>
        <p>Clique para editar o texto.</p>
    `;
    slideContainer.appendChild(novoSlide);
    alert('Novo slide adicionado!');
}

function adicionarElemento(tipo) {
    if (tipo === 'quiz') {
        alert('Elemento de quiz adicionado ao slide ativo!');
        // Lógica mais avançada para adicionar o elemento visualmente
    }
}

function visualizar() {
    alert('Preparando a apresentação para visualização... (Imagine uma tela cheia)');
    console.log('Iniciando modo de apresentação.');
}