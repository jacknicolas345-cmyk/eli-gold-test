const express = require('express');
const router = express.Router();

// لیست محصولات فرضی (بدون نیاز به دیتابیس)
const products = [
    { 
        id: 1, 
        name: "دستبند بال برجسته ظریف", 
        finalPrice: 18850000, 
        image: "https://eligoldgallery.com/wp-content/uploads/2024/01/1509web-300x300.jpg" 
    },
    { 
        id: 2, 
        name: "گوشواره برگ کشیده", 
        finalPrice: 18116000, 
        image: "https://eligoldgallery.com/wp-content/uploads/2024/01/1361web-300x300.jpg" 
    },
    { 
        id: 3, 
        name: "آویز مربع مار پیچ", 
        finalPrice: 12730000, 
        image: "https://eligoldgallery.com/wp-content/uploads/2024/01/IMG_8872-300x300.jpg" 
    }
];

// مسیر دریافت محصولات
router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;