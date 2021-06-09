<?php
    $name = $_POST['brand_name'];
    echo "string";
    if(explode(":",$_SERVER["HTTP_HOST"])[0] == "localhost") {
        $host = getenv("TECHSHOP_HOST");
        $user = getenv("TECHSHOP_USER");
        $password = getenv("TECHSHOP_PASSWORD");
        $dbName = getenv("TECHSHOP_DB_NAME");
        $dbc = mysqli_connect($host, $user, $password, $dbName);
    } else {
      //  $dbc = mysqli_connect(getenv('TECHSHOP_HOST'), getenv('TECHSHOP_USER'), getenv('TECHSHOP_PASSWORD'), getenv('TECHSHOP_DB_NAME'));
    }      
    
    $query = "INSERT INTO brand (brand_name) VALUES('$name')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>