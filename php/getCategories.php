<?php
    class Category{
        public $brand_id;
        public $brand_name;
    }

    $categories = array();
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
    $query = "SELECT id_brand, brand_name FROM brand ORDER BY brand.id_brand ASC";
    $data = mysqli_query($dbc, $query);
   while($row = mysqli_fetch_assoc($data)){
        $category = new category();
        $category->brand_id = $row['id_brand'];
        $category->brand_name = $row['brand_name'];
        array_push($categories, $category);
   }
   mysqli_close($dbc);
   echo json_encode($categories);
?>
