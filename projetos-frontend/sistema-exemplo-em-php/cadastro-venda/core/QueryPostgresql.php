<?php
/* UPDATE ARQUIVOS FTP*/
require_once("ConexaoPostgreSql.php");

class QueryPostgresql {

    private $conexao;

    public function __construct() {
        $this->setConexao(ConexaoPostgreSql::getInstance());
    }

    public function select($sSql) {
        $rSql = $this->executaQuery($sSql);
        if ($oLinhaAtual = pg_fetch_assoc($rSql)) {
            return $oLinhaAtual;
        }
        return false;
    }

    public function executaQuery($sSql) {
        $rRetorno = @pg_query($this->getConexao(), $sSql);
        if ($rRetorno !== false) {
            return $rRetorno;
        }
        echo "<pre>" . print_r(pg_last_error($this->getConexao()) . $sSql) . "</pre>";

        //Teste Geo
        $iLastError = (pg_last_error($this->getConexao()) . $sSql);

        echo $iLastError;

        throw new Exception('Erro ao executar comando SQL');
    }

    public function getConexao() {
        return $this->conexao;
    }

    public function setConexao($conexao) {
        $this->conexao = $conexao;
    }

    public function selectAll($sSql) {
        $rSql = $this->executaQuery($sSql);
        $aRetorno = Array();
        while ($oLinhaAtual = pg_fetch_assoc($rSql)) {
            $aRetorno[] = $oLinhaAtual;
        }
        return $aRetorno;
    }

}
