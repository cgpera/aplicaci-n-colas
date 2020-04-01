// Comando para establecer la conexión

var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data) {
    actualizaHTML(data);
})

socket.on('ultimos4', function(data) {
    //    actualizaHTML(data);
    var audio = new Audio('audio/new-ticket.mp3')
    audio.play();
    data.ultimos4.forEach((element, idx) => {
        $(`#lblTicket${idx + 1}`).text(`Ticket ${element.numero}`);
        $(`#lblEscritorio${idx + 1}`).text(`Escritorio ${element.escritorio}`);
    });
})

function actualizaHTML(array) {
    array.ultimos4.forEach((element, idx) => {
        $(`#lblTicket${idx + 1}`).text(`Ticket ${element.numero}`);
        $(`#lblEscritorio${idx + 1}`).text(`Escritorio ${element.escritorio}`);
        console.log(element);
    });

}