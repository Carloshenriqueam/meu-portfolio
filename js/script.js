gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Translations
const translations = {
    'pt': {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre',
        'nav-skills': 'Especialidades',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contato',
        'hero-title': 'Potencialize seu negocio com design estrategico.',
        'hero-view-projects': 'Ver Projetos',
        'hero-contact': 'Entrar em contato',
        'about-title': 'Sobre Mim',
        'about-p1': 'Prazer, meu nome é Carlos, Há 3 anos transformando ideias em experiências visuais que conectam marcas a clientes. Criando soluções visuais, comunicando com clareza e despertando conexões genuínas com o público.',
        'about-p2': 'Minha abordagem combina criatividade, estratégia e atenção aos detalhes para garantir que cada projeto seja único e eficaz.',
        'about-cta': 'Vamos Trabalhar Juntos',
        'skills-title': 'Especialidades',
        'skills-flyer-desc': 'Criação de flyer impactante com identidade visual personalizada, pensado para divulgação de eventos, promoções ou marcas.',
        'skills-thumbnails-desc': 'Criação de thumbnails que destacam vídeos e postagens, atraindo cliques e engajando o público.',
        'skills-banners-desc': 'Criação de Banners que destacam a marca, mostrando profissionalismo e qualidade.',
        'portfolio-title': 'Projetos',
        'filter-all': 'Todos',
        'filter-flyer': 'Flyer',
        'filter-thumbnail': 'Thumbnail',
        'filter-banner': 'Banner',
        'contact-title': 'Entre em Contato',
        'contact-desc': 'Entre em contato e desfrute de um Design Profissional.',
        'contact-email': 'Email',
        'contact-phone': 'Telefone',
        'contact-location': 'Localizacao',
        'form-name': 'Seu Nome',
        'form-email': 'Seu Email',
        'form-subject': 'Assunto',
        'form-message': 'Sua Mensagem',
        'form-submit': 'Enviar Mensagem',
        'footer-tagline': 'Potencialize seu negócio com design estratégico.',
        'footer-copyright': '© 2025 CarlosHenriAM. Todos os direitos reservados.',
        'form-thank': 'Obrigado pela sua mensagem! Entrarei em contato em breve.'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Specialties',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'hero-title': 'Boost your business with strategic design.',
        'hero-view-projects': 'View Projects',
        'hero-contact': 'Get in Touch',
        'about-title': 'About Me',
        'about-p1': 'Hi, my name is Carlos. For 3 years, I have been transforming ideas into visual experiences that connect brands to customers. Creating visual solutions, communicating clearly, and awakening genuine connections with the audience.',
        'about-p2': 'My approach combines creativity, strategy, and attention to detail to ensure each project is unique and effective.',
        'about-cta': "Let's Work Together",
        'skills-title': 'Specialties',
        'skills-flyer-desc': 'Creation of impactful flyers with personalized visual identity, designed for promoting events, promotions, or brands.',
        'skills-thumbnails-desc': 'Creation of thumbnails that highlight videos and posts, attracting clicks and engaging the audience.',
        'skills-banners-desc': 'Creation of banners that highlight the brand, showing professionalism and quality.',
        'portfolio-title': 'Projects',
        'filter-all': 'All',
        'filter-flyer': 'Flyer',
        'filter-thumbnail': 'Thumbnail',
        'filter-banner': 'Banner',
        'contact-title': 'Get in Touch',
        'contact-desc': 'Get in touch and enjoy Professional Design.',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'footer-tagline': 'Boost your business with strategic design.',
        'footer-copyright': '© 2025 CarlosHenriAM. All rights reserved.',
        'form-thank': 'Thank you for your message! I will get back to you soon.'
    },
    'es': {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-skills': 'Especialidades',
        'nav-portfolio': 'Portafolio',
        'nav-contact': 'Contacto',
        'hero-title': 'Potencie su negocio con diseño estratégico.',
        'hero-view-projects': 'Ver Proyectos',
        'hero-contact': 'Póngase en Contacto',
        'about-title': 'Sobre Mí',
        'about-p1': 'Hola, mi nombre es Carlos. Durante 3 años he estado transformando ideas en experiencias visuales que conectan marcas con clientes. Creando soluciones visuales, comunicando con claridad y despertando conexiones genuinas con el público.',
        'about-p2': 'Mi enfoque combina creatividad, estrategia y atención a los detalles para garantizar que cada proyecto sea único y efectivo.',
        'about-cta': 'Trabajemos Juntos',
        'skills-title': 'Especialidades',
        'skills-flyer-desc': 'Creación de folletos impactantes con identidad visual personalizada, diseñados para promocionar eventos, promociones o marcas.',
        'skills-thumbnails-desc': 'Creación de miniaturas que destacan videos y publicaciones, atrayendo clics y comprometiendo al público.',
        'skills-banners-desc': 'Creación de banners que destacan la marca, mostrando profesionalismo y calidad.',
        'portfolio-title': 'Proyectos',
        'filter-all': 'Todos',
        'filter-flyer': 'Flyer',
        'filter-thumbnail': 'Miniatura',
        'filter-banner': 'Banner',
        'contact-title': 'Póngase en Contacto',
        'contact-desc': 'Póngase en contacto y disfrute de un Diseño Profesional.',
        'contact-email': 'Correo Electrónico',
        'contact-phone': 'Teléfono',
        'contact-location': 'Ubicación',
        'form-name': 'Su Nombre',
        'form-email': 'Su Correo Electrónico',
        'form-subject': 'Asunto',
        'form-message': 'Su Mensaje',
        'form-submit': 'Enviar Mensaje',
        'footer-tagline': 'Potencie su negocio con diseño estratégico.',
        'footer-copyright': '© 2025 CarlosHenriAM. Todos los derechos reservados.',
        'form-thank': '¡Gracias por su mensaje! Me pondré en contacto con usted pronto.'
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'pt';

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update custom select display
    const selectedDiv = document.getElementById('select-selected');
    const langLabels = {'pt': 'PT', 'en': 'EN', 'es': 'ES'};
    selectedDiv.textContent = langLabels[lang];
    
    // Update selected class
    document.querySelectorAll('.select-items div').forEach(div => {
        div.classList.toggle('selected', div.getAttribute('data-value') === lang);
    });
    
    // Update html lang attribute
    const langMap = {'pt': 'pt-BR', 'en': 'en', 'es': 'es'};
    document.documentElement.lang = langMap[lang] || 'pt-BR';
    
    // Update text content
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

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
            alert(translations[currentLang]['form-thank']);
            this.reset();
        });

        // Language toggle - Custom dropdown
        const customSelect = document.querySelector('.custom-select');
        const selectSelected = document.getElementById('select-selected');
        const selectItems = document.getElementById('select-items');
        
        // Toggle dropdown
        selectSelected.addEventListener('click', function() {
            customSelect.classList.toggle('open');
        });
        
        // Select option
        selectItems.addEventListener('click', function(e) {
            if (e.target.hasAttribute('data-value')) {
                const value = e.target.getAttribute('data-value');
                setLanguage(value);
                customSelect.classList.remove('open');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove('open');
            }
        });

// Animações de entrada com GSAP e ScrollTrigger
document.addEventListener('DOMContentLoaded', function() {
    console.log('GSAP animations loaded');
    
    // Set initial language
    setLanguage(currentLang);

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
    stagger: 0.2,
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
