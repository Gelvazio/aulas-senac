function entrarSistema(){
    const cpf = document.getElementById("cpfcnpj").value;
    const senha = document.getElementById("password").value;

    // Seta cpf e senha na Session - Ao fechar o navegador a sessao sera perdida...

    sessionStorage.setItem('cpf_logado', cpf);
    sessionStorage.setItem('senha_logado', senha);

    //document.getElementById("formularioLogin").submit();

    // Chama a api de login
   // executaLogin();

   // redireciona o usuario para a pagina de dashboard
   // Redireciona para a url local
   window.location.href = "http://127.0.0.1:5500/index.html";
}

function executaLogin(){
    const port = "login";
    callApi("GET", port, undefined, function(data) {
        const token_logado = "eydadafdaf.454548.77";

        // Setar os dados de login na Session
        sessionStorage.setItem('token_logado', token_logado);
    });
}