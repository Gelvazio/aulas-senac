/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Conexao_Banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author Gelvazio Camargo
 */
public class Conexao {
    //Dados da Conexao MYSql
    //Usuario=admin
    //Senha=admin

    private static String driver = "com.mysql.jdbc.Driver"; //Classe do driver
    private static String banco = "livraria"; //Nome da base de dados
    private static String host = "localhost"; //Servidor da base de dados
    private static String str_conn = "jdbc:mysql://" + host + ":3306/" + banco; //URL de conexão
    // private static String str_conn = "jdbc:mysql://" + host + banco; //URL de conexão
    private static String usuario = "root"; //Usuário da base
    private static String senha = ""; //Senha da base

    public static Connection getConexao() {
        Connection conn = null;
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(str_conn, usuario, senha);
        } catch (ClassNotFoundException erro) {
            JOptionPane.showMessageDialog(null, "Erro de driver!\n " + erro.getMessage());
        } catch (SQLException erro) {
            JOptionPane.showMessageDialog(null, "Erro de Conexão!\n " + erro.getMessage());
        }
        return conn;
    }

    public static void closeAll(Connection conn) {
        try {
            if (conn != null) {
                conn.close();
            }
        } catch (Exception erro) {
            JOptionPane.showMessageDialog(null, "Erro ao fechar conexão!\n" + erro.getMessage());
        }
    }
}
