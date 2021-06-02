<?php  
$conn = mysqli_connect('techshopdb.c5ixubicto8v.us-east-2.rds.amazonaws.com', 'admin', 'Ecaterina', 'techshop');
$sql = "SELECT * FROM brand where id_brand='".$_REQUEST['id']."'";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
					$i=-1;
					while($row = $result->fetch_assoc()) {
						$i++;
						$arr[$i]['id_brand'] = $row["id_brand"];
						$arr[$i]['brand_name'] = $row["brand_name"];
					}
				} else {
					echo "0 results";
				}
				$conn->close();
				echo json_encode($arr);
