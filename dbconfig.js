var dbconfig = {
    development: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'term_project1'
    },
    production: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'dbuser66',
        password: 'P@ssw0rd@',
        database: 'user66014_db'
    }
};
module.exports = dbconfig;