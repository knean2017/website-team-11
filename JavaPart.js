function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

    if (name === '') {
        errorMessage.innerHTML = 'Please enter your name.';
        return false;
    }

    if (email === '') {
        errorMessage.innerHTML = 'Please enter your email.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (message === '') {
        errorMessage.innerHTML = 'Please enter a message.';
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
