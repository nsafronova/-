const btn = document.getElementById('btn');
const eBtn = document.getElementById('e_btn');
const text = document.getElementById('text');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

function colorChange() {
  let colorBtn = text.value;
  btn.style.background = colorBtn;
  console.log(colorBtn);
};

function hideBtn() {
  eBtn.style.display = 'none';
};

function changeCircle(event) {
  let a = range.value;
  span.textContent = event.target.value
  // range.addEventListener('change', function () {
  //   console.log(a);
  //   parseInt(a);
  circle.style.height = a + '%';
  circle.style.width = a + '%';
};


btn.addEventListener('click', colorChange);
eBtn.addEventListener('click', hideBtn);
range.addEventListener('input', changeCircle);
// range.addEventListener('change', changeCircle)
// circle.addEventListener('click', colorChange);




// const clickBtn = function (event) {

//   console.log(event.target)
//   event.target.classList.toggle('green');

//   // document.getElementById(square).style.background = color;
// }

// const logger = function (event) {
//   event.target.value
// }
// text.addEventListener('input', changeColor);
// range.addEventListener('input', logger)
// text.addEventListener('change', changeColor)