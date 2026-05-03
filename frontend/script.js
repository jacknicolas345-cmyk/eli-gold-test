async function loadProducts() {
    const container = document.getElementById('product-list');
    try {
        const response = await fetch('https://bookish-couscous-gxq7pq497j9vfjrj-5000.app.github.dev/api/products');
        const data = await response.json();
        
        container.innerHTML = data.map(p => `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price-tag">شروع از ${Number(p.finalPrice).toLocaleString()} تومان</p>
                <div class="card-overlay">
                    <button class="btn-quick-view">مشاهده محصول</button>
                </div>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = "خطا در بارگذاری محصولات";
    }
}
window.onload = loadProducts;