<template>
  <nav class="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <NuxtLink to="#inicio" class="flex items-center gap-2">
        <img src="/favicon.ico" alt="Herrada Romero" class="h-8" />
        <span class="sr-only">Inicio</span>
      </NuxtLink>

      <button class="lg:hidden p-2 rounded-md ring-1 ring-line"
              @click="open = !open" aria-label="Abrir menú">☰</button>

      <ul class="hidden lg:flex items-center gap-6 text-sm">
        <li><a href="#servicios" class="hover:text-white">Servicios</a></li>
        <li><a href="#equipo" class="hover:text-white">Equipo</a></li>
        <li><a href="#contacto" class="hover:text-white">Contacto</a></li>
        <li><a href="#ubicacion" class="hover:text-white">Ubicación</a></li>
      </ul>
    </div>

    <transition name="fade">
      <div v-if="open" class="lg:hidden border-t border-line">
        <ul class="mx-4 my-2 space-y-1">
          <li><a @click="close" href="#servicios" class="block px-3 py-2 rounded-md hover:bg-[#101a2b]">Servicios</a></li>
          <li><a @click="close" href="#equipo" class="block px-3 py-2 rounded-md hover:bg-[#101a2b]">Equipo</a></li>
          <li><a @click="close" href="#contacto" class="block px-3 py-2 rounded-md hover:bg-[#101a2b]">Contacto</a></li>
          <li><a @click="close" href="#ubicacion" class="block px-3 py-2 rounded-md hover:bg-[#101a2b]">Ubicación</a></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const open = ref(false)
const close = () => (open.value = false)
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition:opacity .15s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }
</style>