// step 1 : add event listeners to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
    // console.log("deposit clicked");

    // step 2 : get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const depositAmount = parseFloat(depositField.value);
    // console.log(depositAmount);
    // step 3 : get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text.
    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
    console.log(depositTotal);


})