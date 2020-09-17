const labelContainer = document.getElementById('label-container');
const brQuantity = document.getElementById('breaker-quantity');
const labelInput = document.getElementById('label-name-input');

// =============================================================================
// GENERATES ALL NUMBERS AND INPUT FIELDS ======================================
// =============================================================================
let genFields = () => {
    let numbers = [...Array(parseInt(brQuantity.value) + 1).keys()].slice(1);

    // generates the numberd input fields
    let listArr = numbers.map((number) => `<li><span>${number}</span> <input type="text" class="label-input"></li>`);
    labelContainer.innerHTML = listArr.join('');
    //! this added Class is been used to style in CSS
    labelContainer.classList.add('label-numbers');
};

genFields();

// =============================================================================
// PRINT =======================================================================
// =============================================================================
function printPage() {
    printJS({
        printable: 'label-list',
        type: 'html',
        documentTitle: labelInput.value,
        css: 'print-style.css',
        targetStyles: ['*'],
    });
}

// =============================================================================
// IMPORT LOGO FUNCTION ========================================================
// =============================================================================
let loadFile = (event) => {
    let image = document.getElementById('output-img');
    image.src = URL.createObjectURL(event.target.files[0]);
};

// ! Resets Import Function because Firefox does not automatically do it
window.onload = document.getElementById('file').value = '';
