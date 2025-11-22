const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event){
    if (!event.target.classList.contains('calc__btn')) return;

    const value = event.target.innerText;

    switch(value){
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        default:
            result.innerText += value;
    }
});

document.addEventListener('keydown', e => {
  if ('0123456789+-*/.'.includes(e.key)){
    e.preventDefault();
    result.innerText += e.key;
  }
  if (e.key === 'Enter' || e.key === '='){
    e.preventDefault();
    result.innerText = eval(result.innerText).toFixed(2);
  }
  if (e.key === 'Backspace' || e.key === 'c' || e.key === 'C') {
    e.preventDefault();
    result.innerText = '';
  }
});