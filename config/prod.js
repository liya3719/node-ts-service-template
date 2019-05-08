/**
 * 日志记录相关配置
 */
module.exports.loggerSetting = {
    dir: "日志收集路径",
    level: "INFO"
};

module.exports.dbConfig = {
    host: "host",
    user: "root",
    password: "password",
    database: "database",
    connectionLimit: 10,
    port: "3306",
    waitForConnections: false,
    multipleStatements: true
};