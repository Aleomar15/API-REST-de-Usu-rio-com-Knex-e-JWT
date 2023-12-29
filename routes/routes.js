var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
router.get('/', HomeController.index);
router.post('/user', UserController.create);//serve para enviar informações para o banco
router.get("/user", UserController.index);//vai retornar todos os usuarios
router.get("/user/:id",UserController.findUser);// buscar pelo id
router.put("/user",UserController.edit);// rota de edição

module.exports = router;