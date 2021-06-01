<?php
$idFromGet = $_GET['id'];

//$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
$dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
$query = "DELETE FROM product WHERE product.id_product=$idFromGet";
$data = mysqli_query($dbc, $query);
mysqli_close($dbc);
?>