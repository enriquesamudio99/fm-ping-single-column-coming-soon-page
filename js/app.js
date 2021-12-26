const form = document.querySelector('#form');
const field = document.querySelector('#field');
const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submitBtn');

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitBtn.addEventListener("click", function (e) {

    e.preventDefault();

    validateEmail();

});

function validateEmail() {

    const email = input.value.toLowerCase();

    if(!email.match(re)) {
        field.classList.add("is-invalid");
    } else {
        field.classList.remove("is-invalid");
        form.reset();
    }

}