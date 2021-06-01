<?php

class Product{
        public $product_id;
        public $product_name;
        public $product_price;
        public $product_description;
        public $product_image;
}
$columnName = $_GET['columnName'];
$sort = $_GET['sort'];
$products = array();
//$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
$dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop'); 
$query = "SELECT id_product AS id_prod, product_name AS prod_name, product_price AS prod_price, product_description AS prod_desc, image AS prod_image FROM product ORDER BY `{$columnName}` ";
if(($sort==1))
 {
$query .= 'ASC';
 }
 else if($sort==0)
 {
$query .= 'DESC';
 }


$data = mysqli_query($dbc, $query);
while ($row = mysqli_fetch_assoc($data)) {
    $product = new Product();
    $product->product_id = $row['id_prod'];
    $product->product_name = $row['prod_name'];
    $product->product_price = $row['prod_price'];
    $product->product_description = $row['prod_desc'];
    $product->product_image = $row['prod_image'];
    array_push($products, $product);
}
mysqli_close($dbc);
echo json_encode($products);
