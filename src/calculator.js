export default class Calculator {
    constructor() {
        this.dayOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
    }


    isValidDate(year, month, day) {
        const inputValue = new Date(year, month - 1, day);
        return (
            inputValue.getFullYear() === year &&
            inputValue.getMonth() === month - 1 &&
            inputValue.getDate() === day
        );
    }

    calculate(year, month, day) {
        if (!this.isValidDate(year, month, day)) {
            return 'Cannot calculate: INVALID DATE';
        }

        const inputValue = new Date(year, month - 1, day);

        const dayOfWeek = this.dayOfWeek[inputValue.getDay()];
        return dayOfWeek;
    }
}