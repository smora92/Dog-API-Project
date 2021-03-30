function getDogImage(userInput) {
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random/1`)
        .then(res => res.json())
        .then((response) => {
            console.log(response)
            if (response.status === 'error') {
                $("#result").html('');
                $("#error").text(response.message);
                return;
            }
            displayResults(response)
        })
        .catch(error => {
            console.log(error)
        })

}
function displayResults(response) {

    $('#result').empty();
    if (response.message) {
        $("#result").html(`<img src="${response.message[0]}" width="300"/>`)
    }
}

function watchForm() {
    $("form").submit((e) => {
        e.preventDefault();
        let userInput = $("#breed").val();
        $("#error").empty();
        console.log("form submitted");
        getDogImage(userInput);
    });
}

$(function () {
    console.log("app loaded. waiting for submit");
    watchForm();
})
