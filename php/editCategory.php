<?php
$brand_name = $_POST['brand_name'];
$id = $_POST['id'];

    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "UPDATE brand SET brand_name='$name' WHERE brand.brand_name=$brand_name";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>