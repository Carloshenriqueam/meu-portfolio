gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, autoKill: true },
                ease: "power2.inOut"
            });
        }
    });
});
 
 // Menu mobile toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Filtro do portfólio
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Obtém o filtro selecionado
                const filter = this.getAttribute('data-filter');
                
                // Filtra os itens do portfólio
                document.querySelectorAll('.portfolio-item').forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Formulário de contato
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
            this.reset();
        });

        

// Animações de entrada com GSAP e ScrollTrigger
document.addEventListener('DOMContentLoaded', function() {
    console.log('GSAP animations loaded');

// Hero Section
gsap.from("#home .container", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

// About Section
gsap.from("#about .about-text", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

gsap.from("#about .about-image", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

// Skills Section
gsap.from("#skills h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

gsap.from(".skills-grid .card", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

// Portfolio Section
gsap.from("#portfolio h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

gsap.from(".filter-btn", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".filter-btn",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

gsap.from(".portfolio-item", {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

// Contact Section
gsap.from("#contact h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});

gsap.from("#contact .contact-content", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse"
    }
});
});

// Animações adicionais

// Hover effects for buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

// Hover effects for portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { y: -10, duration: 0.3, ease: "power2.out" });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
    });
});

// Hover effects for skill cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotationY: 5, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, duration: 0.3, ease: "power2.out" });
    });
});

// Hover effects for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

// Hover effects for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { rotation: 360, duration: 0.5, ease: "power2.out" });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { rotation: 0, duration: 0.5, ease: "power2.out" });
    });
});

// Hover effects for filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { y: -5, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { y: 0, duration: 0.3, ease: "power2.out" });
    });
});

// Typewriter effect for hero title
const heroTitle = document.querySelector('#h1-hero');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000); // Start after 1 second
}

// Animated menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            gsap.to(navLinks, { x: '100%', duration: 0.5, ease: "power2.inOut", onComplete: () => navLinks.classList.remove('active') });
        } else {
            navLinks.classList.add('active');
            gsap.fromTo(navLinks, { x: '100%' }, { x: '0%', duration: 0.5, ease: "power2.inOut" });
        }
    });
}

// Parallax effects
gsap.to("#h1-hero", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".hero-btns", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Parallax for about section
gsap.to("#about .about-image img", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Parallax for portfolio background (if added)
const portfolioSection = document.querySelector("#portfolio");
if (portfolioSection) {
    gsap.to(portfolioSection, {
        backgroundPositionY: "50%",
        ease: "none",
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}
