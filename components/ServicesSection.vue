<template>
  <section id="servicios" class="mx-auto max-w-6xl px-4">
    <div class="mb-4">
      <h2 class="text-2xl sm:text-3xl font-semibold">Servicios</h2>
      <p class="text-bone/80">Asesoramiento integral con rigor y claridad.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <article v-for="s in services" :key="s.t"
               class="rounded-soft border border-line bg-ink p-5">
        <h3 class="font-semibold mb-1">{{ s.t }}</h3>
        <p class="text-sm text-bone/80">{{ s.d }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { t:'Civil', d:'Contratos, herencias, arrendamientos, reclamaciones de cantidad.' },
  { t:'Mercantil', d:'Sociedades, pactos de socios, asesoría recurrente a empresas.' },
  { t:'Laboral', d:'Despidos, conciliación, reclamaciones salariales y negociación.' },
  { t:'Procesal', d:'Dirección letrada y representación ante tribunales.' },
  { t:'Administrativo', d:'Sanciones, licitaciones, recursos y contencioso-adm.' },
  { t:'Compliance', d:'Riesgos, códigos de conducta, formación y auditoría.' },
]
</script>
