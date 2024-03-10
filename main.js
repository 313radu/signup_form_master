const submitButton = document.getElementById("submitButton");
const inputs = document.querySelectorAll("input[type=text], input[type=email], input[type=password]");
const errorIcons = document.querySelectorAll("svg");
const errorText = document.querySelectorAll("[data-error]");
const form = document.getElementById("form");

form.addEventListener("submit", formPreventDefault, false);
submitButton.addEventListener("click", inputValidation, false);

function formPreventDefault(event) {
    event.preventDefault();
}

function inputValidation(event) {
    let isValid = true; 

    inputs.forEach(function(input, index) {
        const dataText = errorText[index].getAttribute("data-error");
        errorIcons[index].style.display = "none";

        if (input.value === "") {
            errorText[index].innerHTML = dataText;
            errorIcons[index].style.display = "block";
            isValid = false;
        } else {
            errorText[index].innerHTML = "";
        }
    });

    if (isValid) {
        form.submit();
    } else {
        event.preventDefault();
    }
}

// Add click event listeners to inputs to hide error text and icon
inputs.forEach(function(input, index) {
    input.addEventListener("click", function() {
        errorText[index].innerHTML = ""; // Hide error text when input is clicked
        errorIcons[index].style.display = "none"; // Hide error icon when input is clicked
    });
});

