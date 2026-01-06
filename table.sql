CREATE TABLE diary
(
    id       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `key`    CHAR(25) NOT NULL,
    `date`   INT      NOT NULL,
    location CHAR(15),
    mood     CHAR(10),
    text     TEXT,
    gpt_text TEXT,
    PRIMARY KEY (id),
    INDEX    idx_key (`key`),
    INDEX    idx_date (`date`)
);
