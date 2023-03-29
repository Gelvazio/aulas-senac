<?php

function formataNum($numero, $decimais = 2, $separador_decimal = ",",
                    $separador_milhar = ".") {
    if ($numero !== 'Não usa') {
        $numero = number_format($numero, $decimais, $separador_decimal, $separador_milhar);
    }

    return $numero;
}

// Tabela de Consulta

$html_consulta_exemplo = "
<h1>Consulta de Produto Exemplo</h1> 
   <table border='1' style='margin-left: 200px;'>
        <!--Cabecalho -->
        <!--Inicia a Linha -->
        <tr>
            <!--Colunas do cabecalho -->
            <th>Código</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>        
        <!--Fecha a Linha -->
        
        <!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha -->         
        <!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha -->         
        <!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha --><!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha --><!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha --><!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha -->
        <!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha -->        
    </table>
    
";

//echo $html_consulta_exemplo; return;


// Buscar os dados do banco de dados
require_once ("core/Query.php");

/* @var $oQuery Query */
$oQuery = new Query();

$sql = "select * from tbproduto order by codigo asc";

// Retorna um array de dados
$aDadosProduto = $oQuery->selectAll($sql);

//$mensagem = '<pre>' . print_r($aDadosProduto, true).'</pre>';
//
//echo $mensagem; return;

$html_cabecalho_consulta = "
    <a href=\"index.php\" id=\"transparent\">Inclusão Produto</a>
    <script src='produto.js' type='text/javascript'></script>
    <div id='container-consulta'>    
        <div style='margin-left: 10px; width: 100%;background-color: black; color: white;'>
            <h1>Consulta de Produto</h1>
          </div>
        <table border='1' style='margin-left: 40px;'>
        <!--Cabecalho -->
        <!--Inicia a Linha -->
        <tr>
            <!--Colunas do cabecalho -->
            <th>Código</th>
            <th>Descrição</th>
            <th>Preço</th>
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
            <!--Coluna 1 -->
            <td align='center'>" . $produto["codigo"] . "</td>
             
            <!--Coluna 2 -->
            <td align='left'>" . $produto["descricao"] ."</td>
            
            <!--Coluna 3 -->
            <td align='right'>" . formataNum($produto["preco"]) ."</td>
            
            <!--Coluna 4 Acao de Alterar-->
            <td><button onclick='alterarProduto(" . $produto["codigo"] . ")'>Alterar</button></td>
            
            <!--Coluna 4 Acao de Excluir-->
            <td><button onclick='excluirProduto(" . $produto["codigo"] . ")'>Excluir</button></td>
        </tr>        
        <!--Fecha a Linha --> ";

//    // Adiciona as acoes de alteracao e exclusao
//    $html_dados_table .= "<td align='center'><button class=\"btn btn-warning\"
//            onclick='alterar(\"" . $cadastro. "\"," . $registro[$aListaDadosColunas["chave"]] .")'>
//            Alterar</button></td>";

//
//    $html_dados_table .= "<td align='center'><button class=\"btn btn-danger\"
//            onclick='excluir(\"" . $cadastro. "\"," . $registro[$aListaDadosColunas["chave"]] .")'>Excluir</button></td>";


}

$html_rodape_consulta = "</table>
</div>";

$html_consulta = $html_cabecalho_consulta . $html_dados_consulta . $html_rodape_consulta;

echo $html_consulta;

return;






$html_dados_consulta = "
        <!--Fecha a Linha -->
        
        <!--Inicia a Linha -->
        <tr>
            <!--Coluna 1 -->
            <td>coluna 1</td>
            
            <!--Coluna 2 -->
            <td>coluna 2</td>
            
            <!--Coluna 3 -->
            <td>coluna 3</td>
        </tr>        
        <!--Fecha a Linha --> ";

echo $html_consulta;

