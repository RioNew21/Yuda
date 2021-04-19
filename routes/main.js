__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/api/tutorial', (req, res) => {
    res.sendFile(__path + '/views/tutorial.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'All Prefix',
            namabot: 'YBOT',
            namaowner: 'Yuda',
            instagram: 'yuda.dika.12',
            youtube : 'Yuda Xwer'
        }
    }
    res.json(config)
})

module.exports = router
