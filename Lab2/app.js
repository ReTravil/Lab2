function insert(symbol) {
    if(document.form.textView.value.slice('-1') === symbol) {
        symbol = '';
    }
    document.form.textView.value = document.form.textView.value + symbol;
}

function equal() {
let exp = document.form.textView.value;
try{
    document.form.textView.value = eval(exp);
}
catch{
    alert('Нельзя так');
}
}

function clean() {
document.form.textView.value = '';

}

function backspace() {
let exp = document.form.textView.value.slice(0, -1);
document.form.textView.value = exp;
}