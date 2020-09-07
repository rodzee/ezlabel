const labels = document.querySelector('#label-container');
const brQuantity = document.querySelector('#breaker-quantity');

// GENERATES ALL NUMBERS AND INPUT FIELDS
let genFields = () => {
    let numb = [...Array(parseInt(brQuantity.value) + 1).keys()].slice(1);

    // generates the numberd input fields
    let listArr = numb.map((e) => `<li><span>${e}</span>` + `<input type="text" class="label-input"></li>`);
    labels.innerHTML = listArr.join('');
    labels.classList.add('label-numbers');
};
genFields();

// RESETS THE LIST
let resetAll = () => {};

// SET COOKIE
let setCookie = (name, value) => {
    let today = new Date();
    let expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
    document.cookie = name + '=' + encodeURI(value) + '; path=/; expires=' + expiry.toGMTString();
};

// Store Data Values
let saveBtn = () => {
    // Don't move labelInput out of the func
    let labelInput = document.querySelector('.label-input');

    setCookie('l-values', labelInput.value);
    return true;
};

let getCookie = (cname) => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

// PRINT BTN
// https://stackoverflow.com/questions/16894683/how-to-print-html-content-on-click-of-a-button-but-not-the-page
let printPage = (e) => {
    saveBtn();

    console.log(document.cookie);
    let printContents = document.getElementById(e).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
};

// EMAIL BTN
