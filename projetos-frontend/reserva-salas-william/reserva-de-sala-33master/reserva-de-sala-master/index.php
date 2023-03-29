<?php

include("conexao.php");
include("header.php");
?>
<html>
<head>
    <title>Web application for booking meeting rooms</title>
</head>
<body>
 <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>SIGES</h1>
        <p>Sistema de Gerenciamento de Salas da UFBA</p>
        <p>
        <form action="javascript:void%200">
          <select name="setor" id="set" size="1">
            <?php
              $res = mysql_query("SELECT cod_setor, nome FROM setor WHERE 1");
              //$total = mysqli_num_rows($res);

              //for($i=0;$i<$total;$i++){
                
                while($dados = mysql_fetch_array($res))
                {
                  $cod = $dados[0];
                  $nome = $dados[1];
                  $nomecorreto = utf8_encode($nome);
                  echo "  <option  value=\"$cod\">$nomecorreto</option>";
                }
              //}
            ?>
          </select>
        </form></p>
        
      </div>
    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    <center>
      <div id="div3_example" style="margin:10px 0 30px 0; width:205px; height:230px;"></div>     
    </center>

    <!-- Table -->
    <div id="date" style="height:20px; line-height:20px; margin:10px 0 0 0;"></div>
   
  </div>
</div>
 <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>        
</body>
</html>