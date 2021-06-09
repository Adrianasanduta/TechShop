<?php
    $brand_name = $_POST['brand_name'];
    $id_brand = $_POST['id_brand'];
    if(explode(":",$_SERVER["HTTP_HOST"])[0] == "localhost") {
        $host = getenv("TECHSHOP_HOST");
        $user = getenv("TECHSHOP_USER");
        $password = getenv("TECHSHOP_PASSWORD");
        $dbName = getenv("TECHSHOP_DB_NAME");
        $dbc = mysqli_connect($host, $user, $password, $dbName);
    } else {
 // $dbc = mysqli_connect(getenv('TECHSHOP_HOST'), getenv('TECHSHOP_USER'), getenv('TECHSHOP_PASSWORD'), getenv('TECHSHOP_DB_NAME'))
    }
    $query = "UPDATE brand SET brand_name='$brand_name' WHERE brand.id_brand=$id_brand";
    $data = mysqli_query($dbc, $query);
    mysqli_close($dbc);
?>