const db = require("../server/utils/db");

module.exports = () => db.migrate.rollback().then(() => process.exit());