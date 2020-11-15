const contact = document.querySelector('#contact')

const pnome = document.querySelector('#pnome')
const unome = document.querySelector('#unome')
const assunto = document.querySelector('#assunto')
const subject = document.querySelector('#subject')

contact.addEventListener('submit', e => {
  e.preventDefault();
  if (
    pnome.value === "" ||
    unome.value === "" ||
    subject.value === ""
  ) {
    Swal.fire(
      'Erro',
      `Preencha todos os dados`,
      'error'
    )
  return;  
  }

  pnome.value = ""
  unome.value = ""
  subject.value = ""
  
  const title = assunto.value === '1' ? 'dúvida' : 'sugestão';

  Swal.fire(
    'Enviado',
    `Sua ${title} foi enviada com sucesso!`,
    'success'
  )

})