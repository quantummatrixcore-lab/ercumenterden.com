// ═══════════════════════════════════════════════
// Ercüment Erden — V3 ULTIMATE
// Particles · 3D Tilt · Cursor Glow · Scroll
// Progress · Animated Counters · Stagger Reveal
// ═══════════════════════════════════════════════

import './style.css';
import { setLanguage, toggleLanguage, currentLang } from './i18n.js';

// ─── Theme ───
function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) {
        document.documentElement.setAttribute('data-theme', stored);
    } else {
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme'))
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
}
function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (window._particles) window._particles.updateColors();
}

// ─── Navbar ───
function initNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () =>
        nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
}

// ─── Mobile Menu ───
function initMobile() {
    const btn = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        links.classList.toggle('active');
        document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        btn.classList.remove('active'); links.classList.remove('active');
        document.body.style.overflow = '';
    }));
}

// ─── Scroll Progress ───
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0';
    }, { passive: true });
}

// ─── Staggered Reveal ───
function initReveal() {
    const items = document.querySelectorAll('.reveal-up');
    const obs = new IntersectionObserver(entries => {
        const visible = entries.filter(e => e.isIntersecting);
        visible.forEach((entry, i) => {
            const delay = parseInt(entry.target.dataset.delay || 0) * 80 + i * 50;
            setTimeout(() => entry.target.classList.add('vis'), delay);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
    items.forEach(el => obs.observe(el));
}

// ─── Smooth Scroll ───
function initSmooth() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        });
    });
}

// ─── Typewriter ───
function initTypewriter() {
    const el = document.getElementById('typewriterText');
    if (!el) return;
    const dict = {
        tr: ['Seri Girişimci', 'Ekosistem Mimarı', 'AI Stratejisti', '8x Kurucu', 'Trust Architect'],
        en: ['Serial Entrepreneur', 'Ecosystem Architect', 'AI Strategist', '8x Founder', 'Trust Architect']
    };
    let pi = 0, ci = 0, del = false;
    function lang() { return localStorage.getItem('lang') || (navigator.language.startsWith('tr') ? 'tr' : 'en'); }
    function tick() {
        const phrases = dict[lang()]; const cur = phrases[pi % phrases.length];
        if (!del) {
            el.textContent = cur.slice(0, ci + 1); ci++;
            if (ci >= cur.length) { setTimeout(() => { del = true; tick(); }, 2400); return; }
            setTimeout(tick, 65 + Math.random() * 35);
        } else {
            el.textContent = cur.slice(0, ci); ci--;
            if (ci < 0) { del = false; ci = 0; pi++; setTimeout(tick, 350); return; }
            setTimeout(tick, 30);
        }
    }
    tick();
}

// ─── Animated Counters ───
function initCounters() {
    const vals = document.querySelectorAll('.metric-val[data-count]');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            const end = parseInt(el.dataset.count);
            const dur = 1400;
            const start = performance.now();
            function step(now) {
                const t = Math.min((now - start) / dur, 1);
                // Ease out cubic
                const ease = 1 - Math.pow(1 - t, 3);
                el.textContent = Math.round(ease * end);
                if (t < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    vals.forEach(v => obs.observe(v));
}

// ─── 3D Card Tilt + Cursor Glow ───
function initTilt() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform =
                `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
            // Cursor glow position
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            card.style.setProperty('--gx', `${px}px`);
            card.style.setProperty('--gy', `${py}px`);
            if (card.querySelector('::before') !== null) {
                card.style.setProperty('--gx', `${px}px`);
                card.style.setProperty('--gy', `${py}px`);
            }
            // Move the pseudo-element
            card.style.cssText += `;--gx:${px}px;--gy:${py}px`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Inject cursor glow positioning via style injection
    const style = document.createElement('style');
    style.textContent = `
    [data-tilt]::before {
      left: var(--gx, 50%);
      top: var(--gy, 50%);
    }
  `;
    document.head.appendChild(style);
}

// ─── Particle Network ───
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let parts = [], mouse = { x: null, y: null }, w, h;

    function colors() {
        const s = getComputedStyle(document.documentElement);
        return {
            p: s.getPropertyValue('--pColor').trim() || 'rgba(0,208,255,0.35)',
            l: s.getPropertyValue('--pLine').trim() || 'rgba(0,208,255,0.06)'
        };
    }
    let c = colors();

    function resize() {
        const hero = canvas.parentElement;
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }
    function seed() {
        parts = [];
        const n = Math.min(70, Math.floor((w * h) / 15000));
        for (let i = 0; i < n; i++)
            parts.push({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.2 + 0.4
            });
    }
    function draw() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < parts.length; i++) {
            const p = parts[i];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            if (mouse.x !== null) {
                const dx = mouse.x - p.x, dy = mouse.y - p.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 180) { p.x -= dx * 0.004; p.y -= dy * 0.004; }
            }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = c.p; ctx.fill();
            for (let j = i + 1; j < parts.length; j++) {
                const q = parts[j];
                const dx = p.x - q.x, dy = p.y - q.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 130) {
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = c.l; ctx.lineWidth = 1 - d / 130; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
    resize(); seed(); draw();
    window.addEventListener('resize', () => { resize(); seed(); });
    window._particles = { updateColors() { setTimeout(() => { c = colors(); }, 100); } };
}

// ─── Active Nav ───
function initActiveNav() {
    const secs = document.querySelectorAll('.section, .hero');
    const links = document.querySelectorAll('.nav-links a');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting)
                links.forEach(l => l.classList.toggle('active',
                    l.getAttribute('href') === `#${e.target.id}`));
        });
    }, { threshold: 0.2 });
    secs.forEach(s => obs.observe(s));
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLang);
    initNavbar();
    initMobile();
    initScrollProgress();
    initReveal();
    initSmooth();
    initTypewriter();
    initCounters();
    initTilt();
    initParticles();
    initActiveNav();

    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
});
