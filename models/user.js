const db = require('../db/database').default;

const User = {
    create: (name) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO User (name) VALUES (?)`,[name], function(err) {
                if (err) reject(err);
                resolve(this.lastID);
            });
        });
    }
};

module.exports = User;