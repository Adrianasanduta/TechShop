<?php
// 	// include database connection file

// 	$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
    

// 	// fetch data from student table..

// 	$output = "";
// 	if (isset($_POST['query'])) {
// 		$search = mysqli_real_escape_string($dbc, $_POST['query']);
// 		$sql = "SELECT * FROM product p JOIN brand b ON p.id_brand=b.id_brand WHERE p.product_name LIKE '%$search%' || p.product_description LIKE '%$search%' || 
// 				p.product_price LIKE '%$search%' || b.brand_name LIKE '%$search%'";
// 	}else{
// 		$sql = "SELECT * FROM students ORDER BY id DESC";
// 	}
// 	$query = mysqli_query($dbc, $sql);
// 	if (mysqli_num_rows($query) > 0) {
// 		while ($row = mysqli_fetch_assoc($query)) {
// 		$output .= `<div class='col-xs-3 data-cards text-center'>
// 		<div class="card product-card" data-id={$row['product_id']}>   
// 			<div class="edit-container">
// 				<i onclick="editProduct({$row['product_id']})" class="far fa-edit"></i>
// 				<i onclick="deleteProduct({$row['product_id']})"class="far fa-trash-alt"></i>
// 			</div>  
// 			<img src='{$row['product_image']}' class='card-img-top prod-image'>
// 			<div class='card-body'>
// 				<h5 class='card-title prod-title'>{$row['product_name']}</h5>
// 				<p class='card-text prod-desc'>{$row['product_description']}</p>
// 				<h5 class='card-text'>{$row['product_price']} Lei</h5>
// 			</div>
// 		</div>
// 	</div>`;
// 		}
// 		echo $output;
// 	}else{
// 		echo "<h5>No record found</h5>";
// 	}


//    mysqli_close($dbc);




class Product{
	public $product_id;
	public $product_name;
	public $product_price;
	public $product_description;
	public $product_image;
}

$search = $_REQUEST['search'];
$products = array();
$dbc = mysqli_connect('localhost', 'root', '', 'techshop');
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

