function sortData(columnName, order) {
  console.log(columnName, order)

    if(order=='asc'){
        var sort = 1;
           
            $.ajax({
                type: "GET",
                data: { columnName: columnName, sort: sort },
                url: "php/sortProducts.php",
                success: function (res) {
                   
                res = JSON.parse(res);
                var result = "";
                for (let i = 0; i < res.length; i++) {
                    result += "<div class='col-xs-3 data-cards text-center'>";
                    result += `<div class="card product-card" data-id=${res[i].product_id}>`;
                    result += "<img src='" + res[i].product_image + "' class='card-img-top prod-image'>";
                    result += "<div class='card-body'>";
                    result += "<h5 class='card-title prod-title'>" + res[i].product_name + "</h5>";
                    result += "<p class='card-text prod-desc'>" + res[i].product_description + "</p>";
                    result += "<h5 class='card-text'>" + res[i].product_price + " Lei</h5>";
                    result += "</div>";
                    result += "</div>";
                    result += "</div>";
                }
                $("#display-products").html(result);
                }
            });
    }

 
    else if (order=='desc') {
        var sort = 0;
        $.ajax({
            type: "GET",
            url: "php/sortProducts.php",
            data: { columnName: columnName, sort: sort },
            success: function (res) {
               
            res = JSON.parse(res);
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += "<div class='col-xs-3 data-cards text-center'>";
                result += `<div class="card product-card" data-id=${res[i].product_id}>`;
                result += "<img src='" + res[i].product_image + "' class='card-img-top prod-image'>";
                result += "<div class='card-body'>";
                result += "<h5 class='card-title prod-title'>" + res[i].product_name + "</h5>";
                result += "<p class='card-text prod-desc'>" + res[i].product_description + "</p>";
                result += "<h5 class='card-text'>" + res[i].product_price + " Lei</h5>";
                result += "</div>";
                result += "</div>";
                result += "</div>";
            }
            $("#display-products").html(result);
            }
        });
    
    }
}
