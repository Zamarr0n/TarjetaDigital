const whatsapp_Gabriela = document.getElementById('whatsapp_Gabriela_Chairez');
const web_icsi = document.getElementById('icsi-web');



web_icsi.addEventListener('click', () => {
    window.open('https://icsingenieria.mx/index.html', '_blank');
});

whatsapp_Gabriela.addEventListener('click', () => {
    const url = 'https://wa.me/528711158009 ';
    window.open(url, '_blank');
});



