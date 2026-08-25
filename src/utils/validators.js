const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values) {
  const errors = { name: '', email: '', subject: '', message: '' }

  if (!values.name.trim()) {
    errors.name = 'Ingresa tu nombre.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'El nombre es demasiado corto.'
  }

  if (!values.email.trim()) {
    errors.email = 'Ingresa tu email.'
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Ingresa un email válido.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Ingresa un asunto.'
  }

  if (!values.message.trim()) {
    errors.message = 'Escribe un mensaje.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Cuéntame un poco más (mínimo 10 caracteres).'
  }

  return errors
}

export function hasErrors(errors) {
  return Object.values(errors).some((msg) => msg !== '')
}
