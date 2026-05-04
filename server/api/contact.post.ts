import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const { nombre, email, telefono, mensaje } = await readBody(event)

  if (!nombre || !email || !telefono || !mensaje) {
    throw createError({ statusCode: 400, statusMessage: 'Faltan campos obligatorios' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Web Herrada Romero" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `Consulta web de ${nombre}`,
    html: `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, '<br>')}</p>
    `,
  })

  return { ok: true }
})