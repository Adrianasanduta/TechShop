function deleteProduct(id) {
    console.log("deleted product " + id);
    if (confirm("Do you want to permanently delete the category?")) {
        $.ajax({
            type: "DELETE",
            url: "php/deleteProduct.php?id=" + id,
            success: function (res) {
                loadData();
            }
        });
    }
}

function deleteCategory(id) {
    console.log("deleted category " + id);
    if (confirm("Do you want to permanently delete the product?")) {
        $.ajax({
            type: "DELETE",
            url: "php/deleteCategory.php?id=" + id,
            success: function (res) {
                loadDataCat();
            }
        });
    }
}
