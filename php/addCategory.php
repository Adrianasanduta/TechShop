<?php
    $name = $_POST['brand_name'];
    echo "string";
    $host = getenv("TECHSHOP_HOST");
    $user = getenv("TECHSHOP_USER");
    $password = getenv("TECHSHOP_PASSWORD");
    $dbName = getenv("TECHSHOP_DB_NAME");
    $dbc = mysqli_connect($host, $user, $password, $dbName);       
    //$dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
    $query = "INSERT INTO brand (brand_name) VALUES('$name')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>