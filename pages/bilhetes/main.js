const ticketList = document.querySelector('.ticket-list');

const tickets = products.filter(item => !item.show);

function getTicketById(id) {
  return tickets.find(item => item.id === id);
}

function buyTicket(id) {
  const ticket = getTicketById(id)
  addItemToChart(ticket)
  Swal.fire(
    'Feito',
    `${ticket.name} adicionado ao carrinho`,
    'success'
  )
}

ticketList.innerHTML = tickets.map(item => `
  <li>
    <img src="../../assets/img/Bilhete.png" alt="Bilhete">
    <div class="ticket-footer">
      <p>
        ${item.name}
      </p>
      <div class="buy-btn-content">
        
        <span onclick="buyTicket(${item.id})">
          Comprar
          <strong>
            ${item.price}
          </strong>
        </span>
      </div>
    </div>
  </li>
`).join('');
