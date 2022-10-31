const router = require('express').Router();
const { Trader } = require('../../models');

//get all traders profile
router.get('/', (req, res) => {
  Trader.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Trader.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No trader found with this ID' });
          return;
        }
        res.json(dbUserData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  })
});

//create a trader profile
router.post('/', (req, res) => {
  //expects { "tradername": "name", "email": "example@email.com", "password": "password1234"}
  Trader.create({
    tradername: req.body.tradername,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      // req.session.save(() => {
      //   req.session.trader_id = dbUserData.id;
      //   req.session.tradername = dbUserData.tradername;
      //   req.session.loggedIn = true;
      res.json(dbUserData);
      // })

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
  Trader.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No trader with that email address!' });
        return;
      }
      const validPassword = dbUserData.checkPassword(req.body.password)
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      req.session.save(() => {
        req.session.trader_id = dbUserData.id;
        req.session.tradername = dbUserData.tradername;
        req.session.loggedIn = true;

        res.json({ trader: dbUserData, message: 'You are now logged in!' });
      });
    });
});


module.exports = router;