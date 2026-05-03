const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
// این بخش اجازه می‌دهد فرانت‌اند و بک‌اند به هم وصل شوند
app.use(cors());
app.use(express.json());

// Routes
// مسیر محصولات را به فایل routes متصل می‌کند
app.use('/api/products', productRoutes);

// پایه اصلی سرور
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`سرور با موفقیت روی پورت ${PORT} روشن شد!`);
});