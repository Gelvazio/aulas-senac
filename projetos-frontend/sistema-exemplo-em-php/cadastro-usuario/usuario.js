function invokeFormulario(sPagina, sAcao, xChave) {
    var oForm = document.createElement('form');

    document.getElementById('container-consulta').append(oForm);

    var link = sPagina + '?acao=' + sAcao + '&chave=' + xChave;

    console.log('link:' + link);

    oForm.setAttribute('action', link);
    oForm.setAttribute('method', 'POST');

    oForm.submit();
}


function alterarUsuario(codigo){
    var link_arquivo = 'usuario.php';
    invokeFormulario(link_arquivo, 'ALTERACAO', codigo);
}

function excluirUsuario(codigo){
    var link_arquivo = 'usuario.php';
    invokeFormulario(link_arquivo, 'EXCLUSAO', codigo);
}