CREATE DATABASE node_mysql;

USE node_mysql;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created DATETIME DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(title, news) VALUES ('my title', 'conten of the news');

SELECT * FROM news;