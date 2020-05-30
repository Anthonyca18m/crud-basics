const dbConn = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbConn();

    app.get('/', (request, response) => {
        connection.query('SELECT * FROM news', (err, result) => {
            response.render('news/news', {
                news: result
            });
        });
    });

    app.post('/news', (request, response) => {
        const { title, news } = request.body;
        connection.query('INSERT INTO news SET?', {
            title,
            news
        }, (err, result) => {
            response.redirect('/');
        });
    });
}