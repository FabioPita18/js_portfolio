var randomNum;
var input;

function validate() {
    input = prompt("Enter a number from 1-10  ");

    randomNum = Math.floor(Math.random() * 10) + 1;



    while (parseInt(input) !== randomNum) {

        if ((parseInt(input) < 1) || (parseInt(input) > 10)) {
            alert("Number not in range");
            input = prompt("Enter a number from 1-10 ");
        } else {

            if (parseInt(input) < randomNum) {
                alert("Incorrect, too low");
                input = prompt("Enter a number from 1-10 ");
            } else if (parseInt(input) > randomNum) {
                alert("Incorrect too high");
                input = prompt("Enter a number from 1-10 ");
            } else {
                alert("Invalid input")
                input = prompt("Enter a number from 1-10 ");
            }

        }
    }
    alert("Correct! You got it ");
}