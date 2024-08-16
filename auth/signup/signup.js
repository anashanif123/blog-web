import { auth,createUserWithEmailAndPassword } from "../../utils/utils.js";


const signup_Form = document.getElementById('signup_form');
const signup_btn = document.getElementById('signup_btn');

signup_Form.addEventListener("submit", function (e){
    e.preventDefault();
    console.log(e);
    console.log(e.target);

    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(email);
    console.log(password);
    console.log(userName);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      console.log("successful");
      location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Unsccessful");
      // ..
    });    
});

