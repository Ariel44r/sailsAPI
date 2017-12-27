/**
 * DevelopersController
 *
 * @description :: Server-side logic for managing Developers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function(req, res){
        Developers.create({username: 'Ariel',age: 25, email: 'ariel44r@gmail.com', password: '123Jajaja', team: 'iOS'}).exec(function(err, records){
            if (err) { return res.serverError(err); }
            sails.log('ariel\'s id is:', Ariel.username);
            return res.ok();
        });
    },
    
    index: function(req, res){
        Developers.find((err, users) =>{
            res.view({
                'name': 'Ariel',
                'age': 25,
                'profession': 'developer',
                'users': users  
            })
        });
    }

};

