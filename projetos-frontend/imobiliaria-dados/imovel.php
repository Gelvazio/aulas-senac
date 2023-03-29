<?php
require_once("core/Utils.php");
require_once("default/header.php");

function consulta(){
    require_once("consulta/pages/consultaimovel.php");
}

function cadastro(){
    $html_cadastro = '<div class="section-home corpo_formulario">
        <div class="formulario">
            <div class="header-form">Imovel</div>
            <form action="/action_page.php">
                <label for="nome">Nome</label>
                <input id="nome" name="nome" placeholder="Informe o nome..." type="text">
    
                <label for="sobrenome">Email</label>
                <input id="sobrenome" name="sobrenome" placeholder="Informe sobrenome..." type="text">
    
                <label for="senha">Senha</label>
                <input id="senha" name="senha" type="password">
    
                <label for="country">País</label>
                <select id="country" name="country">
                    <option value="australia">Brasil</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <input type="submit" value="Confirmar">
            </form>
        </div>
    </div>';

    echo $html_cadastro;
}

if(isset($_GET["acao"])){

    $acao = $_GET["acao"];
    switch ($acao){
        case 'CONSULTA':
            consulta();
        break;

        case 'INCLUSAO':
            cadastro();
            break;
        case 'ALTERACAO':
            mostraMensagem('Acão nao implementada ainda...');

            break;
        case 'EXCLUSAO':
            mostraMensagem('Acão nao implementada ainda...');
            break;
        default:
            mostraMensagem('Acão invalida!');
            break;
    }
} else {
    mostraMensagem('Acão nao encontrada para Pessoa!');
}

require_once("default/footer.php");



