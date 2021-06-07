<?php  
$conn = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
$sql = "SELECT * FROM product p JOIN brand b ON p.id_brand=b.id_brand where id_product='".$_REQUEST['id']."'";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
					$i=-1;
					while($row = $result->fetch_assoc()) {
						$i++;
						$arr[$i]['id_product'] = $row["id_product"];
						$arr[$i]['product_name'] = $row["product_name"];
                        $arr[$i]['product_description'] = $row["product_description"];
                        $arr[$i]['product_price'] = $row["product_price"];
                        $arr[$i]['product_image'] = $row["image"];
                        $arr[$i]['id_brand'] = $row["id_brand"];
                        $arr[$i]['brand_name'] = $row["brand_name"];
					}
				} else {
					echo "0 results";
				}
				$conn->close();
				echo json_encode($arr);
