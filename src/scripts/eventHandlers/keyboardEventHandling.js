import { calculator } from '../../index';

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
    calculator.addNumber(e.key);
    calculator.updateDisplay();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === '+' || e.key === '-' || e.key === '%') {
    calculator.chooseOperation(e.key);
  } else if (e.key === '/') {
    calculator.chooseOperation('÷');
  } else if (e.key === '*') {
    calculator.chooseOperation('x');
  }
  calculator.updateDisplay();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    calculator.historyFieldFinish();
    calculator.compute();
    calculator.updateDisplay();
    calculator.refreshHistoryField();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete') {
    calculator.clear();
    calculator.updateDisplay();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    calculator.delete();
    calculator.updateDisplay();
  }
});
