const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const clearBtn = document.querySelector('.clear-btn');

    // Adiciona evento de clique no botão de busca
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            // Aqui você pode implementar a lógica de busca
            alert('Você buscou por: ' + searchTerm);
        }
    });

    // Adiciona evento de clique no botão de limpar
    clearBtn.addEventListener('click', () => {
        searchInput.value = ''; // Limpa o campo de busca
        clearBtn.style.display = 'none'; // Esconde o botão de limpar
    });

    // Adiciona evento de entrada no campo de busca
    searchInput.addEventListener('input', () => {
        // Se houver texto no campo de busca, exibe o botão de limpar
        if (searchInput.value.trim() !== '') {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
    });