const userSchema = require("../models/userSchema");

const getAll = async (req, res) => {
    try {
        const allUser = await userSchema.find();
        res.status(200).send(allUser)
    } catch (err) {
        console.error(err)
    }
}

const createUser = async (req, res) => {

            try {
                const users = await new userSchema(req.body);

                const savedUser = await users.save();

                res.status(201).send({
                    "message": "Usuário cadastrado com sucesso!",
                    savedUser
                })
        } catch (error) {
        console.error(error);
            res.status(400).send({
                "message": error.message
            })
    }}

const updateUser = async (req, res) => {
        try {
            const findUser = await userSchema.findById(req.body.id)

            if (!findUser) {
                res.status(404).send({
                    "message": "Conta não encontrada",
                    "statusCode": 400
                })
                return
            }

            User.findByIdAndUpdate(req.body.id, {
                name: req.body?.name,
                email: req.body?.email,
                password: req.body?.password,
            })
            res.status(200).send({
                "message": "Conta atualizada com sucesso",
            })

        } catch (err) {
            console.error(err)
            res.status(400).send({
                "message": "Houve um erro ao atualizar a conta. Tente novamente."
            })
        }
    }

    const deleteUser = async (req, res) => {
        try {
            const findUser = await userSchema.findById(req.body.id)

            if (!findUser) {
                res.status(404).send({
                    "message": "Conta não encontrada",
                    "statusCode": 400
                })
                return
            }

            User.findByIdAndDelete(req.body.id)
            res.status(200).send({
                "message": "Conta apagada com sucesso!",
            })

        } catch (err) {
            console.error(err)
            res.status(400).send({
                "message": "Houve um erro ao deletar a conta. Tente novamente."
            })
        }


    }
    module.exports = {
        createUser,
        getAll,
        updateUser,
        deleteUser
    }