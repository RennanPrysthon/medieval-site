const container = document.querySelector(".container")

var itens = document.querySelector(".itens")

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

function chooseItem(itemId) {
  var product = products.filter(i => i.id == itemId)[0];
  addItemToChart(product)
}
