-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 01, 2022 at 05:15 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farmer`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

DROP TABLE IF EXISTS `admin_login`;
CREATE TABLE IF NOT EXISTS `admin_login` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ad_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`ad_id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `bookfeedback`
--

DROP TABLE IF EXISTS `bookfeedback`;
CREATE TABLE IF NOT EXISTS `bookfeedback` (
  `b_feedbackid` int(11) NOT NULL AUTO_INCREMENT,
  `cust_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `bf_desc` varchar(30) NOT NULL,
  PRIMARY KEY (`b_feedbackid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookfeedback`
--

INSERT INTO `bookfeedback` (`b_feedbackid`, `cust_id`, `book_id`, `bf_desc`) VALUES
(1, 3, 2, 'good'),
(2, 3, 3, 'nice'),
(3, 3, 4, 'fffff'),
(4, 3, 5, 'nice'),
(5, 13, 4, 'nice..'),
(6, 4, 3, 'super'),
(7, 3, 14, 'good');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `booking_id` int(10) NOT NULL AUTO_INCREMENT,
  `booking_date` date NOT NULL,
  `cust_id` int(10) NOT NULL,
  `product_id` varchar(20) NOT NULL,
  `quantity` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `status` int(10) NOT NULL,
  `ship_date` date DEFAULT NULL,
  `deli_date` date DEFAULT NULL,
  `ref_status` int(11) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `booking_date`, `cust_id`, `product_id`, `quantity`, `price`, `status`, `ship_date`, `deli_date`, `ref_status`) VALUES
(1, '2022-06-03', 4, '105', 10, 2500, 2, NULL, NULL, 1),
(2, '2022-06-03', 4, '105', 10, 2500, 2, NULL, NULL, 1),
(3, '2022-06-03', 4, '105', 22, 5500, 20, '2022-06-04', '2022-06-04', 0),
(4, '2022-06-03', 4, '102', 2, 300, 6, '2022-06-03', '2022-06-03', 0),
(5, '2022-06-03', 4, '105', 3, 750, 1, NULL, NULL, 0),
(6, '2022-06-03', 4, '105', 10, 2500, 2, NULL, NULL, 1),
(7, '2022-06-03', 3, '105', 33, 8250, 2, NULL, NULL, 1),
(8, '2022-06-03', 4, '105', 1, 250, 2, NULL, NULL, 0),
(9, '2022-06-03', 3, '105', 33, 8250, 2, NULL, NULL, 0),
(10, '2022-06-04', 4, '102', 2, 300, 0, NULL, NULL, 0),
(11, '2022-06-05', 4, '105', 10, 2500, 6, '2022-06-05', '2022-06-05', 0),
(12, '2022-06-05', 3, '105', 1, 250, 6, '2022-06-05', '2022-06-05', 0),
(13, '2022-06-06', 4, '105', 2, 500, 1, NULL, NULL, 0),
(14, '2022-06-06', 3, '105', 10, 2500, 20, '2022-06-06', '2022-06-06', 0),
(15, '2022-06-06', 3, '107', 5, 1000, 1, NULL, NULL, 0),
(16, '2022-06-06', 3, '107', 100, 20000, 2, NULL, NULL, 1),
(17, '2022-06-06', 3, '105', 1, 250, 0, NULL, NULL, 0),
(18, '2022-06-20', 4, '102', 2, 300, 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(25) NOT NULL,
  `cat_desc` varchar(200) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_desc`) VALUES
(1, 'seeds', 'for farming'),
(2, 'fertilizers', 'for fast growthing of plants'),
(3, 'seeds', 'for farming'),
(4, 'crops', 'for farming'),
(7, 'seeds', 'fjhgjdhg'),
(8, 'seeds', 'fjhgjdhg');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `cust_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `place` varchar(20) NOT NULL,
  `pincode` varchar(11) NOT NULL,
  `phone_no` varchar(12) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `name`, `email`, `place`, `pincode`, `phone_no`, `user_name`, `password`) VALUES
(1, 'Goodwin Jose', 'g@mail.com', 'asfaf', '12345', '12234566', 'asd', 'aad'),
(4, 'ammu', 'ammu@gmail.com', 'angamaly', '683572', '123456354', 'ammu', '12345'),
(3, 'abiraj', 'abi@gmail.com', 'perumbavoor', '1234567', '345678765', 'abiraj', 'abiraj'),
(5, 'aibel manoj', 'manojmu863@gmail.com', 'angamaly', '683572', '684856788', 'KMCkomban', '1234567890'),
(9, '1111111111', 'h@g.com', '111111', '111', '1111', '1111', '11111'),
(10, 'aa', 'a@gmail.com', 'dfdf', '1234', '1234322', '1111', '111111'),
(11, 'goodwin', 'g@gmai.com', 'angamalay', '123456', '1234567890', 'goodwin', 'goodwin'),
(12, 'vidhya', 'gjj@hh.com', 'angamaly', '67890', '', 'abcd', 'abcde'),
(13, 'appu', 'a@gmail.com', 'angamaly', '4895635', '12896541236', 'appu', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `feedback_desc` varchar(50) NOT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `product_id`, `feedback_desc`) VALUES
(1, 102, 'good'),
(2, 103, 'bad'),
(5, 101, 'very good'),
(6, 102, 'very good'),
(7, 101, 'GOOD'),
(8, 2, '77'),
(9, 2, 'RGEG');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(25) NOT NULL,
  `cat_id` varchar(25) NOT NULL,
  `product_image` varchar(250) NOT NULL,
  `product_price` float NOT NULL,
  `status` int(11) NOT NULL,
  `product_q` int(25) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=108 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `cat_id`, `product_image`, `product_price`, `status`, `product_q`) VALUES
(101, 'beans', '1', 'jpg', 150, 1, 3000),
(102, 'potatos', '4', 'jpg', 150, 0, 9996),
(103, 'onion', '5', 'jpg', 250, 1, 300),
(104, 'aaa', '1', 'jpg', 11, 1, 20),
(105, 'tomato', '4', 'jpg', 250, 0, 4976),
(106, 'waterlemon', 'null', 'jpg', 150, 0, 44444),
(107, 'waterlemon', '1', 'jpg', 200, 0, 19895);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `datetime` date DEFAULT NULL,
  `question_desc` varchar(200) NOT NULL,
  `reply_desc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `customer_id`, `datetime`, `question_desc`, `reply_desc`) VALUES
(1, 3, NULL, 'what is............', 'nothong');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
