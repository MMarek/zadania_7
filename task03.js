document.addEventListener('DOMContentLoader', function () {

    const buttonNext = document.getElementById('.nextPicture');
    console.log(buttonNext);
    const buttonPrevious = document.getElementById('.prevPicture');
    console.log(buttonPrevious);
    const allListElements = document.querySelectorAll('li');

    let imageIndex = 0;

    allListElements[imageIndex].classList.add('visible');


});