const lis = document.querySelectorAll(".buttons-container li");
const a = document.querySelectorAll(".buttons-container li a");
const signin = document.querySelector(".signinClass");
const signup = document.querySelector(".signupClass");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
      a[i].classList.remove("active-text");
    }
    this.classList.add("active");
    a[i].classList.add("active-text");
    if( i==0 ) {
        if(signin.classList.contains('d-none')) {
            signin.classList.remove('d-none');
            signup.classList.add('d-none');
        }
    }
    else {
        if(signup.classList.contains('d-none')) {
            signup.classList.remove('d-none');
            signin.classList.add('d-none');
        }
    }
  });
}