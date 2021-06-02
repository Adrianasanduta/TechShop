<?php
    class Category{
        public $brand_id;
        public $brand_name;
    }

    $categories = array();
    //$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
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