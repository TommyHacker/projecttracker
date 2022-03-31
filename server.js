const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3080;
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

mongoose.connect(process.env.DB_URL);
mongoose.connection
	.on('error', (error) => console.error(error))
	.on('open', () => console.log('db:live'));

const cookieOptions = {
	httpOnly: true,
	expires: 1000,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './my-app/out')));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET, cookieOptions));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './my-app/out/index.html'));
});

app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/project/ticket', ticketRoutes);

app.listen(port, () => {
	console.log(`server:${port}`);
});
