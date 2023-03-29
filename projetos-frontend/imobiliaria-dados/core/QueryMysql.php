<?php
/* UPDATE ARQUIVOS FTP*/
require_once("ConexaoMysql.php");

class QueryMysql {

    private $conexao;

    public function __construct() {
        $this->conexao = ConexaoMysql::getInstance();
    }

    public function select($sSql) {
        $rSql = $this->executaQuery($sSql);
        if ($oLinhaAtual = mysqli_fetch_assoc($rSql)) {
            return $oLinhaAtual;
        }
        return false;
    }

    public function executaQuery($sSql) {
        $rRetorno = mysqli_query($this->conexao, $sSql);
        if ($rRetorno !== false) {
            return $rRetorno;
        }

        echo "SQL: $sSql - <pre>" . print_r(mysqli_error_list($this->conexao), true) . "</pre>";

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
        while ($oLinhaAtual = mysqli_fetch_assoc($rSql)) {
            $aRetorno[] = $oLinhaAtual;
        }
        return $aRetorno;
    }

}
