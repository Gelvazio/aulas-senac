-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 24/09/2013 às 20h26min
-- Versão do Servidor: 5.5.20
-- Versão do PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `livraria`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `editora`
--

CREATE TABLE IF NOT EXISTS `editora` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Extraindo dados da tabela `editora`
--

INSERT INTO `editora` (`id`, `nome`, `email`) VALUES
(1, 'Oreilly', 'oreilly@email.com'),
(2, 'Wrox', 'Wrox@email.com'),
(3, 'Apress', 'Apress@email.com'),
(7, 'editora geo ', 'deded '),
(8, 'editorachefe ', ' e-amil@editorachefe '),
(9, 'castanha do ceu', 'castanha@email.com'),
(10, 'editoratesteconexao', 'teste@email.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livro`
--

CREATE TABLE IF NOT EXISTS `livro` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `preco` double NOT NULL,
  `editora_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `editora_id` (`editora_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Extraindo dados da tabela `livro`
--

INSERT INTO `livro` (`id`, `titulo`, `preco`, `editora_id`) VALUES
(1, 'Aprendendo C# r', 89.9, 1),
(2, 'JSF 2 Basico', 158.8, 2),
(3, 'JSF 2 Avancado', 300.67, 3),
(12, 'senhor dos aneis ', 34.76, 1),
(13, 'senhor dos aneis', 345, 2),
(14, 'A fada do dente', 435, 2),
(15, 'livro teste', 355, 3);

--
-- Restrições para as tabelas dumpadas
--

--
-- Restrições para a tabela `livro`
--
ALTER TABLE `livro`
  ADD CONSTRAINT `livro_ibfk_1` FOREIGN KEY (`editora_id`) REFERENCES `editora` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
