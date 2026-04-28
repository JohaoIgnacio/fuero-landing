<script>
  import { onMount } from 'svelte';
  let name = '';
  let email = '';
  let firm = '';
  let submitted = false;
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

  function handleSubmit(e) {
    e.preventDefault();
    submitted = true;
  }
</script>

<section id="contact" bind:this={sectionEl} class="py-32 relative overflow-hidden">

  <!-- Decorative element -->
  <div class="absolute inset-0 cta-bg pointer-events-none"></div>
  <div class="absolute top-0 left-0 right-0 h-px gold-line pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 right-0 h-px gold-line pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <div class="max-w-2xl mx-auto text-center">

      <div class="content-anim" class:visible>
        <p class="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">05 — Comenzar</p>
        <h2 class="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-300 text-ivory mb-6">
          Su despacho,<br/><em class="italic gradient-gold">en otro nivel.</em>
        </h2>
        <p class="font-body text-lg text-ivory-dim mb-12 leading-relaxed">
          Solicite una demo personalizada de 30 minutos.<br/>
          Sin compromiso. Sin tecnicismos.
        </p>
      </div>

      {#if !submitted}
        <form
          class="form-anim space-y-4 text-left"
          class:visible
          on:submit={handleSubmit}
          id="demo-form"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="field-group">
              <label for="contact-name" class="font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-2 block">Nombre completo</label>
              <input
                id="contact-name"
                type="text"
                bind:value={name}
                placeholder="Dr. Juan Pérez"
                required
                class="fuero-input"
              />
            </div>
            <div class="field-group">
              <label for="contact-email" class="font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-2 block">Correo electrónico</label>
              <input
                id="contact-email"
                type="email"
                bind:value={email}
                placeholder="juan@despacho.com"
                required
                class="fuero-input"
              />
            </div>
          </div>
          <div class="field-group">
            <label for="contact-firm" class="font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-2 block">Nombre del despacho o firma</label>
            <input
              id="contact-firm"
              type="text"
              bind:value={firm}
              placeholder="Pérez & Asociados Abogados"
              class="fuero-input"
            />
          </div>
          <button type="submit" class="submit-btn w-full font-body font-700 text-sm tracking-[0.12em] uppercase py-4 mt-2">
            Solicitar demo gratuita →
          </button>
          <p class="font-mono text-[10px] text-slate text-center tracking-wider">
            Al enviar, acepta nuestros términos de servicio y política de privacidad.
          </p>
        </form>
      {:else}
        <div class="success-card form-anim visible p-12 text-center">
          <div class="success-icon mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16l7 7 13-13" stroke="#c9a84c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl font-400 text-ivory mb-3">¡Solicitud enviada!</h3>
          <p class="font-body text-base text-ivory-dim">Nuestro equipo se pondrá en contacto en menos de 24 horas para coordinar su demo personalizada.</p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .cta-bg {
    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%);
  }
  .gold-line {
    background: linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent);
  }

  .gradient-gold {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold), var(--color-gold-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .content-anim {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s var(--ease-smooth), transform 0.8s var(--ease-smooth);
  }
  .content-anim.visible { opacity: 1; transform: translateY(0); }

  .form-anim {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s var(--ease-smooth) 0.2s, transform 0.8s var(--ease-smooth) 0.2s;
  }
  .form-anim.visible { opacity: 1; transform: translateY(0); }

  .fuero-input {
    width: 100%;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--color-border);
    border-radius: 2px;
    padding: 12px 16px;
    color: var(--color-ivory);
    font-family: var(--font-body);
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s var(--ease-smooth), background 0.3s;
  }
  .fuero-input::placeholder { color: var(--color-slate); }
  .fuero-input:focus {
    border-color: rgba(201,168,76,0.5);
    background: rgba(201,168,76,0.04);
  }

  .submit-btn {
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold));
    color: var(--color-obsidian);
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.35s var(--ease-smooth);
    display: block;
  }
  .submit-btn:hover {
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(201,168,76,0.3);
  }

  .success-card {
    border: 1px solid rgba(201,168,76,0.2);
    background: rgba(201,168,76,0.04);
    border-radius: 4px;
  }
  .success-icon {
    width: 64px;
    height: 64px;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(201,168,76,0.08);
  }
</style>
