document.addEventListener('DOMContentLoaded', () => {
  const userList = document.getElementById('user-list');

  // Función para obtener y mostrar la lista de usuarios
  async function fetchUsers() {
    try {
      const response = await fetch('https://demo-backend-5qs0-dev.fl0.io/api/users');
      if (!response.ok) {
        throw new Error('Error al obtener usuarios');
      }
      const users = await response.json();
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Llamar a la función para cargar la lista de usuarios
  fetchUsers();
});
