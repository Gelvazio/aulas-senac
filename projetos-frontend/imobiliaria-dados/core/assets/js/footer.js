
function carregaCep(cep = false) {
    console.log("chegou aqui....");
    return;

    if(!cep){
        cep = "89160328";
    }

    // https://viacep.com.br/ws/01001000/json/
    const url_cep = `https://viacep.com.br/ws/${cep}/json/`;


    loadAjax({
            type: "POST",
            data: "token=" + token_dois_fatores + "&secret=" + secret + "&window_id=" + window_id + "&pagina=" + window_id,
            url: url_cep
        },
        success = function (ret) {

        },
        error = function (ret) {
            var retorno = JSON.parse(ret.responseText);

            // Adiciona a tela no frame
            var mensagem = retorno.mensagem;
            var tipoMensagem = retorno.status;
            var traceError = retorno.trace;

            // Adiciona o corpo da mensagem
            $("#container").append(getJanelaMensagem(mensagem, traceError, tipoMensagem, window_id));

            // Mostra a tela
            mostraJanela(oJanela);
        },
        onComplete = function () {
            // Chama funcao apos completar a request
        }
    );
}