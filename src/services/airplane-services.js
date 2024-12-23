// const curdRepository  = require('./curd-repository');
const { Logger } = require('../config');
const {airplaneRepository} = require('../repositories/index');
const airplaneRepositoryObj = new airplaneRepository();
const createAirplane = async(data) => {
    try{
        console.log("Service :: ", data);
        const result = await airplaneRepositoryObj.create(data);
        return result;
    }catch(err){
        Logger.error("Something went wrong");
    }
}

const getAirplane = async(id) => {
    try{
        const result = await airplaneRepositoryObj.get(id);
    }catch(err){
        console.log("error :: ", err);
    }
}

const getAllAirplane = async() => {
    try{
        const result = await airplaneRepositoryObj.getAll();
    }catch(err){
        console.log("error :: ", err);
    }
}

const updateAirplane = async(id, data) => {
    try{
        const result = await airplaneRepositoryObj.update(id, data);
        }catch(err){
            console.log("error :: ", err);
        }
}

const deleteAirplane = async(id) => {
    try{
        const result = await airplaneRepositoryObj.delete(id);
    }catch(err){
        console.log("error :: ", err);
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAllAirplane,
    updateAirplane,
    deleteAirplane
}