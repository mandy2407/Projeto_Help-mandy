const userSchema = require("../models/userSchema");

const getAll = async (req, res) => {
    try {
        const allUser = await userSchema.find();
        res.status(200).send(allUser)
    } catch (err) {
        console.error(err)
        res.status(400).send({
            "message": error.message
        })
    }
}

const createUser = async (req, res) => {

    const { name, email, password, specialty, registration, timeWorking } = req.body;
            try {
                const users = new userSchema({
                    name, 
                    email,
                    password,
                    specialty,
                    registration,
                    timeWorking
                });

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
          const user= await userSchema.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            res.status(200).send({
                "message": "Conta atualizada com sucesso",
                user
            })

        } catch (err) {
            console.error(err)
            res.status(400).send({
                "message": error.message
            })
        }
    }

    const deleteUser = async (req, res) => {
        try {
           await userSchema.findByIdAndDelete(req.params.id)
            res.status(200).send({
                "message": "Conta apagada com sucesso!",
            })

        } catch (err) {
            console.error(err)
            res.status(400).send({
                "message": err.message
            })
        }


    }
    module.exports = {
        createUser,
        getAll,
        updateUser,
        deleteUser
    }