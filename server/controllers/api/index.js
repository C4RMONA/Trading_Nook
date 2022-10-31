const router = require('express').Router();

const traderRoutes = require('./trader-routes')
const tradeRoutes = require('./trade-routes')

router.use('/trader', traderRoutes)
router.use('/trades', tradeRoutes)

module.exports = router;