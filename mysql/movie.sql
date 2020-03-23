-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2020 at 11:57 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `movie` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `productionHouseId` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `movie`, `genre`, `productionHouseId`, `created_at`, `update_at`) VALUES
(1, '', 'Romance', 0, '2020-03-21 17:52:24', '2020-03-23 22:17:43'),
(2, '', 'Romance', 0, '2020-03-21 17:57:05', '2020-03-23 22:17:58'),
(4, 'Cars', 'Kids', 12, '2020-03-23 20:34:11', '2020-03-23 22:29:54'),
(5, '', 'Romance', 0, '2020-03-23 20:41:00', '2020-03-23 22:25:38'),
(6, '', 'tes', 0, '2020-03-23 20:41:18', '2020-03-23 22:22:35'),
(7, '', 'dadwad', 0, '2020-03-23 20:55:52', '2020-03-23 22:24:49'),
(8, '', 'Comedy', 0, '2020-03-23 22:25:52', '2020-03-23 22:26:02'),
(9, 'Cars 2', 'Kids', 12, '2020-03-23 22:26:41', '2020-03-23 22:30:05'),
(10, '', 'Romance', 0, '2020-03-23 22:26:46', '2020-03-23 22:26:56'),
(11, 'Brave', 'Adventure', 12, '2020-03-23 22:26:46', '2020-03-23 22:30:23'),
(12, 'Bucin', 'Comedy', 1, '2020-03-23 22:29:08', '2020-03-23 22:29:08'),
(14, 'Wall E', 'Kids', 12, '2020-03-23 22:48:42', '2020-03-23 22:48:42'),
(15, 'Habibie & Ainun', 'Romance', 3, '2020-03-23 22:49:23', '2020-03-23 22:49:23'),
(16, 'Samson Betawi', 'Comedy', 10, '2020-03-23 22:50:38', '2020-03-23 22:50:38');

-- --------------------------------------------------------

--
-- Table structure for table `productionhouse`
--

CREATE TABLE `productionhouse` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `crated_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productionhouse`
--

INSERT INTO `productionhouse` (`id`, `name`, `crated_on`, `update_on`) VALUES
(1, 'Rapi Films', '2020-03-21 16:40:19', '2020-03-21 16:40:19'),
(3, 'MD Entertaiment', '2020-03-21 17:16:47', '2020-03-21 17:31:11'),
(10, 'Multivision Plus', '2020-03-23 15:48:06', '2020-03-23 15:48:06'),
(11, 'Disney', '2020-03-23 15:48:23', '2020-03-23 15:48:23'),
(12, 'Pixar', '2020-03-23 15:48:41', '2020-03-23 15:48:41'),
(13, 'Lions Gate', '2020-03-23 17:10:29', '2020-03-23 17:10:29'),
(14, 'Universal Studio', '2020-03-23 17:11:02', '2020-03-23 18:13:31'),
(15, 'Legendary', '2020-03-23 17:11:51', '2020-03-23 17:11:51'),
(19, 'Soraya Film', '2020-03-23 19:10:58', '2020-03-23 19:10:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productionhouse`
--
ALTER TABLE `productionhouse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `productionhouse`
--
ALTER TABLE `productionhouse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
