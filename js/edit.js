function editProduct(id) {
    console.log("editing product " + id);
    $(".edit-dialog").attr("open", true);
};
// $(window).click(function (event) {
//     if (!$(event.target).closest(".edit-dialog").length) {
//         $(".edit-dialog").attr("open", false);
//     }
// });

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


