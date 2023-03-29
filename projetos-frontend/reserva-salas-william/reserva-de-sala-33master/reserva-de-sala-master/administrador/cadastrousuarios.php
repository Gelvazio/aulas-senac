<?php
session_start();
if (empty($_SESSION['user'])){
  header('location: ../index.html');
}
include("header.php");
?>
<div class="container">
<div class="jumbotron">
  <h1 style="color:#FFFFFF">Cadastro de Usuários</h1>
  <p style="color:#FFFFFF">Preencha as informações no formulário abaixo</p>
</div>
<form id="cadastro" name="cadastro" method="post" action="cadastrausuarios.php"> <!--  onsubmit="baixarLicitacao(); " -->
  <table width="625" border="0">
    <!-- <tr>
      <td>Natureza:</td>
      <td><input name="natureza" type="radio" value="Juridica" checked="checked" />
        Jurídica
        <input name="natureza" type="radio" value="Fisica" />
        Física <span class="style1">*</span> </td>
    </tr>
  -->
    <tr>
      <td width="69" style="color:#000000">CPF:</td>
      <td width="546"><input name="cpf" type="text" id="cpf" size="20" maxlength="60" onkeypress="return numeros();" />
        <span class="style1">*</span></td>
    </tr>
    <tr>
      <td width="69" style="color:#000000">Primeiro nome:</td>
      <td width="546"><input name="pnome" type="text" id="pnome" size="20" maxlength="60" onkeypress="return letras();" />
        <span class="style1">*</span></td>
    </tr>
    <tr>
      <td style="color:#000000">Ultimo nome:</td>
      <td><input name="unome" type="text" id="unome" size="40" maxlength="60" onkeypress="return letras();" />
      <span class="style1">*</span></td>
    </tr> 
    <tr>
      <td style="color:#000000">E-mail:</td>
      <td><input name="email" type="text" id="email" maxlength="50" />
        <span class="style1">*</span></td>
    </tr>

    <tr>
      <td style="color:#000000">Senha:</td>
      <td><input name="senha" type="text" id="senha" maxlength="50" />
        <span class="style1">*</span></td>
    </tr>

    <tr>
      <td style="color:#000000">Tipo de usuário:</td>
      <td><select name="tipousuario" id="tipousuario">
        <option style="color:#000000" disabled>Escolha uma tipo</option> 
        <option value="Usuário comum" style="color:#000000">Usuário comum</option>
        <option value="Moderador" style="color:#000000">Moderador</option>
        <option value="Professor" style="color:#000000">Professor</option>

         </select>
        <span class="style1">*      </span></td>
    </tr>
    
    <tr>
      <td style="color:#000000">SIAP:</td>
      <td><input name="SIAP" type="text" id="SIAP" maxlength="50" />
        <span class="style1">*</span></td>
    </tr>

        <tr>
      <td style="color:#000000">Código de departamento:</td>
      <td><input name="codepto" type="text" id="codepto" maxlength="50" />
        <span class="style1">*</span></td>
    </tr>
    <tr>
      <td colspan="2"><p>
        <input name="baixar"  type="submit" id="baixarlicitacao" value="Confirmar" /> <!-- type="submit" --> 
        
          <input name="limpar" type="reset" id="limpar" value="Cancelar" />
          <br />
          <span class="style1">* Campos com * s&atilde;o obrigat&oacute;rios!          </span></p>
      <p>&nbsp; </p></td>
    </tr>
  </table>
</form>
</div>
<script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
</body>
</html>
