var User = require("../models/User");
class UserController{
    async index(req,res){

    }
    async create(req, res){
       var {email, name, password} = req.body;
       if(email == undefined){
            res.status(400);
            res.json({err: "O email é invalido"});
            return;
       }
       if(name == undefined){
            res.status(400);
            res.json({err: "O nome não pode ser vazio"});
            return;
        }
        if(password == undefined){
            res.status(400);
            res.json({err: "A senha não pode ser vazia"});
            return;
        }
        var emailExists = await User.findEmail(email);
        if(emailExists){
            res.status(406);
            res.json({err: "O email já está cadastrado!"});
            return;
        }
        await User.new(email,password,name);

       res.status(200);
       res.send("Tudo Ok");
    }
}

module.exports = new UserController();