<?php
    $idFromGet = $_GET['id'];

    $host = getenv("TECHSHOP_HOST");
    $user = getenv("TECHSHOP_USER");
    $password = getenv("TECHSHOP_PASSWORD");
    $dbName = getenv("TECHSHOP_DB_NAME");
    $dbc = mysqli_connect($host, $user, $password, $dbName);
    $query = "DELETE FROM brand WHERE brand.id_brand=$idFromGet";
    $data = mysqli_query($dbc, $query);
    mysqli_close($dbc);
?>