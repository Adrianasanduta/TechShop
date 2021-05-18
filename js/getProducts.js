$(document).ready(function () {
    loadData();
    loadDataCat();
});

function loadData() {
    $.ajax({
        type: "GET",
        url: "php/getProducts.php",
        success: function (res) {

            res = JSON.parse(res);
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += "<div class='col-xs-3 data-cards'>";
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
function loadDataCat() {
    $.ajax({
        type: "GET",
        url: "php/getCategories.php",
        success: function (res) {

            res = JSON.parse(res);
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += "<div class='list-group list-group-flush regular'>";
                result += "<button type='button' class='list-group-item list-group-item-action '>"+res[i].brand_name+"</button>";
                result += "</div>";
            }
            $("#display-categories").html(result);
        }
    });
}
