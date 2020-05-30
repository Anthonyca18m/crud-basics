const app = require('./config/server');

const packageName = require('./app/routes/news')(app);

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log('server on port: ' , app.get('port'));
});