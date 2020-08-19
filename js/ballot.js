let saveBallot = document.querySelector('button[type="submit"]');


saveBallot.addEventListener('click', () => {
    let president = document.querySelector('input[type="president"]:checked').value;
    console.log(president);

})