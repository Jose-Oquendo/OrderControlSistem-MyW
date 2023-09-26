const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API task')
})
module.exports = router;
