/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package pacote_conexao_simples_mysql;

/**
 *
 * @author geo
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ListaEditoras {

    public static void main(String[] args) {
        String stringDeConexao = "jdbc:mysql://localhost:3306/livraria";
        String usuario = "root";
        String senha = "";

        try {
            System.out.println(" Abrindo conexão ... ");
            Connection conexao =
                    DriverManager.getConnection(stringDeConexao, usuario, senha);

            String sql = " SELECT * FROM Editora ";

            PreparedStatement comando = conexao.prepareStatement(sql);

            System.out.println(" Executando comando ... ");
            ResultSet resultado = comando.executeQuery();

            System.out.println(" Resultados encontrados : \n");
            while (resultado.next()) {
                System.out.printf("%d : %s - %s\n",
                        resultado.getInt("id"),
                        resultado.getString("nome"),
                        resultado.getString("email"));
            }

            System.out.println("\n Fechando conexão ... ");
            conexao.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
