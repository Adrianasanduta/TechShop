<?php
$name = $_POST['product_name'];
$desc = $_POST['product_desc'];
$price = $_POST['product_price'];
$image = $_POST['product_image'];
$cat_id = $_POST['product_cat'];
echo "$cat_id";
    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "INSERT INTO product(product_name, product_price, product_description, image, id_brand) VALUES('$name', '$price', '$desc', '$image', '$cat_id')";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>