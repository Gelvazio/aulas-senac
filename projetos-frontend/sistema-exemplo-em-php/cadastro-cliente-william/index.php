<?php

require("core/Query.php");
$oQuery = new Query();

include_once("web/head.php");

require_once("addons/excluircliente.php");
require_once("addons/formatar.php");

if(isset($_POST['method']) && $_POST['method'] === 'atualizar'){
  $codigo = $_POST['codigo'];
    if($codigo > 0){


      $nome = $_POST['nome'];
      $telefone = formataTelefone($_POST['telefone']);

//        $mensagem = '<pre>' . print_r($_POST, true).'</pre>';
//
//        echo $mensagem;
//        return;

      $sql_update = "UPDATE 
                     public.tbcliente
                     SET
                     nome='$nome', telefone='$telefone'
                     WHERE codigo=$codigo;
                     ";

      $oQuery->select($sql_update);
    }
}

$sql_codigo = "select * from tbcliente order by 1";
     
$aDadosClientes = $oQuery->selectAll($sql_codigo);
$html_link = '<link rel="stylesheet" href="css/style.css">';

$html_inserir = '<a class="a-insert" href="addons/inserircliente.php"><- Inserir<a/>';

$html_cabecalho_consulta = '  
                            
                        <div>
                          <table>
                              <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th size="350">Telefone</th>
                                <th>Ações</th>
                             </tr>';  

$html_dados_consulta = '';

foreach($aDadosClientes as $cliente){  
    
  $html_dados_consulta .= '
                      <tr>
                        <td>'.$cliente['codigo'].'</td>
                        <td>'.$cliente['nome'].'</td>
                        <td size="350">'.$cliente['telefone'].'</td>
                          <td>
                            <button id="delete"><a href="?method=delete&codigo='.$cliente['codigo'].'">Deletar</a></button>
                            
                            <button id="modify"><a class="a-btn" href="addons/atualizarcliente.php?method=alterar&codigo='.$cliente['codigo'].'&nome='.$cliente['nome'].'&telefone='.$cliente['telefone'].'">Alterar</a></button>
                          </td>
                      </tr>
  
  ';
  }
  $html_rodape_consulta = '</table></div></body>
</html>';

$html = $html_link  . $html_inserir . $html_cabecalho_consulta . $html_dados_consulta . $html_rodape_consulta;

echo $html;