 // Abre o modal da folha passando como parametro o mes e ano para detalhar os dados
// desta forma e possivel buscar os dados da api, se necessario
$(document).on("click", ".open-detalheFolhaPagamento", function() {
    // Codigo da folha recebido via parametro
    var codigoFolha = $(this).data('id');

    // Chama a api com o codigo da folha para carregar os detalhes
    getFolhaDetalhe(codigoFolha);

    $(".modal-body #mesano").val("151515");
});

function listaFolhas(limite) {

    if (limite == undefined) {
        limite = 5;
    }

    callApi("GET", "folha", undefined, function(data) {

        const aDadosFolha = data;
        let body = document.querySelector(".containerTable-body");

        // limpa a tabela atual
        body.innerHTML = "";

        let contaFolha = 1;
        aDadosFolha.forEach(function(oFolha, key) {

            // lista apenas o limite de folhas
            if (contaFolha <= limite) {

                const dataFolha = converteData(oFolha.competencia);
                const tipoFolha = oFolha.tipo;
                const competenciaFolha = converteData(oFolha.competencia);

                let proventoFolha = formataNum(oFolha.provento);
                let descontoFolha = formataNum(oFolha.desconto);
                let liquidoFolha = formataNum(oFolha.liquido);

                const codigoFolha = oFolha.focodigo;

                // Chama a tela de modal de detalhe da folha
                const details = `<td>
                                    <button class="open-detalheFolhaPagamento"
                                            data-toggle="modal"
                                            data-id="${codigoFolha}"
                                            data-target="#modalFolhaPagamento">
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


function getFolhaDetalhe(codigoFolha) {

    callApi("GET", `folhadetalhe/${codigoFolha}`, undefined, function(data) {

        let body = document.querySelector(".containerTable-body-detalhe");

        // limpa a tabela atual de detalhes
        body.innerHTML = "";

        const aDadosFolha = data;
        aDadosFolha.forEach(function(oFolha, key) {
            // Pega os dados da api
            const codigoverba   = oFolha.codigoverba;
            const quantidade    = oFolha.quantidade;
            const verba         = oFolha.verba;

            let desconto      = oFolha.desconto;
            let provento      = oFolha.provento;
            let valorunitario = oFolha.valorunitario;

            // Formata os valores em reais
            desconto = "R$ " + formataNum(desconto);
            provento = "R$ " + formataNum(provento);
            valorunitario = formataNum(valorunitario);

            // adiciona as colunas de detalhe da folha de pagamento
            body.innerHTML += `<tr>
                                    <td>` + codigoverba + `</td>
                                    <td>` + verba + `</td>
                                    <td></td>
                                    <td align="center">` + quantidade + `</td>
                                    <td align="right">` + valorunitario + `</td>
                                    <td align="right">` + provento + `</td>
                                    <td></td>
                                    <td>` + desconto + `</td>
                                </tr>`;

        });
    });
}