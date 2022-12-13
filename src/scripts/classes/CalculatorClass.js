export class Calculator {
  constructor(previousNumberString, currentNumberString, historyWindow) {
    this.previousNumberString = previousNumberString;
    this.currentNumberString = currentNumberString;
    this.historyWindow = historyWindow;
    this.clear();
  }

  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operation = undefined;
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.compute();
    }
    this.operation = operation;
    this.historyUpdate();
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  historyUpdate() {
    const currentField = this.historyWindow.firstElementChild;
    currentField.innerText += ` ${this.currentNumberString.innerText} ${this.operation}`;
  }

  historyFieldFinish() {
    const currentField = this.historyWindow.firstElementChild;
    currentField.innerText += ` ${this.currentNumber}`;
  }

  newHistoryField() {
    const field = document.createElement('div');
    field.classList.add('field');
    this.historyWindow.prepend(field);
  }

  refreshHistoryField() {
    const currentField = this.historyWindow.firstElementChild;
    if (currentField !== null) {
      currentField.innerText += `${this.previousNumber} = ${this.currentNumber}`;
      this.newHistoryField();
    } else {
      this.newHistoryField();
    }
  }

  chooseSign() {
    this.currentNumber = 0 - parseFloat(this.currentNumber);
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);
    if (Number.isNaN(prev) || Number.isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      case '%':
        computation = (prev / 100) * current;
        break;
      default:
        return;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previousNumber = '';
  }

  addNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  replaceNumber(number) {
    this.currentNumber = number.toString();
  }

  updateDisplay() {
    this.currentNumberString.innerText = this.currentNumber;
    if (this.operation != null) {
      this.previousNumberString.innerText = `${this.previousNumber} ${this.operation}`;
    } else {
      this.previousNumberString.innerText = '';
    }
  }
}
