<script>
  import { onMount } from 'svelte';

  const plans = [
    {
      name: 'Independiente',
      price: '49',
      period: '/mes',
      desc: 'Para el abogado que trabaja solo o en pareja.',
      features: [
        'Hasta 2 usuarios',
        '200 expedientes activos',
        'Gestión de documentos (5GB)',
        'Agenda y alertas',
        'Facturación básica',
        'Soporte por email',
      ],
      cta: 'Comenzar gratis 14 días',
      featured: false,
    },
    {
      name: 'Despacho',
      price: '149',
      period: '/mes',
      desc: 'El más elegido por firmas en crecimiento.',
      features: [
        'Hasta 15 usuarios',
        'Expedientes ilimitados',
        'Documentos (50GB)',
        'CRM de clientes avanzado',
        'Facturación y honorarios',
        'Reportes y analytics',
        'Soporte prioritario 24/7',
        'Onboarding personalizado',
      ],
      cta: 'Comenzar prueba gratuita',
      featured: true,
    },
    {
      name: 'Corporativo',
      price: 'A medida',
      period: '',
      desc: 'Para grandes firmas y departamentos legales.',
      features: [
        'Usuarios ilimitados',
        'Almacenamiento ilimitado',
        'API y integraciones custom',
        'SSO y directorio activo',
        'SLA garantizado 99.9%',
        'Gestor de cuenta dedicado',
        'Capacitación y onboarding',
        'Infraestructura dedicada',
      ],
      cta: 'Hablar con ventas',
      featured: false,
    },
  ];

  let sectionEl;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section id="pricing" bind:this={sectionEl} class="py-32 bg-void relative overflow-hidden">

  <div class="max-w-7xl mx-auto px-6 lg:px-8">

    <!-- Header -->
    <div class="header-anim text-center" class:visible>
      <p class="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">04 — Planes</p>
      <h2 class="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight font-300 text-ivory mb-4">
        Transparencia total<br/><em class="italic text-gold-light">sin letra pequeña.</em>
      </h2>
      <p class="font-body text-lg text-ivory-dim max-w-xl mx-auto">
        Todos los planes incluyen 14 días de prueba gratuita. Sin tarjeta de crédito.
      </p>
    </div>

    <!-- Plans grid -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-border">
      {#each plans as plan, i}
        <div
          class="plan-card p-10 card-anim relative"
          class:visible
          class:featured={plan.featured}
          style="transition-delay: {150 + i * 120}ms"
        >
          {#if plan.featured}
            <div class="featured-badge font-mono text-[10px] tracking-[0.2em] uppercase">Más popular</div>
          {/if}

          <p class="font-mono text-xs tracking-[0.2em] uppercase text-slate mb-4">{plan.name}</p>
          <div class="flex items-end gap-1 mb-2">
            {#if plan.price !== 'A medida'}
              <span class="font-mono text-xs text-slate mt-1">USD</span>
              <span class="font-display text-5xl font-500 text-ivory leading-none">{plan.price}</span>
              <span class="font-body text-sm text-slate mb-1">{plan.period}</span>
            {:else}
              <span class="font-display text-4xl font-400 text-ivory leading-none">{plan.price}</span>
            {/if}
          </div>
          <p class="font-body text-sm text-slate mb-8">{plan.desc}</p>

          <ul class="space-y-3 mb-10">
            {#each plan.features as feat}
              <li class="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="shrink-0">
                  <path d="M2 7l4 4 6-6" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="font-body text-sm text-ivory-dim">{feat}</span>
              </li>
            {/each}
          </ul>

          <a
            href="#contact"
            class="plan-cta w-full block text-center font-body text-sm font-600 tracking-[0.1em] uppercase py-3.5"
            class:primary={plan.featured}
          >
            {plan.cta}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .header-anim {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s var(--ease-smooth), transform 0.8s var(--ease-smooth);
  }
  .header-anim.visible { opacity: 1; transform: translateY(0); }

  .card-anim {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s var(--ease-smooth), transform 0.6s var(--ease-smooth);
    border-right: 1px solid var(--color-border);
    background: var(--color-void);
    position: relative;
  }
  .card-anim:last-child { border-right: none; }
  .card-anim.visible { opacity: 1; transform: translateY(0); }

  .featured {
    background: var(--color-surface) !important;
    border-right: 1px solid rgba(201,168,76,0.2) !important;
  }
  .featured::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, var(--color-gold-dim), var(--color-gold), var(--color-gold-light));
  }

  .featured-badge {
    display: inline-block;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.3);
    color: var(--color-gold);
    padding: 3px 10px;
    border-radius: 2px;
    margin-bottom: 1.5rem;
    letter-spacing: 0.2em;
    font-size: 10px;
    font-family: var(--font-mono);
  }

  .plan-cta {
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 2px;
    color: var(--color-gold);
    background: rgba(201,168,76,0.05);
    transition: all 0.3s var(--ease-smooth);
    display: block;
    text-decoration: none;
  }
  .plan-cta:hover {
    background: rgba(201,168,76,0.1);
    border-color: rgba(201,168,76,0.6);
  }

  .plan-cta.primary {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold));
    color: var(--color-obsidian);
    border-color: transparent;
    font-weight: 700;
  }
  .plan-cta.primary:hover {
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
    border-color: transparent;
    box-shadow: 0 8px 30px rgba(201,168,76,0.3);
  }
</style>
