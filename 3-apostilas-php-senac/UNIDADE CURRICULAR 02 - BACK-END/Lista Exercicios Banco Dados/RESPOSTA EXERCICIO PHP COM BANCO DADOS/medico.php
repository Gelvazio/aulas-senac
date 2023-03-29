<?php
    if (isset($_POST['codigo'])){
        require_once 'conexao.php';
        
        $iCodigo = 1;
        $sSelect = 'select coalesce(max(medcodigo),0)+1 as codigo from cadastro.tbmedico';
        $oQuery = pg_query($oConexao, $sSelect);
        if ($oResultado = pg_fetch_assoc($oQuery)){
            if (!is_null($oResultado['codigo'])){
                $iCodigo = $oResultado['codigo'] + 1;
            }
        }
        
        $sInsert = 'insert into cadastro.tbmedico values ('.$iCodigo.',\''.$_POST['nome'].'\',\''.$_POST['especialidade'].'\')';
        pg_query($oConexao,$sInsert);
        
        echo 'Registro inserido com sucesso';
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="windows-1252">
        <title></title>
    </head>
    <body>
        <form action="medico.php" method="POST">
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" readonly="true"/>
            <br/>
            <label for="nome">Nome:</label>           
            <input type="text" id="nome" name="nome"/>
            <br/>
            <label for="nome">Especialidade:</label>           
            <input type="text" id="especialidade" name="especialidade"/>
            <br/>
            <input type="submit" value="Entrar"/>
        </form>
    </body>
</html>