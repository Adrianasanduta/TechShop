-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2021 at 10:21 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id_brand` int(11) NOT NULL,
  `brand_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id_brand`, `brand_name`) VALUES
(1, 'Apple'),
(5, 'Asus'),
(7, 'Huawei'),
(6, 'Nokia'),
(4, 'Philips'),
(3, 'Samsung'),
(2, 'Xiaomi');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(20) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_price` int(10) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL,
  `id_brand` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `product_name`, `product_price`, `product_description`, `image`, `id_brand`) VALUES
(1, 'iPhone 11', 12999, '6.1-inch Liquid Retina HD display with True Tone1\r\nGlass and aluminum design\r\nWater resistant to a depth of 2 meters for up to 30 minutes (IP68)5', 'images/AppleiPhone1164GBBlack-536x536.jpg', 1),
(2, 'iPhone 12 Pro', 23499, '6.1-inch Super Retina XDR display with HDR and True Tone1\r\nCeramic Shield front, textured matte glass back and stainless steel design\r\nWater-resistant to a depth of 6 meters for up to 30 minutes', 'images/iphone_12_pro_graphite1_e_3-536x536.png', 1),
(3, 'Nokia 2.2 Dual Sim', 2399, 'SISTEM DE OPERARE\r\nAndroid 9.0 (Pie); One UI\r\nCAMERA Duo: 5 Mp + 13 Mp\r\nDISPLAY 5.7\", 720 x 1520 Dynamic AMOLED\r\nPROCESOR Qualcomm SDM439 Snapdragon 439 (12 nm)\r\nMediaTek Helio A22, A53 cores 4 x 2GHz\r\n\r\nAdreno 505\r\n\r\nMEMORIE\r\n16 GB, 2 GB RAM\r\n\r\nBATERIE/A', 'images/7f6105a58bb7eb369e9f4457a2769e14-536x536.jpg', 6),
(4, 'Redmi Note 10 Dual Sim', 3999, 'SISTEM DE OPERARE: Android 11, MIUI 12\r\nPROCESOR Qualcomm SDM678 Snapdragon 678 (11 nm)\r\nMEMORIE: 4 GB RAM 64GB\r\nGENERAL: USB Type-C 2.0 microSDXC (dedicated slot)', 'images/22grey1-536x536.png', 2),
(5, 'Galaxy M51 Dual Sim M515', 7449, 'Operation System: Android\r\nStorage: 128 GB\r\nWeight (G) 213\r\nVideo resolution 4K\r\nPROCESOR: Octa Core\r\nUSB Type-C, USB 2.0\r\n', 'images/Telefon-SAMSUNG-Galaxy-M51-Black_2-536x536.jpg', 3),
(6, 'Galaxy A52 (A525)', 6449, 'Operation system: Android 11, One UI 3.1\r\nDisplay: 6.5\", 1080 x 2400 Super AMOLED\r\nProcessor: Qualcomm SM7125 Snapdragon 720G (8 nm)\r\nMemory: 128GB 4GB RAM\r\nBattery: 4500 mAh\r\nDimensions: 159.9 x 75.1 x 8.4 mm, 189 g\r\nPorts:\r\nDual SIM (Nano-SIM)\r\nmicroSDX', 'images/SamsungGalaxyA525G-536x536.png', 3),
(7, 'P40 5G Dual Sim', 11999, 'Operation system: Android 10.0 (AOSP + HMS); EMUI 10.1\r\nCamera: MAIN CAMERA - 50 MP + 8 MP + 16 MP, SELFIE CAMERA - 32 MP\r\nDisplay: 6.1 inches, 1080 x 2340 pixels\r\nMemory: 128 GB 8GB RAM\r\nBattery: 3800 mAh\r\nDimension: 148.9 x 71.1 x 8.5 mm, 175 g\r\n', 'images/huawei-p40-5g-dual-sim-128gb-gold-8gb-ram.jpg', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id_brand`),
  ADD UNIQUE KEY `brand_name` (`brand_name`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_brand` (`id_brand`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `foreign` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id_brand`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
