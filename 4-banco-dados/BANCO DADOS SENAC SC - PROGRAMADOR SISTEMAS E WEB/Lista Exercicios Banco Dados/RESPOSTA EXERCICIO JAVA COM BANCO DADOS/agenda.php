<?php
    if ((isset($_POST['data'])) && ((isset($_POST['hora'])))){
        require_once 'conexao.php';
        
        $iMedico   = $_POST['medico'];
        $iPaciente = $_POST['paciente'];
        $dData     = $_POST['data'];
        $hHora     = $_POST['hora'];
        
        $sInsert = 'insert into cadastro.tbagenda
                    values ('.$iMedico.',\''.$iPaciente.'\',\''.$dData.'\',\''.$hHora.'\')';
        pg_query($oConexao,$sInsert);
        
        echo 'Registro inserido com sucesso<br>';
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="windows-1252">
        <title></title>
    </head>
    <body>
        <form action="agenda.php" method="POST">
            <label for="medico">Médico:</label>
            <select id="medico" name="medico">
                <?php
                 require_once 'conexao.php';
                 
                 $sSelect = 'select * from cadastro.tbmedico';
                 $oQuery = pg_query($oConexao, $sSelect);
                 while ($oResultado = pg_fetch_assoc($oQuery)){
                     echo '<option value="'.$oResultado['medcodigo'].'">'.$oResultado['mednome'].'</option>';
                 }
                ?>
            </select>
            <br/>
            <label for="nome">Paciente:</label>           
            <select id="paciente" name="paciente">
                <?php
                 $sSelect = 'select * from cadastro.tbpaciente';
                 $oQuery = pg_query($oConexao, $sSelect);
                 while ($oResultado = pg_fetch_assoc($oQuery)){
                     echo '<option value="'.$oResultado['paccodigo'].'">'.$oResultado['pacnome'].'</option>';
                 }
                ?>
            </select>
            <br/>
            <label for="nome">Data:</label>           
            <input type="date" id="data" name="data"/>
            <br/>
            <label for="nome">Hora:</label>           
            <input type="time" id="hora" name="hora"/>
            <br/>
            <input type="submit" value="Entrar"/>
        </form>
    </body>
</html>