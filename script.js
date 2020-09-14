const labelContainer = document.getElementById('label-container');
const brQuantity = document.getElementById('breaker-quantity');

// GENERATES ALL NUMBERS AND INPUT FIELDS
let genFields = () => {
    let numbers = [...Array(parseInt(brQuantity.value) + 1).keys()].slice(1);

    // generates the numberd input fields
    let listArr = numbers.map(number => `<li><span>${number}</span> <input type="text" class="label-input"></li>`);
    labelContainer.innerHTML = listArr.join('');
    
    labelContainer.classList.add('label-numbers');
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
