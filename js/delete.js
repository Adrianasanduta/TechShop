function deleteProduct(id) {
    console.log("deleted product " + id);
 $.ajax({
        type: "DELETE",
        url: "php/deleteProduct.php?id=" + id,
        success: function (res) {
            loadData();
        }
    });
}

function deleteCategory(id) {
    console.log("deleted category " + id);
    $.ajax({
        type: "DELETE",
        url: "php/deleteCategory.php?id=" + id,
        success: function (res) {
            loadDataCat();
        }
    });
}

