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
                console.log(res);
                loadDataCat();
                $('#categoryName').val("");
            }
        });
    }
}
// function onFileInputChange(input) {
//     let photo = input.files[0];
//     var reader = new FileReader();
//     var imgtag = input.parentElement.parentElement.getElementsByClassName("avatar-image")[0];
//     imgtag.title = photo.name;
//     reader.onload = function (event) {
//         imgtag.src = event.target.result;
//     };
//     reader.readAsDataURL(photo);
// }
