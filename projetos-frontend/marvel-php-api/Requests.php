<?php

class Requests {

    private $privateKey;
    private $publicKey;

    /**
     * @return array|false|string
     */
    public function getPrivateKey() {
        return $this->privateKey;
    }

    /**
     * @param array|false|string $privateKey
     * @return Requests
     */
    public function setPrivateKey($privateKey) {
        $this->privateKey = $privateKey;
    }

    /**
     * @return array|false|string
     */
    public function getPublicKey() {
        return $this->publicKey;
    }

    /**
     * @param array|false|string $publicKey
     * @return Requests
     */
    public function setPublicKey($publicKey) {
        $this->publicKey = $publicKey;
    }

    public function __construct() {
        $this->defineConstants();
        $this->loadEnvs();
        $this->setPublicKey(getenv("PUBLIC_API_KEY"));
        $this->setPrivateKey(getenv("PRIVATE_API_KEY"));
    }

    private function defineConstants() {
        define("HTTP_RESPONSE_OK", 200);
    }

    private function loadEnvs() {
        require 'vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
        $dotenv->load();
    }

    protected function callApi($port = "characters", $limit = 100) {
        if($oDados = file_get_contents($port . ".json")){
            return json_decode($oDados);
        }

        $curl = curl_init();
        $date = new DateTime();

        $timestamp = $date->getTimestamp();

        $keys = $this->getPrivateKey() . $this->getPublicKey();

        $string = $timestamp . $keys;

        $md5 = hash('md5', $string);

        $url = "https://gateway.marvel.com:443/v1/public/$port?ts=$timestamp&limit=$limit&apikey=$this->publicKey&hash=$md5";

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_BINARYTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept:application/json , content-type:application/json'));

        $result = curl_exec($curl);

        curl_close($curl);

        $result = json_decode($result, true);

        if (!is_array($result)) {
            return json_encode(array("mensagem" => "Erro ao chamar Api Marvel..."));
        }

        $valid = false;
        if(count($result)){
            if(intval($result["code"]) == HTTP_RESPONSE_OK){
                $valid = true;
            }

            if(!$valid){
                echo '<pre>' . print_r($result, true). '</pre>';
                return true;
            }
        }

        file_put_contents($port . ".json", json_encode($result));

        return $result;
    }
}