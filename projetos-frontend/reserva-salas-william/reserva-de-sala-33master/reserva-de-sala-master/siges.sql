-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 04-Nov-2014 às 11:43
-- Versão do servidor: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `siges`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `gerencia`
--

CREATE TABLE IF NOT EXISTS `gerencia` (
  `cod_setorg` int(255) NOT NULL,
  `id_sala` int(255) NOT NULL,
  KEY `cod_setorg` (`cod_setorg`),
  KEY `id_sala` (`id_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `gerencia`
--

INSERT INTO `gerencia` (`cod_setorg`, `id_sala`) VALUES
(1, 144),
(1, 140),
(3, 25),
(4, 50),
(2, 9),
(1, 50),
(1, 25);

-- --------------------------------------------------------

--
-- Estrutura da tabela `modera`
--

CREATE TABLE IF NOT EXISTS `modera` (
  `cpf_usuario` varchar(100) NOT NULL,
  `cod_setorm` int(255) NOT NULL,
  PRIMARY KEY (`cpf_usuario`),
  KEY `cod_setor` (`cod_setorm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `moderador`
--

CREATE TABLE IF NOT EXISTS `moderador` (
  `cpf_mod` varchar(255) NOT NULL DEFAULT '',
  `cpf_adm` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cpf_mod`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `moderador`
--

INSERT INTO `moderador` (`cpf_mod`, `cpf_adm`) VALUES
('22', '22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE IF NOT EXISTS `professor` (
  `cod_depto` varchar(250) NOT NULL,
  `siap` varchar(100) NOT NULL,
  `cpf_prof` varchar(100) NOT NULL,
  KEY `cpf_prof` (`cpf_prof`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`cod_depto`, `siap`, `cpf_prof`) VALUES
('2', '12345', '40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `recurso`
--

CREATE TABLE IF NOT EXISTS `recurso` (
  `codigo` int(255) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `situacao` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `recurso`
--

INSERT INTO `recurso` (`codigo`, `nome`, `categoria`, `situacao`) VALUES
(1, 'Retro-projetor', 'Philips', 'OK'),
(2, 'Retro-projetor', 'Samsung', 'OK'),
(3, 'Computador', 'HP', 'OK'),
(4, 'Computador', 'HP', 'OK'),
(5, 'Televisor', 'LG', 'OK'),
(6, 'Retro-projetor', 'Phillips', 'OK'),
(69, 'Putaria', 'Sexo', 'OK');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reserva`
--

CREATE TABLE IF NOT EXISTS `reserva` (
  `data_reserva` date NOT NULL,
  `horario_inicio` date NOT NULL,
  `horario_fim` date NOT NULL,
  `cpf_usr` varchar(100) NOT NULL,
  `num_sala` int(50) NOT NULL,
  `moderacao` tinyint(1) NOT NULL,
  KEY `cpf_usr` (`cpf_usr`),
  KEY `num_sala` (`num_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `reserva`
--

INSERT INTO `reserva` (`data_reserva`, `horario_inicio`, `horario_fim`, `cpf_usr`, `num_sala`, `moderacao`) VALUES
('0000-00-00', '0000-00-00', '0000-00-00', '60', 5, 0),
('0000-00-00', '0000-00-00', '0000-00-00', '40', 7, 0),
('0000-00-00', '0000-00-00', '0000-00-00', '60', 9, 0),
('0000-00-00', '0000-00-00', '0000-00-00', '44', 2, 0),
('0000-00-00', '0000-00-00', '0000-00-00', '33', 10, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sala`
--

CREATE TABLE IF NOT EXISTS `sala` (
  `nr_sala` int(255) NOT NULL,
  `capacidade` varchar(100) NOT NULL,
  `id_tipo_sala` int(11) DEFAULT NULL,
  PRIMARY KEY (`nr_sala`),
  KEY `id_tipo_sala` (`id_tipo_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sala`
--

INSERT INTO `sala` (`nr_sala`, `capacidade`, `id_tipo_sala`) VALUES
(2, '50', 2),
(3, '60', 2),
(4, '90', 2),
(5, '50', 2),
(7, '80', NULL),
(9, '100', 2),
(10, '20', 3),
(25, '100', 2),
(50, '200', 3),
(140, '70', 1),
(144, '50', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

CREATE TABLE IF NOT EXISTS `setor` (
  `cod_setor` int(255) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `horario_abertura` varchar(50) NOT NULL,
  `horario_encerramento` varchar(50) NOT NULL,
  PRIMARY KEY (`cod_setor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `setor`
--

INSERT INTO `setor` (`cod_setor`, `nome`, `horario_abertura`, `horario_encerramento`) VALUES
(1, 'Graduação', '08:00', '21:00'),
(2, 'Pós-Graduação', '08:00', '21:00'),
(3, 'Extensão', '07:00', '23:00'),
(4, 'Tecnológico', '08:00', '12:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipos_de_sala`
--

CREATE TABLE IF NOT EXISTS `tipos_de_sala` (
  `id` int(255) NOT NULL,
  `desc` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tipos_de_sala`
--

INSERT INTO `tipos_de_sala` (`id`, `desc`) VALUES
(1, 'Laboratório'),
(2, 'Sala de aula'),
(3, 'Auditório');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `cpf` varchar(255) NOT NULL,
  `pnome` varchar(100) NOT NULL,
  `unome` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`cpf`, `pnome`, `unome`, `senha`, `email`) VALUES
('015615616', 'Arley', 'Prates', '1q23', 'arleyprates@gmail.com'),
('11111111111', 'Bruno ', 'Ramos', 'blabla', 'brunao@gmail.com'),
('12345678', 'Madson', 'Araujo', 'souviadinho', 'madsonra@dcc.ufba.br'),
('20', 'Daniela', 'Claro', '123', 'aaa'),
('22', 'Mario', 'Augusto', 'asdf', 'asdf'),
('30', 'Eduardo', 'Almeida', 'aaa', 'aaa'),
('33', 'Raimundo', 'Leite', 'asdf', 'asdf'),
('40', 'Rita', 'Suzana', 'ssffd', 'aaa'),
('44', 'Jamal', 'Castro', '1234', 'aaasa'),
('50', 'Fred', 'Durao', '123', 'aaa'),
('555555555555', 'Arley', 'prates', 'programar', 'AAA@gmail.com'),
('60', 'Claudio', 'Santana', 'aaaa', 'aaaa'),
('696969696969', 'Marcio', 'Leitinho', 'aaaa', 'viadinho@dcc.ufba.br'),
('87654321', 'Jean', 'Carvalho', 'jfcarvalho', 'jfcarvalho@dcc.ufba.br');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utiliza`
--

CREATE TABLE IF NOT EXISTS `utiliza` (
  `codigo_recurso` int(11) NOT NULL,
  `nr_sala` int(11) NOT NULL,
  KEY `codigo_recurso` (`codigo_recurso`),
  KEY `nr_sala` (`nr_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `gerencia`
--
ALTER TABLE `gerencia`
  ADD CONSTRAINT `cod_setorg` FOREIGN KEY (`cod_setorg`) REFERENCES `setor` (`cod_setor`),
  ADD CONSTRAINT `id_sala` FOREIGN KEY (`id_sala`) REFERENCES `sala` (`nr_sala`);

--
-- Limitadores para a tabela `modera`
--
ALTER TABLE `modera`
  ADD CONSTRAINT `cod_setor` FOREIGN KEY (`cod_setorm`) REFERENCES `setor` (`cod_setor`),
  ADD CONSTRAINT `cod_setorm` FOREIGN KEY (`cod_setorm`) REFERENCES `setor` (`cod_setor`);

--
-- Limitadores para a tabela `moderador`
--
ALTER TABLE `moderador`
  ADD CONSTRAINT `cpf_mod` FOREIGN KEY (`cpf_mod`) REFERENCES `usuario` (`cpf`);

--
-- Limitadores para a tabela `professor`
--
ALTER TABLE `professor`
  ADD CONSTRAINT `cpf_prof` FOREIGN KEY (`cpf_prof`) REFERENCES `usuario` (`cpf`);

--
-- Limitadores para a tabela `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `cpf_usr` FOREIGN KEY (`cpf_usr`) REFERENCES `usuario` (`cpf`),
  ADD CONSTRAINT `num_sala` FOREIGN KEY (`num_sala`) REFERENCES `sala` (`nr_sala`);

--
-- Limitadores para a tabela `sala`
--
ALTER TABLE `sala`
  ADD CONSTRAINT `id_tipo_sala` FOREIGN KEY (`id_tipo_sala`) REFERENCES `tipos_de_sala` (`id`);

--
-- Limitadores para a tabela `utiliza`
--
ALTER TABLE `utiliza`
  ADD CONSTRAINT `codigo_recurso` FOREIGN KEY (`codigo_recurso`) REFERENCES `recurso` (`codigo`),
  ADD CONSTRAINT `nr_sala` FOREIGN KEY (`nr_sala`) REFERENCES `sala` (`nr_sala`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
