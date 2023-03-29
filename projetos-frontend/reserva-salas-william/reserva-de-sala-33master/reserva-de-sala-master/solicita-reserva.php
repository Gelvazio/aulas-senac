<?php
$numsala = $_GET['sala'];
$data = $_GET['data'];
include("conexao.php");
//echo $numsala;
$res = array();
$res = mysql_query("SELECT * FROM `sala`, `tipos_de_sala` WHERE `id_tipo_sala` = `id` and `nr_sala` = '$numsala';");
$dadosSala = mysql_fetch_array($res);
include("header.php")
?>
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h2>Solicitação de Reserva</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <p><h3>Sala: <?php echo $dadosSala['nr_sala']; ?></h4> <h5>Tipo: <?php echo utf8_encode($dadosSala['desc']); ?></h5>
              </h5>Capacidade <?php echo $dadosSala['capacidade']; ?> pessoas</h5>
          </div>
        </div>
        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <h3>Recursos</h3>
              <?php
            $sql = mysql_query("SELECT `nr_sala`, `nome`, `categoria` FROM utiliza LEFT JOIN (sala, recurso) on (utiliza.numero_sala = sala.nr_sala and utiliza.codigo_recurso = recurso.codigo) WHERE `numero_sala` = '$numsala'");
               while($dados = mysql_fetch_array($sql)){
                  $nome = $dados[1];
                  $nomecorreto = utf8_encode($nome);
                  $categoria = $dados[2];
                  $nomecorreto2 = utf8_encode($categoria);
                  echo "  <option  value=\"$nome\">$nomecorreto - $nomecorreto2</option>";
                }
              ?>
          </div>
        </div>
        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-group">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Repetição <span class="caret"></span></button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Diariamente</a></li>
                        <li><a href="#">Mensalmente</a></li>
                        <li><a href="#">Semestralmente</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Único</a></li>
                      </ul>
                    </div><!-- /btn-group -->
                  </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
              </div><!-- /.row -->
              <div class="input-group">
                 <form id="reservar" method="post" <?php echo "action=\"reservasala.php?numsala=$numsala&data=$data\""; ?> >
                <span class="input-group-addon">Horário Início</span>
                <input type="text" class="form-control" placeholder="18:30" name="Inicio" id="horaInicio" /> <!-- problema aqui!! -->
              </div>
              <div class="input-group">
                <span class="input-group-addon">Horário Fim</span>
                <input type="text" class="form-control" placeholder="20:30" name="Fim" id="horaFim" />
              </div>
            
          </div>
        </div> 

        <div class="col-sm-6 blog-main">
          <div class="col-xs-12 col-sm-6 col-md-8">
              <button type="submit" class="btn btn-primary">Reservar</button>
              <button type="button" class="btn btn-danger">Cancelar</button>
          </div>
        </div>
       </form>
      </div>


    </div>
  </div>
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>