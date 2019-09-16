const derbyStarter = require('derby-starter');
const path = require('path');

const port = process.env.port || 3002;

derbyStarter.run(
    path.join(__dirname,'..','app'),
    {
        port,
        static: path.join(__dirname, '..', '..', 'public')
    }
);
