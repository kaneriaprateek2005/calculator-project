let string = ""
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;
        if (value === "=") {
            if (string === "") {
                display.innerText = "";
            } else {
                try {
                    string = eval(string);
                    display.innerText = string;
                } catch {
                    display.innerText = "Invalid Expression";
                    string = "";
                }
            }
        }
        else if (value == "AC") {
            string = "";
            display.innerText = string;
        }
        else if (value == "C") {
            string = string.slice(0, string.length - 1);
            display.innerText = string;
        }
        else if (value === "%") {
            if (string === "") {
                display.innerText = "Invalid format used";
            }
            else {
                string = string / 100;
                display.innerText = string;
            }
        }
        else {
            console.log(e.target);
            if (string === "" && /[+\-*/]/.test(value)) {
                display.innerText=("Invalid format used");
            }
            else {
                string = string + value;
                display.innerText = string;
            }
        }
    })
})

