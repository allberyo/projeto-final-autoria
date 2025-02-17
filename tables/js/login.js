document.addEventListener('DOMContentLoaded', () => {
    const livros = [
        { id: 1, livro: 'Ciranda de Pedra', autor: 'Lygia Fagundes Telles', ano: 1954 },
        { id: 2, livro: 'O quinze', autor: 'Rachel de Queiroz', ano: 1930 },
        { id: 3, livro: 'Noite na taverna', autor: 'Álvares de Azevedo', ano: 1855 },
        { id: 4, livro: 'Morangos Mofados', autor: 'Caio F. Abreu', ano: 1982 },
        { id: 5, livro: 'Torto Arado', autor: 'Itamar Vieira Júnior', ano: 2019 },
        { id: 6, livro: 'Várias Histórias', autor: 'Machado de Assis', ano: 1896 },
        { id: 7, livro: 'Júbilo, Memória, Noviciado da Paixão', autor: 'Hilda Hist', ano: 1974 },
        { id: 8, livro: 'Perto do Coração Selvagem', autor: 'Clarice Lispector', ano: 1943 },
        { id: 9, livro: 'Terra Fresca da Sua Tumba', autor: 'Giovanna Rivero', ano: 2021 },
        { id: 10, livro: 'Vidas Secas', autor: 'Graciliano Ramos', ano: 1938 }
    ];

    const tabelaCorpo = document.querySelector('tbody');
    const areasTabela = document.querySelectorAll('th');
    function ordenarLivros(campo) {
        return livros.sort((a, b) => {
            if (campo === 'id' || campo === 'ano') {
                return b[campo] - a[campo];
            } else {
                return a[campo].localeCompare(b[campo]);
            }
        });
    }

    function preencherTabela(livrosOrdenados) {
        tabelaCorpo.innerHTML = '';
        livrosOrdenados.forEach(livro => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${livro.id}</td>
                <td>${livro.livro}</td>
                <td>${livro.autor}</td>
                <td>${livro.ano}</td>
            `;
            tabelaCorpo.appendChild(linha);
        });
    }
    areasTabela.forEach((areaTabela, index) => {
        areaTabela.style.cursor = 'pointer';
        
        areaTabela.addEventListener('click', () => {
            let campo;
            switch (index) {
                case 0: campo = 'id'; break;
                case 1: campo = 'livro'; break;
                case 2: campo = 'autor'; break;
                case 3: campo = 'ano'; break;
            }
            const livrosOrdenados = ordenarLivros(campo);
            preencherTabela(livrosOrdenados);
        });
    });
    preencherTabela(livros);

    document.getElementById('btn-salvar').addEventListener('click', (e) => {
        e.preventDefault();
        const novoLivro = {
            id: parseInt(document.getElementById('id').value),
            livro: document.getElementById('livro').value,
            autor: document.getElementById('autor').value,
            ano: parseInt(document.getElementById('ano').value)
        };
        livros.push(novoLivro);
        preencherTabela(livros);
    });
});