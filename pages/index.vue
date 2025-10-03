<template>
    <!-- HEADER (dentro de la página para simplificar) -->
    <header class="sticky top-0 z-50 transition-transform duration-300 border-b" :class="[headerHidden ? '-translate-y-full' : 'translate-y-0', scrolled ? 'shadow-sm' : '', 'bg-blue-950/95 backdrop-blur border-blue-950']">
        <nav class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="#inicio" class="flex items-center gap-2 group" aria-label="Ir al inicio">
                <img src="/logo.svg" alt="Herrada Romero" class="h-7 w-7" />
                <span class="font-display text-white group-hover:opacity-90">Herrada Romero</span>
            </a>
            <button class="lg:hidden p-3 rounded-md border border-gray-300" @click="open = !open"
                aria-label="Abrir menú">☰</button>
            <ul class="hidden lg:flex gap-6 text-sm text-white/85">
                <li><a href="#quienes" :class="[active === 'quienes' ? 'text-white' : '', 'hover:text-white']">Quiénes somos</a></li>
                <li><a href="#servicios" :class="[active === 'servicios' ? 'text-white' : '', 'hover:text-white']">Servicios</a></li>
                <li><a href="#contacto" :class="[active === 'contacto' ? 'text-white' : '', 'hover:text-white']">Contacto</a></li>
                <li><a href="#ubicacion" :class="[active === 'ubicacion' ? 'text-white' : '', 'hover:text-white']">Ubicación</a></li>
            </ul>
        </nav>

        <!-- menú móvil -->
        <div v-if="open" class="lg:hidden border-t border-blue-900 bg-blue-950">
            <ul class="max-w-6xl mx-auto px-4 py-2 space-y-1 text-white/90">
                <li><a @click="open = false; scrollToTop()" href="#inicio" class="block py-3 hover:text-white">Inicio</a></li>
                <li><a @click="open = false" href="#quienes" class="block py-3 hover:text-white">Quiénes somos</a></li>
                <li><a @click="open = false" href="#servicios" class="block py-3 hover:text-white">Servicios</a></li>
                <li><a @click="open = false" href="#contacto" class="block py-3 hover:text-white">Contacto</a></li>
                <li><a @click="open = false" href="#ubicacion" class="block py-3 hover:text-white">Ubicación</a></li>
            </ul>
        </div>
    </header>

    <!-- HERO -->
    <!-- HERO con imagen de fondo (solo el “cuadrado”) -->
        <section id="inicio" class="bg-transparent">
            <div class="max-w-6xl mx-auto px-4 py-10 md:py-14">
                <div class="relative rounded-xl overflow-hidden shadow-md" style="background-image: url('/hero.jpg');">
                    <!-- Imagen como fondo -->
                    <div class="bg-cover bg-center min-h-[320px] md:min-h-[440px]"></div>

                    <!-- Capa para contraste: degradado azul aún más oscuro -->
                    <div class="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/30 to-blue-950/60"></div>

                    <!-- Contenido -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h1 class="font-display text-white text-4xl md:text-5xl tracking-tight drop-shadow-sm">
                            Herrada Romero Abogados S.L.
                        </h1>
                        <p class="mt-4 text-white/90 text-lg max-w-3xl drop-shadow">
                            Asesoramiento jurídico riguroso. Comunicación clara. Defensa eficaz.
                        </p>
                        <div class="mt-8 w-full sm:w-auto">
                            <a href="#contacto"
                                class="inline-block w-full sm:w-auto text-center bg-blue-950 hover:bg-blue-950/90 text-white px-6 py-3 rounded-md text-base md:text-lg shadow-sm transition">
                                Solicitar consulta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ÁREAS DE PRÁCTICA -->
        <section id="servicios" class="bg-transparent">
            <div class="max-w-6xl mx-auto px-4 py-16">
                <!-- Título principal -->
                <h2 class="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-8">
                    Áreas de especialización
                </h2>

                <div class="grid md:grid-cols-2 gap-10">
                    <!-- Bloque HERENCIAS -->
                    <div class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-semibold text-blue-900">
                                Herencias, Testamentos y Sucesiones
                            </h3>
                            <span class="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-900">✓</span>
                        </div>
                        <ul class="grid md:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 leading-relaxed">
                            <li v-for="(item, idx) in herenciasVisible" :key="'h-'+idx" class="flex gap-3">
                                <span class="mt-1 text-blue-800">✓</span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div v-if="herenciasItems.length > herenciasInitial" class="mt-6">
                            <button @click="herenciasExpanded = !herenciasExpanded" class="text-blue-900 text-sm font-medium hover:underline">
                                {{ herenciasExpanded ? 'Mostrar menos' : 'Mostrar más' }}
                            </button>
                        </div>
                    </div>

                    <!-- Bloque OTRAS ESPECIALIDADES -->
                    <div class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-semibold text-blue-900">
                                Otras especialidades
                            </h3>
                            <span class="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-900">✓</span>
                        </div>
                        <ul class="grid md:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 leading-relaxed">
                            <li v-for="(item, idx) in otrasVisible" :key="'o-'+idx" class="flex gap-3">
                                <span class="mt-1 text-blue-800">✓</span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div v-if="otrasItems.length > otrasInitial" class="mt-6">
                            <button @click="otrasExpanded = !otrasExpanded" class="text-blue-900 text-sm font-medium hover:underline">
                                {{ otrasExpanded ? 'Mostrar menos' : 'Mostrar más' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- QUIÉNES SOMOS -->
        <section id="quienes" class="bg-transparent scroll-mt-20">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div class="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-display font-semibold text-gray-900">Quiénes somos</h2>
                        <p class="mt-4 text-gray-700 leading-relaxed">
                            Somos un despacho independiente con enfoque práctico y estratégico.
                            Acompañamos a particulares y empresas en las áreas civil, mercantil,
                            laboral y contencioso-administrativa. Nuestro compromiso: rigor,
                            transparencia y resultados.
                        </p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div class="border border-gray-200 rounded-lg p-4">
                            <p class="text-3xl font-semibold text-gray-900">12+</p>
                            <p class="text-gray-600">Años de experiencia</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <p class="text-3xl font-semibold text-gray-900">300+</p>
                            <p class="text-gray-600">Asuntos resueltos</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <p class="text-3xl font-semibold text-gray-900">24h</p>
                            <p class="text-gray-600">Respuesta en 1 día hábil</p>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4">
                            <p class="text-3xl font-semibold text-gray-900">5★</p>
                            <p class="text-gray-600">Satisfacción de clientes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SERVICIOS -->
        <section id="servicios" class="bg-transparent scroll-mt-20">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-display font-semibold text-gray-900">Servicios</h2>
                <p class="mt-2 text-gray-700">Asesoramiento integral con rigor y claridad.</p>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article v-for="s in services" :key="s.t"
                        class="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 class="font-semibold text-blue-900">{{ s.t }}</h3>
                        <p class="mt-2 text-sm text-gray-700">{{ s.d }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- CONTACTO -->
        <section id="contacto" class="bg-transparent scroll-mt-20">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-display font-semibold text-gray-900">Contacto</h2>

                <div class="mt-6 grid gap-8 md:grid-cols-2">
                    <form class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4"
                        @submit.prevent="submitForm">
                        <div>
                            <label class="block text-sm text-gray-800 mb-1">Nombre</label>
                            <input v-model="form.nombre" type="text" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900" />
                        </div>
                        <div>
                            <label class="block text-sm text-gray-800 mb-1">Email</label>
                            <input v-model="form.email" type="email" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900" />
                        </div>
                        <div>
                            <label class="block text-sm text-gray-800 mb-1">Mensaje</label>
                            <textarea v-model="form.mensaje" rows="5" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"></textarea>
                        </div>
                        <button type="submit"
                            class="inline-flex justify-center bg-blue-900 hover:bg-blue-950 text-white px-5 py-2.5 rounded-md font-medium shadow-sm disabled:opacity-60"
                            :disabled="loading">
                            {{ loading ? 'Enviando…' : 'Enviar' }}
                        </button>
                        <p v-if="sent" class="text-sm text-blue-800">Gracias. Te responderemos en breve.</p>
                        <p v-if="error" class="text-sm text-red-600">No se ha podido enviar. Inténtalo de nuevo.</p>
                    </form>

                    <div class="space-y-4">
                        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 class="font-semibold text-gray-900">Datos de contacto</h3>
                            <p class="mt-2 text-gray-700">Calle de la Princesa, 31, Moncloa - Aravaca, 28008 Madrid</p>
                            <p class="text-gray-700">915596779</p>
                            <p class="text-gray-700">contacto.hrabogados@gmail.com</p>
                            <p class="text-sm text-gray-500 mt-2">L–V · 9:00–19:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- UBICACIÓN (IFRAME GOOGLE MAPS) -->
        <section id="ubicacion" class="bg-transparent scroll-mt-20">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-display font-semibold text-gray-900">¿Dónde estamos?</h2>
                <p class="text-gray-600 mt-2">Calle de la Princesa, 31, Moncloa - Aravaca, 28008 Madrid</p>

                <div class="mt-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div class="relative w-full" style="padding-bottom: 56.25%"> 
                        <iframe
                            class="absolute inset-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1330758710724!2d-3.7147543!3d40.428052099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422868ca4ad761%3A0x9c1b5ccf024cea7f!2sHerrada%20Romero%20Abogados%20S.L.!5e0!3m2!1ses!2ses!4v1755787162568!5m2!1ses!2ses"
                            style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-white/90 backdrop-blur border-t border-gray-200">
            <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-700">
                <p>© {{ new Date().getFullYear() }} Herrada Romero Abogados S.L.</p>
                <a href="#contacto" class="text-gray-700 hover:text-blue-900">Política de privacidad</a>
            </div>
        </footer>
</template>

<script setup lang="ts">
const open = ref(false)
const active = ref('')
const headerHidden = ref(false)
const scrolled = ref(false)

// Datos para Áreas dinámicas
const herenciasItems = [
    'Asesoramiento integral en la organización de la sucesión mortis causa y preparación/redacción del testamento',
    'Posibilidades de desheredación de hijos y otros legitimarios',
    'Revocación y modificación de testamentos ya otorgados',
    'Declaración de herederos abintestato (si el causante no tiene testamento)',
    'Manifestación de herencia y adjudicación a favor de heredero único',
    'Aceptación y repudiación de herencia',
    'Aceptación de herencia a beneficio de inventario',
    'Redacción del cuaderno particional y posterior protocolización',
    'Adición de herencia',
    'Formalización y tramitación del Impuesto sobre Sucesiones, plusvalía e inscripción en el Registro de la Propiedad',
    'Mediación entre coherederos',
    'Negociación en situaciones de conflicto sucesorio y transacciones',
    'Defensa letrada en procedimientos judiciales de división de herencia',
    'Acciones de preterición e impugnación de desheredación injusta',
]
const otrasItems = [
    'Derecho inmobiliario',
    'Actualización de titularidades registrales',
    'Inmatriculaciones de fincas y reanudaciones de tracto registral',
    'Excesos de cabida',
    'Deslinde de fincas',
    'Expedientes catastrales',
]

const herenciasInitial = 8
const otrasInitial = 6
const herenciasExpanded = ref(false)
const otrasExpanded = ref(false)
const herenciasVisible = computed(() => herenciasExpanded.value ? herenciasItems : herenciasItems.slice(0, herenciasInitial))
const otrasVisible = computed(() => otrasExpanded.value ? otrasItems : otrasItems.slice(0, otrasInitial))

onMounted(() => {
    const sections = [
        { id: 'quienes' },
        { id: 'servicios' },
        { id: 'contacto' },
        { id: 'ubicacion' },
    ]
    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible && visible.target.id) active.value = visible.target.id
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.2, 0.4, 0.6, 0.8, 1] })

    sections.forEach(s => {
        const el = document.getElementById(s.id)
        if (el) observer.observe(el)
    })

    let lastY = window.scrollY
    const onScroll = () => {
        const y = window.scrollY
        scrolled.value = y > 8
        if (Math.abs(y - lastY) < 2) {
            lastY = y
            return
        }
        // Oculta al hacer scroll hacia abajo (y suficiente offset), muestra al subir. No oculta si menú abierto
        headerHidden.value = y > lastY && y > 80 && !open.value
        lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
})

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const services = [
    { t: 'Civil', d: 'Contratos, herencias, arrendamientos, reclamaciones de cantidad.' },
    { t: 'Mercantil', d: 'Sociedades, pactos de socios, asesoría recurrente a empresas.' },
    { t: 'Laboral', d: 'Despidos, conciliación, reclamaciones salariales y negociación.' },
    { t: 'Procesal', d: 'Dirección letrada y representación ante tribunales.' },
    { t: 'Administrativo', d: 'Sanciones, licitaciones, recursos y contencioso-administrativo.' },
    { t: 'Compliance', d: 'Riesgos, códigos de conducta, formación y auditoría.' },
]

const form = reactive({ nombre: '', email: '', mensaje: '' })
const loading = ref(false)
const sent = ref(false)
const error = ref(false)
const submitForm = async () => {
    if (loading.value) return
    loading.value = true
    error.value = false
    try {
        await $fetch('/api/contact', { method: 'POST', body: form })
        sent.value = true
        form.nombre = ''
        form.email = ''
        form.mensaje = ''
        setTimeout(() => (sent.value = false), 4000)
    } catch (e) {
        error.value = true
        setTimeout(() => (error.value = false), 4000)
    } finally {
        loading.value = false
    }
}
</script>
