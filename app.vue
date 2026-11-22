
<!-- WEB ORIGINAL - GUARDADA PARA RESTAURAR
<template>
  <div class="min-h-screen relative bg-gradient-to-b from-slate-50 to-slate-100 scroll-smooth">
    <div class="pointer-events-none absolute inset-0 opacity-60">
      <div class="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(30,58,138,0.06)_1px,transparent_1px)] [background-size:12px_12px]"></div>
    </div>
    <div class="relative">
      <NuxtPage />
    </div>
  </div>
</template>
-->

<script setup>
useHead({
  title: 'Herrada Romero Abogados | Mantenimiento'
})
</script>

<template>
  <main class="mantenimiento">
    <div class="contenido">
      <div class="icono">⚖️</div>

      <h1>Herrada Romero Abogados</h1>

      <div class="separador"></div>

      <h2>Página temporalmente fuera de servicio</h2>

      <p>
        Estamos realizando tareas de mantenimiento
        en nuestra página web.
        Disculpen las molestias.
      </p>
    </div>
  </main>
</template>

<style>
html, body, #__nuxt {
  margin: 0;
  min-height: 100%;
}

.mantenimiento {
  min-height: 100vh;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.contenido {
  max-width: 650px;
  text-align: center;
}

.icono {
  font-size: 55px;
  margin-bottom: 30px;
}

h1 {
  font-size: 36px;
  margin-bottom: 25px;
}

.separador {
  width: 80px;
  height: 3px;
  background: #d4af37;
  margin: 0 auto 35px;
}

h2 {
  font-size: 22px;
  font-weight: 400;
}

p {
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.8;
}
</style>
