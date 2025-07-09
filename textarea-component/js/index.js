const errormessage = document.querySelector(".error-message");
const textarea = document.getElementById("description1");
const countletter = document.getElementById("count1");

textarea.addEventListener("input", function () {
  countletter.textContent = `${textarea.value.length}/500`;
  if (textarea.value.trim() === "") {
    errormessage.style.display = "block";
    errormessage.textContent = "This field is required";
    textarea.style.borderColor = "#F44336";
  } else {
    errormessage.style.display = "none";
    textarea.style.borderColor = "#808080";
  }
});
