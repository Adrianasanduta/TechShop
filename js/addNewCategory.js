function addNewCategory() {
    console.log("new Category Added");
    let obj = {
        brand_name: $('#categoryName').val().trim(),
    };
    if ($('#categoryName').val().trim() == "") {
        alert('No blank values allowed');
    }
    else {
        $.ajax({
            type: "POST",
            url: "php/addCategory.php",
            data: obj,
            success: function (res) {
                $("#staticBackdrop").modal("hide");
                loadDataCat();
                $('#categoryName').val("");
            }
        });
    }
}
