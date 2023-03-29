

function isLocal(){
    return true;
}


function isSupaBase(){
    return false;
}



function getMedicosApiSupabase() {
    callApi("GET", "medicos", undefined, function(data) {

    });
}

function getFolha(limite) {

    if (limite == undefined) {
        limite = 5;
    }

    let token_logado = localStorage.getItem('token_logado');

    callApi("GET", "folha", undefined, function(data) {

        const aDadosFolha = data;
        let body = document.querySelector(".containerTable-body");

        // limpa a tabela atual
        body.innerHTML = "";

        let contaFolha = 1;
        aDadosFolha.forEach(function(oFolha, key) {

            // lista apenas o limite de folhas
            if (contaFolha <= limite) {

                const dataFolha = oFolha.competencia;
                const tipoFolha = oFolha.tipo;
                const competenciaFolha = oFolha.competencia;

                let proventoFolha = formataNum(oFolha.provento);
                let descontoFolha = formataNum(oFolha.desconto);
                let liquidoFolha = formataNum(oFolha.liquido);

                // Chama a tela de modal de detalhe da folha
                const details = `<td>
                                <button class="open-detalheFolhaPagamento" data-toggle="modal" data-id="22022" data-target="#modalFolhaPagamento">
                                <box-icon name='search-alt-2'></box-icon>
                                </button>
                            </td>`;

                // adiciona as colunas da tabela da consulta de folha de pagamento
                body.innerHTML += `<tr>
                                    <td>` + dataFolha + `</td>
                                    <td>` + tipoFolha + `</td>
                                    <td>` + competenciaFolha + `</td>
                                    <td>` + proventoFolha + `</td>
                                    <td>` + descontoFolha + `</td>
                                    <td>` + liquidoFolha + `</td>
                                    ` + details + `
                                </tr>`;
            }

            contaFolha++;
        });
    });
}

function getUrlBase(port) {
    if (port == undefined) {
        port = "ping";
    }

    if(isLocal()){
        return "http://localhost/apiphp/api.php/" + port;
    }

    return "https://apiphpsenac.herokuapp.com/api.php/" + port;
}

function getHeaders() {
    return new Headers({
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
        "Access-Control-Max-Age": "86400",
        "HTTP_HOST": "web-api-java-gelvazio.herokuapp.com",
        "Accept": "Application/json",
        "chave-api-dados": "15455",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
}


function getHeaders() {
    if(isSupaBase()){
        return getHeadersSupabase();
    }
    return new Headers({
        "apikey": getToken(),
    });
}

function getHeadersSupabase() {
    if(isSupaBase()){
        return new Headers({
            "apikey": getTokenSupabase(),
            "Authorization": "Bearer " + getTokenSupabase(),
        });
    }
    return new Headers({
        "apikey": getToken(),
    });
}

function getToken() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VlbWFpbCI6InNlbmFjQGFsdW5vcy5zYy5zZW5hYy5iciIsInVzdXNlbmhhIjoiJDJ5JDExJFhtRGdmTlpcL0JKUXROdFwvT0dxRElSdVhtaU1cL1FXRGNCOUpFcW5KUlB3TDZRZEgySXVtRVVlIiwiZGF0YSI6IjIwMjItMTEtMTIiLCJ4LWFwaS1rZXkiOiJmS2hWRlp5QjdtLW45MkQzMjJnaE0tSDlKMDlZblRiTS0zM1hlY0tEZ0lILWRzWDV2QXhnclYtWXdQQ25HeFBWeiJ9.m5t7fzH2yRFDGXfXB3DhbtXMey46g7e5QbjG1CfnUS0";
}

function getTokenSupabase() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY3N6cXZ2cndkcWNuanZjb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTUxNTUsImV4cCI6MTk3NTgzMTE1NX0.U-3HSFgKo9ydTnKrpQsx5ytrBcLSpGwzVn6LqNwn14E";
}

function getMyInitFetchApi(method, body) {
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

    const myInit = getMyInitFetchApi(method, body);

    const promise = await fetch(url, myInit)
        // Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {

            console.log(data)

            //var data1 = JSON.stringify(data);

            //const dados = JSON.parse(data);

            if (oCall) {
                // Chama a function por parametor com os dados retornados...
                oCall(data);
            }

        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}