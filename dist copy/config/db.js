const sharedbMongo = require('sharedb-mongo');

const db = new sharedbMongo('mongodb://localhost:27017/test');

export default db;