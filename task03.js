document.addEventListener('DOMContentLoader', function () {

    const buttonNext = document.getElementById('.nextPicture');
    console.log(buttonNext);
    const buttonPrevious = document.getElementById('.prevPicture');
    console.log(buttonPrevious);
    const allListElements = document.querySelectorAll('li');
    console.log(allListElements);
    let imageIndex = 0;

    allListElements[imageIndex].classList.add('visible');

    buttonNext.addEventListener('click', function () {
        allListElements[imageIndex].classList.remove('visible');

        imageIndex++;
        if (imageIndex > allListElements.length - 1) {
            imageIndex = 0;
        }
        allListElements[imageIndex].classList.add('visible');
    });

    buttonPrevious.addEventListener('click', function () {
        allListElements[imageIndex].classList.remove('visible');

        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = allListElements.length - 1;
        }
        allListElements[imageIndex].classList.add('visible');
    });
});