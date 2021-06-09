function addProduct(id) {
    console.log("new Product Added");
    let photo = $("#productImage").prop("files")[0];
    let obj = {
        product_name: $("#productName").val().trim(),
        product_desc: $("#productDesc").val().trim(),
        product_price: Number($("#productPrice").val()),
        product_cat: Number($("#productCat").val()),
    };
    if (
        $("#productName").val()=="" ||
        $("#productDesc").val()=="" ||
        $("#productPrice").val()==""
    ) {
        alert("No blank or invalid values allowed");
    } else if( $("#productPrice").val()=="0") {
        alert("Price should be more than 0")
    }
    else {
        var reader = new FileReader();

        reader.readAsDataURL(photo);

        reader.onload = function (event) {
            obj.product_image = event.target.result;
            $.ajax({
                type: "POST",
                url: "php/addProduct.php",
                data: obj,
                success: function (res) {
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

