
//edit functionality for product
//function for displaying inputs modal with data from db as values

function showProductEditor(id) {
    console.log("editing product " + id);
    $("#id_product").val(id);



    // var reader = new FileReader();

    // reader.readAsDataURL();

    // reader.onload = function (event) {
    
    $.ajax({
        type: "GET",
        async: true,
        url: 'php/getProduct.php',
        data: {
            id: $("#id_product").val()
        },
        success: function (results) {
            $("#edit-product-modal").modal('show');
            dataArr = JSON.parse(results);
            $("#product_name").val(dataArr[0].product_name);
            $("#product_description").val(dataArr[0].product_description);
            $("#product_price").val(dataArr[0].product_price);
            $("#product_category option[value="+dataArr[0].id_brand+"]").attr('selected', 'selected');
            const dT = new ClipboardEvent('').clipboardData || 
            new DataTransfer();
            dT.items.add(new File(['foo'],dataArr[0].product_image ));
            product_image.files = dT.files;
            
        }
    });
//}
}

//function for saving changes and loading changes on page

$("#save-edited").on('click', function editData() {

    const id = $("#id_product").val();

    let photo = $("#product_image").prop("files")[0];

    let obj = {
        id_product: id,
        product_name: $("#product_name").val(),
        product_description: $("#product_description").val(),
        product_price: Number($("#product_price").val()),
        product_cat: Number($("#product_cat").val()),
        
    }

    var reader = new FileReader();

        reader.readAsDataURL(photo);

        reader.onload = function (event) {
        obj.product_image = event.target.result;
    $.ajax({
        type: "POST",
        url: "php/editProduct.php",
        data: obj,
        success: function (res) {
            
                loadData();
                $("#edit-product-modal").modal('hide');
        
        }
    
    });
        }
});



//edit functionality for category
//function for displaying inputs modal with data from db as values

function showCategoryEditor(id) {
    console.log("editing category " + id);
    $("#id_brand").val(id);

    $.ajax({
        type: "GET",
        async: true,
        url: 'php/getCategory.php',
        data: {
            cmd: 'edit_category',
            id: $("#id_brand").val()
        },
        success: function (results) {
            $(".edit-category-modal").modal('show');
            dataArr = JSON.parse(results);
            $("#brand_name").val(dataArr[0].brand_name);
        }
    });

}

//function for saving changes and loading changes on page

$("#save").on('click', function editSend() {

    const id = $("#id_brand").val();

    let obj = {
        id_brand: id,
        brand_name: $('#brand_name').val()
    }

    $.ajax({
        type: "POST",
        url: "php/editCategory.php",
        data: obj,
        success: function (res) {
            if ($('#brand_name').val() == '') {
                alert('Enter product name first');
                return false;
            } else {
                loadDataCat();
                $(".edit-category-modal").modal('hide');
            }
        }
    });

});


