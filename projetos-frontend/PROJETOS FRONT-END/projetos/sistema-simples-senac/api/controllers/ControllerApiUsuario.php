<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * Chamada da api Usuario
 *
 * User: Gelvazio Camargo
 * Date: 29/11/2022
 * Time: 10:15
 */
// require_once ("core/token.php");
// require_once ("model/Usuario.php");

class ControllerApiUsuario extends ControllerApiBase {

    public function getUsuario(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
        $usucodigo = isset($body["usucodigo"]) ? $body["usucodigo"] : false;
        
        $sSql = "SELECT * FROM tbusuario ORDER BY 1";
        if($usucodigo){
            $sSql = "SELECT * FROM tbusuario where usucodigo = $usucodigo ORDER BY 1";
            if($usucodigo == 1){
                $sSql = "SELECT * FROM tbusuario ORDER BY 1";
            }
        }
        
        $aDados = $this->getQuery()->selectAll($sSql);
        
        return $response->withJson($aDados, 200);
    }
    
    public function gravaUsuario(Request $request, Response $response, array $args) {
        require_once ("./core/token.php");
        require_once ("./model/Usuario.php");
    
        $body = $request->getParsedBody();

        $this->gravaUsuarioSistemaLote($body);

        $dados = array(
            "data" => date("Y-m-d H:i:s")            
        );

        return $response->withJson($dados, 200);


        // $oUsuario = new Usuario($body["usunome"],$body["usuemail"],$body["ususenha"],$body["usutoken"],$body["usuativo"]);
        // // Se ja tiver um usuario com este email, retorna este usuario
        // if($aDadosUsuario = $this->getUsuarioPorEmail($oUsuario->getUsuemail())){
        //     return $response->withJson($aDadosUsuario, 200);
        // }
        
        // $token = encodeToken($oUsuario);
        // $oUsuario->setUsutoken($token);
        
        // $oUsuario->setUsusenha(bcrypt($body["ususenha"]));
        
        // $body["usutoken"] = $token;
        // $body["UsuarioBanco"] = $this->gravaUsuarioBanco($oUsuario);;
        
        // return $response->withJson($body, 200);
    }
    
    private function gravaUsuarioSistemaLote($body){

        $i = 10;
        while($i < 200){

            $body["usuemail"] = "senac" . $i . "@email.com";

            $this->gravaUsuarioSistema($body);

            $i++;
        }
    }

        
    private function gravaUsuarioSistema($body){
        $oUsuario = new Usuario($body["usunome"],$body["usuemail"],$body["ususenha"],$body["usutoken"],$body["usuativo"]);
        
        // Se ja tiver um usuario com este email, retorna este usuario
        if($aDadosUsuario = $this->getUsuarioPorEmail($oUsuario->getUsuemail())){
            return true;
        }
        
        $token = encodeToken($oUsuario);
        $oUsuario->setUsutoken($token);
        
        $oUsuario->setUsusenha(bcrypt($body["ususenha"]));
        
        $body["usutoken"] = $token;
        $body["UsuarioBanco"] = $this->gravaUsuarioBanco($oUsuario);;
        
        return true;
    }

    private function gravaUsuarioBanco($oUsuario){
        // Se ja tiver um usuario com este email, retorna este usuario
        if($aDadosUsuario = $this->getUsuarioPorEmail($oUsuario->getUsuemail())){
            return $aDadosUsuario;
        }
        
        $sql_insert = 'insert into tbusuario(usunome,usuemail,ususenha,usutoken,usuativo) values (
          \'' . $oUsuario->getUsunome() . '\',
          \'' . $oUsuario->getUsuemail() . '\',
          \'' . $oUsuario->getUsusenha() . '\',
          \'' . $oUsuario->getUsutoken() . '\',
          ' . $oUsuario->getUsuativo() . '
        );';
        
        if($this->getQuery()->executaQuery($sql_insert)){
            return $this->getUsuarioPorEmail($oUsuario->getUsuemail());
        }
        
