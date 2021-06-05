<?php
    $brand_name = $_POST['brand_name'];
    $id_brand = $_POST['id_brand'];
    $host = getenv("TECHSHOP_HOST");
    $user = getenv("TECHSHOP_USER");
    $password = getenv("TECHSHOP_PASSWORD");
    $dbName = getenv("TECHSHOP_DB_NAME");
    $dbc = mysqli_connect($host, $user, $password, $dbName);
    $query = "UPDATE brand SET brand_name='$brand_name' WHERE brand.id_brand=$id_brand";
    $data = mysqli_query($dbc, $query);
    mysqli_close($dbc);
?>