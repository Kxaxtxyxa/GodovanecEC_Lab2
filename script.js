function submitForm() {
  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let output = document.getElementById("output");
  output.innerHTML = `
    <p><strong>Имя:</strong> ${lastName}</p>
    <p><strong>Фамилия:</strong> ${firstName}</p>
    <p><strong>Электронная почта:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>`;
}


document.getElementById('themeToggle').addEventListener('click', function() {
  const currentTheme = document.body.className;
  
  if (currentTheme === 'light-theme') {
      document.body.className = 'dark-theme';
  } else {
      document.body.className = 'light-theme';
  }
});