<?php
    if((isset($_POST['exclui'])) && ($_POST['exclui'] == '1')){
        require_once './conexao.php';
        
        $sDelete  = 'delete from cadastro.tbagenda ';
        $sDelete .= 'where medcodigo = \''.$_POST['medico'].'\'';
        $sDelete .= '  and paccodigo = \''.$_POST['paciente'].'\'';
        $sDelete .= '  and agedata   = \''.$_POST['data'].'\'';
        $sDelete .= '  and agehora   = \''.$_POST['hora'].'\' ';
        var_dump($sDelete);
        pg_query($oConexao, $sDelete);
        echo 'Registro removido com sucesso!';
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="windows-1252">
        <title>Agenda</title>
        <script type="text/javascript">
            function excluiAgenda(codigoMedico, codigoPaciente, data, hora){
                document.getElementById('medico').value = codigoMedico;
                document.getElementById('paciente').value = codigoPaciente;
                document.getElementById('data').value = data;
                document.getElementById('hora').value = hora;
                document.getElementById('exclui').value = '1';
                
                document.getElementById('formulario_consulta').submit();
            }
        </script>
    </head>
    <body>
        <form action="consulta.php" method="POST" id='formulario_consulta'>
            <input type="hidden" id='medico' name='medico'/>
            <input type="hidden" id='paciente' name='paciente'/>
            <input type="hidden" id='data' name='data'/>
            <input type="hidden" id='hora' name='hora'/>
            <input type="hidden" id='exclui' name='exclui' value='0'/>
            
            <label for="nome">Data:</label>           
            <input type="date" id="datafiltro" name="datafiltro"/>
            <br/>
            <label for="nomemedico">Nome do Médico:</label>           
            <input type="text" id="nomemedico" name="nomemedico"/>
            <br/>
            <input type="submit" value="Atualizar"/>
            
            <br>
            <br>
            <table border='1'>
                <tr>
                    <th>Médico</th>
                    <th>Paciente</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Ação</th>
                </tr>
            <?php
            require_once './conexao.php';
            $sSelect = 'select *
                          from cadastro.tbagenda
                          join cadastro.tbmedico
                            on tbmedico.medcodigo = tbagenda.medcodigo
                          join cadastro.tbpaciente
                            on tbpaciente.paccodigo = tbagenda.paccodigo
                          where 1 = 1';
            if ((isset($_POST['datafiltro'])) && (!empty($_POST['datafiltro']))){
                $sSelect .= ' and tbagenda.agedata = \''.$_POST['datafiltro'].'\' ';
                
            }
            if (isset($_POST['nomemedico'])){
                $sSelect .= ' and tbmedico.mednome ilike \'%'.$_POST['nomemedico'].'%\' ';
            }
            
            $oQuery = pg_query($oConexao, $sSelect);
            while ($oResultado = pg_fetch_assoc($oQuery)){
                echo '<tr>';
                echo '<td>'.$oResultado['mednome'].'</td>';
                echo '<td>'.$oResultado['pacnome'].'</td>';
                echo '<td>'.date('d/m/Y',strtotime($oResultado['agedata'])).'</td>';
                echo '<td>'.date('H:i:s',strtotime($oResultado['agehora'])).'</td>';
                echo '<td><input type="button" value="Excluir" '
                . 'onclick="excluiAgenda('.$oResultado['medcodigo'].', '.$oResultado['paccodigo'].','
                        . ' \''.$oResultado['agedata'].'\', \''.$oResultado['agehora'].'\')"/></td>';
                echo '</tr>';
            }
            ?>
            </table>
        </form>
    </body>
</html>