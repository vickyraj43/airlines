const {Airplane} =  require('../models');
const { CrudRepository } = require('./crud-repository');


class AirplaneRepository extends CrudRepository{
    constructor() {
        console.log("Airplane :: ", Airplane);
        super(Airplane);
    }
}

module.exports = AirplaneRepository;