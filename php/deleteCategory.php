<?php
$idFromGet = $_GET['id'];

$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
$query = "DELETE FROM brand WHERE brand.id_brand=$idFromGet";
$data = mysqli_query($dbc, $query);
mysqli_close($dbc);
?>