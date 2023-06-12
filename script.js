let red = document.getElementById('red');
let black = document.getElementById('black');
let orange = document.getElementById('orange');
let productImage = document.getElementsByTagName('img')[0];
let btnColor = document.querySelector('.buy-btn');

black.addEventListener('click', () => {
    productImage.setAttribute('src', 'images.jpeg');
    btnColor.style.backgroundColor = 'black';
});

red.addEventListener('click', () => {
    productImage.setAttribute('src', 'red-image.png');
    btnColor.style.backgroundColor = '#E6404D';
});


orange.addEventListener('click', () => {
    productImage.setAttribute('src', 'orange-image.png');
    btnColor.style.backgroundColor = '#FE7427';
});



