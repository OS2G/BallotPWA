
// document.getElementById("submitButton").addEventListener('click', => {
//     let president = document.querySelector('input[name="president"]:checked').value;
//     document.getElementById("demo").innerHTML = "Hello World";
//     console.log(president);

// })



document.getElementById("submitButton").addEventListener("click", storeBallotResult);

function storeBallotResult() {
    let president = document.querySelector('input[name="president"]:checked').value;
    console.log(president);
    localStorage.setItem("president", president);

    let senate = document.querySelector('input[name="senate"]:checked').value;
    console.log(senate);
    localStorage.setItem("senate", senate);

    let house = document.querySelector('input[name="house"]:checked').value;
    console.log(house);
    localStorage.setItem("house", house);

    let legislature = document.querySelector('input[name="legislature"]:checked').value;
    console.log(legislature);
    localStorage.setItem("legislature", legislature);

    let education = document.querySelector('input[name="education"]:checked').value;
    console.log(education);
    localStorage.setItem("education", education);

    let section27 = document.querySelector('input[name="section27"]:checked').value;
    console.log(section27);
    localStorage.setItem("section27", section27);

    let tax = document.querySelector('input[name="tax"]:checked').value;
    console.log(tax);
    localStorage.setItem("tax", tax);
}