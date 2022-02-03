const productDOM = document.querySelector(".beneficiarios__container .row");


class UI {
    displayProducts(products) {
        let results = "";
        products.forEach(({
            id,
            link,
            title,
            description
        }) => {
            results += `
            <article class="beneficiario col-md-6">
                <div class="card__container">
                    <div class="card demo-card">
                        <div class="card-image">
                            <span class="demo-card-image bg${id}"></span>
                            <a href="${link}" class="btn-view btn-primary" target="_blank" rel="noopener noreferrer"><span>Ir a la web</span></a>
                        </div>
                        <div class="demo-text">
                            <h4>${title}</h4>
                            <p>${description}</p>
                        </div>
                    </div>
                </div>
            </article>
            `;
        });

        productDOM.innerHTML = results;
    }
}

class Products {
    async getProducts() {
        try {
            const result = await fetch("./beneficiarios.json");
            const data = await result.json();
            const products = data.items;
            return products;
        } catch (err) {
            console.log(err);
        }
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    const productList = new Products();
    const ui = new UI();


    const products = await productList.getProducts();
    ui.displayProducts(products);
});