const repository = require('../repositories/personal-repository')

// list
exports.listPersonal = async (req, res) => {
  try {
    const data = await repository.listPersonal()
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send({ message: 'Falha ao carregar dados' })
  }
}

// create
exports.createPersonal = async (req, res) => {
   
  try {
    await repository.createPersonal({
      name: req.body.name,
      vocational: req.body.vocational
    })

    res.status(201).send({ message: 'Dado cadastrado com sucesso!' })
  } catch (err) {
    res.status(500).send({ message: 'Erro ao cadastrar dado!' })
  }
}