<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>jsDatePick Javascript example</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" media="all" href="jsDatePick_ltr.min.css" />
<script type="text/javascript" src="bibliotecaAjax.js"></script>
<script type="text/javascript" src="funcao.js"></script>
<script type="text/javascript" src="jquery.1.4.2.js"></script>
<script type="text/javascript" src="jsDatePick.jquery.min.1.3.js"></script>

<script type="text/javascript">
	window.onload = function(){		
		
		g_globalObject = new JsDatePick({
			useMode:1,
			isStripped:true,
			target:"div3_example"
			/*selectedDate:{				This is an example of what the full configuration offers.
				day:5,						For full documentation about these settings please see the full version of the code.
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
			/*selectedDate:{				This is an example of what the full configuration offers.
				day:5,						For full documentation about these settings please see the full version of the code.
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
            <li class="active"><a href="index.html">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Setor <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <?php
                include("conexao.php");
                include("erro.php");
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
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
        </div>
        <div class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="form" method="post" action="valida.php">
            <div class="form-group">
              <input type="text" placeholder="CPF" class="form-control" required autofocus name="cpf">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control" required name="password">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </div>
 <div class="container">