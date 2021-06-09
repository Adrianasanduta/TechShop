function deleteProduct(id) {
    console.log("deleted product " + id);
    if (confirm("Do you want to permanently delete the product?")) {
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

    if (confirm("Do you want to permanently delete the category? By deleting the category you will also delete all the products related to it")) {
        // var products = [];
        // $('#product').each(function() {

        //     if ($("#id_brand").val() == id) { 
        //         products[i] = $("#id_products").val();
        //     }
        // });

        //   $(':checkbox:checked').each(function(i){
        //    products[i] = $(this).val();
        //   });


        $.ajax({
            data: { id: id },
            // type: "DELETE",
            method: 'POST',
            url: 'php/deleteCategory&Items.php',
            // url: "php/deleteCategory.php?id=" + id,
            success: function (res) {
                loadData();
                loadDataCat();
            }
        });
    }
    else {
        return false;
    }
}

