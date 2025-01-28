const form = document.getElementById("form");
const pass = document.getElementById("password");
const confirm = document.getElementById("confirm-password");
const btn = document.querySelector(".create");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    let message = document.querySelector(".error-message");
    if (pass.value != confirm.value || pass.value=='') {
        message.textContent = "*Passwords do not match";
        pass.classList.add("invalid");
        confirm.classList.add("invalid");
    } else {
        message.textContent='';
        form.submit();
    }
});
