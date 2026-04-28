<script>
  import { onMount } from 'svelte';

  let visible = false;
  let titleVisible = false;
  let subtitleVisible = false;
  let ctaVisible = false;
  let badgeVisible = false;

  onMount(() => {
    setTimeout(() => badgeVisible = true, 200);
    setTimeout(() => titleVisible = true, 400);
    setTimeout(() => subtitleVisible = true, 750);
    setTimeout(() => ctaVisible = true, 1000);
    visible = true;
  });

  const stats = [
    { value: '+2,400', label: 'Profesionales activos' },
    { value: '98.7%', label: 'Tasa de retención' },
    { value: '+340K', label: 'Expedientes gestionados' },
    { value: '15min', label: 'Tiempo de onboarding' },
  ];

  let counter = [0, 0, 0, 0];

  onMount(() => {
    // Animate stats on load
    const targets = [2400, 98.7, 340000, 15];
    targets.forEach((target, i) => {
      let start = 0;
      const duration = 2000;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        counter[i] = start;
        if (start >= target) clearInterval(timer);
      }, 16);
    });
  });
</script>

<section class="hero relative min-h-screen flex flex-col justify-center overflow-hidden" id="hero">

  <!-- Background architectural grid -->
  <div class="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true"></div>

  <!-- Radial glow -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] hero-glow pointer-events-none" aria-hidden="true"></div>

  <!-- Decorative vertical lines -->
  <div class="absolute top-0 left-[12%] w-px h-full vert-line opacity-20" aria-hidden="true"></div>
  <div class="absolute top-0 right-[12%] w-px h-full vert-line opacity-10" aria-hidden="true"></div>

  <!-- Scales of justice silhouette -->
  <div class="absolute right-0 bottom-0 scales-art opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
    <svg width="700" height="700" viewBox="0 0 200 200" fill="none">
      <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="1"/>
      <line x1="40" y1="50" x2="160" y2="50" stroke="white" stroke-width="1"/>
      <circle cx="40" cy="80" r="25" stroke="white" stroke-width="0.8" fill="none"/>
      <circle cx="160" cy="80" r="25" stroke="white" stroke-width="0.8" fill="none"/>
      <line x1="40" y1="50" x2="40" y2="55" stroke="white" stroke-width="0.8"/>
      <line x1="160" y1="50" x2="160" y2="55" stroke="white" stroke-width="0.8"/>
      <rect x="85" y="175" width="30" height="4" fill="white"/>
    </svg>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">

    <!-- Badge -->
    <div class="fade-in" class:visible={badgeVisible}>
      <div class="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 badge-pill">
        <span class="pulse-dot"></span>
        <span class="font-mono text-xs tracking-[0.2em] uppercase text-gold">
          Plataforma Jurídica · 2025
        </span>
      </div>
    </div>

    <!-- Main title -->
    <div class="fade-up" class:visible={titleVisible}>
      <h1 class="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.92] font-300 text-ivory mb-6 tracking-tight">
        La gestión<br/>
        <em class="font-light italic gradient-gold">jurídica</em><br/>
        del siglo XXI.
      </h1>
    </div>

    <!-- Subtitle -->
    <div class="fade-up delay-1" class:visible={subtitleVisible}>
      <p class="font-body text-lg md:text-xl text-ivory-dim max-w-xl mb-12 leading-relaxed font-400">
        FUERO centraliza la operación completa de estudios jurídicos, despachos y
        profesionales del derecho — desde la gestión de expedientes hasta la
        facturación — en una plataforma de precisión absoluta.
      </p>
    </div>

    <!-- CTAs -->
    <div class="fade-up delay-2 flex flex-wrap items-center gap-5" class:visible={ctaVisible}>
      <a href="#contact" id="hero-cta-primary" class="cta-primary font-body font-600 text-sm tracking-[0.12em] uppercase px-8 py-4">
        Solicitar demo gratuita
      </a>
      <a href="#features" id="hero-cta-secondary" class="cta-secondary font-body text-sm font-500 tracking-wide flex items-center gap-2 group">
        <span>Explorar funciones</span>
        <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <!-- Stats bar -->
    <div class="fade-up delay-3 mt-24 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8" class:visible={ctaVisible}>
      {#each stats as stat, i}
        <div class="stat-card group">
          <p class="font-display text-3xl md:text-4xl font-500 text-gold mb-1">{stat.value}</p>
          <p class="font-mono text-xs text-slate tracking-[0.15em] uppercase">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
    <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-slate">Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero { background: var(--color-obsidian); }

  .grid-bg {
    background-image:
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%);
  }

  .hero-glow {
    background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%);
    filter: blur(40px);
  }

  .vert-line {
    background: linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent 100%);
  }

  .badge-pill {
    border: 1px solid rgba(201,168,76,0.25);
    border-radius: 100px;
    background: rgba(201,168,76,0.06);
    backdrop-filter: blur(8px);
  }

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-gold);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }

  .gradient-gold {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold), var(--color-gold-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cta-primary {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold));
    color: var(--color-obsidian);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    transition: all 0.35s var(--ease-smooth);
    display: inline-block;
    font-weight: 700;
  }
  .cta-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
    opacity: 0;
    transition: opacity 0.35s;
  }
  .cta-primary:hover::before { opacity: 1; }
  .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(201,168,76,0.3); }
  .cta-primary span { position: relative; z-index: 1; }

  .cta-secondary {
    color: var(--color-ivory-dim);
    transition: all 0.3s var(--ease-smooth);
  }
  .cta-secondary:hover { color: var(--color-gold); }
  .cta-secondary .arrow {
    transition: transform 0.3s var(--ease-smooth);
  }
  .cta-secondary:hover .arrow { transform: translateX(5px); }

  .stat-card { position: relative; }
  .stat-card::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(201,168,76,0.2);
  }
  .stat-card:first-child::before { display: none; }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--color-gold), transparent);
    animation: scrollAnim 1.5s ease-in-out infinite;
  }
  @keyframes scrollAnim {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* Animations */
  .fade-in {
    opacity: 0;
    transition: opacity 0.6s var(--ease-smooth);
  }
  .fade-in.visible { opacity: 1; }

  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s var(--ease-smooth), transform 0.7s var(--ease-smooth);
  }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-up.delay-1 { transition-delay: 0.15s; }
  .fade-up.delay-2 { transition-delay: 0.3s; }
  .fade-up.delay-3 { transition-delay: 0.5s; }
</style>
