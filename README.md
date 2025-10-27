
# 🔐 Projeto de Autenticação com Firebase

Uma aplicação web simples e funcional para autenticação de usuários usando Firebase.
Desenvolvido com **HTML**, **CSS** e **JavaScript puro**.

---

## 📋 Funcionalidades

✅ Cadastro e login de usuários com **e-mail e senha**
🌐 Login com **provedores sociais** (Google, Facebook, GitHub, Twitter)
📡 Integração com **Firebase Authentication** e **Realtime Database**
🧾 Armazenamento de dados do usuário no banco em tempo real
🔔 Exibição de mensagens e status de autenticação
🚪 Logout seguro e verificação automática de sessão
🌈 Interface limpa e responsiva

---

## 🛠️ Tecnologias Utilizadas

⚙️ **HTML5** — estrutura e marcação da interface
🎨 **CSS3** — estilização e responsividade
🧠 **JavaScript (ES6+)** — lógica de autenticação e manipulação do DOM
🔥 **Firebase** — serviços de autenticação, banco de dados e hospedagem

---

## ⚙️ Como Usar

1. **Clone ou baixe este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/ProjetoAutenticacaoFirebase.git
   ```

2. **Crie um projeto no [Firebase Console](https://console.firebase.google.com/)**

3. **Ative os serviços:**

   * Authentication → métodos de login (Email/Password e provedores sociais)
   * Realtime Database (modo teste para desenvolvimento)
   * (Opcional) Hosting para publicar o site

4. **Copie suas credenciais** do app web (firebaseConfig) e adicione em `firebase-config.js`:

   ```js
   const firebaseConfig = {
     apiKey: "SUA_API_KEY",
     authDomain: "seu-projeto.firebaseapp.com",
     databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
     projectId: "seu-projeto",
     storageBucket: "seu-projeto.appspot.com",
     messagingSenderId: "SEU_SENDER_ID",
     appId: "SEU_APP_ID"
   };
   firebase.initializeApp(firebaseConfig);
   ```

5. **Execute o projeto localmente:**

   ```bash
   npm install -g http-server
   http-server .
   ```

   Depois acesse: [http://localhost:8080](http://localhost:8080)

6. (Opcional) **Faça o deploy com Firebase Hosting:**

   ```bash
   firebase login
   firebase init
   firebase deploy
   ```

---

## 👨‍💻 Autor

**Guilherme Guimarães**
Projeto desenvolvido para fins educacionais — Introdução ao Firebase.


