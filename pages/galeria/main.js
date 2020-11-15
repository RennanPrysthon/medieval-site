const container = document.querySelector(".container")
const section = document.querySelector(".product-list > ul")

const images = [
  {
    id: 1,
    path: '../../assets/img/Caneca.png',
    alt: 'Caneca'
  },
  {
    id: 1,
    path: '../../assets/img/Copo.png',
    alt: 'Copo'
  },
  {
    id: 1,
    path: '../../assets/img/Caneca.png',
    alt: 'Caneca'
  },
  {
    id: 1,
    path: '../../assets/img/Copo.png',
    alt: 'Copo'
  },
  {
    id: 1,
    path: '../../assets/img/Caneca.png',
    alt: 'Caneca'
  },
  {
    id: 1,
    path: '../../assets/img/Copo.png',
    alt: 'Copo'
  },
  {
    id: 1,
    path: '../../assets/img/Caneca.png',
    alt: 'Caneca'
  },
  {
    id: 1,
    path: '../../assets/img/Copo.png',
    alt: 'Copo'
  },
  {
    id: 1,
    path: '../../assets/img/Copo.png',
    alt: 'Copo'
  },
]


section.innerHTML = images.map(item => (
  `
    <li>
      <img src="${item.path}" alt="${item.alt}">
    </li>
  `
)).join('')