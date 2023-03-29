function carregaImoveis() {
    var host = "https://www.imobiliariamauricio.com.br/data/localizacoes.json";
    var host = "https://jobscalctest.herokuapp.com/localizacoes.json";
    var host = "https://imobiliariasenac.herokuapp.com/localizacoes.json";

    var host = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    var host = "https://loteriascaixa-api.herokuapp.com/api";

    var host = "https://gist.githubusercontent.com/Gelvazio/44520e7a50020be8c915585e1dc1c933/raw/e927c062c77bff1c5b16891a3c81cb0a4bfd904e/localizacoes";

    // servidor de localizacoes online 
    var host = "https://gist.githubusercontent.com/Gelvazio/44520e7a50020be8c915585e1dc1c933/raw/e927c062c77bff1c5b16891a3c81cb0a4bfd904e/localizacoes";



    // banco de dados de imagens 
    // https://pixabay.com/pt/

    //callApi(host);

    //callApi2();

    //callApi3(host);

    var host = "https://api.cartolafc.globo.com";
    var endpoint = "/atletas/mercado";


    var host = "https://imobiliariasenac.herokuapp.com/localizacoes.json";
    //callApi4(host);
}

function callApi(host, params) {

    var myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*"
    });

    if (params == undefined) {
        params = {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default'
        };
    }

    fetch(host, params)
        .then(response => {
            debugger;

            var resp = response.json();

            return response;
        })
        .then((response) => {
            debugger;
            console.info('fetch()', response);
            resolve(data);
        })
        .catch((error) => {
            console.log("Error" + error);
        })
}

function callApi2() {
    // deve ser usado fetch api
    // https://www.devmedia.com.br/javascript-fetch/41206
    //const autorization = window.btoa($("#username").val().trim() + ":" + $("#password").val().trim());

    // link microsoft funcionando
    // https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

    // testar randomuser.me 
    const myHeaders = {
        "Accept": "text/html, application/xhtml + xml, application/xml;q = 0.9, image/avif, image/webp, image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    };

    let url = "https://imobiliariasenac.herokuapp.com/localizacoes.json";
    $.ajax({
        url: url,
        method: "GET",
        cache: false,
        headers: myHeaders
    }).done(function(res) {
        if (res) {
            debugger;

            /*const lojasAtivas = [];
            localStorage.setItem('currentUser', JSON.stringify({
                username: $("#username").val().trim(),
                token: res.token,
                lojas: lojasAtivas
            }));
            */

            // localiza o main da pagina
            window.location.href = "/";
        } else {
            $(".loading").fadeOut(function() {
                $("#msgErro").html("Login e/ou senha inválida");
                $("#msgErro").fadeIn();
            });
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        $(".loading").fadeOut(function() {
            if (jqXHR && jqXHR.status === 403) {
                $("#msgErro").html("Acesso não permitido, entre em contato com a administradora!");
                $("#msgErro").fadeIn();
            } else {
                $("#msgErro").html("Login e/ou senha inválida");
                $("#msgErro").fadeIn();
            }
        });
    });
}

function callApi3(host) {
    /*
    fetch('https://api.github.com/orgs/nodejs', {
            headers: new Headers({
                'User-agent': 'Mozilla/4.0 Custom User Agent'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
    */

    var host_node = "https://api.github.com/orgs/nodejs";
    fetch(host, {
            headers: new Headers({
                'User-agent': 'Mozilla/4.0 Custom User Agent'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
}

function callApi4(host) {
    const myHeaders = {
        "Access-Control-Allow-Origin": "https://imobiliariasenac.herokuapp.com",
        "Access-Control-Allow-Methods": "POST, GET",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": 86400,
        "User-agent": "Mozilla/4.0 Custom User Agent"
    };

    var host_node = "https://api.github.com/orgs/nodejs";

    fetch(host, {
            headers: new Headers(myHeaders)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
}