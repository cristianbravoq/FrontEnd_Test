const btn_Auth = document.getElementById("Button");
const _username = document.getElementById("Username");
const _password = document.getElementById("Password");
const _email = document.getElementById("Email");
const _phone = document.getElementById("Phone");

// Variable que nos valida dentro de que formulario nos encontramos
const _formValidation = btn_Auth.value;
const _validate = Boolean;

const _form = {
  username: String,
  phone: String,
  email: String,
  password: String,
};

function _SignIn() {
  if (Validation()) {
    _form.username = _username.value;
    _form.password = _password.value;
    window.location.href = 'http://127.0.0.1:5501/dashboard.html';
  }
}

function _SignUp() {
  if (Validation()) {
    _form.username = _username.value;
    _form.password = _password.value;
    _form.email = _email.value;
    _form.phone = _phone.value;
    window.location.href = 'http://127.0.0.1:5501/signIn.html';
  }
}

btn_Auth.addEventListener("click", () => Auth());

function Auth() {
  if (_formValidation === "Register") {
    _SignUp();
  } else {
    _SignIn();
  }
}

function ValidateText(string) {
  var out = "";

  var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) out += string.charAt(i);

  const bool = out.length == string.length ? true : false;
  if(!bool) _username.classList.add('focus');
  return bool
}

function ValidatePassword(string) {
  var out = "";
  var out2 = "";
  var out3 = "";

  var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ*-.";
  var filtro2 = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var filtro3 = "*-.";
  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) out += string.charAt(i);
  const length = out === string && out.length > 6 ? true : false;

  for (var i = 0; i < out.length; i++)
    if (filtro2.indexOf(out.charAt(i)) != -1) out2 += out.charAt(i);
  const uppercase = out2.length > 1 ? true : false;

  for (var i = 0; i < out.length; i++)
    if (filtro3.indexOf(out.charAt(i)) != -1) out3 += out.charAt(i);
  const characters = out3.length > 1 ? true : false;
  const bool = characters && uppercase && length ? true : false;
  if(!bool) _password.classList.add('focus');
  return bool
}

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    _email.classList.add('focus');
    return false;
  }
}

function ValidatePhone(string) {
  var out = "";

  var filtro = "+1234567890";
  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) out += string.charAt(i);

  const bool = out.length == string.length && string.length == 9 ? true : false;
  if(!bool) _phone.classList.add('focus');
  return bool
}

function Validation() {
  if (_email === _phone && _email == null && _phone == null) {
    const _user = ValidateText(_username.value) ? true : false;
    const _pass = ValidatePassword(_password.value) ? true : false;

    return _user && _pass ? true : false;
  } else {
    const _user = ValidateText(_username.value) ? true : false;
    const _mail = ValidateEmail(_email.value) ? true : false;
    const _tel = ValidatePhone(_phone.value) ? true : false;
    const _pass = ValidatePassword(_password.value) ? true : false;

    return _user && _pass && _mail && _tel ? true : false;
  }
}
