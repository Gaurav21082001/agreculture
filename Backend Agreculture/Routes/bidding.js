const express = require('express');
const router = express.Router();
const utils = require("../utils");
const db = require('../db');
const multer = require("multer");
const upload = multer({
    dest: "images", filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

router.post('/product', upload.single("image"), (request, response) => {
    const filename = request.file.filename;
    const { title, description, price } = request.body;
    const query = 'insert into bid_product(title,description,price,image) values(?,?,?,?)';
    db.query(query, [title, description, price, filename], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});

router.post('/product/:id', (request, response) => {
    const { id } = request.params;
    const { price } = request.body;
    const query = 'insert into bidding(p_id,userId,price) values(?,?,?)';
    db.query(query, [id, request.user.id, price], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});

router.get('/highestprice/:id', (request, response) => {
    const { id } = request.params;
    const query = 'select MAX(price) as "highest price" from bidding where p_id=? ';
    db.query(query, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});

router.get('/bid_product', (request, response) => {

    const query = 'select * from bid_product';
    db.query(query, [], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});
router.get('/previousBids/:id', (request, response) => {
    const { id } = request.params;
    const query = 'select * from bidding where p_id=?';
    db.query(query, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});
router.get('/highestPriceUser/:id', (request, response) => {
    const { id } = request.params;
    const query = 'select * from user as a inner join bidding as b on a.id=b.userId where b.price=(select MAX(price) from bidding where bidding.p_id=?);';
    db.query(query, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    });
});
module.exports = router;