document.addEventListener('DOMContentLoaded', function() {

    // Atualiza o ano no rodapé
    const currentYearElem = document.getElementById('currentYear');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }

    // Exemplo de scroll suave para âncoras (se você usar links internos como #oferta)
    // E também para o botão de compra que leva para um #link-checkout (substitua #link-checkout pelo ID da sua seção de checkout ou link real)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Se for o link de checkout placeholder, apenas simula um clique
            if (targetId === "#link-checkout") {
                alert("Você seria redirecionado para a página de pagamento agora!");
                // Em um site real, você faria: window.location.href = 'SUA_URL_DE_CHECKOUT';
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Placeholder para interação com botão de compra (o scroll suave acima já faz algo similar para #link-checkout)
    // const buyButton1 = document.getElementById('buy-button-1');
    // if (buyButton1) {
    //     buyButton1.addEventListener('click', function() {
    //         // Aqui você integraria com sua API de pagamento ou redirecionaria
    //         console.log('Botão de compra 1 clicado!');
    //         // window.location.href = 'SEU_LINK_DE_PAGAMENTO_AQUI';
    //     });
    // }

    // const buyButton2 = document.getElementById('buy-button-2');
    // if (buyButton2) {
    //     buyButton2.addEventListener('click', function() {
    //         console.log('Botão de compra 2 clicado!');
    //         // window.location.href = 'SEU_LINK_DE_PAGAMENTO_AQUI';
    //     });
    // }

    console.log("Página carregada e script.js funcionando!");

});