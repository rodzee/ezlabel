const labels = document.querySelector('#label-container');
const brQuantity = document.querySelector('#breaker-quantity');

// GENERATES ALL NUMBERS AND INPUT FIELDS
let genFields = () => {
    let numb = [...Array(parseInt(brQuantity.value) + 1).keys()].slice(1);

    // generates the numberd input fields
    let listArr = numb.map((e) => `<li><span>${e}</span>` + `<input type="text" class="label-input"></li>`);
    labels.innerHTML = listArr.join('');
    // this added Class is been used to style in CSS
    labels.classList.add('label-numbers');
};

genFields();

// PRINT
function printPage() {
    printJS({
        printable: 'label-container',
        type: 'html',
        css: 'print-style.css',
        targetStyles: ['*'],
    });
}
