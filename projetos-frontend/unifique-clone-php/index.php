<?php

require_once("login/headerLogin.php");

echo '
    <div class="login">
        <img src="./images/logo.png" alt="" width="100%">
        <h1 class="titulo">Central do Assinante</h1>
        <form action="./login.php" method="post">
            <input type="hidden" name="acao" value="EXECUTA_LOGIN">
            <label for="cpfcnpj">CPF/CNPJ</label>
            <input type="text" id="cpfcnpj" name="cpfcnpj" value="346.596.720-85">

            <label for="password">SENHA</label>
            <input type="password" id="password" name="password" value="admin">

            <input class="btn btn-lg btn-success btn-block" type="submit" value="Acessar">
        </form>

        <br><span>È seu primeiro acesso?<a href="./login/cadastrarusuario.php">Clique aqui</a></span>
        <br><span>Esqueceu sua senha?<a href="./login/esqueceusenhausuario.php">Clique aqui</a></span>

    </div>
';

require_once("login/footerLogin.php");
