var ajax;
var dadosUsuario;

// Cria o objeto e faz a requisição
function requisicaoHTTP(tipo, url, assinc){
    if(window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        ajax = new ActiveXObject("Msxml2.XMLHTTP");
        if(!ajax){
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if(ajax){
        iniciaRequisicao(tipo, url, assinc);
    }else{
        alert("Seu navegador não possui suporte a essa aplicação!");
    }
}

// Inicia o objeto criado e envia os dados ( se existirem )
function iniciaRequisicao(tipo, url, bool){
    ajax.onreadystatechange = trataResposta;
    ajax.open(tipo, url, bool);
    ajax.setRequestHeader("Content-Type", "application/x-www-from-urlenconded;charset=UTF-8");
    //ajax.overrideMimeType("text/XML"); <- Usado somente no mozilla
    ajax.send("dadosUsuario");
}

// Inicia requisição com envio de dados
function enviaDados(url){
    criaQueryString();
    requisicaoHTTP("POST", url, true);
}

// Cria a string a ser enviada, formato  campo1=valor1&campo2=valor2...
function criaQueryString(){
    dadosUsuario = "";
    var frm = document.forms[0];
    var numElementos = frm.elements.lenght;
    for(var i = 0; i < numElementos; i++){
        if(i < numElementos - 1){
            dadosUsuario += frm.elements[i].name+"="+encodeURIComponent(frm.elements[i].value)+"&";
        }else{
            dadosUsuario += frm.elements[i].name+"="+encodeURIComponent(frm.elements[i].value);
        }
    }
}

//trata a resposta do servidor
function trataResposta(){
    if(ajax.readyState == 4){
        if(ajax.status == 200){
            trataDados();
        }else{
            alert(ajax.status +" <> "+ ajax.readystate);
            alert("Problema na comunicação com o objeto XMLHttpRequest.");
        }
    }
}