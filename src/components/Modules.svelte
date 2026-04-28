<script>
  import { onMount } from 'svelte';

  const modules = [
    {
      number: '01',
      title: 'Estudio Jurídico',
      subtitle: 'Para firmas con múltiples socios y equipos',
      items: ['Multi-sede y multi-área de práctica', 'Asignación de casos por abogado', 'Dashboard ejecutivo de rendimiento', 'Control de horas por proyecto', 'Flujos de aprobación internos'],
    },
    {
      number: '02',
      title: 'Despacho Individual',
      subtitle: 'Para el abogado independiente',
      items: ['Gestión ágil de cartera personal', 'Agenda y recordatorios automáticos', 'Facturación simplificada', 'Portal del cliente con acceso limitado', 'Exportación para declaración de impuestos'],
    },
    {
      number: '03',
      title: 'Departamento Legal',
      subtitle: 'Para áreas jurídicas corporativas',
      items: ['Integración con sistemas ERP/CRM', 'Gestión de contratos corporativos', 'Control de litigios activos y pasivos', 'Reportes de riesgo legal para directivos', 'API para conexión con herramientas internas'],
    },
  ];

  let sectionEl;
  let visible = false;
  let activeModule = 0;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section id="modules" bind:this={sectionEl} class="py-32 bg-void relative overflow-hidden">

  <!-- Big background text -->
  <div class="absolute bottom-0 right-0 ghost-text font-display font-700 text-[20rem] leading-none select-none pointer-events-none" aria-hidden="true">
    LEX
  </div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

    <!-- Header -->
    <div class="header-anim" class:visible>
      <p class="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">02 — Módulos</p>
      <h2 class="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight font-300 text-ivory mb-4">
        Diseñado para cada<br/><em class="italic text-gold-light">tipo de práctica.</em>
      </h2>
    </div>

    <div class="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-0">

      <!-- Module selector -->
      <div class="lg:col-span-2 border-r border-border">
        {#each modules as mod, i}
          <button
            class="module-btn w-full text-left px-0 py-8 border-b border-border group btn-anim"
            class:visible
            class:active={activeModule === i}
            style="transition-delay: {200 + i * 100}ms"
            on:click={() => activeModule = i}
          >
            <div class="flex items-start gap-5 pr-8">
              <span class="font-mono text-xs tracking-widest text-gold mt-1 opacity-60">{mod.number}</span>
              <div>
                <p class="font-display text-2xl font-500 text-ivory group-hover:text-gold transition-colors duration-300">{mod.title}</p>
                <p class="font-body text-sm text-slate mt-1">{mod.subtitle}</p>
              </div>
            </div>
            <div class="progress-bar mt-4 ml-10" class:active={activeModule === i}></div>
          </button>
        {/each}
      </div>

      <!-- Module detail -->
      <div class="lg:col-span-3 pl-0 lg:pl-16 pt-8 lg:pt-0 flex flex-col justify-center">
        {#key activeModule}
          <div class="module-detail">
            <p class="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-6 opacity-60">
              {modules[activeModule].number} / 03
            </p>
            <h3 class="font-display text-4xl font-400 text-ivory mb-2">{modules[activeModule].title}</h3>
            <p class="font-body text-base text-ivory-dim mb-10">{modules[activeModule].subtitle}</p>
            <ul class="space-y-4">
              {#each modules[activeModule].items as item, j}
                <li class="flex items-center gap-4 item-anim" style="animation-delay: {j * 60}ms">
                  <div class="check-icon shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <span class="font-body text-sm text-ivory-dim">{item}</span>
                </li>
              {/each}
            </ul>
            <div class="mt-10">
              <a href="#contact" class="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors duration-300 group">
                <span>Ver caso de uso completo</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        {/key}
      </div>
    </div>
  </div>
</section>

<style>
  .ghost-text {
    color: rgba(201, 168, 76, 0.03);
    line-height: 1;
  }

  .header-anim {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s var(--ease-smooth), transform 0.8s var(--ease-smooth);
  }
  .header-anim.visible { opacity: 1; transform: translateY(0); }

  .btn-anim {
    opacity: 0;
    transform: translateX(-16px);
    transition: opacity 0.6s var(--ease-smooth), transform 0.6s var(--ease-smooth);
    background: none;
    border: none;
    cursor: pointer;
  }
  .btn-anim.visible { opacity: 1; transform: translateX(0); }

  .module-btn { position: relative; }
  .module-btn.active p:first-child,
  .module-btn.active .font-display { color: var(--color-gold) !important; }

  .progress-bar {
    height: 1px;
    background: rgba(201,168,76,0.2);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .progress-bar::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: var(--color-gold);
    transition: width 0.5s var(--ease-smooth);
  }
  .progress-bar.active::after { width: 100%; }

  .module-detail {
    animation: slideIn 0.4s var(--ease-smooth);
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(16px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .item-anim {
    animation: fadeUp 0.4s var(--ease-smooth) both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .check-icon {
    width: 28px;
    height: 28px;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(201,168,76,0.06);
    flex-shrink: 0;
  }
</style>
