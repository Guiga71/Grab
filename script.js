var email = document.getElementById('email')

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Por favor, insira um email válido!")
    } else {
        email.setCustomValidity("")
    }
})