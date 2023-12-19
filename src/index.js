import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

function reset() {
    document.getElementById("form").reset();
}

function handleForm(e) {
    e.preventDefault();
    const inputYear = parseInt(document.getElementById("year").value);
    const inputMonth = parseInt(document.getElementById("month").value);
    const inputDay = parseInt(document.getElementById("day").value);
    const output = document.getElementById("output");
    if (inputYear && inputMonth && inputDay) {
        const calculateDay = new Calculator();
        output.innerText = calculateDay.calculate(
            inputYear,
            inputMonth,
            inputDay
        );
        reset();
    } else {
        output.innerText = "No date to calculate";
    }
}

document.getElementById("form").addEventListener("submit", handleForm);