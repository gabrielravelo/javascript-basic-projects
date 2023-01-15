let counter = document.getElementById('counter');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let count = 0;

counterValue();

increase.addEventListener('click', increaseOne);
decrease.addEventListener('click', decreaseOne);
reset.addEventListener('click', resetNumber);

function increaseOne() {
  count++;
  counterValue();
}
function decreaseOne() {
  count--;
  counterValue();
}
function resetNumber() {
  count = 0;
  counterValue();
}
function counterValue() {
  if(count > 0) {
    counter.classList.add('green')
  } else if (count < 0) {
    counter.classList.add('red')
  } else {
    counter.classList.remove('green')
    counter.classList.remove('red')
  }
  counter.innerText = count;
}