setTimeout(CambiaMensaje, 2300)

function CambiaMensaje() {
    document.getElementById("loading message").innerText = "Enviado!"
}

setTimeout(function() {
    alert("Recibiste un Abrazo")
}, 2400)