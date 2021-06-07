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
            window.products = res;
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += createProductElement(res[i]);
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
            console.log(res);
            res = JSON.parse(res);
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += `
                <button type='button' class='list-group-item list-group-item-action category-list'>
                    <div class="edit-container">
                        <i onclick="showCategoryEditor(${res[i].brand_id})" class="far fa-edit"></i>
                        <i onclick="deleteCategory(${res[i].brand_id})"class="far fa-trash-alt"></i>
                    </div>  
                    <div onclick="showProductsByCategory(${res[i].brand_id})"> ${res[i].brand_name}</div>
                </button>`;
            }
            $("#display-categories").html(result);
        }
    });
}
function showProductsByCategory(id) {
    console.log(id);
    var result = "";
    const products = window.products;
    for (let i = 0; i < products.length; i++) {
        if (products[i].product_category == id || id === null) {
            result += createProductElement(products[i])
        }
    }
    if (result == "") {
        result += "<h2 style='padding:20px 10px 30px;'>No products of this brand</h2>";
    }
    $("#display-products").html(result);
}

