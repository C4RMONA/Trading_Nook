const router = require('express').Router();
const { Trade } = require('../../models')

router.get('/', (req, res) => {
  Trade.findAll({
    attributes: [
      'ticker',
      'shares',
      'entryDate',
      'exitDate',
      'entryPrice',
      'exitPrice',
      'PnL'
    ]
  })
    .then(dbTradeData => { res.json(dbTradeData) })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
  Trade.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'ticker',
      'shares',
      'entryDate',
      'exitDate',
      'entryPrice',
      'exitPrice',
      'PnL'
    ]
  })
    .then(dbTradeData => {
      if (!dbTradeData) {
        res.status(404).json({ message: 'No trade found with this ID!' });
        return;
      }
      res.json(dbTradeData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Trade.create({
    ticker: req.body.ticker,
    shares: req.body.shares,
    entryDate: req.body.entryDate,
    exitDate: req.body.exitDate,
    entryPrice: req.body.entryPrice,
    exitPrice: req.body.exitPrice,
    PnL: ((req.body.exitPrice - req.body.entryPrice) * req.body.shares)
  })
    .then(dbTradeData => {
      res.json(dbTradeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

module.exports = router;