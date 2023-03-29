<?php

require_once ("ConexaoDB.php");
class Query {

    private $conexao;

    public function __construct() {
        $this->conexao = ConexaoDB::getInstance();
    }
    
    /**
     * Seleciona apenas a primeira linha de resultado
     * @param $sSql
     * @return array|bool
     * @throws Exception
     */
    public function select($sSql) {
        $rSql = $this->executaQuery($sSql);
        if ($oLinhaAtual = pg_fetch_assoc($rSql)) {
            return $oLinhaAtual;
        }
        return false;
    }
    
    /**
     * Lista todas as linhas de resultado
     * @param $sSql
     * @return array
     * @throws Exception
     */
    public function selectAll($sSql) {
        $rSql = $this->executaQuery($sSql);
        $aRetorno = Array();
        while ($oLinhaAtual = pg_fetch_assoc($rSql)) {
            $aRetorno[] = $oLinhaAtual;
        }
        return $aRetorno;
    }

    public function executaQuery($sSql, $retornoBoolean = false) {
        $rRetorno = @pg_query($this->conexao, $sSql);
        if ($rRetorno !== false) {
            return $rRetorno;
        }

        if($retornoBoolean){
            return false;
        }
        
        throw new Exception('Erro ao executar comando SQL.Erro: ' . pg_last_error($this->conexao));
    }

}
