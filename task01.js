document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector('form');
    const errorsList = document.querySelector('.error-message');

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        const errors = [];
        const emailVal = this.elements.email.value;
        if (emailVal.indexOf('@') === -1) {
            errors.push('Email musi posiadać znak @');
        }

        const nameVal = this.elements.name.value;
        if (nameVal.length < 6) {
            errors.push('Imię za krótkie')
        }

        const agreeVal = this.elements.agree.checked;
        if (!agreeVal) {
            errors.push('Zaakceptuj warunki');
        }

        if (errors.length > 0) {
            e.preventDefault();

            errorsList.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                const newPElement = document.createElement('p');
                newPElement.innerText = errors[i];

                errorsList.appendChild(newPElement);
            }
        }
    });

});