const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminData = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    return res.status(404).render('404');
});

app.listen(3000);