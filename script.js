document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { title: 'Koszulka Polska', image: 'images/1.jpg', description: 'Klasyczna koszulka z motywem polskiego godła. Wysokiej jakości bawełna.' },
        { title: 'Bluza Orzeł', image: 'images/2.jpg', description: 'Ciepła bluza z nadrukiem orła. Idealna na chłodniejsze dni.' },
        { title: 'Czapka Zimowa', image: 'images/3.jpg', description: 'Stylowa i ciepła czapka zimowa z polskim motywem.' },
        { title: 'Szalik Kibica', image: 'images/4.png', description: 'Szalik w narodowych barwach dla prawdziwego kibica.' },
        { title: 'Torba Bawełniana', image: 'images/5.jpg', description: 'Ekologiczna torba z nadrukiem polskiej flagi. Idealna na zakupy.' },
        { title: 'Spodnie Dresowe Polska', image: 'images/6.jpg', description: 'Wygodne spodnie dresowe z polskim logo. Doskonałe na co dzień.' },
        { title: 'Kurtka Patriotyczna', image: 'images/7.jpg', description: 'Elegancka kurtka na każdą pogodę z subtelnymi polskimi symbolami.' },
        { title: 'Plecak Polska', image: 'images/8.jpg', description: 'Wygodny plecak z nadrukiem polskiej flagi. Idealny na wycieczki.' },
        { title: 'Portfel Skórzany', image: 'images/9.jpg', description: 'Elegancki skórzany portfel z grawerowanym polskim godłem.' },
        { title: 'Zegarek Patriotyczny', image: 'images/10.jpg', description: 'Stylowy zegarek z tarczą w barwach narodowych.' }
    ];

    const productContainer = document.getElementById('product-container');


    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        `;
        productDiv.addEventListener('click', function() {
            showModal(product);
        });
        productContainer.appendChild(productDiv);
    });

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.getElementsByClassName('close')[0];

    function showModal(product) {
        modalTitle.textContent = product.title;
        modalImage.src = product.image;
        modalDescription.textContent = product.description;
        modal.style.display = 'flex';
    }

  
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
