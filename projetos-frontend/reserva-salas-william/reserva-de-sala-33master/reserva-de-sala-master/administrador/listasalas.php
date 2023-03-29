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
include("header.php");
?>

<div class="container">
<div class="jumbotron">
  <h1 style="color:#FFFFFF">Lista de Salas</h1>
  <p style="color:#FFFFFF">Preencha as informações no formulário abaixo</p>
  <!--<p style="color:#FFFFFF"></p> -->
</div>
<form action="listarsalas.php" method="get">
<tr>
      <td width="69">Dado da sala:</td>
      <td width="546"><input name="buscarsala" type="text" id="buscarsala" size="20" maxlength="60" onclick="" />
      <p><p><td>Critério: <select name="criterio" id="criterio">
        <option disabled>Escolha uma tipo</option> 
        <option value="Numero">Número de sala</option>
        <option value="Setor">Setor</option>
        <option value="Tipo">Tipo de Sala</option>
         </select></p></p>
  </td>
      
       <input name="confirmar"  type="submit" id="confirm" value="Confirmar" />

</tr>
</form>
</div>
<script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
</body>
</html>