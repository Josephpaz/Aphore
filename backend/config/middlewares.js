const bodyParser = require('body-parser'); 
const cors = require('cors'); //acessar API

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
}