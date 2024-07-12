async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5000/produtos');
        if (!response.ok) {
            throw new Error('Erro ao carregar produtos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return [];
    }
}

// Função para exibir os produtos na página
async function renderProducts() {
    const products = await fetchProducts();
    const container = document.getElementById('product-container');
    
    products.forEach(product => {
        const productHTML = `
            <div class="col-md-3">
                <div class="card product-card">
                    <img src="${product.image}" alt="${product.title}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Preço: R$ ${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Executar a renderização dos produtos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});