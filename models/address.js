const db = require('../db/database').default;

const Address = {
    create: (userId, address) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Address (userId, address) VALUES (?, ?)`, [userId, address], function(err) {
                if (err) reject(err);
                resolve(this.lastID);
            });
        });
    }
};

module.exports = Address;