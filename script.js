// Adiciona efeito de digitação ao título da seção "Sobre mim"
const tituloSobreMim = document.querySelector('.txt-topo-site h1');
const texto = tituloSobreMim.textContent;
tituloSobreMim.textContent = '';
let index = 0;

function digitar() {
    if (index < texto.length) {
        tituloSobreMim.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 100);
    } else {
        tituloSobreMim.innerHTML += '<span>.</span>';
    }
}

window.addEventListener('load', digitar);

// Adiciona interatividade ao menu
const menuLinks = document.querySelectorAll('nav.menu-desktop a');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.color = '#ffa500';  // Cor laranja ao passar o mouse
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#fff';  // Restaura a cor original ao tirar o mouse
    });
});

// Animação suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo de código para animação de digitação
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.titulo span');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let index = 0;
        const typingEffect = () => {
            title.textContent += text[index++];
            if (index < text.length) {
                setTimeout(typingEffect, 100);
            }
        };
        typingEffect();
    }
});
