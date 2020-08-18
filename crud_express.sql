-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Agu 2020 pada 03.29
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_express`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_age` tinyint(2) NOT NULL,
  `user_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_age`, `user_address`) VALUES
(44, 'Ferdlian Palengka', 21, 'Pakem, Jogja'),
(45, 'Kimmi', 18, 'Klaten, Jateng'),
(46, 'Ferdlian', 21, 'Pakem'),
(47, 'Ferdlian', 21, 'Pakem'),
(48, 'Kimmi', 18, 'Klaten, Jateng'),
(49, 'Ferdlian', 21, 'Pakem'),
(51, 'Rahmap', 12, 'Jineman.Kloposawit, Girikerto, Turi, Sleman'),
(52, 'Rahma Purnama', 12, 'Jineman.Kloposawit, Girikerto, Turi, Sleman'),
(53, 'Rahma Purnama', 12, 'Jineman.Kloposawit, Girikerto, Turi, Sleman, DIY RT/RW 004/006'),
(54, 'Rahma Purnama', 12, 'Jineman.Kloposawit, Girikerto, Turi, Sleman, DIY RT/RW 004/006'),
(56, 'Rahma Andita Purnama', 21, 'Jineman.Kloposawit, Girikerto, Turi, Sleman, DIY RT/RW 004/006'),
(57, 'Rahma Andita Purnama', 21, 'Jineman.Kloposawit, Girikerto, Turi, Sleman, DIY RT/RW 004/006'),
(58, 'Admin Trade Solution', 21, 'Jineman.Kloposawit, Girikerto, Turi, Sleman, DIY RT/RW 004/006'),
(59, 'Bismillah Lur', 21, 'Sleman, Yogyakarta'),
(60, 'Kimmi', 18, 'Klaten'),
(61, 'Sito Karuniawan', 28, 'Sleman');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
