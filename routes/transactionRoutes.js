const express=require('express');
const { getAlltransaction, addTransaction } = require('../controllers/transController');

const router=express.Router();

router.post('/get-transaction',getAlltransaction);
router.post('/add-transaction',addTransaction);

module.exports=router;