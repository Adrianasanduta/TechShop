function sortData(columnName, order) {
    console.log(columnName, order)

    if (order == 'asc') {
        var sort = 1;

        $.ajax({
            type: "GET",
            data: { columnName: columnName, sort: sort },
            url: "php/sortProducts.php",
            success: function (res) {

                res = JSON.parse(res);
                var result = "";
                for (let i = 0; i < res.length; i++) {
                    result += createProductElement(res[i])
                }
                $("#display-products").html(result);
            }
        });
    }


    else if (order == 'desc') {
        var sort = 0;
        $.ajax({
            type: "GET",
            url: "php/sortProducts.php",
            data: { columnName: columnName, sort: sort },
            success: function (res) {

                res = JSON.parse(res);
                var result = "";
                for (let i = 0; i < res.length; i++) {
                    result += createProductElement(res[i])
                }
                $("#display-products").html(result);
            }
        });

    }
}
