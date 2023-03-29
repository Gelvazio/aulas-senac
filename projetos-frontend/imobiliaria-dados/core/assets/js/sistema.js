function inicializaSistema(){

}

function invokeFormulario(sPagina, sAcao, xChave) {
    var oForm = document.createElement('form');

    document.getElementById('container-consulta').append(oForm);

    var link = sPagina + '?acao=' + sAcao + '&chave=' + xChave;

    console.log('link:' + link);

    oForm.setAttribute('action', link);
    oForm.setAttribute('method', 'POST');

    oForm.submit();
}

function alterarPessoa(id){
    invokeFormulario('pessoa.php', 'ALTERACAO', id);
}

function excluirPessoa(id){
    invokeFormulario('pessoa.php', 'EXCLUSAO', id);
}

