$(document).ready(function() {
    inicializaPagina();
});

function inicializaPagina(){
    const date = new Date();
    
    $("#ano_pagina").html(date.getFullYear());
    
   // getItems();
}

const github_username = 'Gelvazio';

const uri = `https://api.github.com/users/${github_username}`;

let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));

    
    // busca dados do usuario no github 
    // const response = await axios.get(`https://api.github.com/users/${github_username}`);
    //
    // const {name = login, avatar_url, bio} = response.data;
    //
    // const techsArray = parseStringAsArray(techs);
    //
    // const location = {
    //     type: 'Point',
    //     coordinates: [longitude, latitude]
    // }
    
}

function addItem() {
    const addNameTextbox = document.getElementById('add-name');

    const item = {
        isComplete: false,
        name: addNameTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-isComplete').checked = item.isComplete;
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        isComplete: document.getElementById('edit-isComplete').checked,
        name: document.getElementById('edit-name').value.trim()
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function showDataFromGithub(data) {
    debugger;
    console.log(data);
    
    // dados completos do github 
    // https://api.github.com/users/Gelvazio/events
    
    
    
    // avatar_url: "https://avatars.githubusercontent.com/u/5419445?v=4"
    // bio: "Developper Backend pleno, frontend aprendiz."
    // blog: "https://gelvazio.github.io/"
    // company: "Tidas Tecnologia"
    // created_at: "2013-09-09T15:35:38Z"
    // email: null
    // events_url: "https://api.github.com/users/Gelvazio/events{/privacy}"
    // followers: 24
    // followers_url: "https://api.github.com/users/Gelvazio/followers"
    // following: 48
    // following_url: "https://api.github.com/users/Gelvazio/following{/other_user}"
    // gists_url: "https://api.github.com/users/Gelvazio/gists{/gist_id}"
    // gravatar_id: ""
    // hireable: null
    // html_url: "https://github.com/Gelvazio"
    // id: 5419445
    // location: "Rio do Sul,Santa Catarina,Brasil"
    // login: "Gelvazio"
    // name: "Gelvazio Camargo"
    // node_id: "MDQ6VXNlcjU0MTk0NDU="
    // organizations_url: "https://api.github.com/users/Gelvazio/orgs"
    // public_gists: 2
    // public_repos: 235
    // received_events_url: "https://api.github.com/users/Gelvazio/received_events"
    // repos_url: "https://api.github.com/users/Gelvazio/repos"
    // site_admin: false
    // starred_url: "https://api.github.com/users/Gelvazio/starred{/owner}{/repo}"
    // subscriptions_url: "https://api.github.com/users/Gelvazio/subscriptions"
    // twitter_username: null
    // type: "User"
    // updated_at: "2021-10-12T14:32:07Z"
    // url: "https://api.github.com/users/Gelvazio"
}

function _displayItems(data) {
    debugger;
    
    showDataFromGithub(data); return true;
    
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let isCompleteCheckbox = document.createElement('input');
        isCompleteCheckbox.type = 'checkbox';
        isCompleteCheckbox.disabled = true;
        isCompleteCheckbox.checked = item.isComplete;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(isCompleteCheckbox);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.name);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        td3.appendChild(editButton);

        let td4 = tr.insertCell(3);
        td4.appendChild(deleteButton);
    });

    todos = data;
}

function cadastrarUsuario() {
    updateUsuario();
}

function updateUsuario(){
    
    const usuario = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        
    var RequestInit = { 
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(usuario)        
    };
    
    //let url = 'http://localhost:3333/users/store';
    let url = 'https://apidevs.herokuapp.com/users/store';    
    
    fetch(url, RequestInit)
        .then(response => response.json())
        .then(data     => _displayItems(data))
        .catch(error   => console.error('Unable to get items.', error));
}

function getHeaders(){
    const headers = new Headers();
    
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("X-api-key", "d3f28f4d-4649-4b69-9ef7-7423b26d7508");
    
    return headers;
}