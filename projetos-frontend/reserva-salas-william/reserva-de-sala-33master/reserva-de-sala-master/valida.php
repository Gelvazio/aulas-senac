<?php
include("conexao.php");
include("erro.php");

$cpf = $_POST['cpf'];
$password = $_POST['password'];

$sql = mysql_query("SELECT PNOME, UNOME, SENHA FROM usuario WHERE CPF = $cpf");
$result = mysql_fetch_array($sql);
echo $result[2];	
$nome = $result[0];
	if ($password == $result[2]){
		$sqladm = mysql_query("SELECT cpf_adm FROM moderador WHERE cpf_adm = $cpf");
		$result = mysql_fetch_array($sqladm);
		if ($cpf == $result[0]){
			session_start();
			$_SESSION['user'] = $nome;
			$_SESSION['tipousuario'] = 0;
			$_SESSION['cpf'] = $cpf; 
			header("location: administrador/index.php");
			include("close_conexao.php");
			exit;
		}
		$sqlmodera = mysql_query("SELECT cpf_mod FROM moderador WHERE CPF_mod = $cpf");
		$result = mysql_fetch_array($sqlmodera);
		if ($cpf == $result[0]){
			session_start();
			$_SESSION['user'] = $nome;
			$_SESSION['tipousuario'] = 1;
			$_SESSION['cpf'] = $cpf;
			header("location: administrador/index.php");
			include("close_conexao.php");
			exit;
		}
		$sqlprofessor = mysql_query("SELECT cpf_prof FROM professor WHERE CPf_prof = $cpf");
		$result = mysql_fetch_array($sqlprofessor);
		if ($cpf == $result[0]){
			session_start();
			$_SESSION['user'] = $nome;
			$_SESSION['tipousuario'] = 2;
			$_SESSION['cpf'] = $cpf;
			header("location: professor/index.php");
			include("close_conexao.php");
			exit;
		}
		session_start();
		$_SESSION['user'] = $nome;
		$_SESSION['tipousuario'] = 3;
		$_SESSION['cpf'] = $cpf;
		header("location: index.php");
		include("location: usuario/header.php");
		exit;
	}else {
		echo "<script>alert('Usuario e Senha Invalida(o)');
		window.location.replace('login.html');
		</script>";
	}
include("close_conexao.php");
?>