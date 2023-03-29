<?php
require_once("QueryPostgresql.php");
define('CONEXAO_POSTGRESQL', 2);
class Query {
    protected $oQuery;
    public function __construct($conexaoParam = CONEXAO_POSTGRESQL) {
        if ($conexaoParam === CONEXAO_POSTGRESQL) {
            $this->oQuery = new QueryPostgresql();
        } else {
            throw new Exception('Conexao invalida!');
        }
    }
    public function select($sSql) {
        return $this->oQuery->select($sSql);
    }
    public function executaQuery($sSql) {
        return $this->oQuery->executaQuery($sSql);
    }
    public function selectAll($sSql) {
        return $this->oQuery->selectAll($sSql);
    }
}