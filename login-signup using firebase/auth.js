// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgzMfPz15tEuDCpKyCs8xqX_FGiMpvcas",
  authDomain: "login-signup-with-fireba-7c07d.firebaseapp.com",
  databaseURL: "https://login-signup-with-fireba-7c07d-default-rtdb.firebaseio.com",
  projectId: "login-signup-with-fireba-7c07d",
  storageBucket: "login-signup-with-fireba-7c07d.firebasestorage.app",
  messagingSenderId: "105471582172",
  appId: "1:105471582172:web:2475500403c0cd6294b919"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function showNotification(message, type) {
  const notification = document.getElementById('notification');
  const messageElem = document.getElementById('notification-message');

  messageElem.textContent = message;
  notification.className = `notification ${type}`;

  notification.style.display = "block";

  
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}


function SignUpUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signed up successfully: ", userCredential.user.uid);
      showNotification("Sign-up successful! Now you can log in.", "success");
    })
    .catch((error) => {
      console.error("Error signing up: ", error);
      showNotification("Error signing up. Please try again.", "error");
    });
}


const signupButton = document.getElementById('signup');
signupButton.addEventListener('click', SignUpUser);


function SignInUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signed in successfully: ", userCredential.user.uid);
      showNotification("Login successful!", "success");
    })
    .catch((error) => {
      console.error("Error signing in: ", error);
      showNotification("Error signing in. Check your credentials.", "error");
    });
}


const signInButton = document.getElementById('sign_in');
signInButton.addEventListener('click', SignInUser);
