<template>
  <section id="contacto" class="mx-auto max-w-6xl px-4">
    <h2 class="text-2xl sm:text-3xl font-semibold mb-4">Contacto</h2>

    <div class="grid gap-3 lg:grid-cols-2">
      <form class="rounded-soft border border-line bg-ink p-5 space-y-3" @submit.prevent="submit">
        <div>
          <label class="block text-sm mb-1">Nombre</label>
          <input v-model="form.nombre" type="text" required
                 class="w-full rounded-md bg-[#0d1526] border border-line px-3 py-2"
                 placeholder="Tu nombre" />
        </div>
        <div>
          <label class="block text-sm mb-1">Email</label>
          <input v-model="form.email" type="email" required
                 class="w-full rounded-md bg-[#0d1526] border border-line px-3 py-2"
                 placeholder="tunombre@correo.com" />
        </div>
        <div>
          <label class="block text-sm mb-1">Mensaje</label>
          <textarea v-model="form.mensaje" rows="5" required
                    class="w-full rounded-md bg-[#0d1526] border border-line px-3 py-2"
                    placeholder="Cuéntanos tu caso"></textarea>
        </div>
        <button type="submit"
                class="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:brightness-110">
          Enviar
        </button>
        <p v-if="sent" class="text-sm text-green-400">Gracias. Te responderemos pronto.</p>
      </form>

      <div class="rounded-soft border border-line bg-ink p-5 space-y-2">
        <h3 class="font-semibold">Datos de contacto</h3>
        <p class="text-bone/80">Calle Mayor 123, 28013 Madrid</p>
        <p class="text-bone/80">+34 600 000 000</p>
        <p class="text-bone/80">info@herradaromero.com</p>
        <p class="text-bone/60 text-sm mt-3">Horario: L–V, 9:00–19:00</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ nombre:'', email:'', mensaje:'' })
const sent = ref(false)
const submit = () => { sent.value = true; setTimeout(() => (sent.value = false), 4000) }
</script>
