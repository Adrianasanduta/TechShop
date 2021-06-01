//Add a click listener to our search_button.
$('#search_button').click(function () {
    //If the search_button was clicked,
    //get the value from the search_box.
    var search_term = $('#search_box').val().trim();
    if (search_term.length > 0) {

        $.ajax({
            url: 'php/searchRequest.php',
            data: {
                search: search_term
            },
            success: function (res) {
                res = JSON.parse(res);
                var result = "";
                if (res.length > 0) {
                    for (let i = 0; i < res.length; i++) {
                        result += "<div class='col-xs-3 data-cards text-center'>";
                        result += `<div class="card product-card" data-id=${res[i].product_id}>`;
                        result += "<img src='" + res[i].product_image + "' class='card-img-top prod-image'>";
                        result += "<div class='card-body'>";
                        result += "<h5 class='card-title prod-title'>" + res[i].product_name + "</h5>";
                        result += "<p class='card-text prod-desc'>" + res[i].product_description + "</p>";
                        result += "<h5 class='card-text prod-price'>" + res[i].product_price + " Lei</h5>";
                        result += "</div>";
                        result += "</div>";
                        result += "</div>";
                    }
                }
                else {
                    result += "<h2 style='padding:20px 10px 30px;'>No results found</h2>";
                }
                $("#display-products").html(result);


            }
        });
    }
});