<?php

class Product{
	public $product_id;
	public $product_name;
	public $product_price;
	public $product_description;
	public $product_image;
}

$search = $_REQUEST['search'];
$products = array();
//$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
$dbc = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop'); 
$query = "SELECT p.id_product AS id_prod, p.product_name AS prod_name, p.product_price AS prod_price, p.product_description AS prod_desc, p.image AS prod_image FROM product p JOIN brand b ON p.id_brand=b.id_brand WHERE p.product_name LIKE '%$search%' || p.product_description LIKE '%$search%' || p.product_price LIKE '%$search%' || b.brand_name LIKE '%$search%'";


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

