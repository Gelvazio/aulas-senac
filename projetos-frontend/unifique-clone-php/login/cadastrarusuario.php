<?php

require_once("../login/headerLogin.php");

echo '
    <div class="login">
        <img src="../images/logo.png" alt="" width="100%">
        <h1 class="titulo">Cadastro de Novo Usuario</h1>
        <form action="../login.php" method="post">
            <input type="hidden" name="acao" value="CADASTRA_LOGIN">
            
            <label>Nome</label>
            <input type="text" name="nome" value="Maria" required>
            
            <label>Email</label>
            <input type="text" name="email" value="maria@gmail.com" required>
            
            <label>CPF/CNPJ</label>
            <input type="text" name="cpfcnpj" value="346.596.720-11"required>
            
            <label>SENHA</label>
            <input type="password" name="password" value="123456" required>
            
            <input class="btn btn-lg btn-success btn-block" type="submit" value="Cadastrar">
        </form>

        <br><span>È seu primeiro acesso?<a href="./login/cadastrarusuario.php">Clique aqui</a></span>
        <br><span>Esqueceu sua senha?<a href="./login/esqueceusenhausuario.php">Clique aqui</a></span>
        
    </div>';

require_once("../login/footerLogin.php");
