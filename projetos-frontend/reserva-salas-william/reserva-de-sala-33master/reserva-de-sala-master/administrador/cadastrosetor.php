<?php
session_start();
if ($_SESSION['tipousuario'] != 0)
	echo "<script>alert('Usario sem permissao de ADM'); 
		window.location.replace('../logout.php');
		</script>";
if (empty($_SESSION['user'])){
	echo "<script>alert('Sessao encerrada usario incorreto'); 
		window.location.replace('../logout.php');
		</script>";
}
include('header.php');
?>
<!-- BEGIN CONTEUDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO        -->
<div class="container">
  <div class="jumbotron">
    <h1 style="color:#FFFFFF">Cadastro de Setor</h1>
    <p style="color:#FFFFFF">Preencha as informações no formulário abaixo</p>
  </div>
<div class="container">
    <form method="post" action="" id="ajax_form">
      <table width="625">
        <tr>
          <td width="69">
            Nome Setor:
          </td>
          <td width="546"><input id="nsala" type="text" size="20" maxlength="60" onkeypress="return numeros();" />
            <span class="style1">*</span>
          </td>
        </tr>
        <tr>
          <td width="69">Horário de Abertura:</td>
          <td width="546">
            <input id="csala" type="text" size="20" maxlength="60" />
            <span class="style1">*</span>
          </td>
        </tr>
        <tr>
          <td width="69">Horário de Ecenrramento:</td>
          <td width="546">
            <input id="csala" type="text" size="20" maxlength="60" />
            <span class="style1">*</span>
          </td>
        </tr>
        <tr>
        </table>
        <input name="baixar" type="submit" id="baixarlicitacao" value="Confirmar">
        <input name="limpar" type="reset" id="limpar" value="Cancelar">
        <span class="style1">* Campos com * s&atilde;o obrigat&oacute;rios! </span>
    </form>
  </div>
</div>
<!-- END   CONTEUDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO        -->
    <script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>