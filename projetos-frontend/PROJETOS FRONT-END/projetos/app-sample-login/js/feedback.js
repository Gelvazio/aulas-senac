// https://www.javascripttutorial.net/dom/events/add-an-event-handler/

function onloadPage() {
    let token_logado = localStorage.getItem('token_logado');

    token_logado = token_logado.split(".");

    if (token_logado.length === 3) {
        // esconde a tela de login
        $("#dados-login").hide();


        // Atualiza os dados do usuario
        // chama a api

        // mostra a tela de dados
        $("#root").show();

        mostraPagina(true);
    }
}

function logout() {
    localStorage.setItem('token_logado', null);

    // mostra a tela de login
    $("#dados-login").show();

    // esconde a tela de dados
    $("#root").hide();
}

function clickLogin(event) {

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email == "" || senha == "") {
        $("#alert").show();
        document.querySelector("#alert").innerHTML = "E-mail ou senha em branco!";
        return;
    }

    $("#alert").hide();

    console.log('Button Clicked');

    login(email, senha, "login", "POST");

    // login(email, senha, "test", "POST");

    // test
    // https://github.github.io/fetch/
}

function getUrlBase() {
    const cors_url = "https://corsvalidate.herokuapp.com/";

    let url = cors_url + "https://apisenac2022.herokuapp.com/api.php/";


    // Local
    // url = "http://127.0.0.1:3333/api.php/";


    return url;
}

async function login(email, senha, port, method) {
    // const cors_url = "https://cors-anywhere.herokuapp.com/";

    // Heroku Gelvazio
    let url = getUrlBase();

    if (port == undefined) {
        port = "ping";
    }

    // Define a url
    url = url + port;

    if (method == undefined) {
        method = "GET";
    }

    const body = {
        "usuemail": email,
        "ususenha": senha
    };

    const myInit = getMyInitFectahApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {
            var data = JSON.stringify(data);

            let dadoslogin = JSON.parse(data);

            const validaLogin = dadoslogin.dadoslogin.login;
            const usuario = dadoslogin.dadoslogin.usuemail;
            const token_logado = dadoslogin.dadoslogin.token;

            localStorage.setItem('token_logado', token_logado);

            console.log(data);

            let mostra = false;
            if (validaLogin) {
                mostra = true;
            }

            mostraPagina(mostra);
        })
        .catch(function(error) {
            console.log('There has been a ' +
                'problem with your fetch operation: ' + error.message);
        });
}

function getHeaders() {
    return new Headers({
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
        "Access-Control-Max-Age": "86400",
        //"HTTP_HOST": "apisenac2022.herokuapp.com",
        "Accept": "Application/json",
        "chave-api-dados": "15455",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "Application/json"
    });
}

function mostraPagina(mostra) {
    // Esconde

    if (mostra) {
        // mostra
        // busca os dados do usuario...

        $("#alert").show();

        document.querySelector("#alert").innerHTML = "Usuario logado com sucesso!";


        let token_logado = localStorage.getItem('token_logado');

        const body = {
            token_logado
        };

        callApi("POST", "feedbackslist", body, function(data) {

            debugger;

            console.log(data)

            document.querySelector("#root").innerHTML = "Dados da api retornados...";
        });
    }
}

const btn = document.querySelector('#login');

btn.addEventListener('click', clickLogin);

function getMyInitFectahApi(method, body) {
    return {
        method: method,
        headers: getHeaders(),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    };
}

async function callApi(method, port, param, oCall) {

    if (port == undefined) {
        port = "ping";
    }

    // Define a url
    const url = getUrlBase() + port;

    let body = {
        "usuemail": "BRANCO",
        "ususenha": "BRANCO"
    };

    if (param) {
        body = param;
    }

    const myInit = getMyInitFectahApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {
            var data = JSON.stringify(data);

            const dados = JSON.parse(data);

            if (oCall) {
                // Chama a function por parametor com os dados retornados...
                oCall(dados);
            }

        })
        .catch(function(error) {
            console.log('There has been a ' +
                'problem with your fetch operation: ' + error.message);
        });
}