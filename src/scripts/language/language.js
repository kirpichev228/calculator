const langArr = [
  {
    ru: 'Данный калькулятор поддерживает ввод с клавиатуры',
    en: 'This calculator supports keyboard input',
  },
  {
    ru: 'Считая проценты помните, что x% от y = у% от х, так что ошибетесь вы при подсчете врядли',
    en: 'When counting percentages, remember that x% of y equals y% of x, so that you are unlikely to make a mistake when counting',
  },
  {
    ru: 'Кнопка АС на калькуляторе соответствует кнопке Del на клавиатуре, кнопка DEL кнопке Backspace, кнопка % советанию клавиш Shift + 5',
    en: 'The AC button on the calculator corresponds to the Del button on the keyboard, the DEL button to the Backspace button, the % button to the Shift + 5 key combination',
  },
  {
    ru: 'Для смены цветовой темы используйте цветные кружки на дисплее калькулятора',
    en: 'Use colored circles to change the color theme on the calculator display',
  },
  {
    ru: 'Калькулятор поддерживает историю вычислений. История пополняется после каждого нажатия "=". Нажмите на строчку в истории чтобы ЗАМЕНИТЬ вводимое число на результат выбранных вычислений',
    en: 'The calculator maintains a history of calculations. The history is updated after each pressing of "=" button. Click on a line in the history to REPLACE the entered number with the result of the selected calculations',
  },
];

const paragraphs = document.querySelectorAll('.lang');
const enButton = document.querySelector('.en');
const ruButton = document.querySelector('.ru');

enButton.addEventListener('click', () => {
  for (let i = 0; i < langArr.length; i++) {
    paragraphs[i].innerText = langArr[i].en;
  }
});

ruButton.addEventListener('click', () => {
  for (let i = 0; i < langArr.length; i++) {
    paragraphs[i].innerText = langArr[i].ru;
  }
});
