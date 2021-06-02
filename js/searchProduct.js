//Add a click listener to our search_button.
$('#search_button').click(function () {
    //If the search_button was clicked,
    //get the value from the search_box.
    var search_term = $('#search_box').val().trim();
    if (search_term.length > 0) {

        $.ajax({
            url: 'php/searchRequest.php',
            data: {
                search: search_term
            },
            success: function (res) { 
                res = JSON.parse(res);
                var result = "";
                if (res.length > 0) {
                    for (let i = 0; i < res.length; i++) {
                        result += createProductElement(res[i])
                    }
                }
                else {
                    result += "<h2 style='padding:20px 10px 30px;'>No results found</h2>";
                }
                $("#display-products").html(result);


            }
        });
    }
});