const {City} =  require('../models');
const { CrudRepository } = require('./crud-repository');


class CityRepository extends CrudRepository{
    constructor() {
        console.log("Airplane :: ", City);
        super(City);
    }
}

module.exports = CityRepository;