<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class ControllerApiSistema extends ControllerApiBase {

    public function callPing(Request $request, Response $response, array $args) {
        $data = array("Data Sistema" => date("Y-m-d H:i:s"));
        
        return $response->withJson($data, 200);
    }

    public function getUsuario(Request $request, Response $response, array $args) {
        $sSql = "SELECT * FROM tbusuario ORDER BY 1";

        $aDados = $this->getQuery()->selectAll($sSql);
        
        return $response->withJson($aDados, 200);
    }

    public function getPessoa(Request $request, Response $response, array $args) {
        $sSql = "SELECT * FROM tbpessoa ORDER BY 1";

        $aDados = $this->getQuery()->selectAll($sSql);
        
        return $response->withJson($aDados, 200);
    }

    public function getProduto(Request $request, Response $response, array $args) {
        $sSql = "SELECT * FROM tbproduto ORDER BY 1";

        $aDados = $this->getQuery()->selectAll($sSql);
        
        return $response->withJson($aDados, 200);
    }
    
    public function getConsultaUsuario(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
        $campofiltro    = isset($body["campofiltro"]) ? $body["campofiltro"] : false;
        $operadorfiltro = isset($body["operadorfiltro"]) ? $body["operadorfiltro"] : false;
        $valorfiltro    = isset($body["valorfiltro"]) ? $body["valorfiltro"] : false;
    
        // Se tiver todos os parametros de filtro, cria o sql para executar a consulta filtrada
        if($campofiltro && $operadorfiltro && $valorfiltro){
            switch ($operadorfiltro){
                case "contem";
                    $operadorfiltro = " ilike ";
                    $valorfiltro = "'%$valorfiltro%'";
                break;
                case "naocontem";
                    $operadorfiltro = " not ilike ";
                    $valorfiltro = "'%$valorfiltro%'";
                    break;
                case "menor";
                    $operadorfiltro = " < ";
                    break;
                case "maior";
                    $operadorfiltro = " > ";
                    break;
                case "menorigual";
                    $operadorfiltro = " <= ";
                    break;
                case "maiorigual";
                    $operadorfiltro = " >= ";
                    break;
                case "igual";
                    $operadorfiltro = " = ";
                    break;
                case "diferente";
                    $operadorfiltro = " <> ";
                    break;
            }
            
            $sSql = "SELECT * FROM tbusuario WHERE $campofiltro $operadorfiltro $valorfiltro ORDER BY 1";
            
            if($operadorfiltro == "todos"){
                $sSql = "SELECT * FROM tbusuario ORDER BY 1";
            }
        } else {
            // Senao cria o sql para executar listando todos os dados
            $sSql = "SELECT * FROM tbusuario ORDER BY 1";
        }
        
        $aDados = $this->getQuery()->selectAll($sSql);
        
        return $response->withJson($aDados, 200);
    }
 
    public function getConsultaUsuarioFiltro(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
        
        $campofiltro    = isset($body["campofiltro"]) ? $body["campofiltro"] : false;
        $operadorfiltro = isset($body["operadorfiltro"]) ? $body["operadorfiltro"] : false;
        $valorfiltro    = isset($body["valorfiltro"]) ? $body["valorfiltro"] : false;
        
        // Se nao tiver filtro, lista todos
        $sSql = "SELECT * FROM tbusuario ORDER BY 1";

        // Valida se veio os filtros e valores
        if($campofiltro && $operadorfiltro && $valorfiltro){
            switch ($operadorfiltro){
                case "igual";
                    $operadorfiltro = " = ";
                break;
                // Adicionando demais operadores
                case "contem";
                    $operadorfiltro = " ilike ";
                    $valorfiltro = "'%$valorfiltro%'";
                break;
                case "naocontem";
                    $operadorfiltro = " not ilike ";
                    $valorfiltro = "'%$valorfiltro%'";
                    break;
                case "menor";
                    $operadorfiltro = " < ";
                    break;
                case "maior";
                    $operadorfiltro = " > ";
                    break;
                case "menorigual";
                    $operadorfiltro = " <= ";
                    break;
                case "maiorigual";
                    $operadorfiltro = " >= ";
                    break;
                case "diferente";
                    $operadorfiltro = " <> ";
                    break;
            }

            // Somente adiciona filtros se o operador for diferente de todos
            if($operadorfiltro != "todos"){
                $sSql = "SELECT * FROM tbusuario WHERE $campofiltro $operadorfiltro $valorfiltro ORDER BY 1";
            }
        }

        $aDados = $this->getQuery()->selectAll($sSql);

        return $response->withJson($aDados, 200);
    }

    public function excluirUsuario(Request $request, Response $response, array $args){
        $body = $request->getParsedBody();
        
        $usucodigo = isset($body["usucodigo"]) ? $body["usucodigo"] : false;
        
        if($usucodigo && intval($usucodigo) > 1){
            $executaQuery = $this->getQuery()->executaQuery("delete from tbusuario where usucodigo = $usucodigo");
            
            if($executaQuery){
                return $response->withJson(array("status" => true, "mensagem" => "Registro excluido com sucesso!"), 200);
            }
            
            return $response->withJson(array("status" => false, "mensagem" => "Erro ao excluir registro do usuario de codigo = $usucodigo"), 200);
        }
        
        return $response->withJson(array("status" => false, "mensagem" => "Não foi informado o código do usuario parametro [usucodigo]"), 200);
    }

    public function alterarUsuario(Request $request, Response $response, array $args){
        $body = $request->getParsedBody();

        $usucodigo = isset($body["usucodigo"]) ? $body["usucodigo"] : false;
        $usunome  = $body["usunome"];
        $usuemail = $body["usuemail"];
        $usuativo = intval($body["usuativo"]);
        
        if($usucodigo && intval($usucodigo) > 1){
            $sql_update_usuario = "UPDATE public.tbusuario SET 
                                          usunome  = '$usunome',
                                          usuemail = '$usuemail',
                                          usuativo = $usuativo
                                    WHERE usucodigo = $usucodigo";

            $executaQuery = $this->getQuery()->executaQuery($sql_update_usuario);
            
            if($executaQuery){
                return $response->withJson(array("status" => true, "mensagem" => "Registro alterado com sucesso!"), 200);
            }
            
            return $response->withJson(array("status" => false, "mensagem" => "Erro ao alterar registro do usuario de codigo = $usucodigo"), 200);
        }
        
        return $response->withJson(array("status" => false, "mensagem" => "Não foi informado o código do usuario parametro [usucodigo]"), 200);
    }

    public function incluirUsuario(Request $request, Response $response, array $args){
        $body = $request->getParsedBody();

        $usunome  = $body["usunome"];
        $usuemail = $body["usuemail"];
        $usuativo = intval($body["usuativo"]);

        $ususenha = "123456";
        $usutoken = "TOKEN_VAZIO";

        $sql_insert_usuario = 'insert into tbusuario(usunome,usuemail,ususenha,usutoken,usuativo) values (
            \'' . $usunome . '\',
            \'' . $usuemail . '\',
            \'' . $ususenha . '\',
            \'' . $usutoken . '\',
            ' . $usuativo . '
          );';
          
        $executaQuery = $this->getQuery()->executaQuery($sql_insert_usuario);
        
        if($executaQuery){
            return $response->withJson(array("status" => true, "mensagem" => "Registro incluido com sucesso!"), 200);
        }
        
        return $response->withJson(array("status" => false, "mensagem" => "Erro ao  inserir registro!"), 200);        
    }
}
