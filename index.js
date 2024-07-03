const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/UsersRoute');
const productRoutes = require('./routes/ProductsRoute');
const ratingRoutes = require('./routes/RatingsRoute');
const ordersRoutes = require('./routes/OrdersRoute');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/ratings', ratingRoutes);
app.use('/orders', ordersRoutes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});