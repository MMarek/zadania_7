// const allListElements = document.querySelectorAll('li'); // task03

const bodyElement = document.querySelector('body');
console.log(bodyElement);
for (let i = 6; i < allListElements.length; i++) {
    allListElements[i].addEventListener('click',function () {

        let image = this.querySelector('img');
        console.log(image.src);

        let newDiv = document.createElement('div');
        newDiv.classList.add('fullScreen');
        bodyElement.appendChild(newDiv);
        console.log(newDiv);
        let newImg = document.createElement('img');
        newImg.src = this.querySelector('img').src;
        newDiv.appendChild(newImg);

        let newButton = document.createElement('button');
        newButton.classList.add('close');
        newButton.innerText = 'Close';
        newDiv.appendChild(newButton);

        newButton.addEventListener('click', function () {
            newDiv.parentElement.removeChild(newDiv);
        })
    })
}