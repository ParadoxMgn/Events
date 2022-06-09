'use strict';

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const textSpan = document.getElementById('text-span');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');

textSpan.style.color = 'red';
eBtn.style.display = 'none';

const addColor = function () {
  const checkColor = square.style.backgroundColor;
  if (text.value.trim() !== '') {
    square.style.backgroundColor = text.value.trim();
    if (square.style.backgroundColor === '' || square.style.backgroundColor === checkColor && checkColor !== text.value.trim()) {
      textSpan.innerText = 'Такого цвета нет';
    }
    text.value = '';
  } else {
    textSpan.innerText = 'Введите цвет';
    text.value = '';
  }
};

const removeErr = function () {
  textSpan.innerText = '';
};

const changeCirlce = function (e) {
  rangeSpan.innerText = `${e.target.value}%`;
  circle.style.width = `${e.target.value}%`;
  circle.style.height = `${e.target.value}%`;
};

btn.addEventListener('click', addColor);
text.addEventListener('focus', removeErr);
range.addEventListener('input', changeCirlce);
