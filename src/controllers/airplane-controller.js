const {airplaneService} = require('../services/index');

const  ariplaneController = {};

ariplaneController.createAirplane = async(data) => {
    try{
        console.log("controller");
        const airplane = await airplaneService.createAirplane(data);
        return airplane;
    }catch(error){
        return error;
    }
}

ariplaneController.getAirplane = async(id) => {
    try{
        const airplane = await airplaneService.getAirplane(id);
        return airplane;
    }catch(error){
        return error;
    }
}

ariplaneController.getAllAirplane = async() => {
    try{
        const airplanes = await airplaneService.getAllAirplane();
        return airplanes;
    }catch(error){
        return error;
    }
}

ariplaneController.updateAirplane = async(id , data) => {
    try{
        const airplane = await airplaneService.updateAirplane(id , data);
        return airplane;
        }catch(error){
            return error;
        }
}

module.exports = ariplaneController;