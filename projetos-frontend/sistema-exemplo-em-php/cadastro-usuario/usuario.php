<?php

/**
CREATE TABLE public.tbusuario (
codigo int4 NOT NULL,
nome varchar(200) NOT NULL,
email varchar (30) NOT NULL,
senha varchar (30) NOT NULL,
CONSTRAINT tbusuario_pkey PRIMARY KEY (codigo)
);
 * */

function abreCadastroInclusao() {
    $html_cadastro = '
<div style="margin-left: 100px;">
        <br>
        <br>
        <br>
        <h1>Inclusao de Usuario</h1>
        <form action="inserirusuario.php" method="post">
            <input id="acao" name="acao" type="hidden" value="EXECUTA_INCLUSAO">
        
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" disabled size="5">
            
            <br><br>
            <label for="nome">Nome:</label>
            <br>
            <input type="text" id="nome" name="nome" size="75">
            
            <br><br>
            <label for="email">E-mail:</label>
            <br>
            <input type="email" id="email" name="email" size="75" value="joao@gmail.com">
                        
            <br><br>
            <label for="senha">Senha:</label>
            <br>
            <input type="password" id="senha" name="senha" size="75">
            
            <br><br>
            <input type="submit" value="Confirmar">
        </form>
    </div>';

    echo $html_cadastro;
}

function abreAlteracaoCadastro(){

    require_once ("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    // Busca os dados do banco de dados para a chave atual do usuario
    $codigo = $_GET["chave"];
    $sql = "select * from tbusuario where codigo = $codigo";

    $aDados = $oQuery->select($sql);

    $html_cadastro = '
    <div style="margin-left: 100px;">
        <br>
        <br>
        <br>
        <h1>Alteracao de Usuario</h1>
        <form action="usuario.php" method="post">
            <input id="acao" name="acao" type="hidden" value="EXECUTA_ALTERACAO">
        
            <input type="hidden" id="codigo" name="codigo" size="5" value="' . $aDados["codigo"] . '">
            
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" disabled size="5"  value="' . $aDados["codigo"] . '">
            
            <br><br>
            <label for="nome">Nome:</label>
            <br>
            <input type="text" id="nome" name="nome" size="75"  value="' . $aDados["nome"] . '">
            
            <br><br>
            <label for="email">E-mail:</label>
            <br>
            <input type="email" id="email" name="email" size="75"  value="' . $aDados["email"] . '">
                        
            <br><br>
            <label for="senha">Senha:</label>
            <br>
            <input type="password" id="senha" name="senha" size="75"  value="' . $aDados["senha"] . '">
            
            <br><br>
            <input type="submit" value="Confirmar">
        </form>
    </div>';

    echo $html_cadastro;
}

function executaAlteracaoCadastro(){
    echo 'executando alteracao do cadastro...';

    require_once ("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    // Busca os dados do banco de dados para a chave atual do usuario
    $codigo = $_POST["codigo"];
    $nome   = $_POST["nome"];
    $email  = $_POST["email"];
    $senha  = $_POST["senha"];

    $sql_update = "UPDATE public.tbusuario SET nome='$nome', email='$email', senha='$senha'
                            WHERE codigo=$codigo; ";

    // Executa update no banco
    $oQuery->executaQuery($sql_update);

    // Chama a tela de consulta
    header('Location: consultausuario.php?acao=CONSULTA');
}

function executaExclusaoCadastro(){
    require_once ("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    // Busca os dados do banco de dados para a chave atual do usuario
    $codigo = $_GET["chave"];

    $sql_exclusao = "delete from tbusuario where codigo = $codigo";

    $oQuery->executaQuery($sql_exclusao);

    // Chama a tela de consulta
    header('Location: consultausuario.php?acao=CONSULTA');
}

if(isset($_POST["acao"])){
    $acao = $_POST["acao"];
    if($acao === "EXECUTA_INCLUSAO"){
        executaInclusao();
    } else if($acao === "EXECUTA_ALTERACAO"){
        executaAlteracaoCadastro();
    }
}else if(isset($_GET["acao"])){
    $acao = $_GET["acao"];
    if($acao === "INCLUSAO"){
        abreCadastroInclusao();
    } else if($acao === "ALTERACAO"){
        abreAlteracaoCadastro();
    } else if($acao === "EXCLUSAO"){
        executaExclusaoCadastro();
    }
} else {
    echo 'Parametros invalidos!';
}
