export default defineEventHandler(async (event) => {
  const { default: nodemailer } = await import('nodemailer')
  try {
    const body = await readBody<{ nombre: string; email: string; mensaje: string }>(event)
    if (!body?.nombre || !body?.email || !body?.mensaje) {
      throw createError({ statusCode: 400, statusMessage: 'Datos incompletos' })
    }

    const config = useRuntimeConfig()
    const transporter = nodemailer.createTransport({
      host: String(config.mailHost),
      port: Number(config.mailPort ?? 587),
      secure: Number(config.mailPort) === 465,
      auth: { user: String(config.mailUser), pass: String(config.mailPass) },
    })

    const to = String(config.mailTo || config.mailUser)
    await transporter.sendMail({
      from: `Web HR <${String(config.mailUser)}>`,
      to,
      subject: `Nueva consulta: ${body.nombre}`,
      replyTo: body.email,
      text: `${body.nombre} <${body.email}>\n\n${body.mensaje}`,
    })

    return { ok: true }
  } catch (err: any) {
    throw createError({ statusCode: err?.statusCode || 500, statusMessage: err?.statusMessage || 'Error al enviar' })
  }
})


