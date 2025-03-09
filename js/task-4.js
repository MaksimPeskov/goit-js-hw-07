const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = refs.form.elements.email.value.trim();
  const password = refs.form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  refs.form.reset();
});
