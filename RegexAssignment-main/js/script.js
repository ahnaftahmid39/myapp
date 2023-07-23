let btnName = document.getElementById("name");
let btnEmail = document.getElementById("email");
let btnPass = document.getElementById("password");
let btnPost = document.getElementById("post-code");
let btnPhone = document.getElementById("phone-no");
let btnGender = document.getElementById("gender");

let reName = /^[a-zA-Z '\.-]{2,30}[^\.'-]$/gi;
let reEmail = /^([\w\-.]+[\w])@(([\w]+)\.)+([\w]+)$/i;
let rePass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/g;
let rePost = /^\d{4}$/;
let rePhone = /^(\+?88|0088)?01\d{9}$/;
let reGender = /^(Men|Women|male|female|Man|Woman|Gay|Lesbian|Trans|Transgender|others|intersex|boy|girl)$/i;

function printValidity(express, isValid) {
  if (isValid) {
    alert(`Your ${express} is valid`);
  } else {
    alert(`Your ${express} is not valid!`);
  }
}

btnName.addEventListener("click", (e) => {
  let re = reName;
  let str = prompt("Your Name:").trim();
  printValidity("name", re.exec(str));
});

btnEmail.addEventListener("click", (ev) => {
  let re = reEmail;
  let str = prompt("Your Email:").trim();
  printValidity("email", re.exec(str));
});

btnPass.addEventListener("click", (ev) => {
  let re = rePass;
  let str = prompt(
    "Your Password: (It should contain at least 1 uppercase, 1 lowercase, 1 number and length should be at least 8)"
  );
  printValidity("password", re.exec(str));
});

btnPost.addEventListener("click", (ev) => {
  let re = rePost;
  let str = prompt("Your Post Code:").trim();
  printValidity("post Code", re.exec(str));
});

btnPhone.addEventListener("click", (ev) => {
  let re = rePhone;
  let str = prompt("Your Phone Number:").trim();
  printValidity("phone number", re.exec(str));
});

btnGender.addEventListener("click", (ev) => {
  let re = reGender;
  let str = prompt("Your Gender:").trim();
  printValidity("Gender", re.exec(str));
});
