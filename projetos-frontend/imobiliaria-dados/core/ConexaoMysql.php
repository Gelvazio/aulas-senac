<?php

/* UPDATE ARQUIVOS FTP*/

class ConexaoMysql {

    // Conexao Servidor FreeHostingNoads
    //  $conn = new mysqli('fdb31.runhosting.com', '4068509_sistemafinanceiro', 'Senac2022', '4068509_sistemafinanceiro');
    // Site:https://cp1.runhosting.com/
    // teste

    const HOST = 'fdb31.runhosting.com';
    const PORT = '3306';
    const DBNAME = '4068509_sistemafinanceiro';
    const USER = '4068509_sistemafinanceiro';
    const PASS = 'Senac2022';

    // Conexao Local
//    const HOST   = '127.0.0.1';
//    const PORT   = '3306';
//    const DBNAME = 'sistemafinanceiro';
//    const USER   = 'root';
//    const PASS   = '';

    private static $conexao = null;

    public static function getInstance() {
        if (is_null(self::$conexao)) {
            self::conecta();
        }
        return self::$conexao;
    }

    public static function conecta() {
        if (is_null(self::$conexao)) {
            //function mysqli_connect ($host = '', $user = '', $password = '', $database = '', $port = '', $socket = '') {}

            self::$conexao = mysqli_connect(
                self::HOST,
                self::USER,
                self::PASS,
                self::DBNAME,
                self::PORT
            );
            if (self::$conexao === false) {
                throw new Exception('Erro ao comunicar com banco de dados!');
            }
        }
        return self::$conexao;
    }

    public function __destruct() {
        self::desconecta();
    }

    public static function desconecta() {
        $bFechou = true;
        if (!is_null(self::$conexao)) {
            $bFechou = mysqli_close(self::$conexao);
            self::$conexao = null;
        }
        return $bFechou;
    }

}
