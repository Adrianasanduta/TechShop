function sortData(columnName, order) {
    console.log(columnName, order)
    console.log(window.products)
    const tempProducts = [...window.products] //copy products from window
    tempProducts.sort((a, b) => {
        let aField = a[columnName].toUpperCase();
        let bField = b[columnName].toUpperCase();

        if (columnName === "product_price") {
            aField = Number(aField);
            bField = Number(bField);
        }

        if (aField < bField) {
            return order == 'asc' ? -1 : 1;
        }

        if (aField > bField) {
            return order == 'asc' ? 1 : -1;
        }

        return 0;
    })
    let result = "";
    for (let i = 0; i < tempProducts.length; i++) {
        result += createProductElement(tempProducts[i])
    }
    $("#display-products").html(result);
}
