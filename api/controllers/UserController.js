/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    createUser : function(req, res){
        let values = {
            name : req.body.Name,
            email : req.body.Email,
            password : req.body.Password            
        };
        User.create(values).exec(function(err, records){
            if(err) return res.serverError(err)
            else return res.ok("user created")
        });
    },
    retrieveUser : function(req, res){
        let criteria = {};
        User.find(criteria).exec(function(err, records){
            if(err) return res.serverError(err)
            else return res.json(records)
        });
    },
    updateUserByEmail : function(req, res){
        let findCriteria = {
            email : req.body.Email
        };
        let updatedRecords = {
            name : req.body.Name,
            password : req.body.Password
        };
        User.update(findCriteria, updatedRecords).exec(function(err, records){
            if(err) return res.serverError(err)
            else return res.json(records)
        });
    },
    deleteUserByEmail :function(req, res){
        let criteria = {
            email : req.body.Email
        };
        User.destroy(criteria).exec(function(err){
            if(err) return res.negotiate(err);
            else return res.ok("user deleted")
        });
    }
	
};

