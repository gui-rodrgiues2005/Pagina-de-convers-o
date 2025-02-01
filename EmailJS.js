emailjs.init("POY0D4kcYDniflPrV"); // Substitua pela sua Public Key

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = document.getElementById("button");
    btn.value = "Enviando...";

    const serviceID = "service_wktwos6";
    const templateID = "template_55879ih";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = "Enviar Mensagem";
            alert("E-mail enviado com sucesso!");
            document.getElementById("form").reset(); // Limpa os campos após envio
        }, (err) => {
            btn.value = "Enviar Mensagem";
            alert("Erro ao enviar: " + JSON.stringify(err));
        });
});




