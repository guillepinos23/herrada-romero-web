<template>
    <!-- HEADER (dentro de la página para simplificar) -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <nav class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="#inicio" class="font-serif text-lg text-gray-900">Herrada Romero</a>
            <button class="lg:hidden p-2 rounded-md border border-gray-300" @click="open = !open"
                aria-label="Abrir menú">☰</button>
            <ul class="hidden lg:flex gap-6 text-sm text-gray-700">
                <li><a href="#quienes" class="hover:text-gray-900">Quiénes somos</a></li>
                <li><a href="#servicios" class="hover:text-gray-900">Servicios</a></li>
                <li><a href="#contacto" class="hover:text-gray-900">Contacto</a></li>
                <li><a href="#ubicacion" class="hover:text-gray-900">Ubicación</a></li>
            </ul>
        </nav>

        <!-- menú móvil -->
        <div v-if="open" class="lg:hidden border-t border-gray-200 bg-white">
            <ul class="max-w-6xl mx-auto px-4 py-2 space-y-1 text-gray-700">
                <li><a @click="open = false" href="#quienes" class="block py-2">Quiénes somos</a></li>
                <li><a @click="open = false" href="#servicios" class="block py-2">Servicios</a></li>
                <li><a @click="open = false" href="#contacto" class="block py-2">Contacto</a></li>
                <li><a @click="open = false" href="#ubicacion" class="block py-2">Ubicación</a></li>
            </ul>
        </div>
    </header>

    <!-- HERO -->
    <<!-- HERO con imagen de fondo (solo el “cuadrado”) -->
        <section id="inicio" class="bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 py-10 md:py-14">
                <div class="relative rounded-xl overflow-hidden shadow-md" style="background-image: url('/hero.jpg');">
                    <!-- Imagen como fondo -->
                    <div class="bg-cover bg-center min-h-[320px] md:min-h-[440px]"></div>

                    <!-- Capa oscura para leer bien el texto -->
                    <div class="absolute inset-0 bg-black/35"></div>

                    <!-- Contenido -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h1 class="font-serif text-white text-4xl md:text-5xl tracking-tight drop-shadow-sm">
                            Herrada Romero Abogados S.L.
                        </h1>
                        <p class="mt-4 text-white/90 text-lg max-w-3xl drop-shadow">
                            Asesoramiento jurídico riguroso. Comunicación clara. Defensa eficaz.
                        </p>
                        <div class="mt-8">
                            <a href="#contacto"
                                class="inline-block bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-md text-base md:text-lg shadow-sm transition">
                                Solicitar consulta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ÁREAS DE PRÁCTICA -->
        <section id="servicios" class="bg-white">
            <div class="max-w-6xl mx-auto px-4 py-16">
                <!-- Título principal -->
                <h2 class="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-12">
                    Áreas de especialización
                </h2>

                <div class="grid md:grid-cols-2 gap-10">
                    <!-- Bloque HERENCIAS -->
                    <div>
                        <h3 class="text-2xl font-semibold text-emerald-700 mb-6">
                            Herencias, Testamentos y Sucesiones
                        </h3>
                        <ul class="space-y-3 text-gray-700 leading-relaxed">
                            <li>Asesoramiento integral en la organización de la sucesión mortis causa y
                                preparación/redacción del testamento</li>
                            <li>Posibilidades de desheredación de hijos y otros legitimarios</li>
                            <li>Revocación y modificación de testamentos ya otorgados</li>
                            <li>Declaración de herederos abintestato (si el causante no tiene testamento)</li>
                            <li>Manifestación de herencia y adjudicación a favor de heredero único</li>
                            <li>Aceptación y repudiación de herencia</li>
                            <li>Aceptación de herencia a beneficio de inventario</li>
                            <li>Redacción del cuaderno particional y posterior protocolización</li>
                            <li>Adición de herencia</li>
                            <li>Formalización y tramitación del Impuesto sobre Sucesiones, plusvalía e inscripción en el
                                Registro de la Propiedad</li>
                            <li>Mediación entre coherederos</li>
                            <li>Negociación en situaciones de conflicto sucesorio y transacciones</li>
                            <li>Defensa letrada en procedimientos judiciales de división de herencia</li>
                            <li>Acciones de preterición e impugnación de desheredación injusta</li>
                        </ul>
                    </div>

                    <!-- Bloque OTRAS ESPECIALIDADES -->
                    <div>
                        <h3 class="text-2xl font-semibold text-emerald-700 mb-6">
                            Otras especialidades
                        </h3>
                        <ul class="space-y-3 text-gray-700 leading-relaxed">
                            <li>Derecho inmobiliario</li>
                            <li>Actualización de titularidades registrales</li>
                            <li>Inmatriculaciones de fincas y reanudaciones de tracto registral</li>
                            <li>Excesos de cabida</li>
                            <li>Deslinde de fincas</li>
                            <li>Expedientes catastrales</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- QUIÉNES SOMOS -->
        <section id="quienes" class="bg-white">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div class="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Quiénes somos</h2>
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
        <section id="servicios" class="bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Servicios</h2>
                <p class="mt-2 text-gray-600">Asesoramiento integral con rigor y claridad.</p>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article v-for="s in services" :key="s.t"
                        class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <h3 class="font-semibold text-gray-900">{{ s.t }}</h3>
                        <p class="mt-2 text-sm text-gray-600">{{ s.d }}</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- CONTACTO -->
        <section id="contacto" class="bg-white">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Contacto</h2>

                <div class="mt-6 grid gap-8 md:grid-cols-2">
                    <form class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4"
                        @submit.prevent="submit">
                        <div>
                            <label class="block text-sm text-gray-700 mb-1">Nombre</label>
                            <input v-model="form.nombre" type="text" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600" />
                        </div>
                        <div>
                            <label class="block text-sm text-gray-700 mb-1">Email</label>
                            <input v-model="form.email" type="email" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600" />
                        </div>
                        <div>
                            <label class="block text-sm text-gray-700 mb-1">Mensaje</label>
                            <textarea v-model="form.mensaje" rows="5" required
                                class="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"></textarea>
                        </div>
                        <button type="submit"
                            class="inline-flex justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md font-medium shadow-sm">
                            Enviar
                        </button>
                        <p v-if="sent" class="text-sm text-emerald-600">Gracias. Te responderemos en breve.</p>
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
        <section id="ubicacion" class="bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">¿Dónde estamos?</h2>
                <p class="text-gray-600 mt-2">Calle de la Princesa, 31, Moncloa - Aravaca, 28008 Madrid</p>

                <div class="mt-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1330758710724!2d-3.7147543!3d40.428052099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422868ca4ad761%3A0x9c1b5ccf024cea7f!2sHerrada%20Romero%20Abogados%20S.L.!5e0!3m2!1ses!2ses!4v1755787162568!5m2!1ses!2ses"
                        width="600" height="450" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-white border-t border-gray-200">
            <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-600">
                <p>© {{ new Date().getFullYear() }} Herrada Romero Abogados S.L.</p>
                <a href="#contacto" class="hover:text-gray-900">Política de privacidad</a>
            </div>
        </footer>
</template>

<script setup lang="ts">
const open = ref(false)

const services = [
    { t: 'Civil', d: 'Contratos, herencias, arrendamientos, reclamaciones de cantidad.' },
    { t: 'Mercantil', d: 'Sociedades, pactos de socios, asesoría recurrente a empresas.' },
    { t: 'Laboral', d: 'Despidos, conciliación, reclamaciones salariales y negociación.' },
    { t: 'Procesal', d: 'Dirección letrada y representación ante tribunales.' },
    { t: 'Administrativo', d: 'Sanciones, licitaciones, recursos y contencioso-administrativo.' },
    { t: 'Compliance', d: 'Riesgos, códigos de conducta, formación y auditoría.' },
]

const form = reactive({ nombre: '', email: '', mensaje: '' })
const sent = ref(false)
const submit = () => { sent.value = true; setTimeout(() => (sent.value = false), 3500) }
</script>
