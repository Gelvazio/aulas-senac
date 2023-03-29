/* UPDATE ARQUIVOS FTP*/
function cadastrarUsuario() {
    document.getElementById("acao").value = "INCLUIR";
    document.getElementById("formularioUsuario").submit();
}

function logarUsuarioSistema() {
    document.getElementById("acao").value = "LOGIN";
    document.getElementById("formularioUsuario").submit();
}

function usuarioEsqueceuSenha() {
    var oForm = document.getElementById("formularioUsuarioReset");
    oForm.setAttribute('action', 'resetsenhausuario.php?&acao=INCLUIR');
    oForm.setAttribute('method', 'POST');
    oForm.submit();
}

function resetSenhaUsuario() {
    document.getElementById("acao").value = "ESQUECEU_SENHA";
    document.getElementById("formularioUsuarioReset").submit();
}

function confirmarNovaSenhaUsuario() {
    var oForm = document.getElementById("formularioUsuarioReset");
    oForm.setAttribute('action', 'resetsenhausuario.php');
    oForm.setAttribute('method', 'POST');
    oForm.submit();
}
