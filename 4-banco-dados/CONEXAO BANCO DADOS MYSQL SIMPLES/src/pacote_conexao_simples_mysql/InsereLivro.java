/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package pacote_conexao_simples_mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

/**
 *
 * @author geo
 */
public class InsereLivro {

    public static void main(String[] args) {
        String stringDeConexao = "jdbc:mysql://localhost:3306/livraria";
        String usuario = "root";
        String senha = "";

        Scanner entrada = new Scanner(System.in);

        try {
            System.out.println(" Abrindo conexão ... ");
            Connection conexao =
                    DriverManager.getConnection(stringDeConexao, usuario, senha);
            System.out.println(" Digite o nome do Livro: ");
            String titulo = entrada.nextLine();

            System.out.println(" Digite o preço do livro: ");
            Double preco = Double.parseDouble(entrada.nextLine());

            System.out.println(" Digite o codigo da editora do livro: ");
            int codigo_editora = Integer.parseInt(entrada.nextLine());

            String sql = " INSERT INTO Livro(titulo, preco, editora_id) "
                    + " VALUES (?,?,?);";
            PreparedStatement comando = conexao.prepareStatement(sql);
            comando.setString(1, titulo);
            comando.setDouble(2, preco);
            comando.setInt(3, codigo_editora);
            System.out.println("Valores a serem Inseridos: \n" + comando);

            System.out.println(" Executando comando ... ");
            comando.execute();

            System.out.println(" Fechando conexão ... ");
            conexao.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
