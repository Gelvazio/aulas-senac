<?php

// Buscar os dados do banco de dados
require_once ("core/Query.php");

/* @var $oQuery Query */
$oQuery = new Query();

$sql = "select * from tbusuario order by codigo asc";

// Retorna um array de dados
$aDadosProduto = $oQuery->selectAll($sql);

$html_cabecalho_consulta = "
    <a href=\"usuario.php?acao=INCLUSAO\" id=\"transparent\">Inclusão Usuario</a>
    <script src='usuario.js' type='text/javascript'></script>
    <div id='container-consulta'>    
        <div style='margin-left: 10px; width: 100%;background-color: black; color: white;'>
            <h1>Consulta de Usuario</h1>
          </div>
        <table border='1' style='margin-left: 40px;'>
        <!--Cabecalho -->
        <!--Inicia a Linha -->
        <tr>
            <!--Colunas do cabecalho -->
            <th>Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Alterar</th>
            <th>Excluir</th>
        </tr>
        <!--Fecha a Linha -->
        ";

$html_dados_consulta = "";

foreach ($aDadosProduto as $produto){
    // echo '<br> codigo:' . $produto["codigo"];
//    echo '<br> descricao:' . $produto["descricao"];
//    echo '<br> preco:' . $produto["preco"];
//    echo '<br><br>';

    // concatenando os dados da tabela

    $html_dados_consulta .= "
        <!--Fecha a Linha -->
        
        <!--Inicia a Linha -->
        <tr>
            <td align='center'>" . $produto["codigo"] . "</td>
            <td align='left'>" . $produto["nome"] ."</td>
            <td align='left'>" . $produto["email"] ."</td>
            <td align='left'>" . $produto["senha"] ."</td>
            
            
            <!--Coluna 4 Acao de Alterar-->
            <td><button onclick='alterarUsuario(" . $produto["codigo"] . ")'>Alterar</button></td>
            
            <!--Coluna 4 Acao de Excluir-->
            <td><button onclick='excluirUsuario(" . $produto["codigo"] . ")'>Excluir</button></td>
        </tr>        
        <!--Fecha a Linha --> ";
}

$html_rodape_consulta = "</table>
</div>";

$html_consulta = $html_cabecalho_consulta . $html_dados_consulta . $html_rodape_consulta;

echo $html_consulta;
