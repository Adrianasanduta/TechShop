<?php
$name = $_POST['brand_name'];
echo "string";
    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "INSERT INTO brand (brand_name) VALUES('$name')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>