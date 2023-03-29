/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Conexao_Banco;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

/**
 *
 * @author Gelvazio Camargo
 */
public class TesteConexao {

    public static void main(String[] args) {
        // JOptionPane.showMessageDialog(null, "Entrou Aqui! \n public static void main(String[] args) {");
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            // JOptionPane.showMessageDialog(null, "Entrou Aqui! \n try {");
            conn = Conexao.getConexao();
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT titulo FROM `livro` LIMIT 0 , 30");
            while (rs.next()) {
                JOptionPane.showMessageDialog(null, "Titulos dos Livros: \n" + rs.getString("titulo"));
            }
        } catch (SQLException erro) {
            JOptionPane.showMessageDialog(null, "Erro de conexão!\n " + erro.getMessage());
        } finally {
            Conexao.closeAll(conn);
        }
    }
}
