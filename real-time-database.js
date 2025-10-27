import { database } from './app.js'; 
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// elementos do DOM
const usersList = document.getElementById('usersList');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addButton = document.getElementById('addButton');

// referencia para users no Realtime Database
const usersRef = ref(database, 'users');

// mostrar mensagens de sucesso ou erro
function show(msg) {
  alert(msg);
  console.log(msg);
}

//Adicionar usuario
if (addButton) {
  addButton.addEventListener('click', async () => {
    const name = (nameInput?.value || '').trim();
    const age = (ageInput?.value || '').trim();
    if (!name || !age) return show('Preencha nome e idade.');

    try {
      await push(usersRef, { name, age });
      nameInput.value = '';
      ageInput.value = '';
      show(`Usuário ${name} adicionado com sucesso!`);
    } catch (error) {
      console.error(error);
      show(`Erro ao adicionar usuário: ${error.message}`);
    }
  });
}


//Atualiza lista em tempo real 
onValue(usersRef, snapshot => {
  usersList.innerHTML = '';
  snapshot.forEach(childSnapshot => {
    const data = childSnapshot.val();
    const li = document.createElement('li');
    li.textContent = `${data.name} : ${data.age}`;
    li.className = 'list-group-item';
    usersList.appendChild(li);
  });
});
