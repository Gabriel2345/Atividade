//index,show,store,update,destroy
const User = require('../Model/User')


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let users = await User.find();
    return res.json(users);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let users = await User.findOne({_id : req.params.id});
    return res.json(users);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    const nome = req.body.nome;
    const senha  = req.body.senha;
    const email = req.body.email;
    const status = req.body.status;
    const idade = req.body.idade;

    let user = await User.findOne({email});
    if(!user){
      user = await  User.create({nome, senha, email, status, idade})
    }
    
    
    return res.json(user)
  },
  async update(req, res){

    let user = await User.findOne({id:req.param.id});
    console.log(user);
    user.nome = "Gabriel";
    user.email = "gabriel_r_goncalves@gmail.com";
    user.senha = "bananacomcanela";
    console.log(user);
    user = await User.updateOne(user);
    return res.json(user);
  },
  async destroy(req, res){
    let users = await User.destroyOne({_id : req.params.id});
    return res.json(users);
   
  }
};