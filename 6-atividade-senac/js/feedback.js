
function onloadPage() {
    let token_logado = localStorage.getItem('token_logado');

    if(token_logado != null){
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
}

function logout() {
    localStorage.setItem('token_logado', null);

    // mostra a tela de login
    $("#dados-login").show();

    // esconde a tela de dados
    $("#root").hide();
}

function efetuaLogin() {

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email == "" || senha == "") {
        $("#alert").show();
        document.querySelector("#alert").innerHTML = "E-mail ou senha em branco!";
        return;
    }

    $("#alert").hide();

    const metodo = "POST";
    const porta = "login";

    const body = {
        "usuemail": email,
        "ususenha": senha
    };

    callApi(metodo, porta, body, function(data) {
        loadPaginaLogin(data);
    });
}

function loadPaginaLogin(data){
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
}

function mostraPagina(mostra) {
    // Esconde

    if (mostra) {
        // Esconde a tela de login
        $("#dados-login").hide();

        // esconde a tela de dados
        $("#root").show();

        $("#alert").show();

        document.querySelector("#alert").innerHTML = "Usuario logado com sucesso!";

        loadUsersFeedback("TODOS");
    }
}

function loadUsersFeedback(statusParam) {
    // Limpa a tabela, antes de carregar os dados
    let body = document.querySelector(".containerTable-body");
    body.innerHTML = "";


    let token_logado = localStorage.getItem('token_logado');

    const bodyApi = {
        token_logado
    };

    callApi("POST", "feedbacks", bodyApi, function(dataApi) {
        const aDadosFeedback = dataApi;

        // Percorre as datas e lista os status por usuarios
        aDadosFeedback.forEach(function(data, key) {

            const status          = data.statusatividade;
            const codigoLista     = data.idatividade;
            const data_exercicios = data.dataentregaatividade;
            const github          = data.github;
            const nome            = data.usunome;
            const observacao      = data.feedback;

            if(statusParam == "TODOS" || statusParam == status){
                loadDataFromHTML(github, codigoLista, status, data_exercicios, observacao, nome);
            }
        });
    });
}
