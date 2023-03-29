<?php
// Controla a sessao do usuario
session_start();
$mensagem = "Bem vindo:";
if(isset($_SESSION["usuario"])){
    $oUsuario = unserialize($_SESSION["usuario"]);
    $usuario = $oUsuario->usucodigo . ' - ' . $oUsuario->nome;
    $mensagem .= $usuario;
} else {
    $usuario = "Usuario nao logado!";
    $mensagem .= $usuario;
    
    // Redireciona para a tela de login
    // Se quiser bloquear acesso a usuario nao logado, descomentar codigo abaixo
    // header('Location:index.php');
}

require_once("core/Utils.php");
require_once("header.php");

$aListaUsuarios = Utils::selectAll("select * from tbusuariounifique order by usucodigo");

//echo '<pre>' . print_r($aListaUsuarios, true) .'</pre>';

// Gera a lista de usuarios para selecionar e gerar faturas
$html_option_usuarios = "";
foreach ($aListaUsuarios as $key => $aValues){
    $usucodigo = $aValues["usucodigo"];
    $usunome = $aValues["usunome"];
    $html_option_usuarios .= "<option value=\"$usucodigo\">$usunome</option>";
}

echo '
    <style>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
    
    <div class="container">
        <hr>
        <h1>' . $mensagem . '</h1>
        <h1>Gerar Dados Cobranca</h1>
        <form action="gerarcobrancas.php" method="post" id="formularioGerarCobrancas">
            <label for="usucodigo">Usuário:</label>
            <select id="usucodigo" class="campolabelfiltro" name="usucodigo">
            ' . $html_option_usuarios . '
            </select>
            
            <label for="mes">Mês:</label>
            <select id="mes" class="campolabelfiltro" name="mesoption">
                <option value="99">Todos</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <input type="submit" class="title" id="gerar-cobranca"
            value="Gerar Cobrancas">
        </form>
    </div>';

require_once("footer.php");
