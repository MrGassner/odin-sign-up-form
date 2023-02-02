const password = document.querySelector('#password');
const confPassword = document.querySelector('#confPassword');

document.addEventListener('submit', event => checkPassword(event))

function checkPassword (event) {
    if (password.value !== confPassword.value) {
        alert('Password did not match: please try again!')
        event.preventDefault()
        return false
    } else {
       return true 
    }
}