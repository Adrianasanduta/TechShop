<?php
$name = $_POST['name'];
$id = $_POST['id'];
$price= $_POST['price'];
$description=$_POST['description'];
$image=$_POST['image'];

    $dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    $query = "UPDATE product SET product_name='$name', product_price='$price', product_description='$description', image='$image' WHERE product.id_product=$id";
    //think about adding image
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>