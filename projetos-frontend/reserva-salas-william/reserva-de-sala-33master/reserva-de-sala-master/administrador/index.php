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
<div class="container">
  <div class="jumbotron">
    <div class="container">
    	<h2>Sr.(a) <?php echo $_SESSION['user'];?><h2>
      <h3>Bem-vindo</h3>
      <p>SIGES - Sistema de Gerenciamento de Salas.</p>
    </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <p class="text-center">Segunda-feira 27 de Outubro</p>
  </div>
  <div class="panel-body">
    <ul class="pager">
      <li class="previous"><a href="#">&larr; Ir para o dia anterior</a></li>
      <li><a href="#">Ir para o dia de hoje</a></li>
      <li class="next"><a href="#">Ir para o próximo dia &rarr;</a></li>
    </ul>
  </div>
  <table class="table">
    <thead>
        <tr>
          <th>Hora</th>
          <th><a href="info-sala.html">Sala 101</a></th>
          <th><a href="info-sala.html">Sala 201</a></th>
          <th><a href="info-sala.html">Sala 301</a></th>
        </tr>
      </thead>
    <tbody>
          <tr>
            <td>7:00</td>
            <td><a href="solicita-reserva.html">reserve</td></a>
            <td><a href="solicita-reserva.html">reserve</td></a>
            <td><a href="solicita-reserva.html">reserve</td></a>
          </tr>
          <tr>
            <td>8:00</td>
            <td><a href="reserva.html">Jacob</a></td>
            <td><a href="reserva.html">Thornton</a></td>
            <td><a href="reserva.html">@fat</a></td>
          </tr>
          <tr>
            <td>9:00</td>
            <td><a href="reserva.html">Larry</a></td>
            <td><a href="reserva.html">the Bird</a></td>
            <td><a href="reserva.html">@twitter</a></td>
          </tr>
        </tbody>
    </table>
  </div>
</div>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>