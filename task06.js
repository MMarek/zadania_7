const listElem = document.querySelectorAll('div > ul > li');
console.log(listElem);
for (let i = 6; i < listElem.length; i++) {
    listElem[i].addEventListener('click', function () {
        let nestedList = this.querySelector('ul');
        let nestedListElem = this.querySelectorAll('ul > li');

        if (nestedListElem.length > 0) {
            nestedList.style.display = 'block';
        }
    });

    listElem[i].addEventListener('click', function () {
        let nestedList = this.querySelector('ul');
        let nestedListElem = this.querySelectorAll('ul > li');

        if (nestedListElem.length > 0) {
            nestedList.style.display = 'none';
        }
    });
}