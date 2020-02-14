document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector('form');
    const errorsList = document.querySelector('.errors-message');

    formElement.addEventListener('submit',function (e) {
        console.log('submit', this.elements);

        const errors = [];

        const emailVal = this.elements.email.value;
        if (emailVal.indexOf('@') === -1) {
            errors.push('Email musi posiadać znak @');
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