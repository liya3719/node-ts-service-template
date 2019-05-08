//日志相关配置
module.exports.loggerSetting = {
	dir: "D:\\logs",
	level: "DEBUG"
};


//数据库相关配置
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