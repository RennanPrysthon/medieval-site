const container = document.querySelector(".container")


var itens = document.querySelector(".itens")
var badges = document.querySelectorAll(".badge")


var chartList = [];

const products = [
  {
    id: 1,
    url: '../../assets/img/Bone.png',
    name: 'Boné',
    price: 20.00
  },
  {
    id: 2,
    url: '../../assets/img/Caneca.png',
    name: 'Caneca',
    price: 34.00
  },
  {
    id: 3,
    url: '../../assets/img/Copo.png',
    name: 'Copo',
    price: 10.00
  },
  {
    id: 4,
    url: '../../assets/img/Cracha.png',
    name: 'Cracha',
    price: 50.00
  },
  {
    id: 5,
    url: '../../assets/img/Pen.png',
    name: 'Pen',
    price: 50.00
  },
  {
    id: 6,
    url: '../../assets/img/Fita.png',
    name: 'Fita',
    price: 50.00
  },
]

products.forEach(item => (
  itens.innerHTML += `
    <div 
      class="product" 
      style="background-image: url(${item.url})">
      <span class="product-info">
        <span class="product-title">
          <span class="product-name">
          ${item.name}
          </span> 
          <span class="product-price">
          ${item.price}
          </span>        
        </span>
        <span class="product-select" onclick="chooseItem(${item.id}, this)"> 
          <i class="fas fa-shopping-bag"></i>
        </span>
      </span>
    </div>
  `
))

function chooseItem(itemId, element) {
  var product = products.filter(i => i.id == itemId)[0];
  const existingElement = chartList.filter(i => i.id == itemId);
  
  if(existingElement.length > 0) {
    chartList = chartList.filter(i => i.id !== itemId)
  } else {
    chartList.push(product)  
  }
  badges.forEach(badge => {

    badge.innerHTML = chartList.length | 0;
  })

}