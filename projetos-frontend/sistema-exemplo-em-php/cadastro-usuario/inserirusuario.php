<?php

function executaInclusao(){
    echo 'executando inclusao de dados...<br><br><br>';

    require_once ("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    // buscar o ultimo codigo mais 1
    $sql_codigo = "select codigo + 1 as codigo from tbusuario order by codigo desc limit 1";

    $aDados = $oQuery->select($sql_codigo);
    $codigo_param = $aDados["codigo"];

    $codigo = 1;
    if ((int)($codigo_param) > 0){
        $codigo = $codigo_param;
    }

    $nome  = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql_insert = "INSERT INTO public.tbusuario (codigo, nome, email, senha)
        VALUES($codigo, '$nome', '$email', '$senha');";

    $oQuery->executaQuery($sql_insert);

    // Chama a tela de consulta
    header('Location: consultausuario.php?acao=CONSULTA');
}

if(isset($_POST["acao"])){
    $acao = $_POST["acao"];
    if($acao === "EXECUTA_INCLUSAO"){
        executaInclusao();
    }
} else {
    echo 'Parametros invalidos!';
}



