const whatsapp_Jorge = document.getElementById('whatsapp_Jorge_Angel');
const web_icsi = document.getElementById('icsi-web');


web_icsi.addEventListener('click', () => {
    window.open('https://icsingenieria.mx/index.html', '_blank');
});


whatsapp_Jorge.addEventListener('click', () => {
    const url = 'https://wa.me/528711278289 ';
    window.open(url, '_blank');
});