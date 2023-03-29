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
      <div class="container">
        <div class="container">
        <h2>Solicitação de Reserva #1234</h2>
      </div>
      <div class="row">
      <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <p><h5>Solicitante: Daniela Claro<h5>
              <h5>Período 12/12/2014</h5> 
              <h5>Horário 18:30 as 20:30</h5>
          </div>
        </div>
        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <p><h5>Setor Laboratório<h5>
              <h5>Sala 101</h5> 
              <h5>Laboratório</h5>
              <h5>Capacidade 40 Pessoas</h5>
          </div>
        </div>
        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <h5>Recursos</h5>
              <h5>Piloto</h5>
              <h5>Controle Ar Condicionado</h5>
              <h5>Projetor</h5>
              <br>
          </div>
        </div>
      </div>
      <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <button type="button" class="btn btn-primary">Autorizar</button>
              <button type="button" class="btn btn-danger">Não Autorizar</button>
          </div>
        </div>
    </div>
  </div>
    <script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>