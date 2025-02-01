// Obtém os elementos necessários
const ativarMenu = document.getElementById('list-menu');
const fecharMenu = document.getElementById('closed-menu');
const navBar = document.getElementById('nav-bar');

// Função para abrir o menu com animação suave
ativarMenu.addEventListener('click', () => {
    navBar.style.display = 'block'; 
    setTimeout(() => {
        navBar.style.transform = 'translateX(0)'; 
        navBar.style.opacity = '1'; 
    }, 10); 

    ativarMenu.style.display = 'none'; 
    fecharMenu.style.display = 'block'; 
});

// Função para fechar o menu com animação suave
fecharMenu.addEventListener('click', () => {
    navBar.style.transform = 'translateX(100%)'; 
    navBar.style.opacity = '0';
    setTimeout(() => {
        navBar.style.display = 'none';
    }, 100); 

    ativarMenu.style.display = 'block'; 
    fecharMenu.style.display = 'none'; 
});

// Fechar o menu quando qualquer link for clicado
const menuLinks = document.querySelectorAll('.header a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.style.transform = 'translateX(-100%)'; 
        navBar.style.opacity = '0';
        setTimeout(() => {
            navBar.style.display = 'none'; 
        }, 50); 
        ativarMenu.style.display = 'block'; 
        fecharMenu.style.display = 'none'; 
    });
});

ScrollReveal().reveal('.menu-icon', {
    delay: 300, 
    distance: '50px', 
    origin: 'top',
    duration: 800, 
    reset: false, 
});

ScrollReveal().reveal('header', {
    delay: 500,         // Delay da animação
    distance: '60px',   // Distância do movimento
    origin: 'right',    // Direção da animação
    duration: 1000,     // Duração da animação
    reset: true,        // Permite animar várias vezes
    beforeReveal: (el) => {
        el.style.opacity = '1';      // Torna visível
        el.style.visibility = 'visible'; // Permite interação
    },
    afterReset: (el) => {
        el.style.opacity = '0';      // Oculta novamente no reset
        el.style.visibility = 'hidden';
    }
});


