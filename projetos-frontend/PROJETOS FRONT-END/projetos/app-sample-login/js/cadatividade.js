// https://www.javascripttutorial.net/dom/events/add-an-event-handler/

function onloadPage() {
    const param = {
        "usuemail": "BRANCO",
        "ususenha": "BRANCO"
    };

    // lista todas as atividades
    callApi("GET", "atividades", param, function(dados) {
        console.log(dados);
    });
}

function logout() {
    localStorage.setItem('token_logado', null);

    // mostra a tela de login
    $("#dados-login").show();

    // esconde a tela de dados
    $("#root").hide();
}

function getUrlBase() {
    const cors_url = "https://corsvalidate.herokuapp.com/";

    let url = cors_url + "https://apisenac2022.herokuapp.com/api.php/";


    // Local
    // url = "http://127.0.0.1:3333/api.php/";


    return url;
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

function mostraPagina(mostra, usuario) {
    // Esconde

    if (mostra) {
        // mostra
        // busca os dados do usuario...

        $("#alert").show();

        document.querySelector("#alert").innerHTML = "Usuario logado com sucesso!";
    }
}

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

    const body = {
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