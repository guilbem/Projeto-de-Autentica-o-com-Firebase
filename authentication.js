
import { auth } from "./app.js"; 
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// providers
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// buttons 
const authEmailPassButton = document.getElementById('authEmailPassButton');
const authFacebookButton = document.getElementById('authFacebookButton');
const authTwitterButton = document.getElementById('authTwitterButton');
const authGoogleButton = document.getElementById('authGoogleButton');
const authGitHubButton = document.getElementById('authGitHubButton');
const authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
const createUserButton = document.getElementById('createUserButton');
const logOutButton = document.getElementById('signOutButton');

// inputs 
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const displayName = document.getElementById('displayName');

// mensagens de erro ou sucesso
function show(msg) {
  alert(msg);
  console.log(msg);
}


// cria novo usuario 
if (createUserButton) {
  createUserButton.addEventListener('click', async () => {
    const email = (emailInput?.value || '').trim();
    const password = (passwordInput?.value || '').trim();
    if (!email || !password) return show('Preencha email e senha.');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      show('Bem-vindo ' + email);
      if (displayName) displayName.textContent = 'Olá, ' + email;
      if (emailInput) emailInput.value = '';
      if (passwordInput) passwordInput.value = '';
      console.log('createUserWithEmailAndPassword ->', userCredential);
    } catch (error) {
      console.error(error.code, error.message);
      show('Falha ao cadastrar, veja o console.');
    }
  });
}



// realiza o Login com email e senha 
if (authEmailPassButton) {
  authEmailPassButton.addEventListener('click', async () => {
    const email = (emailInput?.value || '').trim();
    const password = (passwordInput?.value || '').trim();
    if (!email || !password) return show('Preencha email e senha.');

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log('signInWithEmailAndPassword ->', result);
      if (displayName) displayName.innerText = 'Bem-vindo, ' + (result.user.email || email);
      show('Autenticado: ' + email);
      if (emailInput) emailInput.value = '';
      if (passwordInput) passwordInput.value = '';
    } catch (error) {
      console.error(error.code, error.message);
      show('Falha ao autenticar, verifique o console.');
    }
  });
}



//Logout de acesso
if (logOutButton) {
  logOutButton.addEventListener('click', async () => {
    try {
      await signOut(auth);
      if (displayName) displayName.textContent = 'Você não está autenticado';
      show('Você se deslogou');
    } catch (error) {
      console.error(error);
      show('Erro ao sair, veja o console.');
    }
  });
}



// autenticacao anônima 
if (authAnonymouslyButton) {
  authAnonymouslyButton.addEventListener('click', async () => {
    try {
      const result = await signInAnonymously(auth);
      console.log('signInAnonymously ->', result);
      if (displayName) displayName.innerText = 'Bem-vindo, usuário anônimo';
      show('Autenticado anonimamente');
    } catch (error) {
      console.error(error.code, error.message);
      show('Falha ao autenticar anonimamente, veja o console.');
    }
  });
}



// Autenticacao via provedores - podendo ser com GITHUB, GOOGLE (as que estao em funcionamento).
// FACEBOOK E TWITTER (ainda nao configuradas).
async function signInWithProvider(provider, providerName = 'provedor') {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(`signInWithPopup(${providerName}) ->`, result);
    const name = result.user?.displayName || result.user?.email || 'usuário';
    if (displayName) displayName.innerText = 'Bem-vindo, ' + name;
    show(`Autenticado via ${providerName}`);
  } catch (error) {
    console.error(error);
    show(`Falha na autenticação via ${providerName}, veja o console.`);
  }
}

if (authGitHubButton) {
  authGitHubButton.addEventListener('click', () => signInWithProvider(githubProvider, 'GitHub'));
}
if (authGoogleButton) {
  authGoogleButton.addEventListener('click', () => signInWithProvider(googleProvider, 'Google'));
}
if (authFacebookButton) {
  authFacebookButton.addEventListener('click', () => signInWithProvider(facebookProvider, 'Facebook'));
}
if (authTwitterButton) {
  authTwitterButton.addEventListener('click', () => signInWithProvider(twitterProvider, 'Twitter'));
}
