const requiredMessage: { [key: string]: string } = {
  en: 'Required field',
  uk: "Обов'язкове поле",
  de: 'Pflichtfeld',
  es: 'Campo requerido',
  fr: 'Champs requis',
  cn: '必填項',
  ru: 'Обязательное поле',
}

const emailMessage: { [key: string]: string } = {
  en: 'Email format is incorrect',
  uk: 'Неправильний формат електронної пошти',
  de: 'Das E-Mail-Format ist falsch',
  fr: "Le format de l'e-mail est incorrect",
  es: 'El formato del correo electrónico es incorrecto.',
  cn: '電子郵件格式不正確',
  ru: 'Неверный формат электронной почты',
}

const phoneMessage: { [key: string]: string } = {
  en: 'Incorrect phone format +77(777)-77-77-777',
  uk: 'Неправильний формат номеру телефону +77(777)-77-77-777',
  de: 'Falsches Telefonnummernformat +77(777)-77-77-777',
  fr: 'Format de numéro de téléphone incorrect +77(777)-77-77-777',
  es: 'Formato de número de teléfono incorrecto +77(777)-77-77-777',
  cn: '電話號碼格式不正確 +77(777)-77-77-777',
  ru: 'Неправильный формат телефонного номера +77(777)-77-77-777',
}

const passwordMessage: { [key: string]: string } = {
  en: 'At least 6 characters, at least one letter',
  uk: 'Не менше 6 символів, хоча б одна літера',
  de: 'Mindestens 6 Zeichen, mindestens ein Buchstabe',
  es: 'Al menos 6 caracteres, al menos una letra.',
  fr: 'Au moins 6 caractères, au moins une lettre',
  cn: '至少6個字符，至少1個字母',
  ru: 'Не менее 6 символов, хотя бы одна буква',
}

const minLengthMessage: { [key: string]: string } = {
  en: 'Minimum 2 characters',
  uk: 'Мінімум 2 символи',
  de: 'Mindestens 2 Zeichen',
  es: 'Mínimo 2 caracteres',
  fr: 'Minimum 2 caractères',
  cn: '最少 2 個字符',
  ru: 'Минимум 2 символа',
}

const maxLength255Message: { [key: string]: string } = {
  en: 'Maximum 255 characters',
  de: 'Maximal 255 Zeichen',
  uk: 'Максимум 255 символів',
  es: 'Máximo 255 caracteres',
  fr: 'Maximum 255 caractères',
  cn: '最多 255 個字符',
  ru: 'Максимум 255 символов',
}

const maxLength4Message: { [key: string]: string } = {
  en: 'Maximum 4 characters',
  de: 'Maximal 4 Zeichen',
  uk: 'Максимум 4 символи',
  es: 'Máximo 4 caracteres',
  fr: 'Maximum 4 caractères',
  cn: '最多 4 個字符',
  ru: 'Максимум 4 символа',
}

export const required = (lang: string) => {
  return requiredMessage[lang]
}

export const emailPattern = (lang: string) => {
  return {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: emailMessage[lang],
  }
}

export const phonePattern = (lang: string) => {
  return {
    value: /^[\d()+\s-]{18,}$/,
    message: phoneMessage[lang],
  }
}

export const minLength2Pattern = (lang: string) => {
  return {
    value: /^.{2,}$/,
    message: minLengthMessage[lang],
  }
}

export const passwordPattern = (lang: string) => {
  return {
    value: /^(?=.*[a-zA-Z]).{6,}$/,
    message: passwordMessage[lang],
  }
}

export const maxLength255Pattern = (lang: string) => {
  return {
    value: /^.{,255}$/,
    message: maxLength255Message[lang],
  }
}

export const maxLength4Pattern = (lang: string) => {
  return {
    value: /^.{,4}$/,
    message: maxLength4Message[lang],
  }
}
