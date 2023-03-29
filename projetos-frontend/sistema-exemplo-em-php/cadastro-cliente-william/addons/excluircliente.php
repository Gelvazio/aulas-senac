<?php

require_once("core/Query.php");
include_once("web/head.php");

$oQuery = new Query();

if(isset($_GET['method']) && ($_GET['method'] === 'delete')){ 
  
	if(isset($_GET['codigo']) && intval($_GET['codigo']) > 0){
    
    $codigo = $_GET['codigo'];
    
    $sql_delete = "DELETE FROM
                   public.tbcliente
                   WHERE 
                   codigo=$codigo;";
                   
    $execute = $oQuery->select($sql_delete);
    
    header('Location: '.'index.php');
  }
}
    
  