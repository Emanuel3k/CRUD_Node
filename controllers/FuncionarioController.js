const Funcionario = require('../models/Funcionario');

module.exports = class FuncionarioController {

    // HomePage
    static home(req, res) {
        res.render('funcionario/home');
    }

    // Render Create Forms
    static createForm(req, res) {
        res.render('funcionario/create');
    }

    // Create Funcionario
    static async createPost(req, res) {
        const funcionario = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            salario: req.body.salario,
            comissao: req.body.comissao,
            qtd_vendas: req.body.qtd_vendas
        }

        await Funcionario.create(funcionario)
            .then(() => {
                res.redirect('/list');
            }).catch((err) => {
                console.log(err);
            })
    }

    // List Funcionario
    static async list(req, res) {
        await Funcionario.findAll({ raw: true })
            .then((funcionarios) => {
                let empty = false;
                if (funcionarios.length === 0) {
                    empty = true;
                }
                res.render('funcionario/list', { funcionarios, empty });

            }).catch((err) => {
                console.log(err);
            })
    }

    // Render Update Forms
    static updateForm(req, res) {
        const id = req.params.id;
        Funcionario.findOne({ where: { id: id }, raw: true })
            .then((funcionario) => {
                res.render('funcionario/update', { funcionario });
            }).catch((err) => {
                console.log(err);
            })
    }

    // Update Funcionario
    static async updatePost(req, res) {
        const id = req.body.id;
        const funcionario = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            salario: req.body.salario,
            comissao: req.body.comissao,
            qtd_vendas: req.body.qtd_vendas
        }

        const query = Funcionario.update(funcionario, { where: { id: id } });
        console.log('Query SQL:', query.toString());


        await Funcionario.update(funcionario, { where: { id: id } })
            .then(() => {
                res.redirect('/list');
            }).catch((err) => {
                console.log(err);
            })
    }

    // Delete Funcionario
    static async delete(req, res) {
        const id = req.params.id;
        await Funcionario.destroy({ where: { id: id } })
            .then(() => {
                res.redirect('/list');
            }).catch((err) => {
                console.log(err);
            })
    }

    // Commission Calculation
    static async commission(req, res) {
        const id = req.params.id;
        await Funcionario.findByPk(id)
            .then((funcionario => {
                const comissao = funcionario.comissao;
                const vendas = funcionario.qtd_vendas;
                const total = comissao * (vendas / 100);
                res.render('funcionario/list', { funcionario, total: total });

            }))
    }
}