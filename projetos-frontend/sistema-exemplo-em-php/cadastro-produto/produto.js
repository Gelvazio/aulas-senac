function invokeFormulario(sPagina, sAcao, xChave) {
    var oForm = document.createElement('form');

    document.getElementById('container-consulta').append(oForm);

    var link = sPagina + '?acao=' + sAcao + '&chave=' + xChave;

    console.log('link:' + link);

    oForm.setAttribute('action', link);
    oForm.setAttribute('method', 'POST');

    oForm.submit();
}


function alterarProduto(codigo){
    console.log("Alterando produto: " + codigo);

    var link_arquivo = 'alterarproduto.php';

    invokeFormulario(link_arquivo, 'ALTERACAO', codigo);

}

function excluirProduto(codigo){
    console.log("Alterando produto: " + codigo);

    var link_arquivo = 'alterarproduto.php';

    invokeFormulario(link_arquivo, 'EXCLUSAO', codigo);

}