var contactos = [
    {nombre: "Raymi Saldomando", 
    imagen: "image/raymi.jpg"},

    {nombre: "Mariana Costa", 
    imagen: "image/mariana.jpg"},

    {nombre: "Ana Maria", 
    imagen: "image/anamaria.jpg"},

    {nombre: "Rodulfo Prieto", 
    imagen: "image/rodulfo.jpg"},

    {nombre: "Andrea Lamas", 
    imagen: "image/andrea.jpg"},
];

var mensajes = [
    {
    mensaje: "La clase va bien!", 
    persona: "Raymi Saldomando"
    },

    {
    mensaje: "El panel de speakers esta buenazo", 
    persona: "Mariana Costa"
    },

    {
    mensaje: "Pues dale chamo!", 
    persona: "Ana Maria"
    },

    {
    mensaje: "Como van las chicas?", 
    persona: "Rodulfo Prieto"
    },

    {
    mensaje: "Hoy me toca clases de canto, yee!", 
    persona: "Andrea Lamas"
    },

    {
    mensaje: "Wuju! esto me encanta!! en verdada!", 
    persona: "Maria Paula"
    },

    {
    mensaje: "No te preocupes, tengo el salon bajo control", 
    persona: "Katy Sanchez"
    },

    {
    mensaje: "Vao a comer?", 
    persona: "Aldo Alfaro"
    },

];


$('#raymiSaldomando').click(function(){
    $('#raymiSaldomando').attr("class", "list-group-item tarjeta active");
    
})

var conversacion = 'Raymi Saldomando'

var date = new Date(),
        hora = date.getHours(),
        minuto = date.getMinutes();

    if(minuto < 10){
        minuto = "0" + minuto
    };


$(document).ready(function(){


// MENSAJES
    for(var i= 0;i<mensajes.length;i++) {
        var temp = mensajes[i];

        if(conversacion == temp.persona) {
            $('#panel-body').append("<p class='text-blue bg-white'>" + temp.persona + "</p>");
            $('#panel-body').append('</br>');
            $('.bg-white').append("<p class='msj'>" + temp.mensaje + "</p>");
            $('.bg-white').append("<h6>" + hora + ":" + minuto + "</h6>");
        };
    };
     

// INPUT 
$("#btnEnviar").click(function(){
        var enviarMensaje = $("#inputMsj").val();
        var texto = $("#inputMsj").text(enviarMensaje);

        $("#panel-body").append("<p class='bg-green'>" + enviarMensaje + "</p>");
        // HORA ENVIADO corregir
        $(".bg-green").append("<h6>" + hora + ":" + minuto + "</h6>");

        var input = $("#inputMsj").val( comprobarInput);
    
        var comprobarInput = $("#inputMsj").attr("placeholder", "Escribe tu mensaje aqui");
    });
   
    
// que en CHAT
function chat() {
    var temp = contactos[i];
    var contacto = $("#cajaNombre").val();
        contacto = contacto.toLowerCase();
        contacto.show();
        // $("#cajaNombre").append("<h5>" + temp.persona + "</h5>");
        // $("#foto").append("<img src=" + temp.imagen + ">");
}
   


// BUSCADOR
    $(document).on("ready", main);
    function main() {
        $("#tfBuscar").on("keyup", buscar); //es como el onclick del input
    }
    function buscar(){
        var tarjetas = $(".tarjeta"); //La clase del Contenedor
        var texto = $("#tfBuscar").val(); //El ID del Buscador
        texto = texto.toLowerCase(); //Devuelve el valor en Minisculas de la cadena...
        tarjetas.show(); //Muestra los Resultados
        $(".resultados").show(); //Muestra el Resultado Automatico
        for(var i=0; i< tarjetas.size(); i++){
            var contenido = tarjetas.eq(i).text();
            contenido = contenido.toLowerCase();
            var index = contenido.indexOf(texto);
        if(index == -1){
            tarjetas.eq(i).hide(); //Oculta los Resultados que no Concuerden con lo escribido
            $(".resultados").hide(); //Oculta los Resultados
            }
        }
    }
    // Hacemos la Function para Recargar los Resultados
    function resultados(){
    /* Contador de Resultados */
    var n = $(".tarjeta").length;
    $("span.resultados").text("Se encontraron " + n + " Resultados.");
    }


});
