const allImages = document.querySelectorAll('img');
const buttonDisappear = document.querySelector('hideButton');
const buttonShow = document.querySelector('#showButton');
const inputTag = document.querySelector('#tagInput');

buttonShow.addEventListener('click', function () {

    let inputValue = inputTag.value;

    for (let i = 0; i < allImages.length; i++) {
        let imageTags = allImages[i].dataset.tag;
        let ifExist = imageTags.indexOf(inputValue);
        if (ifExist !== -1 && allImages[i].className === 'invisible') {
            allImages[i].classList.remove('invisible');
        }
    }

    if (inputTag.value) {
        inputTag.value = "";
    }
});

