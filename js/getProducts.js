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
                result += `
                <div class='col-xs-3 data-cards text-center'>
                    <div class="card product-card" data-id=${res[i].product_id}>   
                        <div class="edit-container">
                            <i onclick="editProduct(${res[i].product_id})" class="far fa-edit"></i>
                            <i onclick="deleteProduct(${res[i].product_id})"class="far fa-trash-alt"></i>
                        </div>  
                        <img src='${res[i].product_image}' class='card-img-top prod-image'>
                        <div class='card-body'>
                            <h5 class='card-title prod-title'>${res[i].product_name}</h5>
                            <p class='card-text prod-desc'>${res[i].product_description}</p>
                            <h5 class='card-text prod-price'>${res[i].product_price} Lei</h5>
                        </div>
                    </div>
                </div>`;
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
                result += `
                <button type='button' class='list-group-item list-group-item-action category-list'>
                    <div class="edit-container">
                        <i onclick="showCategoryEditor(${res[i].brand_id})" class="far fa-edit"></i>
                        <i onclick="deleteCategory(${res[i].brand_id})"class="far fa-trash-alt"></i>
                    </div>  
                    <div> ${res[i].brand_name}</div>
                </button>`;
            }
            $("#display-categories").html(result);
        }
    });
}

