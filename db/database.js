const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    // Create User table
    db.run(`CREATE TABLE User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);

    // Create Address table
    db.run(`CREATE TABLE Address (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        address TEXT NOT NULL,
        FOREIGN KEY(userId) REFERENCES User(id)
    )`);
});

module.exports=db;