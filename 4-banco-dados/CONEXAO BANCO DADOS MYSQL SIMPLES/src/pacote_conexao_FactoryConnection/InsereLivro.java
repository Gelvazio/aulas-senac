/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package pacote_conexao_FactoryConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

/**
 *
 * @author geo
 */
public class InsereLivro {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        try {
            System.out.println(" Abrindo conexão ... ");
            Connection conexao = ConnectionFactory.createConnection();
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
