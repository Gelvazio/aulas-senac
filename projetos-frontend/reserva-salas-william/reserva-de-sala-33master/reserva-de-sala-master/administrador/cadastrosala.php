<?php
session_start();
if (empty($_SESSION['user'])){
header('location: ../index.html');
}
include('header.php');
?>
<div class="container">
  <div class="jumbotron">
    <h1 style="color:#FFFFFF">Cadastro de Usuarios</h1>
    <p style="color:#FFFFFF">Preencha as informações no formulário abaixo</p>
  </div>
  <div class="container">
    <form method="post" action="" id="ajax_form">
      <table width="625">
        <tr>
          <td width="69">
            Número da sala:
          </td>
          <td width="546"><input id="nsala" type="text" size="20" maxlength="60" onkeypress="return numeros();" />
            <span class="style1">*</span>
          </td>
        </tr>
        <tr>
          <td width="69">Capacidade:</td>
          <td width="546">
            <input id="csala" type="text" size="20" maxlength="60" />
            <span class="style1">*</span>
          </td>
        </tr>
        <tr>
          <td>Tipo de Sala:</td>
          <td>
            <select id="tiposala">
              <option disabled>Escolha uma tipo</option>
              <option value="1">Laboratório de Aulas</option>
              <option value="2">Sala de Aula</option>
              <option value="3">Auditório</option>
            </select>
            <span class="style1">* </span>
          </td>
        </tr>
        <tr>
          <td>Setor</td>
          <td>
            <select id="setor">
              <option disabled>Escolha um setor</option>
              <?php
                include("../conexao.php");
                include("../erro.php");
                $sql = mysql_query("SELECT * FROM setor");
                while ($result = mysql_fetch_array($sql)){
                  $nome = $result['nome'];
                  $nomeok = utf8_encode($nome);
                  printf ("<option value=\"$result[cod_setor]\">%s", $nomeok, "</option>");
                }
                include("../close_conexao.php");
              ?>
            </select>
            <span class="style1">* </span>
          </td>
        </tr>
      </table>
      <section class="container">
        <div>
          <select id="leftValues" size="5" multiple></select>
        </div>
        <div>
          <input type="button" id="btnLeft" value="&lt;&lt;" />
          <input type="button" id="btnRight" value="&gt;&gt;" />
        </div>
        <div>
          <select id="rightValues" size="5" multiple>
            <?php
              include("../conexao.php");
              include("../erro.php");
              $sql = mysql_query("SELECT * FROM recurso");
              while ($result = mysql_fetch_array($sql)){
                printf ("<option value=\"$result[codigo]\">%s", $result['nome'], "</option>");
              }
              include("../close_conexao.php");
            ?>
          </select>
        </div>
      </section>
      <p>
        <input name="baixar" type="submit" id="baixarlicitacao" value="Confirmar">
        <input name="limpar" type="reset" id="limpar" value="Cancelar">
        <span class="style1">* Campos com * s&atilde;o obrigat&oacute;rios! </span>
      </p>
    </form>
  </div>
</div>
<script>
  $( "#btnLeft" ).click(function(){
  var selectedItem = $("#rightValues option:selected");
  $("#leftValues").append(selectedItem);
  });
  $( "#btnRight" ).click(function () {
  var selectedItem = $("#leftValues option:selected");
  $("#rightValues").append(selectedItem);
  });
  $( "#rightValues" ).change(function () {
  var selectedItem = $("#rightValues option:selected");
  $("#txtRight").val(selectedItem.text());
  });
  jQuery(document).ready(function() {
    jQuery("#baixarlicitacao").click(function(e) {
      var item = $("#leftValues").val();
      var nsala = $("#nsala").val();
      var csala = $("#csala").val();
      var tiposala = $("#tiposala").val();
      var setor = $("#setor").val();
      jQuery.ajax({
        type: "POST",
        dataType: "json",
        url: "cadastrasala.php",
        data: {recurso: item, nsala: nsala, csala: csala, tiposala: tiposala, setor: setor},
        success: function(item){
          alert("Success!");
        },
        erro: function(item) {
          alert("Erro n foi possivel Inserir");
        },
        statusCode: {
          200: function(){
            alert("Sucesso ao Inserir!");
            window.location.reload(true);
          }
        }
      });
      return false;
    });
  });
</script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/docs.min.js"></script>
</body>
</html>