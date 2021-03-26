function getDogImage(numberOfDogs = 3) {
  fetch("https://dog.ceo/api/breeds/image/random/" + numberOfDogs)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);

      const { message: dogImages } = response;

      $(".results").empty()

      dogImages.forEach(image => {
        $(".results").prepend(`<img src="${image}" width="300"/>`);
      })
    });
}
function watchForm() {
  $("form").submit((e) => {
    e.preventDefault();
    const numOfDogs = $("#number-of-dogs").val();
    console.log("form submitted");
    getDogImage(numOfDogs);
  });
}
$(function () {
  console.log("app loaded.  waiting for submit");
  watchForm();
});
