function onLoadLogin(){
    const token_logado = sessionStorage.getItem("token_logado");
    if(token_logado !== null){
        // redireciona para a pagina home pois usuario ja esta logado
        window.location.href = "home.html";
    }
}

function login(){
    // chama a api de login
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;

    const body = {
        usuemail : email,
        ususenha : senha
    };

    callApi("POST", "login", body, function(data) {
        if(data.dadoslogin.login){
            const nome = data.dadoslogin.usunome;

            // pega os dados de token retornados e seta na sessao do navegador
            sessionStorage.setItem("token_logado", data.dadoslogin.token);
            sessionStorage.setItem("usuario_logado", nome);

            window.location.href = "home.html";
        } else {
            alert("Usuario ou senha invalido!");
        }
    });
}

function gravaRegistroLogin(){
    // chama a api de cadastro de login
    const nome = document.querySelector("#cadastro-nome").value;
    const email = document.querySelector("#cadastro-email").value;
    const senha = document.querySelector("#cadastro-senha").value;

    const body = {
        usunome : nome,
        usuemail : email,
        ususenha : senha,
        usutoken: "token",
        usuativo:1
    };

    callApi("POST", "users", body, function(data) {
        // pega os dados de token retornados e seta na sessao do navegador
        sessionStorage.setItem("token_logado", data.usutoken);

        // redireciona para a pagina home
        window.location.href = "home.html";
    });
}

function resetsenha(){
    const email = document.querySelector("#login-email").value;
    const senha = document.querySelector("#login-senha").value;
    const senha2 = document.querySelector("#login-senha2").value;

    if(senha == "" || senha2 == ""){
        alert("Informe os dois campos de senha!");
        return false;
    }

    if(senha !== senha2){
        alert("Senha não confere!");
        return false;
    }
    const body = {
        usuemail : email,
        ususenha : senha
    };

    callApi("POST", "resetpassword", body, function(data) {
        // Remove all saved data from sessionStorage
        sessionStorage.clear();

        // redireciona para a pagina de login
        window.location.href = "index.html";
    });
}