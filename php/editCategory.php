<?php
$brand_name = $_POST['brand_name'];
$id_brand = $_POST['id_brand'];

    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "UPDATE brand SET brand_name='$brand_name' WHERE brand.id_brand=$id_brand";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>