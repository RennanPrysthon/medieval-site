const container = document.querySelector(".container")
const list = document.querySelector(".list > ul")
const gallery_stream = document.querySelector(".gallery_stream")

const images = [
  {
    id: 1,
    path: '../../assets/img/galeria/img1.jpg',
    alt: 'Imagem 1'
  },
  {
    id: 2,
    path: '../../assets/img/galeria/img2.jpg',
    alt: 'Imagem 2'
  },
  {
    id: 3,
    path: '../../assets/img/galeria/img3.jpg',
    alt: 'Imagem 3'
  },
  {
    id: 4,
    path: '../../assets/img/galeria/img4.jpg',
    alt: 'Imagem 4'
  },
  {
    id: 5,
    path: '../../assets/img/galeria/img5.jpg',
    alt: 'Imagem 5'
  },
  {
    id: 6,
    path: '../../assets/img/galeria/img6.jpg',
    alt: 'Imagem 6'
  },
  {
    id: 7,
    path: '../../assets/img/galeria/img7.jpg',
    alt: 'Imagem 7'
  },
  {
    id: 8,
    path: '../../assets/img/galeria/img8.jpg',
    alt: 'Imagem 8'
  },
  {
    id: 9,
    path: '../../assets/img/galeria/img9.jpg',
    alt: 'Imagem 9'
  },
  {
    id: 10,
    path: '../../assets/img/galeria/img10.jpg',
    alt: 'Imagem 10'
  },
  {
    id: 11,
    path: '../../assets/img/galeria/img11.jpg',
    alt: 'Imagem 11'
  },
  {
    id: 12,
    path: '../../assets/img/galeria/img12.jpg',
    alt: 'Imagem 12'
  },
]

var focusedImg = 1;

list.innerHTML = images.map(item => (
  `
    <li onclick="openImgModal(${item.id})">
      <img src="${item.path}" alt="${item.alt}">
    </li>
  `
)).join('')

gallery_stream.innerHTML = images.map(item => (
  `
    <div 
    style="background-image: url('${item.path}');"
    class="gallery_item bg-${item.id}" >
    </div>
  `
)).join('')

function openImgModal(imageId) {
  console.log(imageId)
}

function nextImg() {
  if(focusedImg === 1) {
    focusedImg = 12
  }
}


function prevImg() {
  if (focusedImg === 12) {
    focusedImg = 1
  }
}