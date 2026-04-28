<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let menuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { label: 'Características', href: '#features' },
    { label: 'Módulos', href: '#modules' },
    { label: 'Confianza', href: '#trust' },
    { label: 'Planes', href: '#pricing' },
  ];
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  class:scrolled
>
  <div class="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3 group" aria-label="FUERO inicio">
      <div class="logo-mark">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="4" fill="#c9a84c" fill-opacity="0.12"/>
          <rect x="1" y="1" width="32" height="32" rx="3" stroke="#c9a84c" stroke-opacity="0.4" stroke-width="0.5"/>
          <path d="M9 8h16M9 17h10M9 26h13" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="25" cy="22" r="4" stroke="#c9a84c" stroke-width="1.2" fill="none"/>
          <path d="M28.1 25.1L31 28" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <span class="font-display text-2xl font-semibold tracking-widest text-ivory group-hover:text-gold transition-colors duration-300">
        FUERO
      </span>
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-8" aria-label="Navegación principal">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-link font-body text-sm font-500 tracking-wide text-slate hover:text-ivory transition-colors duration-300 relative"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <!-- CTA -->
    <div class="hidden md:flex items-center gap-4">
      <a href="#contact" class="font-body text-sm font-500 text-ivory-dim hover:text-ivory transition-colors duration-300">
        Iniciar sesión
      </a>
      <a href="#contact" class="btn-gold font-body text-sm font-600 tracking-wider uppercase px-6 py-2.5">
        Demo gratuita
      </a>
    </div>

    <!-- Mobile burger -->
    <button
      class="md:hidden flex flex-col gap-1.5 p-2"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Menú"
      aria-expanded={menuOpen}
    >
      <span class="burger-line" class:open={menuOpen} style="transform-origin: left"></span>
      <span class="burger-line" class:hide={menuOpen}></span>
      <span class="burger-line" class:open2={menuOpen} style="transform-origin: left"></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden mobile-menu border-t border-border">
      <nav class="px-6 py-6 flex flex-col gap-4">
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-body text-lg text-ivory-dim hover:text-gold transition-colors duration-200"
            on:click={() => menuOpen = false}
          >
            {link.label}
          </a>
        {/each}
        <a href="#contact" class="btn-gold text-center mt-4 py-3 font-body text-sm tracking-wider uppercase">
          Demo gratuita
        </a>
      </nav>
    </div>
  {/if}
</header>

<style>
  header {
    background: transparent;
    border-bottom: 1px solid transparent;
  }
  header.scrolled {
    background: rgba(10, 10, 15, 0.92);
    border-bottom-color: rgba(201, 168, 76, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-gold);
    transition: width 0.3s var(--ease-smooth);
  }
  .nav-link:hover::after { width: 100%; }

  .btn-gold {
    display: inline-block;
    background: linear-gradient(135deg, var(--color-gold-dim), var(--color-gold));
    color: var(--color-obsidian);
    border-radius: 2px;
    font-weight: 600;
    letter-spacing: 0.08em;
    transition: all 0.3s var(--ease-smooth);
    position: relative;
    overflow: hidden;
  }
  .btn-gold::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
    opacity: 0;
    transition: opacity 0.3s;
  }
  .btn-gold:hover::before { opacity: 1; }
  .btn-gold span, .btn-gold { position: relative; z-index: 1; }

  .burger-line {
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--color-ivory-dim);
    transition: all 0.3s var(--ease-smooth);
    border-radius: 1px;
  }
  .burger-line.open { transform: rotate(45deg) translateY(-0.5px); background: var(--color-gold); }
  .burger-line.hide { opacity: 0; transform: scaleX(0); }
  .burger-line.open2 { transform: rotate(-45deg) translateY(0.5px); background: var(--color-gold); }

  .mobile-menu {
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
  }
</style>
