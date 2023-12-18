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

    calculate(year, month, day) {
        const inputValue = new Date(year, month - 1, day);

        const dayOfWeek = this.dayOfWeek[inputValue.getDay()];
        return dayOfWeek;
    }
}