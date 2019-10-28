const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    return res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);