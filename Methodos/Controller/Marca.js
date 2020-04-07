//index,show,store,update,destroy
const Marca = require('../Model/Marca')


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let marca = await Marca.find();
    return res.json(marca);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let marca = await Marca.findOne({_id : req.params.id});
    return res.json(marca);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    const nome = req.body.nome;
    
    let marca = await Marca.findOne({nome});
    if(!marca){
      marca = await  Marca.create({nome})
    }
    
    
    return res.json(user)
  },
  async update(req, res){

    let marca = await Marca.findOne({id:req.param.id});
    console.log(Marca);
    Marca.nome = "";
    console.log(marca);
    marca = await Marca.updateOne(marca);
    return res.json(marca);
  },
  async destroy(req, res){
    let marca = await Marca.destroyOne({_id : req.params.id});
    return res.json(marca);
   
  }
};