<template>
  <section id="equipo" class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-4">Equipo</h2>

    <div class="space-y-3">
      <div v-for="m in team" :key="m.name"
           class="rounded-soft border border-line bg-ink p-4 flex gap-4 items-start">
        <img :src="m.img" :alt="m.name" class="w-16 h-16 rounded-full object-cover">
        <div>
          <h3 class="font-semibold">{{ m.name }}</h3>
          <p class="text-xs uppercase tracking-wide text-bone/60">{{ m.role }}</p>
          <p class="mt-1 text-sm text-bone/80">{{ m.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  { name:'Daniela Herrada', role:'Socia Directora', img:'/favicon.ico',
    bio:'Especialista en civil y mercantil. 12+ años de experiencia.' },
  { name:'Juan Romero', role:'Socio', img:'/favicon.ico',
    bio:'Procesal y administrativo. Estrategia y defensa en sala.' },
]
</script>
