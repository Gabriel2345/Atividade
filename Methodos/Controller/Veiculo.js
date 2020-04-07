//index,show,store,update,destroy
const Veiculo = require('../Model/Veiculo')


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let veiculo = await Veiculo.find();
    return res.json(veiculo);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let veiculo = await Veiculo.findOne({_id : req.params.id});
    return res.json(veiculo);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    const nome = req.body.nome;
    const motor  = req.body.motor;
    const portas = req.body.portas;
    const cor = req.body.cor;
    const combustivel = req.body.combustivel;
    const ano_fabricacao = req.body.ano_fabricacao;
    const ano_modelo = req.body.ano_modelo;
    const placa = req.body.placa;

    let veiculo = await Veiculo.findOne({nome});
    if(!veiculo){
      veiculo = await  Veiculo.create({nome, motor, portas, cor, combustivel, ano_fabricacao, ano_modelo, placa})
    }
    
    
    return res.json(veiculo)
  },
  async update(req, res){

    let veiculo = await Veiculo.findOne({id:req.param.id});
    console.log(veiculo);
    veiculo.nome = "";
    veiculo.motor = "";
    veiculo.portas = "";
    veiculo.cor = "";
    veiculo.combustivel = "";
    veiculo.ano_fabricacao = "";
    veiculo.ano_modelo = "";
    veiculo.placa = "";
    console.log(veiculo);
    veiculo = await Veiculo.updateOne(veiculo);
    return res.json(veiculo);
  },
  async destroy(req, res){
    let veiculo = await Veiculo.destroyOne({_id : req.params.id});
    return res.json(veiculo);
   
  }
};