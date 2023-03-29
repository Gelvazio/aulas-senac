<?php

class ConexaoDB
{

    // Conexao Local
    // const HOST   = '127.0.0.1';
    // const PORT   = '5432';
    // const DBNAME = 'postgres';
    // const USER   = 'postgres';
    // const PASS   = 'postgres';

    // SUPABASE
    const HOST   = 'db.vdcszqvvrwdqcnjvcoxt.supabase.co';
    const DBNAME = 'postgres';
    const PORT   = '5432';
    const USER   = 'postgres';
    const PASS   = 'psyGy3Hl3QjJCepx';

    private static $conexao = null;

    public function __construct() {
    
    }
    
    public static function getInstance() {
        if (is_null(self::$conexao)) {
            self::conecta();
        }
        return self::$conexao;
    }

    public static function conecta() {
        if (is_null(self::$conexao)) {
                $HOST   = self::HOST;
                $DBNAME = self::DBNAME;
                $PORT   = self::PORT;
                $USER   = self::USER;
                $PASS   = self::PASS;
            self::$conexao = pg_connect('host=' . $HOST . ' port=' . $PORT . ' dbname=' . $DBNAME . ' user=' . $USER . ' password=' . $PASS);
            if (self::$conexao === false) {
                throw new Exception('Erro ao comunicar com banco de dados!');
            }
        }
        return self::$conexao;
    }

    public static function desconecta()
    {
        $bFechou = true;
        if (!is_null(self::$conexao)) {
            $bFechou = pg_close(self::$conexao);
            self::$conexao = null;
        }
        return $bFechou;
    }

    public function __destruct()
    {
        self::desconecta();
    }
}
