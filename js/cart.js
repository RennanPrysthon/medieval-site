const body = document.querySelector('body')

var badges = document.querySelectorAll(".badge")
const products = [
  {
    id: 1,
    url: '../../assets/img/Bone.png',
    name: 'Boné',
    price: 20.00,
    show: true
  },
  {
    id: 2,
    url: '../../assets/img/Caneca.png',
    name: 'Caneca',
    price: 34.00,
    show: true
  },
  {
    id: 3,
    url: '../../assets/img/Copo.png',
    name: 'Copo',
    price: 10.00,
    show: true
  },
  {
    id: 4,
    url: '../../assets/img/Cracha.png',
    name: 'Cracha',
    price: 50.00,
    show: true
  },
  {
    id: 5,
    url: '../../assets/img/Pen.png',
    name: 'Pen',
    price: 50.00,
    show: true
  },
  {
    id: 6,
    url: '../../assets/img/Fita.png',
    name: 'Fita',
    price: 50.00,
    show: true
  },
  {
    id: 7,
    url: '../../assets/img/Bilhete.png',
    name: 'Bilhete 0-3 anos',
    price: 0.00,
    show: false
  },
  {
    id: 8,
    url: '../../assets/img/Bilhete.png',
    name: 'Bilhete 4-12 anos',
    price: 10.00,
    show: false
  },
  {
    id: 9,
    url: '../../assets/img/Bilhete.png',
    name: 'Bilhete 13-64 anos',
    price: 19.00,
    show: false
  },
  {
    id: 10,
    url: '../../assets/img/Bilhete.png',
    name: 'Bilhete +65 anos',
    price: 13.00,
    show: false
  }
]

var chartItens = loadItens();
badges.forEach(badge => {
  badge.innerHTML = chartItens.length | 0;
})

function closeCart() {
  let modalChart = document.querySelector('.chart-content')
  modalChart.innerHTML = ''
  modalChart.parentNode.remove()
}

function showCart() {
  let modalChart = document.createElement('div')
  modalChart.classList.add('appears')
  modalChart.innerHTML = `
    <div class="chart-content">
      <div class="chart-header">
        ${chartItens.length} - ${chartItens.length == 1 ? 'Produto': 'Produtos'} no carrinho
      </div>
      <div class="chart-close" onclick="closeCart()">
      <i class="fas fa-window-close"></i>
      </div>
      <div class="chart-list">
        <ul>
          ${chartItens.map((item, index) => (
            ` 
              <li>
                <span>
                  ${index + 1}) ${item.name} - ${item.qtd} * ${item.price}
                </span>
                <strong>
                  ${item.qtd * item.price}
                </strong>
              </li> 
            `
          )).join('')}
        </ul>
      </div> 
      <div class="chart-footer">
        <span>
          Preço total: <strong>${chartItens.map(item => item.price * item.qtd).reduce(function(acc, val) { return acc + val; }, 0)}</strong>
        </span>
        <span class="cart-finish" onclick="finalizarCompra()">
            Finalizar compra
        </span>
      </div>  
    </div>
  `
  modalChart.classList.add('appears')

  body.appendChild(modalChart)
}

badges.forEach(item =>  item.parentNode.addEventListener('click', showCart))
  
function loadItens() { 
  const storedItens = window.localStorage.getItem('chartItens') 
  if (storedItens === null){
    return []
  } else {
    return storedItens.split(',').map(ele => {
      var pos = ele.split('-');
      var product = products[pos[0].split('=')[1] - 1]
      var qtd = Number(pos[1].split('=')[1])
      return {...product, qtd}
    })  
  }
}

function addItemToChart(pItem) {
  if (findItem(pItem.id) != undefined) {
    let newItem = findItem(pItem.id)
    let others = chartItens.filter(item => item.id !== pItem.id)
    chartItens = [...others, {...newItem, qtd: newItem.qtd + 1 }]
  } else {
    chartItens.push({...pItem, qtd: 1})
  }
  storeItens()
}

function removeItemFromChart(pItem) {
  if (findItem(pItem.id)) {
    let removedItem = findItem(pItem.id)
    let others = chartItens.filter(item => item.id !== pItem.id)
    if (removedItem.qtd === 1 || removedItem.qtd === 0) {
      chartItens = others;  
    } else {
      chartItens = [...others, {...newItem, qtd: removedItem.qtd - 1 }]
    }
  }
  storeItens()
}

function findItem(id) {
  return chartItens.find(item => item.id === id)
}

function storeItens() {
  badges.forEach(badge => {
    badge.innerHTML = chartItens.length | 0;
  })  
  window.localStorage.setItem('chartItens', `${chartItens.map(item => `p=${item.id}-q=${item.qtd}`).join(',')}`)
}

function clearCart() {
  window.localStorage.clear()
}

function finalizarCompra() {
  if(chartItens.length === 0 ) {
    closeCart()
    Swal.fire(
      'Nenhum item adicionado',
      'Adicione alguns itens no carrinho',
      'info'
    )
    return;
  } else {
    var valorTotal = chartItens.map(item => item.price * item.qtd).reduce(function(acc, val) { return acc + val; }, 0)
    Swal.fire({
      title: 'Deseja finalizar a compra?',
      text: "Preço total foi de: " + valorTotal,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, comprar',
      cancelButtonText: 'Não, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        closeCart()
        chartItens = []
        badges.forEach(badge => {
          badge.innerHTML = chartItens.length | 0;
        })  
        Swal.fire(
          'Compra finalizada',
          `Simulação: Preço final da compra: ${valorTotal}`,
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        closeCart()
        Swal.fire(
          'Cancelada',
          'Sua compra foi cancelada',
          'error'
        )
      }
    })
  }
} 

