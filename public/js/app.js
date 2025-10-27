//inicia o firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// configuracao do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9DyqRzz1C5I9Mb_wfVzBTWgF7ycxjhDY",
  authDomain: "autenticacao-com-firebas-f9cac.firebaseapp.com",
  databaseURL: "https://autenticacao-com-firebas-f9cac-default-rtdb.firebaseio.com",
  projectId: "autenticacao-com-firebas-f9cac",
  storageBucket: "autenticacao-com-firebas-f9cac.firebasestorage.app",
  messagingSenderId: "34697016619",
  appId: "1:34697016619:web:abe123eabb22982f50c16e",
  measurementId: "G-MLGY475P6Y"
};

// inicializa o app
export const app = initializeApp(firebaseConfig);

// inicializa servicos
export const auth = getAuth(app);
export const database = getDatabase(app);

let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (err) {
  console.warn("Analytics não inicializado:", err.message);
}
export { analytics };

console.log("Firebase modular inicializado");
