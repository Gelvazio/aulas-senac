// https://www.javascripttutorial.net/dom/events/add-an-event-handler/

function onloadPage() {
    return callApi();

    let token_logado = localStorage.getItem('token_logado');

    token_logado = token_logado.split(".");

    if (token_logado.length === 3) {
        // esconde a tela de login
        $("#dados-login").hide();


        // Atualiza os dados do usuario
        // chama a api

        // mostra a tela de dados
        $("#root").show();

        // lista auxilios api Senac
        // https://apisenac2022.herokuapp.com/api.php/auxilios
        mostraPagina(true);
    } else {
        // mostra a tela de login
        $("#dados-login").show();

        $("#root").hide();
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

    login(email, senha, "login", "POST");
}

function getUrlBase(port) {
    if (port == undefined) {
        port = "ping";
    }

    return "https://cors-anywhere.herokuapp.com/https://apisenac2022.herokuapp.com/api.php/" + port;
}

async function login(email, senha, port, method) {
    let url = getUrlBase(port);


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
        "HTTP_HOST": "apisenac2022.herokuapp.com",
        "Accept": "Application/json",
        "chave-api-dados": "15455",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "Application/json"
    });
}

function mostraPagina(mostra) {

    if (mostra) {

        // $("#alert").addClass("alert-success");

        // $("#alert").attr("role", "alert-success");

        $("#alert").show();

        document.querySelector("#alert").innerHTML = "Usuario logado com sucesso!";


        let token_logado = localStorage.getItem('token_logado');

        const body = {
            "token_logado": token_logado,
            "usucodigo": 1,
            "idatividade": 1
        };

        callApi("POST", "feedbacks", body, function(data) {

            console.log(data)

            document.querySelector("#root").innerHTML = "Dados da api retornados...";
        });
    }
}

const btn = document.querySelector('#login');

btn.addEventListener('click', clickLogin);

function getMyInitFectahApi(method, body) {
    let usaBody = false;
    if (method == "POST") {
        usaBody = true;
    }

    if (usaBody) {
        return {
            method: method,
            headers: getHeaders(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        };
    }

    return {
        method: method,
        headers: getHeaders(),
        mode: 'cors',
        cache: 'default'
    };
}

async function callApi(method, port, body, oCall) {

    if (body == undefined) {
        body = "";
    }

    if (method == undefined) {
        method = "GET";
    }

    if (port == undefined) {
        port = "ping";
    }


    // Define a url
    const url = getUrlBase(port);

    console.log("url gerada:" + url);

    const myInit = getMyInitFectahApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {

            console.log(data)

            //var data = JSON.stringify(data);

            //const dados = JSON.parse(data);

            if (oCall) {
                // Chama a function por parametor com os dados retornados...
                //  oCall(dados);
            }

        })
        .catch(function(error) {
            console.log('There has been a ' +
                'problem with your fetch operation: ' + error.message);
        });
}