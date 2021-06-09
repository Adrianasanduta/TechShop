<?php


if (explode(":", $_SERVER["HTTP_HOST"])[0] == "localhost") {
    $host = getenv("TECHSHOP_HOST");
    $user = getenv("TECHSHOP_USER");
    $password = getenv("TECHSHOP_PASSWORD");
    $dbName = getenv("TECHSHOP_DB_NAME");
    $dbc = mysqli_connect($host, $user, $password, $dbName);
} else {
   //  $dbc = mysqli_connect(getenv('TECHSHOP_HOST'), getenv('TECHSHOP_USER'), getenv('TECHSHOP_PASSWORD'), getenv('TECHSHOP_DB_NAME'))
}


// if (isset($_POST["products"])) {
//     foreach ($_POST["products"] as $product) {
        $id = $_REQUEST['id'];
        $query = "INSERT INTO deleted_items (
    id_product,
    product_name,
    product_price,
    product_description,
    image,
    id_brand
) VALUES (
    SELECT
    id_product,
    product_name,
    product_price,
    product_description,
    image,
    id_brand
    FROM
        product
    WHERE
        product.id_brand = $id
);";
        $result = mysqli_query($dbc, $query);
        $sql = "DELETE FROM product WHERE product.id_brand=$id";
        $result = mysqli_query($dbc, $sql);
  //  }
// }
// $id = $_REQUEST['id'];
$query_brand = "DELETE FROM brand WHERE brand.id_brand=$id";
$data = mysqli_query($dbc, $query_brand);
mysqli_close($dbc);
