import '../index.html';
import './styles/index.css';
import { Calculator } from './scripts/classes/CalculatorClass';
import './scripts/eventHandlers/keyboardEventHandling';
import './scripts/eventHandlers/mouseEventHandling';
import './scripts/language/language';

const currentNumberString = document.querySelector('[data-current-number]');
const previousNumberString = document.querySelector('[data-previous-number]');
const historyWindow = document.querySelector('.history');

export const calculator = new Calculator(previousNumberString, currentNumberString, historyWindow);
calculator.refreshHistoryField();
