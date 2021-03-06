const express = require("express");

class SharingRouter {
    constructor(sharingService, classroomService){
        this.sharingService = sharingService;
        this.classroomService = classroomService;
    }

    router(){
        let router = express.Router();

        router.post("/", this.post.bind(this));
        router.post("/del", this.delete.bind(this));

        return router
    }

    post(req, res){
        console.log("Post request to add user to classroom");

        return this.sharingService.add(req.body)
        .then(() => {
           return this.classroomService
           .list(req.body)
        })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err);
        }); 
    }
    
    delete(req, res){
        console.log("Delete request to delete user permission to set");

        return this.sharingService.delete(req.body)
        .then((data) => {
            console.log('delete done', data)
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
    }

}


module.exports = SharingRouter;

