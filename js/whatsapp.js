$(document).ready(function() {
    $('#contact').submit(sendWhatsapp);
    setTimeout(function() {
        $(".button-hide").show();
    }, 2000);

   
});


function sendWhatsapp() {
    var name = $(".contact_name").val();
    var phone = $(".contact_email").val(); // Ahora es campo de teléfono
    var message = $(".contact_message").val();

   
    var phoneNumber = "+34602516510";
    var whatsappMessage = "¡Hola Lara! Soy " + name +" y necesito tu ayuda. \n \n 📋 Mis datos: \n • Nombre: "+ name+" \n • Teléfono: " + phone+" \n \n 💬 Mi consulta: \n "+message+" \n \n ¡Espero tu respuesta! Gracias 🙏";

    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappLink, "_blank");
    return false;
}

function enviar_mensaje() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,c = document.getElementById("chat-input").value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
    }
}
 
const whatsapp_chat =document.getElementById("whatsapp-chat");
  
function cerrar_chat(){
    whatsapp_chat.classList.add("hide");
    whatsapp_chat.classList.remove("show");
}
  
function mostrar_chat(){
    setTimeout(function() {
        $(".button-float-push").hide();
    }, 1000);
    whatsapp_chat.classList.add("show");
    whatsapp_chat.classList.remove("hide");
}
    