        return array();
    }
    
    private function getUsuarioPorEmail($email){
        $sql_usuario = "select * from tbusuario where usuemail = '" . $email . "' limit 1";
    
        if($aDados = $this->getQuery()->selectAll($sql_usuario)){
            return $aDados[0];
        }
        return false;
    }
    
    public function loginUsuario(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
        
        if(!isset($body)){
            return $response->withJson(array("dadoslogin" => "false", "body" => "body em branco!"), 200);
        }
        
        $token_usuario = isset($body["token_logado"]) ? $body["token_logado"] : false;
        
        if($token_usuario){
            $dadosLogin = $this->loginComToken($token_usuario);
        } else {
            $dadosLogin = $this->loginComSenha($body);
        }
        
        return $response->withJson(array("dadoslogin" => $dadosLogin), 200);
    }
    
    private function loginComToken($token_logado){
        $aDadosUsuarioResponse = array();
        $aDadosUsuarioResponse["login"] = false;
        $aDadosUsuarioResponse["mensagem"] = "Usuario ou senha invalidos!";
        
        // verifica se e um token valido
        $aDadosToken = explode('.', $token_logado);
        if(count($aDadosToken) !== 3){
            return $aDadosUsuarioResponse;
        }
        
        // Decodifica o token do usuario
        $token_decode = decodeToken($token_logado);
        $usuemail = $token_decode->usuemail;
        if($aDadosUsuario = $this->getUsuarioPorEmail($usuemail)) {
            if ($token_logado === $aDadosUsuario["usutoken"]) {
                $aDadosUsuarioResponse["mensagem"] = "Token validado com sucesso!";
                $aDadosUsuarioResponse["login"] = true;
            }
        }
        return $aDadosUsuarioResponse;
    }
    
    private function loginComSenha($body){
        $senha_informada = $body["ususenha"];
        $aDadosUsuarioResponse = array();
        $aDadosUsuarioResponse["login"] = false;
        $aDadosUsuarioResponse["mensagem"] = "Usuario ou senha invalidos!";
        if($aDadosUsuario = $this->getUsuarioPorEmail($body["usuemail"])) {
            $oUsuario = new Usuario($aDadosUsuario["usunome"],
                $aDadosUsuario["usuemail"],
                $aDadosUsuario["ususenha"],
                $aDadosUsuario["usutoken"],
                $aDadosUsuario["usuativo"]);
    
            $oUsuario->setUsucodigo($aDadosUsuario["usucodigo"]);
            
            // $api_key = "769E46AAD7AD1833E3174B6E88CCC-F373C6DC6367A967B242CA4CCDDA2";
        
            // Decodifica o token do usuario
            // $token_decode = decodeToken($oUsuario->getUsutoken(), $api_key);
        
            $senha_banco_dados = $aDadosUsuario["ususenha"];
            if (password_verify($senha_informada, $senha_banco_dados)) {
                $aDadosUsuario             = array();
                $aDadosUsuario["login"]    = true;
                $aDadosUsuario["token"]    = $oUsuario->getUsutoken();
                $aDadosUsuario["usucodigo"]= $oUsuario->getUsucodigo();
                $aDadosUsuario["usunome"]  = $oUsuario->getUsunome();
                $aDadosUsuario["usuemail"] = $oUsuario->getUsuemail();
                $aDadosUsuario["mensagem"] = "Usuario validado com sucesso!";
            
                $aDadosUsuarioResponse = $aDadosUsuario;
            }
        }
    
        return $aDadosUsuarioResponse;
    }
    
    public function updatePassword(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
        $oUsuario = $this->loginComSenha($body);
    
        $aDados = array("status" => false, "mensagem" => "Usuario nao encontrado!");
        if($oUsuario && $oUsuario["login"]){
            $usucodigo = (int)$oUsuario["usucodigo"];
            if($oModelUsuario = $this->updateDadosBanco($usucodigo, $body["ususenha_nova"])){
                $aDados = array("status" => true, "Usuario" => $oModelUsuario);
            }
        }
        
        return $response->withJson($aDados, 200);
    }
    
    public function resetPassword(Request $request, Response $response, array $args) {
        $body = $request->getParsedBody();
    
        $aDados = array("status" => false, "mensagem" => "Usuario nao encontrado!");
        if($aDadosUsuario = $this->getUsuarioPorEmail($body["usuemail"])) {
            $oUsuario = new Usuario($aDadosUsuario["usunome"],
                $aDadosUsuario["usuemail"],
                $aDadosUsuario["ususenha"],
                $aDadosUsuario["usutoken"],
                $aDadosUsuario["usuativo"]);
    
            $usucodigo = $aDadosUsuario["usucodigo"];
            
            $oUsuario->setUsucodigo($usucodigo);
            
            if($oModelUsuario = $this->updateDadosBanco($usucodigo, $body["ususenha"])){
                $aDados = array("status" => true, "Usuario" => $oModelUsuario);
            }
        }
        
        return $response->withJson($aDados, 200);
    }
    
    private function updateDadosBanco($usucodigo, $ususenha){
        $ususenha = bcrypt($ususenha);
        
        list($oUsuario, $aDadosUsuario) = $this->getModelUsuario($usucodigo);
        
        // Atualiza o token do usuario
        $token = encodeToken($oUsuario);
        
        if($this->getQuery()->executaQuery("update tbusuario set ususenha = '$ususenha', usutoken = '$token'
                                             where usucodigo = $usucodigo")){
            return $aDadosUsuario;
        }
        
        return false;
    }
    
    public function deleteUsuario(Request $request, Response $response, array $args){
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
    
    private function getModelUsuario($usucodigo){
        $sql_usuario = "select * from tbusuario where usucodigo = $usucodigo";
    
        if($aDados = $this->getQuery()->selectAll($sql_usuario)){
            $aDadosUsuario = $aDados[0];
            $oUsuario = new Usuario($aDadosUsuario["usunome"],
                $aDadosUsuario["usuemail"],
                $aDadosUsuario["ususenha"],
                $aDadosUsuario["usutoken"],
                $aDadosUsuario["usuativo"]);
            
            return array($oUsuario, $aDadosUsuario);
        }
        
        return false;
    }
    
}
