<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 30/10/2020
 * Time: 18:50
 */

class DadosEleicao {

    public function __construct() {
        $this->processaDados();
    }

    private function processaDados() {
        $this->processaDadosCandidatos();
    }

    private function processaDadosCandidatos() {
        // site com todos candidatos do brasil de todas as eleições
        // https://www.tse.jus.br/eleicoes/estatisticas/repositorio-de-dados-eleitorais-1/repositorio-de-dados-eleitorais
        // lista todos estados do brasil
        $aListaEstado = array();
        $aListaEstados [] = "AC";
        $aListaEstados [] = "AL";
        $aListaEstados [] = "AM";
        $aListaEstados [] = "AP";
        $aListaEstados [] = "BA";
        $aListaEstados [] = "CE";
        $aListaEstados [] = "DF";
        $aListaEstados [] = "ES";
        $aListaEstados [] = "GO";
        $aListaEstados [] = "MA";
        $aListaEstados [] = "MT";
        $aListaEstados [] = "MS";
        $aListaEstados [] = "MG";
        $aListaEstados [] = "PA";
        $aListaEstados [] = "PB";
        $aListaEstados [] = "PR";
        $aListaEstados [] = "PE";
        $aListaEstados [] = "PI";
        $aListaEstados [] = "RJ";
        $aListaEstados [] = "RN";
        $aListaEstados [] = "RS";
        $aListaEstados [] = "RO";
        $aListaEstados [] = "RR";
        $aListaEstados [] = "SP";
        $aListaEstados [] = "SE";
        $aListaEstados [] = "TO";


        $aListaEstados = array();
        $aListaEstados [] = "SC";

        $aListaCandicatoPorMunicipioArray = array();
        foreach ($aListaEstados as $uf) {
            $this->mostraMensagem(" buscando candidato do estado: $uf. <br>");
            $aListaMunicipiosEstado = $this->getListaMunicipioFromEstado($uf);
            foreach ($aListaMunicipiosEstado as $codigoMunicipio) {
                $this->mostraMensagem(" buscando candidato da cidade: $codigoMunicipio. <br>");

                $aListaCandicatoPorMunicipio = $this->getListaCandicatoPorMunicipio($codigoMunicipio);

                $aListaCandicatoPorMunicipioArray[$uf][$codigoMunicipio] = $aListaCandicatoPorMunicipio;
            }
        }

        echo '<pre>' . print_r($aListaCandicatoPorMunicipioArray) . '</pre>';
    }

    private function getListaCandicatoPorMunicipio($codigoMunicipio) {
        $aListaCandidatos = array();
        $endereco = "http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2020/$codigoMunicipio/2030402020/11/candidatos";

        $ch = curl_init($endereco);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $retorno = curl_exec($ch);

        curl_close($ch);

        if ($retorno) {
            return $retorno;
        }
        return $aListaCandidatos;
    }

    private function getListaMunicipioFromEstado($uf) {
        $aListaMunicipiosArray = array();
        // lista municipios estado SC


        $endereco = "http://divulgacandcontas.tse.jus.br/divulga/rest/v1/eleicao/buscar/$uf/2030402020/municipios";

        $ch = curl_init($endereco);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        $retorno = curl_exec($ch);

        curl_close($ch);
        if ($retorno) {
            $retorno = json_decode($retorno);
            $aListaMunicipios = $retorno->municipios;
            foreach ($aListaMunicipios as $municipio) {
                $aListaMunicipiosArray [] = $municipio->codigo;
                $this->mostraMensagem('municipio codigo:' . $municipio->codigo);
            }
        } else {
            $this->mostraMensagem('Erro ao buscar municipio do estado' . $uf);
        }
        return $aListaMunicipiosArray;
    }

    private function mostraMensagem($mensagem) {
        echo $mensagem;
        ob_flush();
        flush();
    }
}

new DadosEleicao();
