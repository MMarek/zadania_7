const allImages = document.querySelectorAll('img');
console.log(allImages);
const buttonDisappear = document.querySelector('#hideButton');
// console.log(buttonDisappear);
const buttonShow = document.querySelector('#showButton');
// console.log(buttonShow);
const inputTag = document.querySelector('#tagInput');
// console.log(inputTag);

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

buttonDisappear.addEventListener('click',function () {
    let inputValue = inputTag.value;

    for (let i = 0; i < allImages.length; i++) {
        let imageTags = allImages[i].dataset.tag.split(',');
        let ifExists = imageTags.indexOf(inputValue);
        if (ifExists !== -1) {
            allImages[i].classList.add('invisible');
        }
    }

    if (inputTag.value) {
        inputTag.value = '';
    }
});