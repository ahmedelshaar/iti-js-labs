const getData = async function(url){
  return await fetch("https://jsonplaceholder.typicode.com/" + url)
  .then((response) => response.json())
  .catch((error) => console.log(error));
}

const listPosts = async function(user_id){
  let posts = await getData(`users/${user_id}/posts`);
  let ul = "<ul>";
  [...posts].forEach((post) => {
    ul += `<li>${post.title}</li>`
  });
  ul += "</ul>";
  return ul;
}

const addDataTable = async function(){
  let bodyTable = document.querySelector('tbody');
  let users = await getData('users');
  [...users].forEach(async (user) =>{
    let {address} = user;
    let posts = await listPosts(user.id);
    let tr = `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.company.name}</td>
    <td>${address.suite}, ${address.street}, ${address.city}</td>
    <td>${posts}</td>
  </tr>`;
    bodyTable.innerHTML += tr;
  })
}

addDataTable();