let display = document.getElementById("display");

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {

    try {

        if (display.value === "") {

            return;

        }
        if (display.value.includes("/0")) {

            display.value = "Cannot divide by 0";

            return;

        }

        let result = eval(display.value);

        display.value = result;

    }

    catch (error) {

        display.value = "Error";

    }

}
document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {

        appendValue(event.key);

    }

    else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "."
    ) {

        appendValue(event.key);

    }

    else if (event.key === "Enter") {

        event.preventDefault();

        calculate();

    }

    else if (event.key === "Escape") {

        clearDisplay();

    }

    else if (event.key === "Backspace") {

        deleteLast();

    }

});