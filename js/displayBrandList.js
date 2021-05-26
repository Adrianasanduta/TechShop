function displayBrandList(id) {
    $.ajax({
        type: "GET",
        url: "php/getCategories.php",
        success: function (res) {
            res = JSON.parse(res);
            var result = "";
            for (let i = 0; i < res.length; i++) {
                result += `<option id="productCat${res[i].brand_id}" value="${res[i].brand_id}">${res[i].brand_name}</option>`;
            };
            $("#productCat").html(result);
        }
    });
}
