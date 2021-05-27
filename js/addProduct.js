function addProduct(id) {
    console.log("new Product Added");
    let photo = $("#productImage").prop("files")[0];
    let obj = {
        product_name: $("#productName").val(),
        product_desc: $("#productDesc").val(),
        product_price: Number($("#productPrice").val()),
        product_cat: Number($("#productCat").val()),
    };

    if (
        !obj.product_name ||
        !obj.product_desc ||
        !obj.product_price ||
        !photo ||
        !obj.product_cat
    ) {
        alert("No blank values allowed");
    } else {
        var reader = new FileReader();

        reader.readAsDataURL(photo);

        reader.onload = function (event) {
            obj.product_image = event.target.result;
            $.ajax({
                type: "POST",
                url: "php/addProduct.php",
                data: obj,
                success: function (res) {
                    console.log(res);
                    $("#add-product-modal").modal("hide");
                    loadData();
                    $("#productName").val("");
                    $("#productDesc").val("");
                    $("#productPrice").val("");
                    $("#productImage").val("");

                },
            });
        };

    }
}

