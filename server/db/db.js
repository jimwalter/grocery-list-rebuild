const mysql = require('mysql')


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groceries'
})

connection.connect((err) => {
  if (err) {
    console.log('error connecting to db: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);
  }
);

module.exports = connection;