<script>
  import { onMount } from 'svelte';

  const features = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2"/><rect x="15" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2"/><rect x="4" y="15" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="19.5" cy="19.5" r="4.5" stroke="currentColor" stroke-width="1.2"/><path d="M22.3 22.3L25 25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      title: 'Gestión de Expedientes',
      desc: 'Organiza y rastrea cada caso con su historial completo, documentos asociados, partes involucradas y fechas críticas. Acceso inmediato desde cualquier dispositivo.',
      tag: 'Core',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M4 10h20M9 6V4M19 6V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><rect x="8" y="14" width="5" height="4" rx="0.8" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="0.8"/><rect x="15" y="14" width="5" height="4" rx="0.8" stroke="currentColor" stroke-width="0.8"/></svg>`,
      title: 'Agenda y Audiencias',
      desc: 'Calendario inteligente con alertas automáticas para audiencias, vencimientos procesales y reuniones. Sincroniza con el equipo en tiempo real.',
      tag: 'Productividad',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 4h11l7 7v13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.2"/><path d="M17 4v7h7M10 17h8M10 13h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
      title: 'Documentos Inteligentes',
      desc: 'Generación automática de escritos, contratos y memoriales desde plantillas jurídicas. Motor de búsqueda full-text en toda la base documental.',
      tag: 'Documentos',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M5 24c0-4.4 4.03-8 9-8s9 3.6 9 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="22" cy="8" r="3" stroke="currentColor" stroke-width="1"/><path d="M20 14c.6-.1 1.3-.1 2 0" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>`,
      title: 'CRM de Clientes',
      desc: 'Ficha completa de cada cliente con historial de casos, comunicaciones, documentos y estado de cobros. Relaciones claras, servicio superior.',
      tag: 'Clientes',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20l5-5 4 4 5-6 6 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" stroke-width="1.2"/></svg>`,
      title: 'Facturación y Honorarios',
      desc: 'Control de tiempo por caso, generación de facturas, seguimiento de pagos y dashboards financieros. Ningún honorario sin cobrar.',
      tag: 'Finanzas',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 9v5c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V9L14 4z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M10 14l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: 'Seguridad y Cumplimiento',
      desc: 'Cifrado AES-256, permisos por rol, auditoría completa de accesos. Cumplimiento con normativas de protección de datos jurídicos.',
      tag: 'Seguridad',
    },
  ];

  let sectionEl;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section id="features" bind:this={sectionEl} class="py-32 relative">
  <!-- Section background accent -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.02)] to-transparent pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8">

    <!-- Header -->
    <div class="section-header" class:visible>
      <p class="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">01 — Características</p>
      <h2 class="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight font-300 text-ivory mb-6">
        Todo lo que necesita<br/><em class="italic text-gold-light">un despacho moderno.</em>
      </h2>
      <p class="font-body text-lg text-ivory-dim max-w-2xl leading-relaxed">
        FUERO fue diseñado junto a abogados en ejercicio para resolver los retos
        operativos reales — no los imaginados.
      </p>
    </div>

    <!-- Feature grid -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
      {#each features as feat, i}
        <div
          class="feature-card group bg-obsidian p-8 card-animate"
          class:visible
          style="transition-delay: {100 + i * 80}ms"
        >
          <div class="icon-wrap mb-5 text-gold">{@html feat.icon}</div>
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-display text-xl font-500 text-ivory">{feat.title}</h3>
            <span class="tag font-mono text-[10px] tracking-[0.15em] uppercase text-gold px-2 py-0.5 ml-3 mt-1 shrink-0">{feat.tag}</span>
          </div>
          <p class="font-body text-sm text-slate leading-relaxed">{feat.desc}</p>
          <div class="mt-6 h-px line-reveal"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .section-header {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s var(--ease-smooth), transform 0.8s var(--ease-smooth);
  }
  .section-header.visible { opacity: 1; transform: translateY(0); }

  .card-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s var(--ease-smooth), transform 0.6s var(--ease-smooth), background 0.3s;
  }
  .card-animate.visible { opacity: 1; transform: translateY(0); }

  .feature-card:hover {
    background: var(--color-void) !important;
  }

  .icon-wrap {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 4px;
    background: rgba(201,168,76,0.05);
    transition: all 0.3s var(--ease-smooth);
  }
  .feature-card:hover .icon-wrap {
    border-color: rgba(201,168,76,0.5);
    background: rgba(201,168,76,0.1);
  }

  .tag {
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 2px;
    background: rgba(201,168,76,0.05);
  }

  .line-reveal {
    background: linear-gradient(to right, var(--color-gold), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s var(--ease-smooth);
  }
  .feature-card:hover .line-reveal { transform: scaleX(1); }
</style>
