<?php
    $idFromGet = $_GET['id'];

    if(explode(":",$_SERVER["HTTP_HOST"])[0] == "localhost") {
        $host = getenv("TECHSHOP_HOST");
        $user = getenv("TECHSHOP_USER");
        $password = getenv("TECHSHOP_PASSWORD");
        $dbName = getenv("TECHSHOP_DB_NAME");
        $dbc = mysqli_connect($host, $user, $password, $dbName);
    } else {
       // $dbc = mysqli_connect()
       //put here aws credentials
    }
    $query = "DELETE FROM product WHERE product.id_product=$idFromGet";
    $data = mysqli_query($dbc, $query);
    mysqli_close($dbc);
?>