const {cityRepository} = require('../repositories')
const {Logger} = require('../config');
const cityRepositoryObj = new cityRepository();

const createCity = async(data) => {
    try{
        const result = await cityRepositoryObj.create(data);
        return result;
    }catch(err){
        Logger.error("Something went wrong");
    }
}
const getCity = async(id) => {
    try{
        const result = await cityRepositoryObj.get(id);
        return result;
    }catch(err){
        Logger.error("Something went wrong");
    }
}

const getAllCity = async() => {
    try{
        const result = await cityRepositoryObj.getAll();
        return result;
    }catch(err){
        Logger.error("Something went wrong");
    }
}

const deleteCity = async(id) => {
    try{
        const result = await cityRepositoryObj.delete(id);
        return result;
    }catch(err){
        Logger.error("Something went wrong");
    }
}
