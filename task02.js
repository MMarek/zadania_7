document.addEventListener('DOMContentLoaded', function () {

   const nameElement = document.querySelector('#name2');
   const typeElement = document.querySelector('#type');
    nameElement.addEventListener('keyup', function () {
        const number = this.value;

        if (number[0] === '4') {
            typeElement.innerText = 'Visa';
        }else if(number[0] === '5') {
            typeElement.innerText = 'Master Card';
        }else if(number[0] === '3') {
            if (number[1] === '4' || number[1] === '7') {
                typeElement.innerText = 'American Express';
            }else{
                typeElement.innerText = '';
            }
        }else{
            typeElement.innerText = '';
        }

    })
});

