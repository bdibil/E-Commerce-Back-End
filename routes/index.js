const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


// app.use(express.static('public'));


router.use((req, res) => {
  res.send('<br> <h1 style="text-align: center;">Welcome to the E-Commerce Back End !</h1>')
});

// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// });

module.exports = router;