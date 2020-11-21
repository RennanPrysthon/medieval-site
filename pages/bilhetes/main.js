const buyBtn = document.querySelector('#buy-btn');


function buyTicket() {
  addItemToChart(
    {
      id: 7,
      url: '../../assets/img/Bilhete.png',
      name: 'Bilhete',
      price: 20.00
    })
  Swal.fire(
    'Feito',
    'Adicionado ao carrinho',
    'success'
  )
}

buyBtn.addEventListener('click', buyTicket)
