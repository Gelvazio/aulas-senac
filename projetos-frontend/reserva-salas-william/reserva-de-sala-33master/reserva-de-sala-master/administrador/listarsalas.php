<?php

include("../conexao.php");
include("header.php");

header('Content-type: text/html; charset=UTF-8'); 

$busca = $_GET['buscarsala'];
$tipo = $_GET['criterio'];

echo "<div class=\"container\">
    <div class=\"jumbotron\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-sm-6 blog-main\">
            <div class=\"col-xs-12 col-sm-6 col-md-8\">";
            echo "<h2> Resultado</h2>" ;    
	if(strcmp($tipo, "Numero") == 0)
	{
		$sql = mysql_query("SELECT * FROM `sala` WHERE `nr_sala` = $busca");
	    $result = mysql_fetch_array($sql);
		if($result)
		{
            echo "Número da sala: $result[0]";
			echo "</br>";
			echo "Capacidade: $result[1] alunos";
			echo "</br>";
			echo "Tipo de Sala: $result[2]";
			echo "</br>";
		}
        else
        {
            mysql_error();
        }
	}

	else if(strcmp($tipo, "Setor") == 0)
	{

		$sql = mysql_query("SELECT * FROM gerencia LEFT JOIN (sala, setor) on (gerencia.id_sala = sala.nr_sala and gerencia.cod_setorg = setor.cod_setor)" );
		while ($row = mysql_fetch_array($sql))
	{
        if(strcmp($row['nome'], utf8_decode($busca)) == 0) 
    	{	
    		//echo $row[6];
            $nome = $row['nome'];
            $nomeok = utf8_encode($nome);
            echo "</br>";
            echo "Nome do Setor: ". $nomeok;
            echo "</br>";
    		echo "Número da sala: ". $row['nr_sala'];
            echo "</br>";
    		echo "Capacidade de ". $row['capacidade'] . " alunos";
            echo "</br>";
    	 }

         else if(strcmp("", $busca) == 0)
         {
            $nome = $row['nome'];
            $nomeok = utf8_encode($nome);
            echo "</br>";
            echo "Nome do Setor: ". $nomeok;
            echo "</br>";
            echo "Número da sala: ". $row['nr_sala'];
            echo "</br>";
            echo "Capacidade de ". $row['capacidade'] . " alunos";
            echo "</br>";
         }
	   }
	}
	else if(strcmp($tipo, "Tipo") == 0)
	{
		
        $sql = mysql_query("SELECT * FROM sala, tipos_de_sala WHERE sala.id_tipo_sala = tipos_de_sala.id");
		//$result  = mysql_fetch_array($sql);
        //echo mysql_error();
     while ($row = mysql_fetch_array($sql))
    {
        if(strcmp($row['desc'], utf8_decode($busca)) == 0)
    	{	
            
            echo "</br>";
            echo "Tipo de sala: ". utf8_encode($row['desc']);
    		echo "</br>";
            echo "Numero da sala: ". $row['nr_sala'];
    		echo "</br>";
            echo "Capacidade: ". $row['capacidade'] ." alunos";
            echo "</br>";            
    	 }
         else 
         {
            if (strcmp("", $busca) == 0)
            {
                echo "</br>";
                echo "Tipo de sala: ". utf8_encode($row['desc']);
                echo "</br>";
                echo "Numero da sala: ". $row['nr_sala'];
                echo "</br>";
                echo "Capacidade: ". $row['capacidade'] ." alunos";
                echo "</br>";
            }
         }
	   }
       	
	}
echo "</div>";
echo "<script src=\"../js/jquery-1.11.1.min.js\"></script>
    <script src=\"../js/bootstrap.min.js\"></script>";
?>

