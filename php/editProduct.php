<?php
$name = $_POST['product_name'];
$id = $_POST['id_product'];
$price= $_POST['product_price'];
$description=$_POST['product_description'];
$image=$_POST['product_image'];
$brand=$_POST['product_cat'];

$host = getenv("TECHSHOP_HOST");
$user = getenv("TECHSHOP_USER");
$password = getenv("TECHSHOP_PASSWORD");
$dbName = getenv("TECHSHOP_DB_NAME");
$dbc = mysqli_connect($host, $user, $password, $dbName);

$query = "UPDATE product SET product_name='$name', product_price='$price', product_description='$description', image='$image', id_brand='$brand' WHERE product.id_product=$id";
//think about adding image
$data = mysqli_query($dbc, $query);
mysqli_close($dbc);
?>
