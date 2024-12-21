const whatsapp = document.getElementById('whatsapp');
const web_icsi = document.getElementById('icsi-web');
whatsapp.addEventListener('click', () => {
const url = 'https://wa.me/528711147823';
window.open(url, '_blank');
});

web_icsi.addEventListener('click', () => {
    window.open('https://icsingenieria.mx/index.html', '_blank');
});



