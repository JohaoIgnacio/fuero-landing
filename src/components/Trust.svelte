<script>
  import { onMount } from 'svelte';

  const testimonials = [
    {
      quote: 'FUERO transformó la manera en que gestionamos nuestros 800 expedientes activos. Lo que antes tomaba un día ahora toma horas.',
      author: 'Dra. Carolina Méndez',
      role: 'Socia fundadora',
      firm: 'Méndez & Asociados',
    },
    {
      quote: 'La integración entre agenda, expedientes y facturación es perfecta. Nunca más perdimos un vencimiento procesal.',
      author: 'Dr. Andrés Villamizar',
      role: 'Director Jurídico',
      firm: 'Grupo Empresarial Andino',
    },
    {
      quote: 'Como abogado independiente, necesitaba algo potente pero simple. FUERO es exactamente eso.',
      author: 'Abg. Patricia Solano',
      role: 'Abogada litigante',
      firm: 'Práctica independiente',
    },
  ];

  const logos = [
    'Cárdenas & Cia.',
    'López Vélez Abogados',
    'Estudio Jurídico Arango',
    'Brigard Urrutia',
    'Posse Herrera',
    'Garrigues Colombia',
  ];

  let sectionEl;
  let visible = false;
  let activeTestimonial = 0;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionEl) observer.observe(sectionEl);

    const interval = setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    }, 5000);

    return () => { observer.disconnect(); clearInterval(interval); };
  });
</script>

<section id="trust" bind:this={sectionEl} class="py-32 relative overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-[rgba(201,168,76,0.03)] to-transparent pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8">

    <!-- Header -->
    <div class="header-anim" class:visible>
      <p class="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">03 — Confianza</p>
      <h2 class="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight font-300 text-ivory mb-6">
        La eligen los mejores<br/><em class="italic text-gold-light">despachos del país.</em>
      </h2>
    </div>

    <!-- Logos strip -->
    <div class="logos-strip mt-12 mb-20" class:visible>
      <div class="logos-track">
        {#each [...logos, ...logos] as logo}
          <span class="logo-item font-display text-xl font-400 text-slate hover:text-ivory-dim transition-colors duration-300">
            {logo}
          </span>
        {/each}
      </div>
    </div>

    <!-- Testimonials -->
    <div class="relative">
      {#key activeTestimonial}
        <div class="testimonial-card anim-in max-w-3xl mx-auto text-center">
          <div class="quote-mark font-display text-8xl text-gold opacity-20 leading-none mb-0 select-none" aria-hidden="true">"</div>
          <blockquote class="font-display text-2xl md:text-3xl font-300 italic text-ivory leading-relaxed -mt-6">
            {testimonials[activeTestimonial].quote}
          </blockquote>
          <div class="mt-8 flex flex-col items-center gap-1">
            <p class="font-body text-sm font-600 text-gold">{testimonials[activeTestimonial].author}</p>
            <p class="font-mono text-xs text-slate tracking-wider">
              {testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].firm}
            </p>
          </div>
        </div>
      {/key}

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-10">
        {#each testimonials as _, i}
          <button
            class="dot"
            class:active={activeTestimonial === i}
            on:click={() => activeTestimonial = i}
            aria-label="Testimonio {i + 1}"
          ></button>
        {/each}
      </div>
    </div>

    <!-- Trust stats bar -->
    <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border" class:visible>
      {#each [['ISO 27001', 'Certificado'], ['99.9%', 'Uptime garantizado'], ['< 200ms', 'Tiempo de respuesta'], ['24/7', 'Soporte especializado']] as [val, label], i}
        <div class="trust-stat bg-obsidian p-8 stat-anim" class:visible style="transition-delay: {i * 100}ms">
          <p class="font-display text-3xl font-500 gradient-gold mb-2">{val}</p>
          <p class="font-mono text-xs text-slate tracking-[0.15em] uppercase">{label}</p>
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

  .logos-strip {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    opacity: 0;
    transition: opacity 1s var(--ease-smooth) 0.3s;
  }
  .logos-strip.visible { opacity: 1; }

  .logos-track {
    display: flex;
    gap: 4rem;
    width: max-content;
    animation: scroll 20s linear infinite;
  }
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .logo-item {
    white-space: nowrap;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid rgba(201,168,76,0.15);
  }

  .testimonial-card { position: relative; }
  .anim-in {
    animation: fadeIn 0.6s var(--ease-smooth);
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-border);
    border: none;
    cursor: pointer;
    transition: all 0.3s var(--ease-smooth);
  }
  .dot.active {
    width: 24px;
    border-radius: 3px;
    background: var(--color-gold);
  }

  .stat-anim {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s var(--ease-smooth), transform 0.6s var(--ease-smooth);
  }
  .stat-anim.visible { opacity: 1; transform: translateY(0); }

  .gradient-gold {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold), var(--color-gold-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
