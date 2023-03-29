<?php
    if (isset($_POST['codigo'])){
        require_once 'conexao.php';
        
        $sInsert = 'insert into cadastro.tbpaciente values ('.$_POST['codigo'].',\''.$_POST['nome'].'\')';
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
        <form action="paciente.php" method="POST">
            <label for="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo"/>
            <br/>
            <label for="nome">Nome:</label>           
            <input type="text" id="nome" name="nome"/>
            <br/>
            <input type="submit" value="Entrar"/>
        </form>
    </body>
</html>