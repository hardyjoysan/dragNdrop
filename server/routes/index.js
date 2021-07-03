import express from 'express';
import indexController from '../controllers/indexController';

const router = express.Router();

// API Routes

router.get("/monthly/expenses", indexController.getMonthlyExpenses);
router.get("/category/expenses", indexController.getCategoryExpenses);

export default router;