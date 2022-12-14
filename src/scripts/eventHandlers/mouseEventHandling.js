import { calculator } from '../../index';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const signChangeButton = document.querySelector('[data-sign-change]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const themeChangers = document.querySelectorAll('[data-theme]');
const historyClearButton = document.querySelector('.clear-button');
const historyWindow = document.querySelector('.history');
const historyContainer = document.querySelector('.history-container');
const historyButton = document.querySelector('[data-history]');
const instructionsButton = document.querySelector('[data-instructions]');
const instructionsWindow = document.querySelector('.side-details');

historyButton.addEventListener('click', () => {
  historyContainer.classList.toggle('active');
  historyButton.classList.toggle('active');
});

instructionsButton.addEventListener('click', () => {
  instructionsWindow.classList.toggle('active');
  instructionsButton.classList.toggle('active');
});

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener('click', () => {
  calculator.historyFieldFinish();
  calculator.compute();
  calculator.updateDisplay();
  calculator.refreshHistoryField();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

signChangeButton.addEventListener('click', () => {
  calculator.chooseSign();
  calculator.updateDisplay();
});

themeChangers.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('body').style = `background-color: ${button.innerText}`;
  });
});

historyClearButton.addEventListener('click', () => {
  historyWindow.innerHTML = null;
  calculator.newHistoryField();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('field')) {
    if (!e.target.innerText.includes('=')) return;
    const equalIndex = e.target.innerText.indexOf('=');
    const number = Number.parseFloat(e.target.innerText.slice(equalIndex + 1));
    if (Number.isNaN(number)) return;
    calculator.replaceNumber(number);
    calculator.updateDisplay();
  }
});
