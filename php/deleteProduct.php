<?php
$idFromGet = $_GET['id'];

$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
$query = "DELETE FROM product WHERE product.id_product=$idFromGet";
$data = mysqli_query($dbc, $query);
mysqli_close($dbc);
?>