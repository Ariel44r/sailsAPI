/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    create: function(req, res){
        Users.create({username: 'Ariel',age: 25, email: 'ariel44r@gmail.com', password: '123Jajaja', team: 'iOS'}).exec(function(err, records){
            if (err) { return res.serverError(err); }
            sails.log('ariel\'s id is:', Ariel.username);
            return res.ok();
        });
    },
    
    index: function(req, res){
        Users.find((err, users) =>{
            res.view({
                'name': 'Ariel',
                'age': 25,
                'profession': 'developer',
                'users': users  
            })
        });
    }

};

