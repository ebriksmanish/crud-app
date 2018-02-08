/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
            // Using then and catch , promises from ES 6 
            createUser : (req, res) => {
                let values = {
                    name : req.body.Name,
                    email : req.body.Email,
                    password : req.body.Password            
                };
                User.create(values)
                .then((records) => {return res.ok("user created")})                
                .catch((err) => {return res.serverError(err)})
            },
            retrieveUser : (req, res) => {
                let criteria = {};
                User.find(criteria)
                .then((records) => {return res.json(records)})        
                .catch((err) => {return res.serverError(err)})
            },
            updateUserByEmail : (req, res) => {
                let findCriteria = {
                    email : req.body.Email
                };
                let updatedRecords = {
                    name : req.body.Name,
                    password : req.body.Password
                };
                User.update(findCriteria, updatedRecords, {new :true})
                .then((records) => {return res.json(records)})
                .catch((err) => {return res.serverError(err)})
            },
            deleteUserByEmail : (req, res) => {
                let criteria = {
                    email : req.body.Email
                };
                User.destroy(criteria)
                .then(() => {return res.ok("user deleted")})
                .catch((err) => {return res.negotiate(err)})
            }
    
        // // Using Error Function or Fat Arrow Function from ES 6 
        // createUser : (req, res) => {
        //     let values = {
        //         name : req.body.Name,
        //         email : req.body.Email,
        //         password : req.body.Password            
        //     };
        //     User.create(values, (err, records) => {
        //         if(err) return res.serverError(err)
        //         else return res.ok("user created")
        //     });
        // },
        // retrieveUser : (req, res) => {
        //     let criteria = {};
        //     User.find(criteria, (err, records) => {
        //         if(err) return res.serverError(err)
        //         else return res.json(records)
        //     });
        // },
        // updateUserByEmail : (req, res) => {
        //     let findCriteria = {
        //         email : req.body.Email
        //     };
        //     let updatedRecords = {
        //         name : req.body.Name,
        //         password : req.body.Password
        //     };
        //     User.update(findCriteria, updatedRecords, (err, records) => {
        //         if(err) return res.serverError(err)
        //         else return res.json(records)
        //     });
        // },
        // deleteUserByEmail : (req, res) => {
        //     let criteria = {
        //         email : req.body.Email
        //     };
        //     User.destroy(criteria, (err) => {
        //         if(err) return res.negotiate(err);
        //         else return res.ok("user deleted")
        //     });
        // }


    
        // // Removing .Exec 
        // createUser : function(req, res){
        //     let values = {
        //         name : req.body.Name,
        //         email : req.body.Email,
        //         password : req.body.Password            
        //     };
        //     User.create(values, function(err, records){
        //         if(err) return res.serverError(err)
        //         else return res.ok("user created")
        //     });
        // },
        // retrieveUser : function(req, res){
        //     let criteria = {};
        //     User.find(criteria, function(err, records){
        //         if(err) return res.serverError(err)
        //         else return res.json(records)
        //     });
        // },
        // updateUserByEmail : function(req, res){
        //     let findCriteria = {
        //         email : req.body.Email
        //     };
        //     let updatedRecords = {
        //         name : req.body.Name,
        //         password : req.body.Password
        //     };
        //     User.update(findCriteria, updatedRecords, function(err, records){
        //         if(err) return res.serverError(err)
        //         else return res.json(records)
        //     });
        // },
        // deleteUserByEmail :function(req, res){
        //     let criteria = {
        //         email : req.body.Email
        //     };
        //     User.destroy(criteria, function(err){
        //         if(err) return res.negotiate(err);
        //         else return res.ok("user deleted")
        //     });
        // }

    // Craeted Through Sails Official Document
    // Proper Guide
    // createUser : function(req, res){
    //     let values = {
    //         name : req.body.Name,
    //         email : req.body.Email,
    //         password : req.body.Password            
    //     };
    //     User.create(values).exec(function(err, records){
    //         if(err) return res.serverError(err)
    //         else return res.ok("user created")
    //     });
    // },
    // retrieveUser : function(req, res){
    //     let criteria = {};
    //     User.find(criteria).exec(function(err, records){
    //         if(err) return res.serverError(err)
    //         else return res.json(records)
    //     });
    // },
    // updateUserByEmail : function(req, res){
    //     let findCriteria = {
    //         email : req.body.Email
    //     };
    //     let updatedRecords = {
    //         name : req.body.Name,
    //         password : req.body.Password
    //     };
    //     User.update(findCriteria, updatedRecords).exec(function(err, records){
    //         if(err) return res.serverError(err)
    //         else return res.json(records)
    //     });
    // },
    // deleteUserByEmail :function(req, res){
    //     let criteria = {
    //         email : req.body.Email
    //     };
    //     User.destroy(criteria).exec(function(err){
    //         if(err) return res.negotiate(err);
    //         else return res.ok("user deleted")
    //     });
    // }
	
};

