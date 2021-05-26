function addProduct(id) {
    console.log("new Product Added");
    let obj = {
        product_name: $("#productName").val(),
        product_desc: $("#productDesc").val(),
        product_price: Number($("#productPrice").val()),
        product_image: $("#productImage").val(),
        product_cat: Number($("#productCat").val()),
    };
    if (
        !obj.product_name ||
        !obj.product_desc ||
        !obj.product_price ||
        !obj.product_image ||
        !obj.product_cat
    ) {
        alert("No blank values allowed");
    } else {
        $.ajax({
            type: "POST",
            url: "php/addProduct.php",
            data: obj,
            success: function (res) {
                console.log(res);
                loadData();
                $("#productName").val("");
                $("#productDesc").val("");
                $("#productPrice").val("");
                $("#productImage").val("");

            },
        });
    }
}