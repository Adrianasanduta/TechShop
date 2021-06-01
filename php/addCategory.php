<?php
$name = $_POST['brand_name'];
echo "string";
    //$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
    $query = "INSERT INTO brand (brand_name) VALUES('$name')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>