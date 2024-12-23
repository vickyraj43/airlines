const { Logger } = require("../config");

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            console.log("Crud Repository :: ", data);
            console.log(await this.model);
            const response = await this.model.create(data);
            console.log("Response :: ", response);
            return response;
        }catch(err){
            Logger.error("Something went wrong" , err);
        }
    }

    async get(id){
        try{
            const getData = await this.model.findByPk(id);
            return getData;
        }catch(err){
            Logger.error("Something went wrong");
        }
    }

    async getAll(){
        try{
            const getData = await this.model.findAll();
            return getData;
        }catch(err){
            Logger.error("Something went wrong");
        }
    }

    async update(id , data){
        try{
            const response = await this.model.update(data , {where : {id}});
            return response;
        }catch(err){
            Logger.error("Somethig went wrong");
        }
    }

    async delete(id){
        try{
            const response = await this.model.destroy({where : {id}});
            return response;
        }catch(err){
            Logger.error("Something went wrong");
        }
    }
}

module.exports = {
    CrudRepository
}