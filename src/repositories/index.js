const CityRepository = require('./city-repository');

module.exports = {
    airplaneRepository : require('./airplane-repository'),
    crudRepository : require('./crud-repository'),
    cityRepository : CityRepository,
}