<?php

date_default_timezone_set("America/Maceio");
function validaSessaoUsuario() {
    session_start();
    $aDadosUsuario = false;
    if (isset($_SESSION["usuario"])) {
        $aDadosUsuario = unserialize($_SESSION['usuario']);
    } else {
        require_once("core/Utils.php");

        mostraMensagem('Sessao nao iniciada...');

        header("Location: index.php?status=sessao_nao_iniciada");
    }

    if (!$aDadosUsuario) {

        echo 'Nao foi possivel encontrar os dados do usuario';

        return false;
    }

    echo '<div class="texto">Usuário:' . $aDadosUsuario['usuemail'] . ' - ' . $aDadosUsuario['usunome'] . '</div>';

    return true;
}

$validaAcesso = false;
if ($validaAcesso) {
    if (validaSessaoUsuario()) {
        require_once("templates/header.html");
    }
} else {
    require_once("templates/header.html");
}

