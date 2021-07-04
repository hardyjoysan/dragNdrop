-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 04, 2021 at 07:50 AM
-- Server version: 8.0.25-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `concentrix_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `amount` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `month`, `category`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 'january', 'Accomadation', 9702, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(2, 'january', 'Food', 1718, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(3, 'january', 'Clothing', 15759, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(4, 'january', 'Electricity', 16587, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(5, 'january', 'Medicine', 18193, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(6, 'january', 'Entertainment', 1937, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(7, 'january', 'Other', 4544, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(8, 'february', 'Accomadation', 7955, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(9, 'february', 'Food', 16864, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(10, 'february', 'Clothing', 13979, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(11, 'february', 'Electricity', 3274, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(12, 'february', 'Medicine', 4086, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(13, 'february', 'Entertainment', 6982, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(14, 'february', 'Other', 9215, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(15, 'march', 'Accomadation', 2437, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(16, 'march', 'Food', 14209, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(17, 'march', 'Clothing', 8000, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(18, 'march', 'Electricity', 18913, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(19, 'march', 'Medicine', 3649, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(20, 'march', 'Entertainment', 10549, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(21, 'march', 'Other', 7253, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(22, 'april', 'Accomadation', 13064, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(23, 'april', 'Food', 2864, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(24, 'april', 'Clothing', 7464, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(25, 'april', 'Electricity', 13012, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(26, 'april', 'Medicine', 16869, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(27, 'april', 'Entertainment', 13402, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(28, 'april', 'Other', 10165, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(29, 'may', 'Accomadation', 8510, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(30, 'may', 'Food', 14853, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(31, 'may', 'Clothing', 11004, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(32, 'may', 'Electricity', 10422, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(33, 'may', 'Medicine', 3063, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(34, 'may', 'Entertainment', 1805, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(35, 'may', 'Other', 1727, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(36, 'june', 'Accomadation', 12692, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(37, 'june', 'Food', 5613, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(38, 'june', 'Clothing', 6071, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(39, 'june', 'Electricity', 11874, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(40, 'june', 'Medicine', 18444, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(41, 'june', 'Entertainment', 914, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(42, 'june', 'Other', 5560, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(43, 'july', 'Accomadation', 6362, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(44, 'july', 'Food', 15085, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(45, 'july', 'Clothing', 5165, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(46, 'july', 'Electricity', 17386, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(47, 'july', 'Medicine', 9396, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(48, 'july', 'Entertainment', 11354, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(49, 'july', 'Other', 14126, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(50, 'august', 'Accomadation', 10539, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(51, 'august', 'Food', 4158, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(52, 'august', 'Clothing', 9633, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(53, 'august', 'Electricity', 17174, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(54, 'august', 'Medicine', 12356, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(55, 'august', 'Entertainment', 5500, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(56, 'august', 'Other', 13285, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(57, 'september', 'Accomadation', 10146, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(58, 'september', 'Food', 13932, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(59, 'september', 'Clothing', 15356, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(60, 'september', 'Electricity', 4325, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(61, 'september', 'Medicine', 4292, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(62, 'september', 'Entertainment', 17123, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(63, 'september', 'Other', 18911, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(64, 'october', 'Accomadation', 1333, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(65, 'october', 'Food', 7461, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(66, 'october', 'Clothing', 2408, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(67, 'october', 'Electricity', 15614, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(68, 'october', 'Medicine', 2686, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(69, 'october', 'Entertainment', 7201, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(70, 'october', 'Other', 10721, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(71, 'november', 'Accomadation', 14862, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(72, 'november', 'Food', 18309, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(73, 'november', 'Clothing', 3603, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(74, 'november', 'Electricity', 4966, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(75, 'november', 'Medicine', 14419, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(76, 'november', 'Entertainment', 10036, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(77, 'november', 'Other', 6097, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(78, 'december', 'Accomadation', 16915, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(79, 'december', 'Food', 16300, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(80, 'december', 'Clothing', 1955, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(81, 'december', 'Electricity', 11825, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(82, 'december', 'Medicine', 18134, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(83, 'december', 'Entertainment', 17929, '2021-07-03 16:44:06', '2021-07-03 16:44:06'),
(84, 'december', 'Other', 12436, '2021-07-03 16:44:06', '2021-07-03 16:44:06');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210703162619-create-expense.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
