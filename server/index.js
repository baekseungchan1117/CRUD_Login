const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('안녕하세요')
})


const db = require('./models')

db.sequelize.sync().then(()=> {
    app.listen(3001, ()=> {
        console.log('Server running on port 3001');
    });
});
