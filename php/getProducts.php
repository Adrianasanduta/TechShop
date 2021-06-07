<?php
    class Product{
        public $product_id;
        public $product_name;
        public $product_price;
        public $product_description;
        public $product_image;
        public $product_category;
    }

    $products = array();
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
    $query = "SELECT id_product AS id_prod, product_name AS prod_name,id_brand, product_price AS prod_price, product_description AS prod_desc, image AS prod_image FROM product";
    $data = mysqli_query($dbc, $query);
    while($row = mysqli_fetch_assoc($data)){
        $product = new Product();
        $product->product_id = $row['id_prod'];
        $product->product_name = $row['prod_name'];
        $product->product_price = $row['prod_price'];
        $product->product_description = $row['prod_desc'];
        $product->product_image = $row['prod_image'];
        $product->product_category = $row['id_brand']; 
        array_push($products, $product);
   }
   mysqli_close($dbc);
   echo json_encode($products);
?>