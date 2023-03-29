<?php

function alterarProduto () {

    $codigo = $_GET["chave"];

    echo 'alterando produto codigo:' . $codigo;

    require_once("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    $sql_dados_produto = "select * from tbproduto where codigo = " . $codigo;

    $aDados = $oQuery->select($sql_dados_produto);

    $html_cadastro = '
    <div style="margin-left: 100px;">
        <br>
        <br>
        <br>
        <form action="alterarproduto.php" method="post">
            <input id="acao" name="acao" type="hidden" value="EXECUTA_ALTERACAO">
        
            <label for="codigo">Código:</label>
            <input type="hidden" id="codigo" name="codigo" size="5" value="' . $aDados["codigo"] . '">
            
            <input type="text" id="codigo_tela" name="codigo_tela" disabled size="5" value="' . $aDados["codigo"] . '">
            
            <br><br>
            <label for="descricao">Descrição:</label>
            <br>
            <input type="text" id="descricao" name="descricao" size="75" value="' . $aDados["descricao"] . '">
            
            <br><br>
            <label for="preco">Preço:</label>
            <br>
            <input type="text" id="preco" name="preco" size="75" value="' . $aDados["preco"] . '">
            
            <br><br>
            <input type="submit" value="Confirmar">
        </form>
    </div>';

    echo $html_cadastro;
}

function executaAlteracaoProduto(){
    echo 'executando alteracao do produto';

    // echo '<pre>' . print_r($_POST, true).'</pre>';

    $codigo    = $_POST["codigo"];
    $descricao = $_POST["descricao"];
    $preco     = $_POST["preco"];

    echo 'codigo' . $codigo ;

    require_once("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    $sql_update = " update tbproduto set descricao = '$descricao', preco = $preco where codigo = $codigo";

    $oQuery->executaQuery($sql_update);

    // Chama a tela de consulta
    header('Location: consultaproduto.php?acao=CONSULTA');

}

function excluirProduto(){
    $codigo = $_GET["chave"];

    require_once("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    $sql_delete = "delete from tbproduto where codigo = $codigo";

    $oQuery->executaQuery($sql_delete);

    // Chama a tela de consulta
    header('Location: consultaproduto.php?acao=CONSULTA');
}


if(isset($_GET["acao"])){
    $acao = $_GET["acao"];
    if($acao === "ALTERACAO"){
        alterarProduto();
    } else if($acao === "EXCLUSAO"){
        excluirProduto();
    }
} else if(isset($_POST["acao"])) {
    $acao = $_POST["acao"];
    if($acao === "EXECUTA_ALTERACAO"){
        executaAlteracaoProduto();
    }
} else {
    echo 'Parametros invalidos!';
}



