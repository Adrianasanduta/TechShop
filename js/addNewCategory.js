function addNewCategory() {
    console.log("new Category Added");
    let obj = {
        brand_name: $('#categoryName').val()
    };
    if ($('#categoryName').val() == "") {
        alert('No blank values allowed')
    }
    else {
        $.ajax({
            type: "POST",
            url: "php/addCategory.php",
            data: obj,
            success: function (res) {
                console.log(res)
                loadData();
                loadDataCat();
                $('#categoryName').val("");
            }
        });
    }
}
