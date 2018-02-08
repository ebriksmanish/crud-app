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

    },
    updateUserByEmail : function(req, res){

    },
    deleteUserByEmail :function(req, res){

    }
	
};

