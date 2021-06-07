<?php  
    if(explode(":",$_SERVER["HTTP_HOST"])[0] == "localhost") {
        $host = getenv("TECHSHOP_HOST");
        $user = getenv("TECHSHOP_USER");
        $password = getenv("TECHSHOP_PASSWORD");
        $dbName = getenv("TECHSHOP_DB_NAME");
        $dbc = mysqli_connect($host, $user, $password, $dbName);
    } else {
       // $dbc = mysqli_connect()
       //put here aws credentials
    }
$sql = "SELECT * FROM product p JOIN brand b ON p.id_brand=b.id_brand where id_product='".$_REQUEST['id']."'";
				$result = $dbc->query($sql);
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
				$dbc->close();
				echo json_encode($arr);
