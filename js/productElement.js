function createProductElement(product) {
    const previewId = 'product-preview' + Math.random().toString().slice(2)
    return `
    <div class='col-xs-3 data-cards text-center'>
        <div class="card product-card" data-id=${product.product_id}>   
            <div class="edit-container">
                <i onclick="editProduct(${product.product_id})" class="far fa-edit"></i>
                <i onclick="deleteProduct(${product.product_id})"class="far fa-trash-alt"></i>
            </div>  
            <img src='${product.product_image}' class='card-img-top prod-image'>
            <div class='card-body'>
                <h5 class='card-title prod-title' data-bs-toggle="modal" data-bs-target="#${previewId}">${product.product_name}</h5>
                <p class='card-text prod-desc'>${product.product_description}</p>
                <h5 class='card-text prod-price'>${product.product_price} Lei</h5>
            </div>
        </div>
        <div class="modal fade" id="${previewId}" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header justify-content-end">
            <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal">X</button>
        </div>
                <div class="modal-body preview-modal">
                <img src='${product.product_image}' class='card-img-top preview-image'>
                <div class='card-body'>
                    <h5 class='card-title'>${product.product_name}</h5>
                    <p class='card-text'>${product.product_description}</p>
                    <h5 class='card-text prod-price'>${product.product_price} Lei</h5>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
}