const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    category: { type: String, enum: ['زنانه', 'مردانه', 'کودکانه'] },
    image: { type: String },
    basePrice: { type: Number }, // قیمت پایه طلا در زمان ثبت
    isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);