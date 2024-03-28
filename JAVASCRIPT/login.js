import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBktsrNtKuSGXYT27jUNFFV7hLTJRuqAzI",
  authDomain: "ds-cross.firebaseapp.com",
  projectId: "ds-cross",
  storageBucket: "ds-cross.appspot.com",
  messagingSenderId: "689374105173",
  appId: "1:689374105173:web:1cf4cbc2c31b84a04c4edc"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Obter elementos do DOM
var email = document.getElementById("email");
var password = document.getElementById("password");

// Função de login
window.login = function(e) {
  e.preventDefault();

  var obj = {
    email: email.value,
    password: password.value,
  };

  // Autenticar usuário
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      // Armazenar UID no localStorage
      var uid = success.user.uid;
      localStorage.setItem("uid", uid);
      
      // Redirecionar para a página do usuário
      window.location.replace('UserPage.html');
    })
    .catch(function (err) {
      // Manipular erros de login
      alert("Erro de login: " + err);
    });

  console.log(obj);
};
