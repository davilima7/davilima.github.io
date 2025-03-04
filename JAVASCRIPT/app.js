import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBktsrNtKuSGXYT27jUNFFV7hLTJRuqAzI",
  authDomain: "ds-cross.firebaseapp.com",
  projectId: "ds-cross",
  storageBucket: "ds-cross.appspot.com",
  messagingSenderId: "689374105173",
  appId: "1:689374105173:web:1cf4cbc2c31b84a04c4edc"
};

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Função para cadastro de usuários
window.signup = function (e) {
  e.preventDefault(); // Impede o envio do formulário

  // Obtenha os valores dos campos do formulário
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var copassword = document.getElementById("copassword").value;

  // Verifica se todos os campos estão preenchidos
  if (fullName === "" || email === "" || password === "" || copassword === "") {
    alert("Todos os campos são obrigatórios");
    return;
  }

  // Verifica se as senhas coincidem
  if (password !== copassword) {
    alert("Confirmação de senha incorreta");
    return;
  }

  // Cria um objeto com os dados do usuário
  var userData = {
    fullName: fullName,
    email: email,
    password: password
  };

  // Criação do usuário no Firebase Authentication
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(function (userCredential) {
      // Limpa os campos do formulário
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("copassword").value = "";

      // Redireciona para a página de login após o cadastro bem-sucedido
      window.location.replace('login.html');
      alert("Cadastro realizado com sucesso!");
    })
    .catch(function (error) {
      // Manipula erros durante o cadastro
      var errorMessage = error.message;
      alert("Erro ao cadastrar: " + errorMessage);
    });
};
