<?php
/**
CREATE TABLE public.tbvenda (
    codigo int4 NOT NULL,
    clicodigo int4 NOT NULL,
    formapagamento int4 NOT NULL,
    total numeric (15,2) not null,
    CONSTRAINT tbvenda_pkey PRIMARY KEY (codigo)
);
 *
 */

function abreCadastroInclusao() {
    // Busca os dados de uma nova venda no banco de dados
    require_once ("core/Query.php");
    /* @var $oQuery Query */
    $oQuery = new Query();

    // buscar o ultimo codigo mais 1
    $sql_codigo = "select codigo + 1 as codigo from tbvenda order by codigo desc limit 1";

    $aDados = $oQuery->select($sql_codigo);
    $codigo = 1;
    if($aDados){
        $codigo = $aDados["codigo"];
    }

    $aDadosClientes =  $oQuery->selectAll("select * from tbcliente order by codigo");

    $listaOptionCliente = "<option value='-1'> Selecione um cliente</option>";

    foreach ($aDadosClientes as $cliente){
        $listaOptionCliente .= "<option value='" . $cliente["codigo"] . "'>" . $cliente["codigo"] . " - " . $cliente["nome"] . "</option>";
    }

    $aDadosProdutos =  $oQuery->selectAll("select * from tbproduto order by codigo");

    $listaOptionProduto = "<option value='-1'> Selecione um produto</option>";

    foreach ($aDadosProdutos as $produto){
        $listaOptionProduto .=
            "<option value='" . $produto["codigo"] . "_" . $produto["preco"] . "_" . $produto["descricao"] . "'>" . $produto["codigo"] . " - " . $produto["descricao"] . "</option>";
    }

    $html_cadastro = '
        <div style="margin-left: 100px;">
         <script src=\'venda.js\' type=\'text/javascript\'></script>
        <br>
        <br>
        <br>
        <h1>Inclusao de Nova Venda</h1>
        <form action="venda.php" method="post">
            <input id="acao" name="acao" type="hidden" value="EXECUTA_INCLUSAO">
            <input type="hidden" id="codigo" name="codigo" size="5" value="' . $codigo .'">
        
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" disabled size="5" value="' . $codigo .'">
            
            <br><br>
            <label for="clicodigo">Cliente:</label>           
            <select id="clicodigo" name="clicodigo">
            ' . $listaOptionCliente .'
            </select>
            
            <br><br>
            <label for="formapagto">Forma Pagamento:</label>
            <select id="formapagto" name="formapagto">
                <option value="1">DINHEIRO</option>
                <option value="2">CARTAO CREDITO </option>
                <option value="3">CARTAO DEBITO </option>
                <option value="4">PIX</option>
            </select>
            <br>
            <br>
            
            <label for="produto">Produto:</label>
            <select id="produto" onchange="onchangeProduto()">
                ' . $listaOptionProduto . '
            </select>
            <br><br>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Preço Unitário</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td><input type="text" id="item" disabled></td>
                    <td><input type="text" id="descricao" disabled></td>
                    <td><input type="text" id="preco" disabled></td>
                    <td>
                        <select id="quantidade" name="quantidade" onchange="mudaQuantidade()">
                            <option value="0">Selecione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </td>
                    <td><input type="text" id="total" disabled></td>
                    <td>
                        <button onclick="adicionaItem()">Adicionar Item</button>                    
                    </td>
                </tr>
            </table>
            <br>
            <table id="dados_item" border="1">
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Preço Unitário</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>Ação</th>
                </tr>
                <tr>

                </tr>
            </table>
            <br>            
            <br>   
            <input type="submit" value="Gravar Venda">
        </form>
    </div>';

    echo $html_cadastro;
}



if(isset($_POST["acao"])){
    $acao = $_POST["acao"];
    if($acao === "EXECUTA_INCLUSAO"){
        //executaInclusao();
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