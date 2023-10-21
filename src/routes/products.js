const express = require('express');
const { detalle , cart, edit, create,celulares, accesorios,update, add, remove, filter } = require ('../controllers/productsController')
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products */
router.get('/celulares', celulares);
router.get('/accesorios', accesorios);
router.get('/detalle/:id', detalle);
router.get('/cart' , cart);
router.get('/edit/:id' , edit);
router.put('/update/:id', upload.single('image'), update)
router.get('/add' , add);
router.post('/add', upload.single('image'), create); //create crea los cambios luego de agregar el producto
router.delete('/remove/:id',remove); 
router.get('/filter', filter)


module.exports = router;