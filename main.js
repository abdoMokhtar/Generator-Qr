let img = document.getElementsByTagName("img")[0];
let input = document.getElementsByClassName("text")[0];
let button = document.getElementsByClassName("btn")[0];

function show() {
  if (input.value !== "") {
    img.classList.add("qr");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    input.value = "";
  }
}

button.addEventListener("click", () => {
  img.classList.remove("qr");
  img.src = "";

  setTimeout(show, 100);
});
