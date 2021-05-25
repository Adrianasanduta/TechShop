<?php
$name = $_POST['product_name'];
$desc = $_POST['product_desc'];
$price = $_POST['product_price'];
$image = $_POST['product_image'];
echo "$image";
    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "INSERT INTO product(product_name, product_price, product_description, image, id_brand) VALUES('$name', '$price', '$desc', '$image', 1)";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>