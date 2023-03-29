function onLoadHome(){
    console.log("load home...");

    const token_logado = sessionStorage.getItem("token_logado");

    console.log("token logado:" + token_logado);

    if(token_logado == null || token_logado == undefined){
        // redireciona para a pagina de login
        window.location.href = "index.html";
    } else {
        debugger;

        // carrega o nome do usuario logado
        const usuario_logado = sessionStorage.getItem("usuario_logado");

        document.querySelector("#usuario-logado").innerHTML = usuario_logado;

        // Lista as folhas de pagamento
        listaFolhas();

        // atualiza data hora
        setInterval(atualizaDataHora, 1000);
    }
}

function atualizaDataHora(){
    document.querySelector("#datahora").innerHTML = getDataAtual() + " " + getHoraAtual();
}

function getDataAtual(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}

function getHoraAtual(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
}

function sairSistema(){
    // Remove o token da sessao
    sessionStorage.removeItem("token_logado");

    // Remove all saved data from sessionStorage
    sessionStorage.clear();

    // redireciona para a pagina de login
    window.location.href = "index.html";
}

function updateSessionStorage(){
    // Save data to sessionStorage
    // sessionStorage.setItem("key", "value");

    // Get saved data from sessionStorage
    // let data = sessionStorage.getItem("key");

    // Remove saved data from sessionStorage
    // sessionStorage.removeItem("key");

    // Remove all saved data from sessionStorage
    // sessionStorage.clear();
}