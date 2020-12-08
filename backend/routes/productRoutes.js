import express from 'express'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()
import {
	getProducts,
	getProductById,
	deleteProduct,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)

export default router
