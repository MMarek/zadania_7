const allListElements = document.querySelectorAll('li');
const bodyElement = document.querySelector('body');

for (let i = 0; i < allListElements.length; i++) {
    allListElements[i].addEventListener('click',function () {
        let image = this.querySelector('img');
        console.log(image.src);
    })
}