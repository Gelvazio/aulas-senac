<?php
// Remove a sessao do usuario
session_start();

// Remove o usuario da sessao
unset($_SESSION["usuario"]);

// Destroi a sessao do usuario
session_destroy();

// Redireciona para a tela de login
header('Location:../index.php');
