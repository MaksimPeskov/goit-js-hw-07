const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.span.textContent = event.target.value.trim() || "Anonymous";
});
