const allElementsWithClass = document.querySelectorAll('.tooltip');
console.log(allElementsWithClass);
for (let i = 0; i < allElementsWithClass.length; i++) {
    allElementsWithClass[i].addEventListener('mouseover',function () {
        let newToolTip = document.createElement('span');
        newToolTip.innerText = allElementsWithClass[i].dataset.text;
        newToolTip.classList.add('tooltipText');
        allElementsWithClass[i].appendChild(newToolTip);
    });

    allElementsWithClass[i].addEventListener('mouseout',function () {
        allElementsWithClass[i].removeChild(allElementsWithClass[i].childNodes[1]);
    });
}