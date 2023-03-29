var STATUS_FATURA_EM_ABERTO = 1;
var STATUS_FATURA_PAGA = 2;

function onLoadPaginas() {
    atualizaBotaoStatus(STATUS_FATURA_EM_ABERTO);
}

function isLoadDadosFixos() {
    return false;
}

function getTokenLogado() {
    const cpf_logado = sessionStorage.getItem('cpf_logado');
    const senha_logado = sessionStorage.getItem('senha_logado');
}

function atualizaFaturas(status) {

    getTokenLogado();

    port = "tbfatura?status=eq." + status + "&";

    // Atualiza os status dos botoes
    atualizaBotaoStatus(status);

    if (isLoadDadosFixos()) {
        // Carrega uma lista de dados fixos, para nao gastar todas as chamadas api
        var dadosFaturas = JSON.parse(LISTA_FATURAS);
        loadFaturas(dadosFaturas);
    } else {
        // Chama a api da Supabase
        data = {};
        callApi("GET", port, undefined, function(data) {
            loadFaturas(data);
        });
    }
}

function atualizaBotaoStatus(status) {
    if (status == STATUS_FATURA_EM_ABERTO) {
        document.querySelector("#cobranca-aberto").style.display = "block";
        document.querySelector("#cobranca-pago").style.display = "none";
    } else if (status == STATUS_FATURA_PAGA) {
        document.querySelector("#cobranca-aberto").style.display = "none";
        document.querySelector("#cobranca-pago").style.display = "block";
    }
}

function loadFaturas(data) {
    const faturas = data;

    let bodyTable = document.querySelector(".containerTable-body");
    // reset da tabela
    bodyTable.innerHTML = '';

    let temDados = false;
    if (parseInt(faturas.length) > 0) {
        temDados = true;
    }

    if (temDados) {
        faturas.forEach(function(oFatura, key) {
            const id = oFatura.id;
            const datapagamento = oFatura.datapagamento;
            const datavencimento = oFatura.datavencimento;
            const valorvencimento = oFatura.valorvencimento;
            const valorpagamento = oFatura.valorpagamento;

            const htmlBotaoBoletos = getHtmlBotaoBoletos(id);

            // colocando as faturas na tabela de html
            bodyTable.innerHTML += `<tr>
                                            <td>${id}</td>
                                            <td>${datapagamento}</td>
                                            <td>${datavencimento}</td>
                                            <td>${valorvencimento}</td>
                                            <td>${valorpagamento}</td>
                                            <td>${htmlBotaoBoletos}</td>
                                        </tr>`;

        });
    }
}

function getHtmlBotaoBoletos(idFatura) {
    return `
     <a title="Cobrancas pagas" href="#" class="open-detalheFatura title" data-toggle="modal" data-id="${idFatura}" data-target="#modalFatura">
        <p class="title">Detalhar</p>
    </a>
    `;
}

// Evento que trata o modal de detalhe da fatura
$(document).on("click", ".open-detalheFatura", function() {
    var idFatura = $(this).data('id');

    console.log("id fatura" + idFatura);

    // Seta o id da fatura no modal
    $(".modal-body #idfatura").val(idFatura);

    // chama a api para carregar os detalhes da fatura
    loadDadosFatura(idFatura);
    loadDadosFaturaCabecalho(idFatura);
});

function loadDadosFaturaCabecalho(idFatura) {
    // Programacao do cabecalho.
}

function loadDadosFatura(idFatura) {
    // criar a tabela de detalhes da fatura - ok

    // Chama a api da Supabase
    data = {};
    port = "tbfaturadetalhe?idfatura=eq." + idFatura + "&";
    callApi("GET", port, undefined, function(data) {
        // Setar os dados da fatura no modal
        loadDadosFaturaDetalhe(data);
    });
}

function loadDadosFaturaDetalhe(data) {
    const faturasDetalhe = data;
    let bodyTable = document.querySelector(".containerTableDetalhe-body");
    // reset da tabela
    bodyTable.innerHTML = '';

    let temDados = false;
    if (parseInt(faturasDetalhe.length) > 0) {
        temDados = true;
    }

    if (temDados) {
        faturasDetalhe.forEach(function(oFaturaDetalhe, key) {
            const id = oFaturaDetalhe.id;
            const idfaturaApi = oFaturaDetalhe.idfatura;
            const circuito = oFaturaDetalhe.circuito;
            const codigoservico = oFaturaDetalhe.codigoservico;
            const descricaoservico = oFaturaDetalhe.descricaoservico;
            const datainicioservico = oFaturaDetalhe.datainicioservico;
            const datafimservico = oFaturaDetalhe.datafimservico;
            const valorservico = oFaturaDetalhe.valorservico;

            // colocando os detalhes da faturas na tabela de html
            bodyTable.innerHTML += `<tr>
                                            <td>${descricaoservico}</td>
                                            <td>${datainicioservico}</td>
                                            <td>${datafimservico}</td>
                                            <td>${circuito}</td>
                                            <td>${valorservico}</td>
                                        </tr>`;

        });
    } else {
        bodyTable.innerHTML = `<tr>
                                    <td colspan="5" style="color:red;font-size:25px; text-align:center;">Fatura sem Detalhes!</td>
                                </tr>`;
    }
}