<?php
session_start();
if ($_SESSION['tipousuario'] != 2)
	echo "<script>alert('Usario sem permissao'); 
		window.location.replace('../logout.php');
		</script>";
if (empty($_SESSION['user'])){
	echo "<script>alert('Sessao encerrada usario incorreto'); 
		window.location.replace('../logout.php');
		</script>";
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>SIGES - Sistema de gerenciamento de Salas</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../signin.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" media="all" href="../jsDatePick_ltr.min.css" />
    <script type="text/javascript" src="../bibliotecaAjax.js"></script>
<script type="text/javascript" src="../funcao.js"></script>
<script type="text/javascript" src="../jquery.1.4.2.js"></script>
<script type="text/javascript" src="../jsDatePick.jquery.min.1.3.js"></script>

<script type="text/javascript">
  window.onload = function(){   
    
    g_globalObject = new JsDatePick({
      useMode:1,
      isStripped:true,
      target:"div3_example"
      /*selectedDate:{        This is an example of what the full configuration offers.
        day:5,            For full documentation about these settings please see the full version of the code.
        month:9,
        year:2006
      },
      yearsRange:[1978,2020],
      limitToToday:false,
      cellColorScheme:"beige",
      dateFormat:"%m-%d-%Y",
      imgPath:"img/",
      weekStartDay:1*/
    });
    
    g_globalObject.setOnSelectedDelegate(function(){
      var obj = g_globalObject.getSelectedDay();
      var data =obj.day + "/" + obj.month + "/" + obj.year;
      
      obtemData(data);
      
      
    });
    
    
    
    g_globalObject2 = new JsDatePick({
      useMode:1,
      isStripped:false,
      target:"div4_example",
      cellColorScheme:"beige"
      /*selectedDate:{        This is an example of what the full configuration offers.
        day:5,            For full documentation about these settings please see the full version of the code.
        month:9,
        year:2006
      },
      yearsRange:[1978,2020],
      limitToToday:false,
      dateFormat:"%m-%d-%Y",
      imgPath:"img/",
      weekStartDay:1*/
    });
    
    g_globalObject2.setOnSelectedDelegate(function(){
      var obj = g_globalObject2.getSelectedDay();
      alert("a date was just selected and the date is : " + obj.day + "/" + obj.month + "/" + obj.year);
      document.getElementById("div3_example_result").innerHTML = obj.day + "/" + obj.month + "/" + obj.year;
    });   
    
  };
</script>
  </head>

  <body>
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Reserva de Sala</a>
          <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.php">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Setor <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <?php
                include("../conexao.php");
                include("../erro.php");
                $sql = mysql_query("SELECT * FROM setor");
                while ($result = mysql_fetch_array($sql)){
                  printf("<li><a href='%s.php'>", $result['cod_setor']);
                  $nome = $result['nome'];
                  $nomeok = utf8_encode($nome);
                  printf("%s", $nomeok);
                  printf("</a></li>");
                  //printf ("<li><a href=\"%s.php\">%s</a></li>", $result['nome']);
                }
              ?>
              <li><a href="#">Reserva</a>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
        </div>
        <div class="navbar-collapse collapse">
          <div class="navbar-collapse collapse navbar-right">
            <button type="submit" class="btn btn-warning"><a href="../logout.php">Logout</a></button>
        </div><!--/.navbar-collapse -->
        </div><!--/.navbar-collapse -->
      </div>
    </div>
 <div class="container">
    <div class="jumbotron">
      <div class="container">
      	<h2>Sr.(a) <?php echo $_SESSION['user'];?><h2>
        <h3>Bem-vindo</h3>
        <p>SIGES - Sistema de Gerenciamento de Salas</p>
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
        <p>
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
    <script src="../js/jquery-1.11.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>