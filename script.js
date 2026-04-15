// ========================================
// Translations
// ========================================
const translations = {
    es: {
        'nav.about': 'Sobre Mí',
        'nav.services': 'Servicios',
        'nav.projects': 'Proyectos',
        'nav.technologies': 'Tecnologías',
        'nav.contact': 'Contacto',
        'hero.greeting': 'Hola, soy',
        'hero.description': 'Especialista en Ciberseguridad con experiencia en pentesting, análisis de vulnerabilidades, implementación de SIEM y cumplimiento normativo ISO 27001.',
        'hero.cta': 'Contactar',
        'hero.projects': 'Ver Proyectos',
        'hero.stats.projects': 'Proyectos',
        'hero.stats.tools': 'Herramientas',
        'hero.stats.languages': 'Idiomas',
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy un profesional de la ciberseguridad con sede en España, especializado en proteger infraestructuras digitales y garantizar el cumplimiento normativo.',
        'about.p2': 'Mi experiencia abarca desde pruebas de penetración y análisis forense hasta la implementación de sistemas SIEM como Wazuh y Splunk. Trabajo con marcos de referencia como ISO 27001, NIST y OWASP Top 10.',
        'about.p3': 'Comprometido con la mejora continua y el aprendizaje de nuevas tecnologías para mantenerme a la vanguardia en un campo que evoluciona constantemente.',
        'about.skills': 'Habilidades Clave',
        'services.title': 'Servicios',
        'services.pentesting.title': 'Pentesting',
        'services.pentesting.desc': 'Pruebas de penetración para identificar vulnerabilidades en sistemas, redes y aplicaciones web.',
        'services.siem.title': 'Implementación SIEM',
        'services.siem.desc': 'Configuración y gestión de sistemas SIEM con Wazuh, Splunk y otras herramientas de monitorización.',
        'services.audit.title': 'Auditorías de Seguridad',
        'services.audit.desc': 'Evaluaciones completas de seguridad siguiendo estándares ISO 27001 y NIST.',
        'services.forensics.title': 'Análisis Forense',
        'services.forensics.desc': 'Investigación de incidentes de seguridad y recuperación de evidencias digitales.',
        'projects.title': 'Proyectos',
        'projects.cryptovault.desc': 'Encriptador de archivos AES-256-GCM con derivación PBKDF2. Procesamiento 100% local en el navegador sin enviar datos a servidores.',
        'projects.scanner.desc': 'Escáner de seguridad de red en Python que analiza puertos comunes, detecta vulnerabilidades y ofrece recomendaciones automáticas.',
        'projects.forensics.title': 'Análisis Forense',
        'projects.forensics.desc': 'Documentación y herramientas para análisis forense digital, incluyendo metodologías de investigación y recuperación de evidencias.',
        'projects.final.title': 'Proyecto Final Ciberseguridad',
        'projects.final.desc': 'Proyecto integral de ciberseguridad que incluye análisis de vulnerabilidades, implementación de medidas de seguridad y documentación.',
        'projects.password.desc': 'Gestor de contraseñas desarrollado en C++ con encriptación segura para almacenamiento local de credenciales.',
        'projects.report.title': 'Pentesting Report',
        'projects.report.desc': 'Plantilla profesional de informes de pentesting con propuestas de prevención y recomendaciones de seguridad.',
        'projects.viewAll': 'Ver todos los proyectos',
        'technologies.title': 'Tecnologías',
        'languages.title': 'Idiomas',
        'languages.spanish': 'Español',
        'languages.english': 'Inglés',
        'languages.french': 'Francés',
        'languages.native': 'Nativo',
        'languages.advanced': 'Avanzado',
        'languages.intermediate': 'Intermedio',
        'contact.title': 'Contacto',
        'contact.description': '¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme.',
        'contact.location': 'España',
        'footer.copyright': '© 2026 Younes Laghzali. Todos los derechos reservados.',
        'typing': ['Especialista en Ciberseguridad', 'Pentester', 'Analista de Seguridad', 'SIEM Expert']
    },
    en: {
        'nav.about': 'About Me',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.technologies': 'Technologies',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, I am',
        'hero.description': 'Cybersecurity Specialist with experience in pentesting, vulnerability analysis, SIEM implementation and ISO 27001 compliance.',
        'hero.cta': 'Contact',
        'hero.projects': 'View Projects',
        'hero.stats.projects': 'Projects',
        'hero.stats.tools': 'Tools',
        'hero.stats.languages': 'Languages',
        'about.title': 'About Me',
        'about.p1': 'I am a cybersecurity professional based in Spain, specialized in protecting digital infrastructures and ensuring regulatory compliance.',
        'about.p2': 'My experience ranges from penetration testing and forensic analysis to implementing SIEM systems like Wazuh and Splunk. I work with frameworks such as ISO 27001, NIST and OWASP Top 10.',
        'about.p3': 'Committed to continuous improvement and learning new technologies to stay at the forefront of a constantly evolving field.',
        'about.skills': 'Key Skills',
        'services.title': 'Services',
        'services.pentesting.title': 'Pentesting',
        'services.pentesting.desc': 'Penetration testing to identify vulnerabilities in systems, networks and web applications.',
        'services.siem.title': 'SIEM Implementation',
        'services.siem.desc': 'Configuration and management of SIEM systems with Wazuh, Splunk and other monitoring tools.',
        'services.audit.title': 'Security Audits',
        'services.audit.desc': 'Comprehensive security assessments following ISO 27001 and NIST standards.',
        'services.forensics.title': 'Forensic Analysis',
        'services.forensics.desc': 'Security incident investigation and digital evidence recovery.',
        'projects.title': 'Projects',
        'projects.cryptovault.desc': 'AES-256-GCM file encryptor with PBKDF2 derivation. 100% local processing in the browser without sending data to servers.',
        'projects.scanner.desc': 'Network security scanner in Python that analyzes common ports, detects vulnerabilities and offers automatic recommendations.',
        'projects.forensics.title': 'Forensic Analysis',
        'projects.forensics.desc': 'Documentation and tools for digital forensic analysis, including investigation methodologies and evidence recovery.',
        'projects.final.title': 'Cybersecurity Final Project',
        'projects.final.desc': 'Comprehensive cybersecurity project including vulnerability analysis, security measures implementation and documentation.',
        'projects.password.desc': 'Password manager developed in C++ with secure encryption for local credential storage.',
        'projects.report.title': 'Pentesting Report',
        'projects.report.desc': 'Professional pentesting report template with prevention proposals and security recommendations.',
        'projects.viewAll': 'View all projects',
        'technologies.title': 'Technologies',
        'languages.title': 'Languages',
        'languages.spanish': 'Spanish',
        'languages.english': 'English',
        'languages.french': 'French',
        'languages.native': 'Native',
        'languages.advanced': 'Advanced',
        'languages.intermediate': 'Intermediate',
        'contact.title': 'Contact',
        'contact.description': 'Interested in collaborating or have any questions? Feel free to contact me.',
        'contact.location': 'Spain',
        'footer.copyright': '© 2026 Younes Laghzali. All rights reserved.',
        'typing': ['Cybersecurity Specialist', 'Pentester', 'Security Analyst', 'SIEM Expert']
    },
    fr: {
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.projects': 'Projets',
        'nav.technologies': 'Technologies',
        'nav.contact': 'Contact',
        'hero.greeting': 'Bonjour, je suis',
        'hero.description': 'Spécialiste en Cybersécurité avec expérience en pentesting, analyse de vulnérabilités, implémentation SIEM et conformité ISO 27001.',
        'hero.cta': 'Contacter',
        'hero.projects': 'Voir Projets',
        'hero.stats.projects': 'Projets',
        'hero.stats.tools': 'Outils',
        'hero.stats.languages': 'Langues',
        'about.title': 'À Propos',
        'about.p1': 'Je suis un professionnel de la cybersécurité basé en Espagne, spécialisé dans la protection des infrastructures numériques et la conformité réglementaire.',
        'about.p2': 'Mon expérience va des tests de pénétration et analyse forensique à l\'implémentation de systèmes SIEM comme Wazuh et Splunk. Je travaille avec des cadres comme ISO 27001, NIST et OWASP Top 10.',
        'about.p3': 'Engagé dans l\'amélioration continue et l\'apprentissage de nouvelles technologies pour rester à la pointe d\'un domaine en constante évolution.',
        'about.skills': 'Compétences Clés',
        'services.title': 'Services',
        'services.pentesting.title': 'Pentesting',
        'services.pentesting.desc': 'Tests de pénétration pour identifier les vulnérabilités dans les systèmes, réseaux et applications web.',
        'services.siem.title': 'Implémentation SIEM',
        'services.siem.desc': 'Configuration et gestion de systèmes SIEM avec Wazuh, Splunk et autres outils de surveillance.',
        'services.audit.title': 'Audits de Sécurité',
        'services.audit.desc': 'Évaluations complètes de sécurité suivant les normes ISO 27001 et NIST.',
        'services.forensics.title': 'Analyse Forensique',
        'services.forensics.desc': 'Investigation d\'incidents de sécurité et récupération de preuves numériques.',
        'projects.title': 'Projets',
        'projects.cryptovault.desc': 'Chiffreur de fichiers AES-256-GCM avec dérivation PBKDF2. Traitement 100% local dans le navigateur sans envoyer de données aux serveurs.',
        'projects.scanner.desc': 'Scanner de sécurité réseau en Python qui analyse les ports communs, détecte les vulnérabilités et offre des recommandations automatiques.',
        'projects.forensics.title': 'Analyse Forensique',
        'projects.forensics.desc': 'Documentation et outils pour l\'analyse forensique numérique, y compris les méthodologies d\'investigation et la récupération de preuves.',
        'projects.final.title': 'Projet Final Cybersécurité',
        'projects.final.desc': 'Projet complet de cybersécurité incluant analyse de vulnérabilités, implémentation de mesures de sécurité et documentation.',
        'projects.password.desc': 'Gestionnaire de mots de passe développé en C++ avec chiffrement sécurisé pour le stockage local des identifiants.',
        'projects.report.title': 'Rapport Pentesting',
        'projects.report.desc': 'Modèle professionnel de rapports de pentesting avec propositions de prévention et recommandations de sécurité.',
        'projects.viewAll': 'Voir tous les projets',
        'technologies.title': 'Technologies',
        'languages.title': 'Langues',
        'languages.spanish': 'Espagnol',
        'languages.english': 'Anglais',
        'languages.french': 'Français',
        'languages.native': 'Natif',
        'languages.advanced': 'Avancé',
        'languages.intermediate': 'Intermédiaire',
        'contact.title': 'Contact',
        'contact.description': 'Intéressé par une collaboration ou avez des questions ? N\'hésitez pas à me contacter.',
        'contact.location': 'Espagne',
        'footer.copyright': '© 2026 Younes Laghzali. Tous droits réservés.',
        'typing': ['Spécialiste Cybersécurité', 'Pentester', 'Analyste Sécurité', 'Expert SIEM']
    }
};

let currentLang = 'es';

// ========================================
// DOM Ready
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initThemeToggle();
    initLanguageSelector();
    initScrollEffects();
    initMobileMenu();
    initTypingEffect();
    initScrollAnimations();
});

// ========================================
// Preloader
// ========================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progress = document.getElementById('preloader-progress');
    let width = 0;
    
    const interval = setInterval(() => {
        width += Math.random() * 15;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 300);
        }
        progress.style.width = width + '%';
    }, 100);
}

// ========================================
// Theme Toggle
// ========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        html.classList.toggle('light-mode');
        
        const isLight = html.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// ========================================
// Language Selector
// ========================================
function initLanguageSelector() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangSpan = document.getElementById('current-lang');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
    
    langDropdown.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            currentLang = lang;
            currentLangSpan.textContent = lang.toUpperCase();
            updateLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });
}

function updateLanguage(lang) {
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Restart typing effect with new language
    initTypingEffect();
}

// ========================================
// Scroll Effects
// ========================================
function initScrollEffects() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        // Header background
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
}

// ========================================
// Typing Effect
// ========================================
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const t = translations[currentLang];
    const phrases = t.typing;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}
