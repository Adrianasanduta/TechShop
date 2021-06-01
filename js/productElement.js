function createProductElement(product) {
    return `
    <div class='col-xs-3 data-cards text-center'>
        <div class="card product-card" data-id=${product.product_id}>   
            <div class="edit-container">
                <i onclick="editProduct(${product.product_id})" class="far fa-edit"></i>
                <i onclick="deleteProduct(${product.product_id})"class="far fa-trash-alt"></i>
            </div>  
            <img src='${product.product_image}' class='card-img-top prod-image'>
            <div class='card-body'>
                <h5 class='card-title prod-title'>${product.product_name}</h5>
                <p class='card-text prod-desc'>${product.product_description}</p>
                <h5 class='card-text prod-price'>${product.product_price} Lei</h5>
            </div>
        </div>
    </div>`;
}